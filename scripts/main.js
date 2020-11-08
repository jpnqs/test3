
responsiveDesign.then(() => {
    
    var pageManager = new PageManager();

    var input = new TouchInput();

    input.onSwipe((dir) => {
        if (dir == TouchInput.LEFT) {
            pageManager.next();
        } else if (dir == TouchInput.RIGHT) {
            pageManager.previous();
        }
    });

    input.render();

});