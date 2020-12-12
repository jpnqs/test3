

function showHint(hint) {
    $('#hint-container')
        .html(hint)
        .addClass('hint-fade');
}

function hideHint() {
    $('#hint-container')
        .html('')
        .removeClass('hint-fade'); 
}

function showSwipeHint() {
    showHint(`
    <div class="arrow-holder">
        <div id="arrow5" class="arrow arrow-left"></div>
        <div id="arrow4" class="arrow arrow-left"></div>
        <div id="arrow3" class="arrow arrow-left"></div>
        <div id="arrow2" class="arrow arrow-left"></div>
        <div id="arrow1" class="arrow arrow-left"></div>
    </div>
    `);
}