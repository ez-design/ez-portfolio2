
$(document).ready(function(){
    //console.log('들어가니')

    AOS.init({
        offset: 200,
        duration: 500,
        easing: 'ease',
    });


/*************************** visual swiper 연결 : 시작 ***************************/
    const visual_swiper = new Swiper('.visual .swiper', {

        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
        },

        effect: "fade",

        loop: true,
        navigation: { 
		    nextEl: '.visual .ctrl_wrap .btn_next',
	    },
        pagination: {
            el: '.visual .ctrl_wrap .count_pc',
            type: 'fraction',
	    },
    });
/*************************** visual swiper 연결 : 종료 ***************************/




/********* exhibitions 연결 : 시작 *********/
const exhibitions_swiper = new Swiper('.exhibitions .swiper', {
	slidesPerView: 'auto',
	spaceBetween: 16,
	breakpoints: {
		768: {
			spaceBetween: 24,
		},
	},
	loop: true,
	
});
/********* exhibitions 연결 : 종료 *********/




/********* public 연결 : 시작 *********/
const public_swiper = new Swiper('.public .swiper', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        breakpoints: {
            // 768: {    /* 768px 이상일때 적용 */
            //     spaceBetween: 0,
            //     centeredSlides: true,
            // },
        },
        centeredSlides: true,
        loop: true,
        pagination: {
            el: '.public .list .paging',
            clickable: true,
        },
    });
/********* public 연결 : 종료 *********/




/********* collection 연결 : 시작 *********/
const collection_swiper = new Swiper('.collection .list_mobil .swiper', {
	slidesPerView: 'auto',
	spaceBetween: 16,
	breakpoints: {
		768: {
			spaceBetween: 16,
		},
        1024: {
			spaceBetween: 24,
		},
	},
	loop: true,
    navigation: {
		nextEl: '.collection .ctrl_wrap .btn_next',
		prevEl: '.collection .ctrl_wrap .btn_prev',
	},
	pagination: {
		el: '.collection .ctrl_wrap .paging',
		clickable: true,
		type: 'fraction',
	},
});
/********* collection 연결 : 종료 *********/



}) //$(document).ready