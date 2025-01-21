$(document).ready(function () {
  // Popup initialization for YouTube and Vimeo
  $('.popup-youtube, .popup-vimeo').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: true,
  });

  // Accordion functionality
  const togglers = document.querySelectorAll('[data-bs-toggle]');
  togglers.forEach((btn) => {
    const targetBlock = document.querySelector(btn.dataset.bsToggle);
    if (btn.classList.contains('active')) {
      targetBlock.style.maxHeight = targetBlock.scrollHeight + 'px';
      btn.closest('.accordion__item').classList.add('active');
    }

    btn.addEventListener('click', (e) => {
      const block = document.querySelector(e.currentTarget.dataset.bsToggle);
      if (e.currentTarget.classList.contains('active')) {
        block.style.maxHeight = '';
        e.currentTarget.closest('.accordion__item').classList.remove('active');
      } else {
        block.style.maxHeight = block.scrollHeight + 'px';
        e.currentTarget.closest('.accordion__item').classList.add('active');
      }
      e.currentTarget.classList.toggle('active');
      document.querySelectorAll('.accordion__header').forEach((header) => {
        if (header !== e.currentTarget) {
          header.classList.remove('active');
          document.querySelector(header.dataset.bsToggle).style.maxHeight = '';
          header.closest('.accordion__item').classList.remove('active');
        }
      });
    });
  });

  // Hidden menu toggle
  $('#show-hidden-menu').click(function () {
    $('.hidden-menu').slideToggle('slow');
  });

  // Form focus styling
  $('input,textarea').val('');
  $('.form-group input, .form-group textarea, .form-group select').focusout(function () {
    const text_val = $(this).val();
    if (text_val === '') {
      $(this).removeClass('has-value');
    } else {
      $(this).addClass('has-value');
    }
  });

  // Screenshot carousel initialization
  $('.screenshot_slider').owlCarousel({
    loop: true,
    responsiveClass: true,
    nav: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 6000,
    smartSpeed: 400,
    navText: [
      "<img src='images/previmage.webp' alt='001 prev' width='50' height='50' />",
      "<img src='images/nextimage.webp' alt='001 next' width='50' height='50' />",
    ],
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      768: { items: 2 },
      1024: { items: 2 },
      1200: { items: 3 },
    },
  });

  // Testimonial carousel initialization
  $('#testimonilas_slider').owlCarousel({
    loop: false,
    responsiveClass: true,
    nav: true,
    margin: 20,
    autoplay: false,
    autoplayTimeout: 4000,
    smartSpeed: 400,
    navText: [
      "<img src='images/previmage.webp' alt='001 prev' width='50' height='50' />",
      "<img src='images/nextimage.webp' alt='001 next' width='50' height='50' />",
    ],
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      768: { items: 2 },
      1024: { items: 3 },
      1200: { items: 3 },
    },
  });

  // Scroll to top button logic
  const scrollToTopBtn = document.querySelector('.scrollToTopBtn');
  const rootElement = document.documentElement;

  function handleScroll() {
    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    if (rootElement.scrollTop / scrollTotal > 0.02) {
      scrollToTopBtn.classList.add('showBtn');
    } else {
      scrollToTopBtn.classList.remove('showBtn');
    }
  }

  function scrollToTop() {
    rootElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  scrollToTopBtn.addEventListener('click', scrollToTop);
  document.addEventListener('scroll', handleScroll);

  // PCOS reviews carousel initialization
  $('#Our_pcosreviews_slider').owlCarousel({
    loop: true,
    responsiveClass: true,
    nav: false,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 400,
    navText: [
      "<img src='images/previmage.webp' alt='001 prev' width='50' height='50' />",
      "<img src='images/nextimage.webp' alt='001 next' width='50' height='50' />",
    ],
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      768: { items: 2 },
      1024: { items: 2 },
      1200: { items: 3 },
    },
  });

  $('.owl-nav .owl-prev').attr('role', 'button');
  $('.owl-nav .owl-next').attr('role', 'button');

  // Video item click handler
  $('.vid-item').each(function (index) {
    $(this).on('click', function () {
      $('.vid-item .thumb').removeClass('active');
      $(`.vid-item:nth-child(${index + 1}) .thumb`).addClass('active');
    });
  });
});
