$(function(){
    $('.portfolio__slider').slick({
        dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  arrows: false,
  dotsClass: "portfolio-dots",
});


$('.project-slides__slider').slick({
  dots: true,
infinite: true,
speed: 500,
fade: true,
cssEase: 'linear',
arrows: false,
dotsClass: "project-slides__dots",
});


$('.testimonials__slider').slick({
  arrows:false,
  dots:true,
  infinite: true,
  speed: 300,
  centerMode: true,
  dotsClass: "testimonials__dots",
  variableWidth: true

});
$('.arrows').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#top').offset().top }, 1000);
  e.preventDefault();
});

new WOW().init();
});


