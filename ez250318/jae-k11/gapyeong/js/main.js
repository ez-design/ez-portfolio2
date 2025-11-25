$(document).ready(function(){

    /*************visual 의 swiper 연결 : 시작 ************/
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

	autoplay: {  /* 팝업 자동 실행 */
		delay: 2500,
		disableOnInteraction: true,
	},

	effect: "fade", /* fade 효과 */

	loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

	pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
		el: '.visual .swiper-pagination', /* 해당 요소의 class명 */
		clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
		// type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
		// renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
		//     return '<span class="' + className + '">' + (index + 1) + "</span>";
		// },
	},

    });
    visual_swiper.autoplay.stop();  /* 일시정지 기능 */
    visual_swiper.autoplay.start();  /* 재생 기능 */

    $('.visual .ctrl_wrap button.btn_stop').on('click', function(){
        visual_swiper.autoplay.stop()
        //console.log('정지버튼')
        $(this).hide()
        $('.visual .ctrl_wrap button.btn_play').show()
    })
    
    $('.visual .ctrl_wrap button.btn_play').on('click', function(){
        visual_swiper.autoplay.start()
        //console.log('재생버튼')
        $(this).hide()
        $('.visual .ctrl_wrap button.btn_stop').show()
    })     
    /*************visual 의 swiper 연결 : 끝 *************/

    /*************tour 의 tap: 시작 *************/

    let tour_content //클릭한메뉴 이름(id)
    $('.tour .list .tab_list ul li').on('click', function(){
        //console.log('눌려')
        if($(this).hasClass('active') == false){
            //console.log('선택안된메뉴')
            tour_content = $(this).attr('data-content')
            console.log(tour_content)

            $('.tour .list .tab_content .tab_item').removeClass('active')
            $('.tour .list .tab_content').find('#'+tour_content).addClass('active')

            $('.tour .list .tab_list ul li').removeClass('active')
            $(this).addClass('active')
            

            $('.tour .list .tab_list ul li').attr('aria-selected', 'false')
            $(this).attr('aria-selected', 'true')
        }
    })
    
    /*************tour 의 tap: 끝 *************/

    /*************tour 의 swiper : 시작 *************/

    const tour_swiper = new Swiper('.tour .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 30, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            600: {    /* 1560px 이상일때 적용 */
                slidesPerView: 2,
                spaceBetween: 16,
            },
            880: {    /* 1560px 이상일때 적용 */
                slidesPerView: 3,
                spaceBetween: 16,
            },
            1160: {    /* 1560px 이상일때 적용 */
                slidesPerView: 4,
                spaceBetween: 24,
            },
            1460: {    /* 1560px 이상일때 적용 */
                slidesPerView: 5,
                spaceBetween: 24,
            },
        },
        centeredSlides: false, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        // autoplay: {  /* 팝업 자동 실행 */
        //     delay: 2500,
        //     disableOnInteraction: true,
        // },
        navigation: {
            nextEl: '.tour .btn_next',
            prevEl: '.tour .btn_prev',
        },     
    });
    // swiper.autoplay.stop();  /* 일시정지 기능 */
    // swiper.autoplay.start();  /* 재생 기능 */

    /*************tour 의 swiper : 끝 *************/

    /*************sns 의 swiper : 시작 *************/

    const sns_swiper = new Swiper('.sns .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            520: {    
                slidesPerView: 2,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 10,
            },
            600: {   
                slidesPerView: 2,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 15,
            },
            870: {   
                slidesPerView: 3,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,
            },
            
            1071: {    
                slidesPerView: 4,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,
            },
            
            
        },
        //centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        autoplay: {  /* 팝업 자동 실행 */
            delay: 30000,
            disableOnInteraction: true,
        },
    });


    /*************sns 의 swiper : 끝 *************/


})