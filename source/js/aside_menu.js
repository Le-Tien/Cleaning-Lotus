$('.first_aside').click (function() {
    if($(this).children("div").css("display")==="none"){
        $("[id=second_aside]").slideUp(400);
        $(this).children("div").slideDown(400).css("font-style","italic");
    }
    else
        $("[id=second_aside]").slideUp(400);
});
$("h3.first").hover(function () {
    if($(this).parent("div").mouseout()=== true) {
        $(this).slideUp(400);
        $("h3.first").css("color", "black").css("background", "#dcdcdc");
        $(this).css("color", "white").css("background", "black");
    }
});

