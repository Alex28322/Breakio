const swiper = new Swiper('.swiper', {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 1,
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
const items = document.querySelectorAll('.question__item-box');

items.forEach((item) => {
  const arrow = item.querySelector('.question__item-arrow');
  const answer = item.querySelector('.question__item-text-main');
  if (!arrow || !answer) return;

  arrow.addEventListener('click', () => {
    const isOpen = arrow.classList.contains('active');

    if (isOpen) {
      arrow.classList.remove('active');
      answer.classList.remove('active');
      answer.style.maxHeight = '0px';
    } else {
      arrow.classList.add('active');
      answer.classList.add('active');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});
const triggerBtns = document.querySelectorAll('.button-form');
const overlay = document.querySelector('.overlay');
const form = document.querySelector('.signin__form')

triggerBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    overlay.classList.add('show');
    form.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    overlay.classList.remove('show');
     form.classList.remove('active');
     document.body.style.overflow = '';
  }
});