$(function(){
    const headerHeight = $('header').outerHeight();
    const offsetBuffer = 50;  // 스크롤 위치 버퍼

    // 1. 메뉴 클릭 이벤트 - 항상 작동
    $('.gnb li a').on('click', function(e){
        e.preventDefault();
        const targetMenu = $(this).parent().data('link');
        const $targetSection = $('[data-menu="' + targetMenu + '"]');
        
        if($targetSection.length){
            const offsetTop = $targetSection.offset().top - headerHeight;
            $('html, body').stop().animate({scrollTop: offsetTop}, 500, function(){
                // 애니메이션 완료 후 active 강제 적용
                $('.gnb li').removeClass('active');
                $('.gnb li[data-link="' + targetMenu + '"]').addClass('active');
            });
        }
    });

    // 2. 스크롤 시 active 클래스 토글
    $(window).on('scroll', function(){
        const scrollTop = $(window).scrollTop();
        let activated = false;

        $('[data-menu]').each(function(){
            const $section = $(this);
            const sectionTop = $section.offset().top - headerHeight - offsetBuffer;
            const sectionBottom = sectionTop + $section.outerHeight();
            const menuName = $section.data('menu');

            if(scrollTop >= sectionTop && scrollTop < sectionBottom){
                $('.gnb li').removeClass('active');
                $('.gnb li[data-link="' + menuName + '"]').addClass('active');
                activated = true;
                return false; // 루프 탈출
            }
        });

        // 어느 섹션에도 없으면 active 모두 제거
        if(!activated){
            $('.gnb li').removeClass('active');
        }
    });

    // 페이지 로드 시 현재 위치에 맞게 active 초기화
    $(window).trigger('scroll');


    $(window).on('mousemove', function (e) {
        $('.cursor').css({
          left: e.pageX + 'px',
          top: e.pageY + 'px'
        });
      });
      
      $('.project .list li a').hover(
        function () {
          $('.cursor').addClass('on');
        },
        function () {
          $('.cursor').removeClass('on');
        }
      );
      
});
