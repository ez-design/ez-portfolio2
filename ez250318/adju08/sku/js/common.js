let device_status
let scrolling
let scroll_prev
let window_w
let mobile_size = 1260
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

    /************* 모바일 2차 메뉴 열고 닫기 *************/
    $('header .gnb .gnb_wrap ul.depth1 > li > .gnb_bg .inner .head').on('click', function(e) {
        if (device_status == 'mobile') {
            e.preventDefault();
    
            const $li = $(this).parents('li');
            if ($li.hasClass('open')) {
                return;
            }
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('open');
            $('header .gnb .gnb_wrap ul.depth1 > li > .gnb_bg .inner ul.depth2').slideUp();
            $li.addClass('open');
            $(this).next().slideDown();
        }
    });

    /************* 모바일 3차 메뉴 열고 닫기 *************/
    $('header .gnb .gnb_wrap ul.depth1 > li > .gnb_bg .inner ul.depth2 > li > a').on('click', function(e){
        if(device_status == 'mobile'){
            e.preventDefault()
            menu_open = $(this).parent('li').hasClass('open02')

            if(menu_open == true){
                $(this).parent('li').removeClass('open02')
                $(this).next().slideUp()
            }else{
                $('header .gnb .gnb_wrap ul.depth1 > li .gnb_bg .inner ul.depth2 > li').removeClass('open02')
                $('header .gnb .gnb_wrap ul.depth1 > li .gnb_bg .inner ul.depth2 > li ul.depth3').slideUp()
                $(this).parent('li').addClass('open02')
                $(this).next().slideDown()
            }
        }
    })






    //footer tab
    let footer_content;

    $('footer .footer_head .list .tab_list ul li').on('click', function () {
        const $tabContentWrap = $('footer .footer_head .list .tab_content');
        
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).attr('aria-selected', 'false');
            $(this).find('span').text('');

            footer_content = $(this).attr('data-content');
            $tabContentWrap.find('#' + footer_content).removeClass('active');

            $tabContentWrap.slideUp(200);
        } else {
            footer_content = $(this).attr('data-content');
            $('footer .footer_head .list .tab_list ul li').removeClass('active').attr('aria-selected', 'false').find('span').text('');
            $('footer .footer_head .list .tab_content .tab_item').removeClass('active');

            $(this).addClass('active').attr('aria-selected', 'true').find('span').text('선택됨');

            $tabContentWrap.find('#' + footer_content).addClass('active');

            if (!$tabContentWrap.is(':visible')) {
                $tabContentWrap.slideDown(200);
            }
        }
    });







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

