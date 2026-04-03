$(document).ready(function () {
    const right_swiper = new Swiper('.reco1 .swiper', { /* 팝업을 감싼 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 슬라이드의 개수 */
        spaceBetween: 16, /* 슬라이드 간 여백 */
        breakpoints: {
            769: {    /* 640px 이상일때 */
                slidesPerView: 'auto',    /* 슬라이드 개수 조정 */
                spaceBetween: 16,
            },
        },
        loop: true, /* 슬라이드 끝에서 처음으로 자연스럽게 돌아가도록 설정 */
    });
    const newSwiper = new Swiper('.swiper.NEW', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        breakpoints: {
            769: {
                slidesPerView: 'auto',
                spaceBetween: 16,
            },
        },
        loop: true,
    });

    // HOT Swiper 초기화
    const hotSwiper = new Swiper('.swiper.HOT', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        breakpoints: {
            769: {
                slidesPerView: 'auto',
                spaceBetween: 16,
            },
        },
        loop: true,
    });

    // NEW 버튼 클릭 시
    $('#btn-new').click(function() {
        // NEW 슬라이드 보이기
        $('.swiper.NEW').show();
        $('.swiper.HOT').hide();
        // NEW Swiper 업데이트
        newSwiper.update();
        // 버튼 활성화
        $(this).addClass('active');
        $('#btn-hot').removeClass('active');
    });

    // HOT 버튼 클릭 시
    $('#btn-hot').click(function() {
        // HOT 슬라이드 보이기
        $('.swiper.HOT').show();
        $('.swiper.NEW').hide();
        // HOT Swiper 업데이트
        hotSwiper.update();
        // 버튼 활성화
        $(this).addClass('active');
        $('#btn-new').removeClass('active');
    });

    // 기본적으로 NEW를 먼저 보여준다
    $('#btn-new').click();
    
    const page_swiper = new Swiper('.page .swiper', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        breakpoints: {
          769: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        },
        freeMode: true,
        loop: false,
      });

      $('.map .list ul li').on('mouseenter', function(){
        $(this).addClass('active')
        $('.map .list').addClass('over')
    })
    $('.map .list ul li').on('mouseleave', function(){
        $(this).removeClass('active')
        $('.map .list').removeClass('over')
    })

    $('footer .f_util .family_site .family_open').on('click', function(){
        $('footer .f_util .family_site').addClass('open')
        $('footer .f_util .family_site .family_wrap').slideDown()
    })
    $('footer .f_util .family_site .family_close').on('click', function(){
        $('footer .f_util .family_site').removeClass('open')
        $('footer .f_util .family_site .family_wrap').slideUp()
    })

    /* top버튼을 클릭하면 상단으로 이동 */
    $('footer .f_util .top').on('click', function(){
        $('html, body').animate({
            scrollTop : 0
        }, 500)
    })
});