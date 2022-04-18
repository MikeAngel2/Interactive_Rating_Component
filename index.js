
//Changed innerHTML to the selected option
$(".rate-button").click(function(){
  let option = this.innerHTML;
  $(".numberStar").text(option);
});

//When submit button is clicked, hides the first card and shows the second one
$(".Submit").click(function(){
  $(".Rating").css('display', 'none');
  $(".Thanks").css('display','block');
});
