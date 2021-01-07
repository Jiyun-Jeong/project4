$(document).ready(function () {
    //cnt4 "droppable"
    $('#drag1Yes,  #drag2Yes').draggable({
        revert: 'invalid'
      });

    //드래그를 수락해주는 대상
	$('#drop1').droppable({
        accept : '#drag1Yes',        //수락해줄 대상을 지정
        drop : function () {        //drop이 완료된 후 실행할 실행문
            $(this).fadeOut().next().text('80%');
            $('#drag1Yes').hide();
        }
    });
	$('#drop2').droppable({
        accept : '#drag2Yes',        //수락해줄 대상을 지정
        drop : function () {        //drop이 완료된 후 실행할 실행문
            $(this).fadeOut().next().text('80%');
            $('#drag2Yes').hide();
        }
    });

    //cnt4 "swiper"
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
});