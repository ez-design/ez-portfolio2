let device_status //모바일 PC 확인
let scrolling = $(window).scrollTop(); //스크롤 값
let scroll_prev //이전에 스크롤 값
let window_w //브라우저 넓이 값
let mobile_size = 1300 // 모바일 사이즈
let menu_open //모바일에서 메뉴 열렸는지 여부


$(document).ready(function(){
    scroll_chk()
    resize_chk()
    $('header .gnb .gnb_open').on('click', function(){
        $('header').addClass('menu_open')
    })
    $('header .gnb .gnb_close').on('click', function(){
        $('header').removeClass('menu_open')
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('open')
    })

    $('header .gnb .gnb_wrap ul.depth1 > li > a').on('click', function(e){
        if(device_status == 'mobile'){
            e.preventDefault()
            menu_open = $(this).parents('li').hasClass('open') 
            if(menu_open == true){
                $(this).parents('li').removeClass('open')
                $(this).next().slideUp()
            }else{
                $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('open')
                $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2').slideUp()
                $(this).parents('li').addClass('open')
                $(this).next().slideDown()
            }
        } 
    })

    $('footer .top').on('click', function(){
        $('html, body').animate({ scrollTop: 0 }, 600, 'swing');
    })

    $(window).scroll(function(){
        scroll_chk()
        scroll_lock()
    })

    $(window).resize(function(){
        resize_chk()
        scroll_lock()
    })

    function scroll_chk(){
        scroll_prev = scrolling
        scrolling = $(window).scrollTop()
        
        if (device_status == 'pc') {
            if (scrolling > scroll_prev) {
                $('header').addClass('gnb_up');
            } else {
                $('header').removeClass('gnb_up');
            }
        }
    }

    function resize_chk(){
        window_w = $(window).width()

        if(window_w > mobile_size){ 
            device_status = 'pc'
        }else{
            device_status = 'mobile'
        }
    }

    function scroll_lock() {
    if ($('header').hasClass('menu_open')) {
        $('body').addClass('scroll_lock');
    } else {
        $('body').removeClass('scroll_lock');
    }

    requestAnimationFrame(scroll_lock)
    }
})
