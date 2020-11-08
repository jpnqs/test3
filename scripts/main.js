
responsiveDesign.then(() => {

    var input = new TouchInput();
    input.render();

    var pageManager = new PageManager();

    input.onSwipe((dir) => {
        if (dir == TouchInput.LEFT) {
            pageManager.next();
        } else if (dir == TouchInput.RIGHT) {
            pageManager.last();
        }
    });

});