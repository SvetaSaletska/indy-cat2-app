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
    // Для екранів менше 768px
    768: {
      slidesPerView: 1, // Один слайд на екран
      spaceBetween: 10, // Відстань між слайдами
      pagination: {
        el: '.swiper-pagination',
        clickable: true, // Пагінація на мобільних
      },
    },
    // Для екранів більше 768px (десктопи)
    1024: {
      slidesPerView: 'auto', // Один слайд на екран
      spaceBetween: 10, // Відстань між слайдами
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
