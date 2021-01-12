$(document).ready(function () {
    var scrollY;
    var _gnb = $('.navWrap')

    //메뉴열기 클릭
    $('.btn_open').on('click', function () {
            var $first = _gnb.find('[data-link=first]');
            var $last = _gnb.find('[data-link=last]');

            _gnb.css({visibility: 'visible'}).stop().animate({left: 0}, 500, function () {
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

        });

    //메뉴닫기 클릭
    $('.btn_close').on('click', function () {
            _gnb.stop().animate({left: '100%'}, 500, function () {
                    $(this).css({visibility: 'hidden'});
                });
    });  
});