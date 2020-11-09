

function showHint(hint) {
    $('#hint-container')
        .text(hint)
        .addClass('hint-fade');
}

function hideHint() {
    $('#hint-container')
        .text('')
        .removeClass('hint-fade'); 
}