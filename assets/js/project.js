$(document).ready(function () {
      /* clearTimeout(timer);

      timer = setTimeout(function () {
          scrollT = $(this).scrollTop();
          
          $('.fade').each(function () {
              if(scrollT > $(this).offset().top - 500) $(this).addClass('on');
          });
      }, 50);
  $(window).trigger('scroll'); */

  //큰원 움직이기
  $('.bigMainCircle').addClass('up');
  setTimeout(function () {
    $('.bigMainCircle').removeClass('up').addClass('leftout');
  }, 1500);

  // gopro swiper
  var goproiSwiper = new Swiper('#gopro7 .swiper-container', {
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 'auto',
    a11y: {
      prevSlideMessage: '이전 슬라이드 보기',
      nextSlideMessage: '다음 슬라이드 보기',
    },
  })

  // heyri swiper
  var heyriSwiper = new Swiper('#heyri6 .swiper-container', {
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 'auto',
    a11y: {
      prevSlideMessage: '이전 슬라이드 보기',
      nextSlideMessage: '다음 슬라이드 보기',
    },
  })
});