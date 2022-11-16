$('.reviews__list').slick({
  autoplay: true,
  autoplaySpeed: 1500,
  speed: 500,
  easing: 'ease',
  centerMode: true,
  centerPadding: '0px',
  adaptiveHeight: true,
  infinite: true,
  arrows: false,
  slidesToShow: 3,
  slidesScroll: 1,
  variableWidth: true,
  dots: false,
  asNavFor: '.reviews__description',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        variableWidth: true,
        slidesToShow: 3,
        slidesScroll: 1,
        centerMode: true,
        arrows: false,
      },
    },
    {
      breakpoint: 320,
      settings: {
        variableWidth: true,
        slidesToShow: 1,
        slidesScroll: 1,
        centerMode: true,
        arrows: false,
      },
    },
  ],
});
$('.reviews__description').slick({
  asNavFor: '.reviews__list',
  dots: true,
  arrows: false,
  adaptiveHeight: true,
  infinite: true,
  slidesToShow: 1,
  slidesScroll: 1,
});
