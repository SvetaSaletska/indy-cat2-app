var swiper = new Swiper('.mySwiper', {
  slidesPerView: 'auto', // Автоматичне налаштування ширини слайдів
  spaceBetween: 10,
  cssMode: true,
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  pagination: {
    el: '.swiper-pagination',
  },
  mousewheel: true,
  keyboard: true,
});
