$(document).ready(function(){


    let device_status //모바일 pc 구분
    let window_w //브라우저 넓이
    let mobile_size = 1024 //모바일로 전환되는 사이즈
    let menu_open // 모바일에서 사용할 메뉴가 열렸는지의 여부

    
    $(window).resize(function(){ //리사이즈 될때마다 1번 실행
    resize_chk()
    })

    resize_chk() //함수의 실행

    // function resize_chk(){
    //     window_w = $(window).width()
    //     if(window_w > mobile_size ){
    //         device_status = 'pc'
    //     }else{ // 같거나 작으면
    //         device_status = 'mobile'
    //     }
        
    // }

    function resize_chk(){
        window_w = $(window).width()
        if(window_w > mobile_size ){
            device_status = 'pc'
    
            // PC로 전환 시 열려 있던 메뉴 초기화
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('open')
            $('header .gnb .gnb_wrap ul.depth1 > li .depth2_wrap').removeAttr('style')
            $('header .gnb .gnb_wrap ul.depth2 > li').removeClass('open')
            $('header .gnb .gnb_wrap ul.depth2 > li > ul.depth3').removeAttr('style')
        }else{
            device_status = 'mobile'
        }
    }

    



    /* header 1차메뉴 오버 */

    $('header .gnb .gnb_wrap ul.depth1 > li > a:not([target="_blank"])').on('mouseenter focusin', function() {
        if (device_status === 'pc') {
            $('header').addClass('menu_over');
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over');
            $(this).parent('li').addClass('over');
        }
    });
    
    
    // target="_blank"가 있는 a 태그에 마우스 진입 시 클래스 제거
    $('header .gnb .gnb_wrap ul.depth1 > li > a[target="_blank"]').on('mouseenter focusout', function() {
        $('header').removeClass('menu_over');
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over');
    });
    
    // 마우스가 전체 header 밖으로 나가면 초기화
    $('header').on('mouseleave focusout', function() {
        $('header').removeClass('menu_over');
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over');
    });


    
    // 모바일 메뉴

    $('header .gnb .gnb_open').on('click', function(){ //메뉴 열고닫기
        $('header').addClass('menu_open')

    })
    $('header .gnb .gnb_close').on('click', function(){
        $('header').removeClass('menu_open')
    })

    //2차메뉴
    $('header .gnb .gnb_wrap ul.depth1 > li > a').on('click', function(e){
        if(device_status == 'mobile'){
            e.preventDefault() // a 태그가 눌리는걸 막아줌
            menu_open = $(this).parents('li').hasClass('open')
            if(menu_open == true){ // 메뉴가 열려있을 경우
                $(this).parents('li').removeClass('open')
                $(this).next().slideUp()
            }else{ // 닫혀있을 경우
                $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('open')
                $('header .gnb .gnb_wrap ul.depth1 > li > .depth2_wrap').slideUp()
                $(this).parents('li').addClass('open')
                $(this).next().slideDown()
                
            }
        }
    })

    //3차메뉴
    $('header .gnb .gnb_wrap ul.depth2 > li > a').on('click', function(e){
        if(device_status == 'mobile'){
            e.preventDefault();
    
            let $parentLi = $(this).parent('li');
            let isOpen = $parentLi.hasClass('open');
    
            // 모두 닫기
            $('header .gnb .gnb_wrap ul.depth2 > li').removeClass('open');
            $('header .gnb .gnb_wrap ul.depth2 > li > ul.depth3').slideUp();
    
            if (!isOpen) {
                $parentLi.addClass('open');
                $parentLi.find('ul.depth3').slideDown();
            }
        }
    });

    




    /* ################### visual ####################### */

    const visual_swiper = new Swiper('.visual .swiper', { 
        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
        },

        loop: true,

        pagination: {
            el: '.visual .ctrl_wrap .count',
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            type: 'fraction',
        },

    });

    $('.visual .ctrl_wrap button.button-stop').on('click', function(){
        visual_swiper.autoplay.stop(); /* 일시정지 */
        $(this).hide()
        $('.visual .ctrl_wrap button.button-play').show()
    })
    $('.visual .ctrl_wrap button.button-play').on('click', function(){
        visual_swiper.autoplay.start();
        $(this).hide()
        $('.visual .ctrl_wrap button.button-stop').show()
    })


    /* #################  center  ####################*/

    const center_swiper = new Swiper('.center .swiper', { 
	slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
	spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
	breakpoints: {  
		769: {
			spaceBetween: 24,
		},

	},
	centeredSlides: true,
	loop: true,

});


    /* ################### news - tap ####################### */

    $('.news .list .tap_list ul li').on('click', function(){
        
        if($(this).hasClass('active') == false){
            find_content = $(this).attr('data-content')

            $('.news .list .con_wrap .tap_item').removeClass('active')
            $('.news .list .con_wrap').find('#'+find_content).addClass('active')

            $('.news .list .tap_list ul li').removeClass('active')
            $(this).addClass('active')

            $('.news .list .tap_list ul li button span').text('')
            $(this).find('span').text('선택됨')

            $('.news .list .tap_list ul li').attr('aria-selected', 'false')
            $(this).attr('aria-selected', 'true')
        }
    })




    /* #################  news popup ####################*/

    const news_swiper = new Swiper('.news .swiper', {

        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
        },

        //effect: "fade", /* fade 효과 */

        loop: true,

        pagination: {
            el: '.news .paging',
            clickable: true,
        },
        navigation: {
            nextEl: '.news .btn_next',  /* 다음 버튼의 클래스명 */
            prevEl: '.news .btn_prev',  
        },
    });





})