$(document).ready(function(){

    AOS.init({
        offset: 100, // 해당 콘텐츠가 하단에서 몇 px 위로 올라와에 나타나는 효과가 나타날지 셋팅하는 값
        duration: 500, // 애니메이션 효과가 작동되는 시간
        // easing: 'ease', // 가속도
    });

    /****************** visual swiper : start *******************/
    
    const visual_swiper = new Swiper('.visual .swiper', {

        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
        },
        //effect: "fade", /* fade 효과 */
        loop: true,
        pagination: {
            el: '.visual .swiper-pagination', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            // type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
            renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
        
    });

    $('.visual .ctrl_wrap button.btn_stop').on('click',function() {
        visual_swiper.autoplay.stop();
        $(this).hide()
        $('.visual .ctrl_wrap button.btn_play').show()
    })
    $('.visual .ctrl_wrap button.btn_play').on('click',function() {
        visual_swiper.autoplay.start();
        $(this).hide()
        $('.visual .ctrl_wrap button.btn_stop').show()
    })

    /****************** visual swiper : end *******************/

    /****************** biz : start *******************/
    $('.biz .list ul li').on('mouseenter', function(){
        $(this).addClass('on')
    })
    $('.biz .list ul li').on('mouseleave', function(){
        $(this).removeClass('on')
    })
    /****************** biz : end *******************/

    /*********************** esg : start ************************/

    let scrolling
    let win_h

    let photo = $('.esg .photo')
    let photo_top
    let photo_start
    let photo_end
    let photo_scroll    /* photo start에서 부터 스크롤 된 값 */
    let photo_w_start = 50
    let photo_w_end = 100
    let photo_w
    let photo_h_start = 450
    let photo_h_end = 900
    let photo_h

    let dark = $('.esg')
    let bg_w_top
    let bg_w_start

    scroll_chk()
    resize_chk()
    photo_resize()
    bg_w()

    $(window).scroll(function() {
        //스크롤 할때 마다 계속
        scroll_chk()
        photo_resize()
        bg_w()
    })

    $(window).resize(function() {
        //브라우저가 리자이즈 될때마다
        resize_chk()
        photo_resize()
        bg_w()
    })

    function scroll_chk() {
        scrolling = $(window).scrollTop()
        // console.log('스크롤', scrolling)
    }

    function resize_chk() {
        win_h = $(window).height()
        // console.log('브라우저 높이', win_h)
    }

    function photo_resize() {

        photo_top = photo.offset().top
        photo_start = photo_top - ( win_h * 1.1 )
        // console.log(photo_start)
        photo_end = photo_top + photo.height() - ( win_h * 1.1 )
        // console.log(photo_end)
        photo_scroll = (scrolling - photo_start) / (photo_end - photo_start) * 100

        if (photo_start > scrolling) {
            //시작 전
            photo.width(photo_w_start + '%')
            photo.height(photo_h_start + 'px')
        }else if(photo_end > scrolling){
            //애니메이션 중
            photo_w = ((photo_w_end - photo_w_start) / 100 * photo_scroll) + photo_w_start
            photo_h =  ((photo_h_end - photo_h_start) / 100 * photo_scroll) + photo_h_start
            photo.width(photo_w + '%')
            photo.height(photo_h + 'px')
            if (photo_w >= 99) {
                photo.width(photo_w_end + '%')
                photo.height(photo_h_end + 'px')
            }
        }else{
            //종료
            photo.width(photo_w_end + '%')
            photo.height(photo_h_end + 'px')
        }
    }
    
    function bg_w() {
        bg_w_top = dark.offset().top
        bg_w_start = bg_w_top - scrolling - (win_h * 0.5)
        // console.log('scroll', scrolling, 'top', bg_w_top, 'start', bg_w_start)
        if (bg_w_start < 0) {
            dark.addClass('dark')
        }else{
            dark.removeClass('dark')
        }
    }//bg_w

    /*********************** esg : end ************************/
    
    /*********************** news swiper : start ************************/

    const news_swiper = new Swiper('.news .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            768: {    /* 768px 이상일때 적용 */
                spaceBetween: 24,
            },
        },
        // loop: true,
        navigation: {
            nextEl: '.news .ctrl_wrap .btn_next',
            prevEl: '.news .ctrl_wrap .btn_prev',
        },
    });
    /*********************** news swiper : end ************************/
})//$(document).ready