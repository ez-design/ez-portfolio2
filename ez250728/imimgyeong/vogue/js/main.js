/*------------------------------------------------------------------
 * 파일명 : main.js
    - 작성자 : 황난경
    - 작성일 : 2025-11-25
    - 설  명 : 메인페이지에서만 적용되는 js를 저장 (header/footer 제외)
---------------------------------------------------------------------*/
$(document).ready(function(){

    /*-----------시작 : visual swiper-----------*/
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000,
            disableOnInteraction: true,
        },

        effect: "fade", /* fade 효과 */

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    });
    /*-----------끝 : visual swiper-----------*/

    /*-----------시작 : video swiper-----------*/
    const video_swiper = new Swiper('.video .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            769: {    /* 769px 이상일때 적용 */
            slidesPerView: 3,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
            spaceBetween: 24,
            },
            640: {    /* 640px 이상일때 적용 */
                slidesPerView: 2,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 16,
            },
        },
        //centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        // loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        navigation: {
            nextEl: '.video .ctrl_btn .btn_next',
            prevEl: '.video .ctrl_btn .btn_prev',
        },
        
    });
    /*-----------끝 : video swiper-----------*/

    /*-----------시작 : fashion swiper-----------*/
    const fashion_swiper = new Swiper('.fashion .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            769: {    /* 769px 이상일때 적용 */
                slidesPerView: 'auto',    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,
            },
        },
        
    });
    /*-----------끝 : fashion swiper-----------*/

    /*-----------시작 : beauty swiper-----------*/
    const beauty_swiper = new Swiper('.beauty .swiper', { /* 팝업을 감싼는 요소의 class명 */
    slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
    spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
    breakpoints: {
        769: {    /* 769px 이상일때 적용 */
            slidesPerView: 'auto',    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
            spaceBetween: 24,
        },
    },
       
   });
   /*-----------끝 : beauty swiper-----------*/

    /*-----------시작 : living swiper-----------*/
    const living_swiper = new Swiper('.living .swiper', { /* 팝업을 감싼는 요소의 class명 */
    slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
    spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
    breakpoints: {
        769: {    /* 769px 이상일때 적용 */
            slidesPerView: 'auto',    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
            spaceBetween: 24,
        },
    },
        
    });
    /*-----------끝 : living swiper-----------*/

    /*-----------시작 : culture swiper-----------*/
    const culture_swiper = new Swiper('.culture .swiper', { /* 팝업을 감싼는 요소의 class명 */
    slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
    spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
    breakpoints: {
        769: {    /* 769px 이상일때 적용 */
            slidesPerView: 'auto',    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
            spaceBetween: 24,
        },
    },
        
    });
    /*-----------끝 : culture swiper-----------*/

    /*-----------시작 : pick swiper-----------*/
    const pick_swiper = new Swiper('.pick .swiper', { /* 팝업을 감싼는 요소의 class명 */
	slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
	spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
	breakpoints: {
		640: {    /* 640px 이상일때 적용 */
			slidesPerView: 'auto',    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
			spaceBetween: 24,
		},
	},
	
    });
    /*-----------끝 : pick swiper-----------*/



    
})//나가지마세욤