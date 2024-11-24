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
});
