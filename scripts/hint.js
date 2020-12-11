

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