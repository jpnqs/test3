function Snow(parent) {
    var width = parent.innerWidth();
    var height = parent.innerHeight();
    var flakeDelay = 200;
    var delayRandomizer = 100;

    var snowflakeBase = ['❅', '❆'];

    var running = false;

    var _random = function(min, max) {
        return Math.floor(Math.random() * (max - min +1)) + min; 
    }.bind(this);

    var _getSnowFlake = function() {
        return snowflakeBase[Math.floor(Math.random()*snowflakeBase.length)];
    }.bind(this);

    var _spawnFlake = function() {
        var flakeValue = _getSnowFlake();

        var flake = null;
        var small = Math.random() >= 0.8;

        if (!small) {
            flake = $(`
            <div class="snowflake snowflake-${Math.floor(Math.random() * 5)}">
                ${flakeValue}
            </div>
            `);
        } else {
            flake = $(`
            <div class="snowflake snowflake-${Math.floor(Math.random() * 5)} snowflake-far">
                ${flakeValue}
            </div>
            `);
        }
        
        flake.appendTo(parent);

        var baseX = _random(0, width - 40);

        flake.css({
            "left": `${baseX}px`,
            "top": "-150px"
        });

        if (!small) {
            flake.animate({
                top: `${height + 100}px`
            }, 7000, function() {
                flake.remove();
            });
        } else {
            flake.animate({
                top: `${height + 100}px`
            }, 10000, function() {
                flake.remove();
            });
        }

    }.bind(this);

    var _worker = function() {
        // calculate timeout
        var timeout = flakeDelay + _random(-1 * delayRandomizer, delayRandomizer);
        
        setTimeout(() => {
            if (!running) return;
            _spawnFlake();
           _worker();
        }, timeout);
    }.bind(this);

    this.flake = function() {
        return _getSnowFlake();
    }.bind(this);

    this.start = function() {
        running = true;
        _worker();
    }.bind(this);
    
    this.end = function() {
        running = false;
    }.bind(this);

};


const sfSize = {
    large: 2,
    medium: 1,
    small: 0
};

const sfDuration = {
    [sfSize.large]: 7000,
    [sfSize.medium]: 9000,
    [sfSize.small]: 10000
}

function sf(size) {

    var flake = $(`<div sf sf-size="${size}">❅</div>`);

    var sizeClass = '';

    switch (size) {
        case sfSize.small:
            sizeClass = 'sf-small';
            break;
        case sfSize.medium:
            sizeClass = 'sf-medium';
            break;
        case sfSize.large: 
            sizeClass = 'sf-large';
            break;
        default:
            throw 'Unkown snowflake size';
    }

    flake.addClass('sf');
    flake.addClass(sizeClass);

    return flake;

}

function animateSf(sf, parent) {

    var size = sf.attr('sf-size');

    sf.appendTo(parent);

    var width = parent.innerWidth();
    var height = parent.innerHeight() + 50;
    
    var x = Math.floor(Math.random() * (width - 10 + 1)) + 10

    sf.css('left', `${x}px`);
    sf.css('top', '-200px');

    var duration = sfDuration[size];

    sf.animate({
        top: `${height}px`,
    }, duration, function() {
        sf.remove();
    });
    
    $({deg: 0}).animate({deg: 12.5 * (1 + size)}, {
        duration: duration,
        step: function(now) {
            sf.css({
                transform: `rotate(${now}deg)`
            })
        }
    })

    sf.addClass(`snowflake-${Math.floor(Math.random() * 5)}`);

}

function multi() {
    var parent = $('#snow');
    setInterval(() => {
        var size = Math.floor(Math.random() * 3);
        animateSf(sf(size), parent);
    }, 200);
}