$(function () {
  $(".slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:
      '<img class="nextArrow feature__slider-nextArrow" src="assets/images/arrow-right.svg" alt="arrow-right">',
    prevArrow:
      '<img class="prevArrow feature__slider-prevArrow" src="assets/images/arrow-left.svg" alt="arrow-left">',
  });

  $(".team__slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow:
      '<img class="nextArrow team__slider-nextArrow" src="assets/images/arrow-right.svg" alt="arrow-right">',
    prevArrow:
      '<img class="prevArrow team__slider-prevArrow" src="assets/images/arrow-left.svg" alt="arrow-left">',
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
