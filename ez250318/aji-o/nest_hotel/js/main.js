$(document).ready(function(){

    AOS.init({
        offset: 200, // 해당 콘텐츠가 하단에서 몇 px 위로 올라와에 나타나는 효과가 나타날지 셋팅하는 값
        duration: 500, // 애니메이션 효과가 작동되는 시간
        easing: 'ease', // 가속도
        });
    
let device_status // pc인지 모바일인지 구분하는 값
let scrolling // 브라우저가 스크롤된 값
let scroll_prev //이전에 스크롤된 값
let window_w // 브라우저의 넓이 값
let mobile_size = 1024 // 모바일로 변경되는 사이트
let menu_open // 모바일에서 사용할 메뉴가 열렸는지의 여부

    $(window).scroll(function(){ //브라우저가 스크롤될떄마다 1번 실행
    scroll_chk()
    })

    $(window).resize(function(){ //리사이즈 될때마다 1번 실행
    resize_chk()
    })

    resize_chk() //함수의 실행
    scroll_chk()


    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter', function(){
        if(device_status == 'pc'){
            $('header').addClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
            $(this).addClass('over')
        }
    }) //메뉴오버




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

    //함수의 선언
    function resize_chk(){
        window_w = $(window).width()
        if(window_w > mobile_size ){
            device_status = 'pc'
        }else{ // 같거나 작으면
            device_status = 'mobile'
        }
    }

    function scroll_chk(){
        scroll_prev = scrolling  // 스크롤값을 다시계산하기 전에 이전값을 prev 에 저장 
        scrolling = $(window).scrollTop()
        if(scrolling > 0){ //조금이라도 스크롤됐으면
            $('header').addClass('fixed')
            if(scrolling > scroll_prev){
                $('header').addClass('gnb_up')
            }else{
                $('header').removeClass('gnb_up')

            }
        }else{ //맨위
            $('header').removeClass('fixed')
        }
    }


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




    /* ############  visual swiper ---- start ############# */


    const visual_swiper = new Swiper('.visual .swiper', { 

        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000,
            disableOnInteraction: true,
        },
        effect: "fade",
        loop: true,
    });

    $('.visual .visual_item .ctrl_wrap button.button-stop').on('click', function(){
        console.log('정지버튼 클릭')
        visual_swiper.autoplay.stop(); /* 일시정지 */
        $(this).hide()
        $('.visual .visual_item .ctrl_wrap button.button-play').show()
    })
    $('.visual .visual_item .ctrl_wrap button.button-play').on('click', function(){
        visual_swiper.autoplay.start();
        $(this).hide()
        $('.visual .visual_item .ctrl_wrap button.button-stop').show()
    })

        /* ############  visual swiper ---- end ############# */
        


    const pakege_swiper = new Swiper('.pakege .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            768: {    /* 768px 이상일때 적용 */
                spaceBetween: 24,
            },
            1024: {    /* 1024px 이상일때 적용 */
                spaceBetween: 24,
            },
        },
        navigation: {
            nextEl: '.pakege .list_ctrl .btn_next',
            prevEl: '.pakege .list_ctrl .btn_prev',
        },
        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.swiper-pagination', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
        },
    });



    /* ############  room over ############# */

    $('.room .list ul li').on('mouseenter', function(){
        $('.room .list ul li').removeClass('over')
        $(this).addClass('over')
    })


    /*################# room - 모바일 버전 swiper ################*/

    var room_swiper = undefined;
    function initSwiper(){ 
        if(window_w <= mobile_size && room_swiper == undefined){
            room_swiper = new Swiper('.room .swiper',{
                slidesPerView: 1,
                spaceBetween: 16,
                breakpoints: {
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                    },
                },
                centeredSlides: true,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    type: 'fraction',
                },
            });

            //console.log($(window).width(), 'swiper 작동중')
            
        }else if(window_w > mobile_size && room_swiper != undefined){
           if(room_swiper) room_swiper.destroy();
           room_swiper = undefined;
            $('.room .swiper-wrapper').removeAttr('style');
            $('.room .swiper-slide').removeAttr('style');

            //console.log($(window).width(), 'swiper 해제')
        }
        //console.log($(window).width())
    }
 
    initSwiper();
 
    $(window).on('resize', function(){
        initSwiper();
    });


    /*################# other  ################ */

    $('.other ul li').on('click', function(){
        $('.other ul li').removeClass('on')
        $(this).addClass('on')
    })

    
    let service_name // 가져온 data-name 값을 저장
    $('.other .list ul li').on('click', function(){
        if($(window).width() > 1024){
            service_name = $(this).attr('data-name')
            //console.log(service_name)
            $('.other .list').attr('data-bg', service_name)
        }
    })


})