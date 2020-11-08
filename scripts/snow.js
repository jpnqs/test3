let it = '❄️'; // 😉

const spawnTime = 800;

const sfSize = {
    large: 2,
    medium: 1,
    small: 0
};

const sfDuration = {
    [sfSize.large]: 11000,
    [sfSize.medium]: 13000,
    [sfSize.small]: 15000
};

const sfClasses = {
    [sfSize.large]: 'sf-large',
    [sfSize.medium]: 'sf-medium',
    [sfSize.small]: 'sf-small'
};

const snowflakeBase = [
    '❅',
    '❅',
    '❅',
    '❆'
];

function sf(size) {

    var flake = $(`<div sf sf-size="${size}">${snowflakeBase[Math.floor(Math.random()*snowflakeBase.length)]}</div>`);

    var sizeClass = sfClasses[size];

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
        top: '-300px'
    });

    var duration = sfDuration[size];

    sf.animate({
        top: `${height}px`,
    }, duration, function() {
        sf.remove();
    });

    setTimeout(() => {
        sf.addClass('sf-fade-out');
    }, duration * 0.95);

    sf.addClass(`snowflake-${Math.floor(Math.random() * 5)}`);

}

function letItSnow() {
    var parent = $('#snow');
    setInterval(() => {
        var size = Math.floor(Math.random() * 3);
        animateSf(sf(size), parent);
    }, spawnTime);
}

function stopTheSnow() {
    $('[sf]', $('#snow')).remove();
}