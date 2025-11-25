$(document).ready(function(){

    AOS.init({
        offset: 200, // 해당 콘텐츠가 하단에서 몇 px 위로 올라와에 나타나는 효과가 나타날지 셋팅하는 값
        duration: 500, // 애니메이션 효과가 작동되는 시간
        easing: 'ease', // 가속도
    });

    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000,
            disableOnInteraction: true,
        },

        effect: "fade", /* fade 효과 */

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .ctrl_wrap button.btn_next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .ctrl_wrap button.btn_prev',  
        },

    });
    // visual_swiper.autoplay.stop();  /* 일시정지 기능 */
    // visual_swiper.autoplay.start();  /* 재생 기능 */
    $('.visual .ctrl_wrap button.btn_stop').on('click', function(){
        visual_swiper.autoplay.stop()
        $(this).hide()
        $('.visual .ctrl_wrap button.btn_play').show()
    })
    $('.visual .ctrl_wrap button.btn_play').on('click', function(){
        visual_swiper.autoplay.start()
        $(this).hide()
        $('.visual .ctrl_wrap button.btn_stop').show()
    })



    let scrolling
    let win_h
    let window_w


    let photo = $('.workshop .workshop_pt .photo')
    let photo_top
    let photo_start
    let photo_end
    let photo_scroll
    let photo_w_start = 30 //시작할 때 넓이
    let photo_w_end = 100 //종료할 때 넓이
    let photo_w

    
    function photo_resize(){
        photo_top = photo.offset().top
        photo_start = photo_top - (win_h * 0.9) /* 위에서부터 (win_h * 0.9) 떨어진 위치에서 시작*/
        photo_end = photo_top + photo.height() - (win_h * 0.9)
        photo_scroll = (scrolling - photo_start) / (photo_end - photo_start) * 100
        //console.log('scroll', photo_scroll)

        if(window_w > 1025){ /****.. */
            if(photo_start > scrolling) {
                //console.log('시작전')
                photo.width(photo_w_start + '%')
            }else if(photo_end > scrolling){
                //console.log('애니메이션중')
                photo_w = ((photo_w_end - photo_w_start) / 100 * photo_scroll) + photo_w_start
                //console.log(photo_w)
                photo.width(photo_w + '%')
            }else{
                //console.log('종료')
                photo.width(photo_w_end + '%')
            }
        }
    }

    scroll_chk() //브라우저가 로딩됐을 때 1번
    resize_chk()
    photo_resize()
    

    $(window).scroll(function(){
        //스크롤 할 때마다 1번씩
        scroll_chk()
        photo_resize()
    })
    $(window).resize(function(){
        //브라우저가 리사이즈 될 때마다 1번씩 실행
        resize_chk()
        photo_resize() /****.. */
    })

    function scroll_chk(){
        scrolling = $(window).scrollTop()
        //console.log('스크롤값', scrolling)
    }

    function resize_chk(){
        win_h = $(window).height() //브라우저 높이
        //console.log('브라우저 높이', win_h)
        window_w = $(window).width()
        //console.log('브라우저 넓이', window_w)
    }


    /* inter Swiper  */
    const inter_swiper = new Swiper('.inter .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            768: {    /* 768px 이상일때 적용 */
                slidesPerView: 'auto',    
                spaceBetween: 24,
            },
            1024: {    /* 1024px 이상일때 적용 */
                slidesPerView:  'auto',    
                spaceBetween: 24,
            },
        },
        //centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        // loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        // autoplay: {  /* 팝업 자동 실행 */
        //     delay: 2500,
        //     disableOnInteraction: true,
        // },
        scrollbar: {
            el: ".inter .scroll_wrap .swiper-scrollbar",
            hide: false,
            draggable: true,
            dragSize: '100', /*스크롤바 넓이*/
        },
    });
    // swiper.autoplay.stop();  /* 일시정지 기능 */
    // swiper.autoplay.start();  /* 재생 기능 */
    













    
})