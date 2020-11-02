var responsiveDesign = new $.Deferred();

(function() {
    var responsive = new $.Deferred();
    window.addEventListener("load", makeReponsive);
    window.addEventListener("resize", makeReponsive);

    function makeReponsive() {
        var book = $("#book");
        var width = book.width();
        book.css("height", width * 1.5);
        if (responsive.state() == "pending") {
            responsive.resolve();
        }
    }

})();