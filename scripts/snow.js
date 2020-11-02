function Snow(parent) {
    var width = parent.innerWidth();
    var height = parent.innerHeight();
    var flakeDelay = 400;
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

        var flake = $(`
        <div class="snowflake snowflake-${Math.floor(Math.random() * 5)}">
            ${flakeValue}
        </div>
        `);
        
        flake.appendTo(parent);

        var baseX = _random(0, width - 40);

        flake.css({
            "left": `${baseX}px`,
            "top": "-150px"
        });

        flake.animate({
            top: `${height + 100}px`
        }, 7000, function() {
            flake.remove();
        });

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


var s = new Snow($('#snow'));
s.start();