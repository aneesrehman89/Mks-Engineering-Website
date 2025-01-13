

$('.slider').slick({
  slidesToShow: 1,
  slidesToScroll:1,
  infinite: true,
  arrows: false,
  dots: true,
  centerPadding:"10%", 
  centerMode: true,
  
});


$('.client-says-slider').slick({
  infinite: true,
  slidesToShow: 2,
  arrows:true,
  prevArrow: '<img  class="s9-icon icon-right" src="./Images/S9/slider-left.png" alt="">',
  nextArrow: ' <img class="s9-icon icon-left" src="./Images/S9/slider-right.png" alt="">',
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


function hideAway() {
  var pText = document.getElementsByClassName('s8-video-icon')[0];
  if (pText.style.display == 'block') {
      pText.style.display = 'none';
  }else{
      pText.style.display = 'block';
  }
} 

