$(document).ready(function(){
  $('.reviewer').slick({
    arrows: true,
    initialSlide: 5,
    // autoplay: true,
    autoplaySpeed: 5000,
    speed: 250,
        asNavFor:".reviewers__set"
  });
  $('.reviewers__set').slick({
    arrows: false,
    asNavFor: ".reviewer",
    slidesToShow: 7,
    centerMode: true,
    variableWidth: true,
        initialSlide: 5,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesPerRow: 3
        }
      }
    ]
  });
});