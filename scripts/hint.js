/**
 * Hint functions for better user experience
 * @author Jonas Grümpel 
 */

/**
 * Show hint to the user 
 * @param {string} sHint html-String
 */
function showHint(sHint) {
    $('#hint-container')
        .html(sHint)
        .addClass('hint-fade');
}

/**
 * Hide the current hint
 * @returns {void}
 */
function hideHint() {
    $('#hint-container')
        .html('')
        .removeClass('hint-fade'); 
}

/**
 * Show swipe hint for milena :)
 * @returns {void}
 */
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