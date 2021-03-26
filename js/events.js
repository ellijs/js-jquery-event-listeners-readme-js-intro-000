function getIt() {
    alert("Hey");
}
$("p").on("Click", getIt); 


function frameIt() {
  $('.tasty').on('load', function() {
     $('.tasty').css('backgroundColor', 'red');
  });
}


function pressIt() {
  $("input").on('keydown', function(key) {
    if(key.which == 71) {
      alert("You pressed G key");
     }
  });
}

function submitIt() {
  alert("Your form is going to be submitted now.")
}
$("form").on("submit", submitIt);

$(document).ready(function(){
  getIt();
  pressIt();
  submitIt();
  frameIt();
});
