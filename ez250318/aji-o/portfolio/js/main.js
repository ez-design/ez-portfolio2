$(document).ready(function(){
    const swiper = new Swiper(".swiper", {
        direction: "horizontal",
        slidesPerView: 1,
        mousewheel: true,
        on: {
            slideChange: function(){
                $('header ul li').removeClass('active');
                $('header ul li').eq(this.realIndex).addClass('active');
            }
        }
    });

    // gnb 클릭 시 swiper 이동
    const sectionMap = {
        'home': 0,
        'profile': 1,
        'hollys': 2,
        'hyoseng': 3,
        'nest': 4,
        'contact': 5
    };

    $('header ul li a').on('click', function(e){
        e.preventDefault();
        const target = $(this).attr('href').replace('#', ''); 
        const index = sectionMap[target];

        if (index !== undefined) {
            swiper.slideTo(index); // Swiper 슬라이드 이동
        }
    });


    // 마우스 커서

    $(window).on('scroll mousemove', function(e){  /* html cursor가 마우스 포인터를 따라다니게 하는 값 */
        $('.cursor').css('left', e.pageX + 'px');
        $('.cursor').css('top', e.pageY + 'px');
    });
    $('.hollys .tit a, .hyoseng .tit a, .nest .tit a, .hollys a.bg_btn, .hyoseng a.bg_btn, .nest a.bg_btn').hover(function(){ /* 특정한 요소에 마우스를 올렸을때만 on 클래스 주기 */
        $('.cursor').toggleClass('on');
    });

});