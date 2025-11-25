$(document).ready(function(){

    let device_status //모바일 pc 구분
    let window_w //브라우저 넓이
    let mobile_size = 1024 //모바일로 전환되는 사이즈
    let menu_open // 모바일에서 사용할 메뉴가 열렸는지의 여부

    
    function resize_chk(){
        window_w = $(window).width()
        if(window_w > mobile_size ){
            device_status = 'pc'
        }else{ // 같거나 작으면
            device_status = 'mobile'
        }
    }


    $(window).resize(function(){ //리사이즈 될때마다 1번 실행
    resize_chk()
    })

    resize_chk() //함수의 실행


    /* 메뉴 오버 */

    $('header .gnb .gnb_wrap ul.depth1 > li > a').on('mouseenter focusin', function() {
        if (device_status === 'pc') {
            $('header').addClass('menu_over');
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over');
            $(this).parent('li').addClass('over');
        }
    });

    $('header').on('mouseleave', function(){
        $('header').removeClass('menu_over')
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
    })

    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter', function(){
            $('header').addClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
            $(this).addClass('over')
    })

    $('header').on('mouseleave', function(){
        $('header').removeClass('menu_over')
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
    })



    // 모바일 메뉴

    $('header .gnb .gnb_open').on('click', function(){ //메뉴 열고닫기
        $('header').addClass('menu_open')
    })
    $('header .gnb .gnb_close').on('click', function(){
        $('header').removeClass('menu_open')
    })

    
    $('header .gnb .gnb_wrap ul.depth1 > li > a').on('click', function(e){
        if(device_status == 'mobile'){
            e.preventDefault() // a 태그가 눌리는걸 막아줌
            menu_open = $(this).parents('li').hasClass('open')
            if(menu_open == true){ // 메뉴가 열려있을 경우
                $(this).parents('li').removeClass('open')
                $(this).next().slideUp()
            }else{ // 닫혀있을 경우
                $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('open')
                $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2').slideUp()
                $(this).parents('li').addClass('open')
                $(this).next().slideDown()
                
            }
        }
    })



    /* #####################   visual   ############################  */


    let visual_swiper

    function initVisualSwiper() {
    resize_chk(); // window_w와 device_status 갱신

    if (visual_swiper) {
        visual_swiper.destroy(true, true); // 기존 swiper 제거
    }

    if (device_status === 'mobile') {
        visual_swiper = new Swiper('.mo-visual', {
            autoplay: {
                delay: 5000,
                disableOnInteraction: true,
            },
            loop: true,
            pagination: {
                el: '.mo-visual .ctrl_wrap .count',
                clickable: true,
            },
        });

        $('.mo-visual .button-stop').on('click', function () {
            visual_swiper.autoplay.stop();
            $(this).hide();
            $('.mo-visual .button-play').show();
        });

        $('.mo-visual .button-play').on('click', function () {
            visual_swiper.autoplay.start();
            $(this).hide();
            $('.mo-visual .button-stop').show();
        });

        } else {
            visual_swiper = new Swiper('.pc-visual', {
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: true,
                },
                loop: true,
                pagination: {
                    el: '.pc-visual .ctrl_wrap .count',
                    clickable: true,
                },
            });

            $('.pc-visual .button-stop').on('click', function () {
                visual_swiper.autoplay.stop();
                $(this).hide();
                $('.pc-visual .button-play').show();
            });

            $('.pc-visual .button-play').on('click', function () {
                visual_swiper.autoplay.start();
                $(this).hide();
                $('.pc-visual .button-stop').show();
            });
        }
    }

    // 최초 실행
    initVisualSwiper();

    // 브라우저 크기 변경 시 swiper 재초기화
    $(window).on('resize', function () {
        initVisualSwiper();
    });


        /* ################### product ####################### */


        const product_swiper = new Swiper('.product .swiper', { /* 팝업을 감싼는 요소의 class명 */
            slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
            spaceBetween: 16,
            breakpoints: {
                640: {
                    slidesPerView: 'auto',    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                    spaceBetween: 24,
                },
            },
            navigation: {
                nextEl: '.product .tap_item .ctrl_wrap .btn_prev',
                prevEl: '.product .tap_item .ctrl_wrap .btn_next',
            },
        });

        //tap
        $('.product .list .tap_list ul li').on('click', function(){
        
            if($(this).hasClass('active') == false){
                find_content = $(this).attr('data-content')
    
                $('.product .list .con_wrap .tap_item').removeClass('active')
                $('.product .list .con_wrap').find('#'+find_content).addClass('active')
    
                $('.product .list .tap_list ul li').removeClass('active')
                $(this).addClass('active')
    
                $('.product .list .tap_list ul li button span').text('')
                $(this).find('span').text('선택됨')
    
                $('.product .list .tap_list ul li').attr('aria-selected', 'false')
                $(this).attr('aria-selected', 'true')
            }
        })



        /*################# news-event - 모바일 버전 swiper ################*/

    var news_swiper = undefined;
    function initSwiper(){ 
        if(window_w <= mobile_size && news_swiper == undefined){
            news_swiper = new Swiper('.news .swiper',{
                slidesPerView: 'auto',
                spaceBetween: 16,
            });

            //console.log($(window).width(), 'swiper 작동중')
            
        }else if(window_w > mobile_size && news_swiper != undefined){
           if(news_swiper) news_swiper.destroy();
           news_swiper = undefined;
            $('.news .swiper-wrapper').removeAttr('style');
            $('.news .swiper-slide').removeAttr('style');

            //console.log($(window).width(), 'swiper 해제')
        }
        //console.log($(window).width())
    }
 
    initSwiper();
 
    $(window).on('resize', function(){
        initSwiper();
    });


    


}) // $(document).ready