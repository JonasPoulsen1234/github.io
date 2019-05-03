var jumboHeight = $('#parallax-container');
function parallax(){
    var scrolled = $(window).scrollTop();
    $('#parallax-img').css('height', (jumboHeight-scrolled) + 'px');
}
$(window).scroll(function(e){
    parallax();
});
$(document).ready(function () {
    $('div.hidden').fadeIn(500).removeClass('hidden');
    parallax();
});





$('.nav-link').on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top - 90
     }, 800, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});


$(document).ready(function() {

// Gets the video src from the data-src on each button

var $videoSrc;  
$('.video-btn').click(function() {
    $videoSrc = $(this).data( "src" );
});
console.log($videoSrc);

  
  
// when the modal is opened autoplay it  
$('#myModal').on('shown.bs.modal', function (e) {
    
// set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
$("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
})
  


// stop playing the youtube video when I close the modal
$('#myModal').on('hide.bs.modal', function (e) {
    // a poor man's stop video
    $("#video").attr('src',$videoSrc); 
}) 
  
// document ready  
});


 





