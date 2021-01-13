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

    if ( targetTop > 10 ) {
      console.log(fixTop);
      _nameSvg.stop().animate({padding: '29 0 0 32', width: 131, height: 77}, 800).css({position: 'fixed'});
    } else {
      _nameSvg.stop().animate({padding: '7.7604vw 14.5833vw 0 36.875vw', width: 932, height: 551}, 800).css({position: 'absolute'});
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

  //cnt3 view more button
  $('#cnt3 a').on('click', function () {
    $('#workBtn').trigger('click');
});

  //cnt4 "droppable"
  $('#drag1Yes,  #drag2Yes').draggable({
    revert: 'invalid'
  });

  var okay1 = false;
  var okay2 = false;
  //드래그를 수락해주는 대상
  $('#drop1').droppable({
    accept: '#drag1Yes', //수락해줄 대상을 지정
    drop: function () { //drop이 완료된 후 실행할 실행문
      $(this).fadeOut().next().text('85%');
      $('#drag1Yes').hide();
      okay1 = true;
      if (okay1 && okay2 ) {
        $('.hiddenProfile').stop().delay(0.5).fadeIn();
        $('.peepIt').stop().hide()
      }
    }
  });
  $('#drop2').droppable({
    accept: '#drag2Yes', //수락해줄 대상을 지정
    drop: function () { //drop이 완료된 후 실행할 실행문
      $(this).fadeOut().next().text('90%');
      $('#drag2Yes').hide();
      okay2 = true;
      if (okay1 && okay2 ) {
        $('.hiddenProfile').stop().delay(0.5).fadeIn()/* .find('.peepIt').stop().delay(0.5).fadeOut() */;
        $('.peepIt').stop().hide();
        
        //flower action
        /* function reAction(){
          $('#cnt4').fadeIn(1000);
            setTimeout(function (){
              $('#cnt4').fadeOut(2000);
            }, 5000);
        }
        reAction(); */
      }
    }

  });


  //toggle button
  var toggleBg = $('.toggleBg');
  var toggleFg = $('.toggleBg').find('.toggleFg');
  var left = toggleFg.css('left');
  var right = toggleFg.css('right');

  if (left == '40px') {
    toggleBg.css('background', ' #444242');
    toggleActionStart(toggleFg, 'TO_LEFT');
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
  
  $(toggleBg).on('click', function (){
    if ($(this).hasClass('active')) {
      $('.flipBtn_front').stop().slideUp();
    } else {  
      $('.flipBtn_back').stop().slideDown();
    }
  });

  //공튀기기
    var _skillCircle = $(".skillCircle");
    var panelWid = _skillCircle.width();
    var panelHei = _skillCircle.height();
    var ballsize = 100; //100%일 경우 크기를 적는다

    //매개변수 : 선택자, 시작x좌표, 시작y좌표, 볼비율, 박스 밖으로 나갈경우 제어숫자, 가로이동크기, 세로이동크기, 고정x좌표, 고정y좌표
    bounce('.subject1', 0, 0, 1.50, 6, 6, 6, 105, 150); //html5
    bounce('.subject2', 300, 100, 2, 4, 10, 15, 180, 50); //CSS3
    bounce('.subject3', 400, 290, 1.50, 5, 8, 12, 115, 20); //SCSS
    bounce('.subject4', 350, 150, 1.30, 2, 9, 7, 270, -5); //자바
    bounce('.subject5', 200, 350, 1.20, 7, 7, 10, 355, 90); //bootstrap
    bounce('.subject6', 500, 450, 1.10, 6, 5, 5, 320, 190); //jquery
    function bounce(target, startX0, startY0, ratio, stepSize0, stepX0, stepY0, stopX, stopY) {
      var _ball = $(target);
      var startX = startX0;   //ball이 움직이기 시작하는 X 위치
      var startY = startY0;   //ball이 움직이기 시작하는 Y 위치
      var endX = panelWid - ballsize * ratio; //ball이 움직일수 있는 최대 X 위치
      var endY = panelHei - ballsize * ratio; //ball이 움직일수 있는 최대 Y 위치
      var stepSize = stepSize0;  
      var stepX = stepX0; //숫자가 작을수록 느려지고, 클수록 빨라진다(시작위치에서 stepX 값을 더해 가로 다음 위치를 잡는다 )
      var stepY = stepY0; //숫자가 작을수록 느려지고, 클수록 빨라진다(시작위치에서 stepY 값을 더해 세로 다음 위치를 잡는다 )
      var ballTimer = 0;

      start();  //먼저 시작된다
      
      _skillCircle.on({
        mouseenter: function () {
          console.log(_ball);
          stopMove(); //패널에 진입하면 멈춘다
        },
        mouseleave: function () {
          start(); // 패널에서 빠져 나오면 시작되고
        }
      });

      function start(){
        if (ballTimer === 0)
          ballTimer = setInterval(startMove, 40);
      }

      function startMove(){
        _ball.css({width: ballsize * ratio, height: ballsize * ratio, left:startX0, top: startY0});
        startX += stepX;  //시작위치에서 stepSize인 6만큼씩을 더해서 움직이게 한다
        startY += stepY;
        if (startX > endX) stepX = -stepSize;  //최대 위치를 벗어나면 빼주어 내부로 다시 들어오게 함
        if (startX < 0) stepX = stepSize;      //최소 위치보다 더 작아지려하면 다시 초기화
        if (startY > endY) stepY = -stepSize;
        if (startY < 0) stepY = stepSize;

        //absolute 속성을 지닌 #ball의 top과 left 값을 update한다
        _ball.css({top: startY + "px", left: startX + "px"});
      }

      function stopMove(){
        if (ballTimer !== 0){
          clearInterval(ballTimer);
          // 고정 멈춤 위치
          _ball.css({left:stopX, top: stopY});
          startX = stopX; //멈춘 위치에서 다시 시작할수 있게 start값 변경
          startY = stopY;

          ballTimer = 0;
        }
      }
    }

    //draggable chart
    var top = $('.skillView').offset().top; //드래그 가능한 시작위치
    var bottom = $('.skillView').offset().top + $('.skillView').height() - 180; //종료위치
    $('.overview').draggable({
      axis: 'y', //y축으로만 드래그
      containment: [0, top, 10000, bottom] //0, top, 10000, bottom
    })

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