$(document).ready(function(){
  $('.reviewer').slick({
    arrows: true,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: false,
    speed: 250,
    cssEase: 'linear',
    fade: true,
    asNavFor:".reviewers__set"
  });
  $('.reviewers__set').slick({
    arrows: false,
    asNavFor: ".reviewer",
    slidesToShow: 2,
    centerMode: true,
    variableWidth: true,
    initialSlide: 0,
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 7,
          slidesPerRow: 7,
          asNavFor: ".reviewer",
                  infinite: true,
              initialSlide: 0
        }
      },
         {
        breakpoint: 1280,
        settings: {
        slidesToShow: 7,
          slidesPerRow: 7,
          asNavFor: ".reviewer",
                  infinite: true,
            initialSlide: 0
        } 
      }
    ]
  });
});