$("#accordion").on("shown.bs.collapse", function () {
    var myEl = $(this).find('.panel-collapse.in');
    var sib = myEl.siblings();
    var headerHeight = sib.height();
    var offHeight = 100;
    if (headerHeight < 75) {
    	offHeight = 125;
    } else { 
    	offHeight = 175;
    }
    console.log("off h: " + offHeight);
    var body = $('html, body');
    if (body.length) {
        $('html, body').animate({
            scrollTop: $(myEl).offset().top - offHeight
        }, 500);    
    }
    
});