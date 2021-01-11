$(document).ready(function () {
    var scrollY;
    var _gnb = $('#gnb')

    //메뉴열기 클릭
    $('.btn_open').on('click', function () {
        if($(this).hasClass('active')) {
            _gnb.stop().animate({left: '100%'}, 300, function () {
                $(this).css({display: 'none'}).find('ul li.on').removeClass('on').children('ul').stop().slideUp();
            });

            $(this).removeClass('active').find('blind-b').text('메뉴 열기');
        } else {
            var scrollMove = scrollT;
            console.log(scrollMove);

            $(this).addClass('active').find('blind-b').text('메뉴 닫기');
            var $first = _gnb.find('[data-link=first]');
            var $last = _gnb.find('[data-link=last]');

            _gnb.css({display: 'block'}).stop().animate({left: 0}, 300, function () {
                $first.focus();
            });

            $first.on('keydown', function (e) {
                console.log(e.keycode);
                if(e.shiftKey && e.keyCode == 9) {
                    e.preventDefault();
                    $last.focus();
                }
            });

            $last.on('keydown', function (e) {
                if(!e.shiftKey && e.keyCode == 9) {
                    e.preventDefault();
                    $('.btn_open').focus();
                }
            });
        }

});
