document.getElementById("up").style.transformOrigin = "50% 4%"
// document.getElementsByClassName('messageBox')[0].style.visibility='hidden'

$(".letter").click(function(evt){
  $(this).addClass("active")
  setTimeout(function(){
    $(".letterDown")
      .velocity({
      zIndex: 2,
      pointerEvents: "none",
    },{duration: 0,})
    $(".card")
      .velocity({zIndex: 1},{duration: 0,})
      .velocity({top: "-20%",},{duration: 1000,})
  },200)
})

$(".card").click(function(){
  document.getElementsByClassName('messageBox')[0].style.visibility='visible'
})