
$('.bo1 input').click(function() {
  $(this).css({
      'border-bottom': '1px solid #ff3837'   
  });
});



const inputsearch = document.querySelector(".bo1 input")
document.addEventListener("click", function(event) {
  if (event.target.closest(".bo1 input")) return
  inputsearch.style = "border-bottom: 1px solid #a7a7a7";
})



$('.lit').on('keyup ', function() {
 
   if ($(this).val().length > 0 ) 
   {
    $(this).parent('.i1').find('.l1').addClass('l2');
   }
   else{
    $(this).parent('.i1').find('.l1').removeClass('l2');
   }
 });


$('body').click(function() {
  $('.l1').css("color","#5c5c5c");
});

$('.lit').click(function(e){
  e.stopPropagation();
});

function showOne(id) {
  $('#' + id).css("color","#ff3837");
  $('.l1').not('#' + id).css("color","#5c5c5c");
}