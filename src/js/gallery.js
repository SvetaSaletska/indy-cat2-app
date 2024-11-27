const swiper = new Swiper('.mySwiper', {
  loop: true, // Дозволяє перехід з останнього слайду на перший
  slidesPerView: 'auto', // Автоматичне налаштування ширини слайдів
  spaceBetween: 10, // Відстань між слайдами
  centeredSlides: false, // Не центрує слайди, щоб частина наступного була видна справа
  pagination: {
    el: '.swiper-pagination', // Елемент пагінації
    clickable: true, // Дозволяє кліки по крапочках пагінації
  },
  mousewheel: true, // Дозволяє прокручувати слайди колесом миші
  keyboard: true, // Дозволяє перемикати слайди за допомогою клавіатури
  breakpoints: {
    1024: {
      loop: true,
      slidesPerView: 'auto', // Один слайд на екран
      spaceBetween: 32, // Відстань між слайдами
      centeredSlides: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next', // Стрілочка "наступний"
        prevEl: '.swiper-button-prev', // Стрілочка "попередній"
      },
    },
  },
});
