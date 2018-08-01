$('#checkIt').click(function () {
   if($(this).is(':checked')){
       $('#checkBtn').removeAttr('disabled').css('background','#EA779A')
   }
   else {
       $('#checkBtn').attr('disabled', 'disabled').css('background','grey')
   }
});