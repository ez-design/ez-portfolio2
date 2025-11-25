let device_status
let scrolling
let scroll_prev
let window_w
let mobile_size = 1024
let menu_open


$(window).scroll(function(){
    scroll_chk()
})
$(window).resize(function(){
    resize_chk()
})
$(document).ready(function(){
    resize_chk()
    scroll_chk()

    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
        if(device_status == 'pc'){
            $('header').addClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
            $(this).addClass('over')
        } 
    })
    $('header .gnb').on('mouseleave', function(){
        $('header').removeClass('menu_over')
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
    })

    $('header .util .search').on('focusin', function(){
        $('header').removeClass('menu_over')
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
    })


    /************* 모바일 메뉴 열고 닫기 *************/
    $('header .gnb .gnb_open').on('click', function(){
        $('header').addClass('menu_open')
    })
    $('header .gnb .gnb_close').on('click', function(){
        $('header').removeClass('menu_open')
    })

    /************* 모바일 2차 메뉴 열고 닫기 ************/
    $('header .gnb .gnb_wrap ul.depth1 > li > a').on('click', function(e){
        if(device_status == 'mobile'){
            e.preventDefault()
            menu_open = $(this).parents('li').hasClass('open')
            // console.log(menu_open)
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


    /* top 버튼을 클릭하면 상단으로 스크롤 */
    $('footer .top').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 500)
    })

    $('footer .family_site button.family_open').on('click', function(){
        $('footer .family_site').addClass('open')
        $('footer .family_site .list').slideDown()
    })
    $('footer .family_site button.family_close').on('click', function(){
        $('footer .family_site').removeClass('open')
        $('footer .family_site .list').slideUp()
    })



})//$(document).ready

function resize_chk(){
    window_w = $(window).width()
    if(window_w > mobile_size){
        device_status = 'pc'
    }else{
        device_status = 'mobile'
    }
}
function scroll_chk(){
    scrolling = $(window).scrollTop()
    console.log(scrolling)
    if(scrolling > 0){
        $('header').addClass('fixed')
    }else{
        $('header').removeClass('fixed')
    }
}

