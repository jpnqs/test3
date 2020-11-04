let it = '❄️'; // 😉

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

    sf.css({
        left: `${x}px`,
        top: '-200px'
    });

    var duration = sfDuration[size];

    sf.animate({
        top: `${height}px`,
    }, duration, function() {
        sf.remove();
    });

    sf.addClass(`snowflake-${Math.floor(Math.random() * 5)}`);

}

function letItSnow() {
    var parent = $('#snow');
    setInterval(() => {
        var size = Math.floor(Math.random() * 3);
        animateSf(sf(size), parent);
    }, 200);
}