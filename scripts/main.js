responsiveDesign.then(() => {

    var input = new TouchInput();
    input.render();

    // create background snow effect
    // var snow = new Snow($('#snow'));
    // snow.start();

    var pageManager = new PageManager();

    input.onSwipe((dir) => {
        if (dir == TouchInput.LEFT) {
            pageManager.openPageById(0);
        } else if (dir == TouchInput.RIGHT) {
            pageManager.closePageById(0);
        }
    });

});