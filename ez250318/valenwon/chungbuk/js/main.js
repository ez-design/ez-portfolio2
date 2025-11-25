
$(document).ready(function(){
    
    AOS.init({
        offset: 200, // 해당 콘텐츠가 하단에서 몇 px 위로 올라와에 나타나는 효과가 나타날지 셋팅하는 값
        duration: 500, // 애니메이션 효과가 작동되는 시간
        easing: 'ease', // 가속도
    });


    const visual_wrap_swiper = new Swiper('.visual_wrap .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 3500,
            disableOnInteraction: true,
        },

        effect: "fade", /* fade 효과 */

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.visual_wrap .swiper .inner .paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            //type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
            //renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
            //    return '<span class="' + className + '">' + (index + 1) + "</span>";
            //},
        },
        

        //navigation: {  /* 이전, 다음 버튼 */
            //nextEl: '.swiper-button-next',  /* 다음 버튼의 클래스명 */
            //prevEl: '.swiper-button-prev',  
        //},

    });

    $('.visual_wrap .swiper .ctrl_wrap .btn_play').on('click', function(){
        visual_wrap_swiper.autoplay.start();  /* 재생 기능 */
        //console.log('재생버튼 클릭!!')
    })

    $('.visual_wrap .swiper .ctrl_wrap .btn_stop').on('click', function(){
        visual_wrap_swiper.autoplay.stop();  /* 일시정지 기능 */
        // console.log('정지버튼 클릭!!')
    })

    
    //swiper.autoplay.stop();  /* 일시정지 기능 */
    //swiper.autoplay.start();  /* 재생 기능 */

    const visit_swiper = new Swiper('.visit .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            // 640: {    /* 640px 이상일때 적용 */
            //     slidesPerView: 2,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
            //     spaceBetween: 16,
            // },
            768: {    /* 768px 이상일때 적용 */
                slidesPerView: 3,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,
                // centeredSlides: true, //왼쪽 정렬
            },
            1024: {    /* 1024px 이상일때 적용 */
                slidesPerView: 'auto',    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,
            },
        },
        //centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        autoplay: {  /* 팝업 자동 실행 */
            delay: 2500,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: '.visit .ctrl_wrap .btn_next',
            prevEl: '.visit .ctrl_wrap .btn_prev',
        },
    });
    // swiper.autoplay.stop();  /* 일시정지 기능 */
    // swiper.autoplay.start();  /* 재생 기능 */
})










    
