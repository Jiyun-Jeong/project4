$(document).ready(function () {
  var workHei;
  $(window).on('resize', function () {
    workHei = $('#work').outerHeight();
  });
  $(window).trigger('resize');
  $('#cnt1 .movebtn').on('click', function () {
    if ($(this).is('#aboutBtn')) {
      $('html, body').stop().animate({
        scrollTop: $('#cnt2').offset().top
      });
    } else {
      $('#wrap').css({
        height: workHei,
        'overflow': 'hidden'
      });
      $('#work').css('visibility', 'visible').parent().stop().animate({
        left: '-100%'
      }, function () {
        $(this).find('.leftPos').css('visibility', 'hidden').attr({
          'aria-hidden': true,
          inert: true
        });
      });
    }
  });

  //cnt1 스크롤에 따라 svg 사이즈 줄어들기 (top: 149px; right: 280px; padding: 708px; width: 932px; height: 551px) -> (top: 29px; left: 32px; width: 131px; height: 77px;)
  $(window).on('scroll', function (){
    var targetTop = $(this).scrollTop();
    var _nameSvg = $('#name');
    var fixTop = _nameSvg.offset().top;

    console.log(targetTop, fixTop);

    if ( fixTop > 50 ) {
      console.log(fixTop);
      _nameSvg.css({top: '29', left: '32', width: '131', height: 77}).;
    }
  });

  $('#backBtn').on('click', function () {
    $('#wrap').removeAttr('style');
    $('.wrap_inner').find('.leftPos').css('visibility', 'visible');
    $('.wrap_inner').stop().animate({
      left: 0
    }, function () {
      $(this).children('#work').css('visibility', 'hidden').siblings().removeAttr('aria-hidden inert');
    });
  });

  //cnt3 "swiper"
  var storySwiper = new Swiper('#cnt3 .swiper-container', {
    //direction: 'vertical',
    pagination: {
      el: '.swiper-pagination',
      //type: 'fraction',
      //clickable: true, //bullet 타입일 경우 버튼 클릭시 이동 가능함
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    //spaceBetween: 10, //각 슬라이더 사이 공간
    slidesPerView: 'auto',
    a11y: {
      prevSlideMessage: '이전 슬라이드 보기',
      nextSlideMessage: '다음 슬라이드 보기',
      firstSlideMessage: '첫번째 슬라이드',
      lastSlideMessage: '마지막 슬라이드',
    },
  })

  //cnt4 "droppable"
  $('#drag1Yes,  #drag2Yes').draggable({
    revert: 'invalid'
  });

  //드래그를 수락해주는 대상
  $('#drop1').droppable({
    accept: '#drag1Yes', //수락해줄 대상을 지정
    drop: function () { //drop이 완료된 후 실행할 실행문
      $(this).fadeOut().next().text('85%');
      $('#drag1Yes').hide();
    }
  });
  $('#drop2').droppable({
    accept: '#drag2Yes', //수락해줄 대상을 지정
    drop: function () { //drop이 완료된 후 실행할 실행문
      $(this).fadeOut().next().text('80%');
      $('#drag2Yes').hide();
    }
  });


  //toggle button
  var toggleBg = $('.toggleBg');
  var toggleFg = $('.toggleBg').find('.toggleFg');
  var left = toggleFg.css('left');
  if (left == '40px') {
    toggleBg.css('background', ' #444242');
    toggleActionStart(toggleGf, 'TO_LEFT');
  } else if (left == '0px') {
    toggleBg.css('background', '#ffffff');
    toggleActionStart(toggleFg, 'TO_RIGHT');
  }
  //토글 버튼 이동 모션 함수
  function toggleActionStart(toggleBtn, LR) {
    // 0.01초 단위로 실행
    var intervalID = setInterval(
      function () {
        // 버튼 이동
        var left = parseInt(toggleBtn.css('left'));
        left += (LR == 'TO_RIGHT') ? 5 : -5;
        if (left >= 0 && left <= 40) {
          left += 'px';
          toggleBtn.css('left', left);
        }
      }, 10);
    setTimeout(function () {
      clearInterval(intervalID);
    }, 201);
  }


  출처: https: //dororongju.tistory.com/110 [웹 개발 메모장]

    //work page work1 "swiper"
    var work1Swiper = new Swiper('#work .gopro .swiper-container', {
      //direction: 'vertical',
      pagination: {
        el: '.swiper-pagination',
        //type: 'fraction',
        //clickable: true, //bullet 타입일 경우 버튼 클릭시 이동 가능함
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
  //work page work2 "swiper"
  var work2Swiper = new Swiper('#work .helinox .swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      //clickable: true, //bullet 타입일 경우 버튼 클릭시 이동 가능함
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
  //work page work3 "swiper"
  var work3Swiper = new Swiper('#work .heyri .swiper-container', {
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