
document.title = 'Merry Christmas Milena! 🎄';

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

    // setTimeout(() => {
        showHint(`<div class="arrow-holder">
        <div id="arrow5" class="arrow arrow-left"></div>
        <div id="arrow4" class="arrow arrow-left"></div>
        <div id="arrow3" class="arrow arrow-left"></div>
        <div id="arrow2" class="arrow arrow-left"></div>
        <div id="arrow1" class="arrow arrow-left"></div>
      </div>`)

    // }, 1500);

});