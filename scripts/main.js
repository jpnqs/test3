var responsiveDesign = new $.Deferred();

(function() {
    var responsive = new $.Deferred();

    window.addEventListener("load", makeReponsive);
    window.addEventListener("resize", makeReponsive);

    function makeReponsive() {
        var objs = $(".responsible-obj");
        var width = objs.width();
        objs.css("height", width * 1.5);
        if (responsive.state() == "pending") {
            setTimeout(() => {
                $('#card').css('opacity', 1)
            }, 3000);
            responsive.resolve();
        }
    }

    responsive.then(responsiveDesign.resolve);
    
})();