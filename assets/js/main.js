$(document).ready(function () {
    //cnt4 드래그하는 대상
    $('#drag1Yes, #drag2Yes').draggable({
        revert: 'invaild'
    });

    //드래그를 수락해주는 대상
    $('#drop1').droppable ({
        accept: '#drag1Yes', //수락해줄 대상 지정
        drop: function () { //drop이 완료된 후 실행할 실행문
            //필요한 코드 작성
            $('#drag1Yes').addClass('aqua').text('drop 성공을 축하합니다');
        }
    });
    $('#drop2').droppable ({
        accept: '#drag2Yes', //수락해줄 대상 지정
        drop: function () { //drop이 완료된 후 실행할 실행문
            //필요한 코드 작성
        }
    });
});