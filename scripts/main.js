
document.title = 'Merry Christmas Milena! 🎄';

responsiveDesign.then(() => {

    var pageManager = new PageManager();

    pageManager.onPageOpen('', function(oPage, oPageManager) {
        hideHint();
    });

    pageManager.onPageOpen('merry-xmas', function(oPage, oPageManager) {
        console.log('lol');
    });
    window.pageManager = pageManager;
    var input = new TouchInput();

    input.onSwipe((dir) => {
        if (dir == TouchInput.LEFT) {
            pageManager.next();
        } else if (dir == TouchInput.RIGHT) {
            pageManager.previous();
        }
    });

    input.render();

    setTimeout(showSwipeHint, 7500);

});