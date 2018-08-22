var $angel=0;
$("#leftclick").click(function () {
    $angel=$angel+60;
    $("#spinner").css('transform','rotateY('+$angel+'deg)')

});

$("#rightclick").click(function () {
    $angel=$angel-60;
    $("#spinner").css('transform','rotateY('+$angel+'deg)')
});

