/* header, footer 공통요소에 들어가는 javascript/jquery */
$(document).ready(function(){
    
    let scroll_prev
    let scrolling

    let win_w
    let device_status
    let mobile_size = 1024
    let list_open

    $(window).resize(function() {
        resize_chk()
    })

    $(window).scroll(function(){
        scroll_chk()
    })

    scroll_chk()
    resize_chk()
    

    /************ header box_close ************/
    $('header .gnb .gnb_wrap ul.depth1 > li > .menu_box > .box_close').on('click',function() {
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
    })

    /****************** pc header 오버 *******************/
    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin',function() {
        if (device_status == 'pc') {
            $('header').addClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
            $(this).addClass('over')
        }
    })
    $('header').on('mouseleave',function() {
        $('header').removeClass('menu_over')
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
    })
    $('header .gnb .gnb_wrap ul.depth1 > li > .menu_box > .box_close').on('mouseleave focusout', function(){
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
    })

    /****************** mobile 메뉴 오픈 *******************/
    $('header .gnb .gnb_open').on('click', function() {
        // console.log('클릭')
        $('header').addClass('menu_open')
    })
    $('header .gnb .gnb_close').on('click', function() {
        // console.log('클릭')
        $('header').removeClass('menu_open')
    })

    /****************** mobile 2차 메뉴 오픈 *******************/
    $('header .gnb .gnb_wrap ul.depth1 > li > a').on('click', function(e) {
        if (device_status == 'mobile') {
            e.preventDefault();
            list_open = $(this).parents('li').hasClass('open')
            if (list_open == true) {
                $(this).parents('li').removeClass('open')
            }else{
                $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('open')
                $(this).parents('li').addClass('open')
            }
        }
    })
    /****************** mobile 3차 메뉴 오픈 *******************/
    $('header .gnb .gnb_wrap ul.depth1 > li > .menu_box > ul.depth2 > li > a').on('click', function(e) {
        if (device_status == 'mobile') {
            e.preventDefault();
            list_open = $(this).parent('li').hasClass('dep2_open')
            if (list_open == true) {
                $(this).parent('li').removeClass('dep2_open')
                $(this).next().slideUp()
            }else{
                $('header .gnb .gnb_wrap ul.depth1 > li > .menu_box > ul.depth2 > li').removeClass('dep2_open')
                $('header .gnb .gnb_wrap ul.depth1 > li > .menu_box > ul.depth2 > li > ul.depth3').slideUp()
                $(this).parent('li').addClass('dep2_open')
                $(this).next().slideDown()
            }
        }
    })
    /************* footer family_site ***************/
    $('footer .family_site .family_open').on('click', function(){
        $('footer .family_site').addClass('open')
        $('footer .family_site ul').slideDown()
    })
    $('footer .family_site .family_close').on('click', function(){
        $('footer .family_site').removeClass('open')
        $('footer .family_site ul').slideUp()
    })

    function resize_chk() {
        win_w = $(window).width()
        if (win_w > mobile_size) {
            device_status = 'pc'
        } else {
            device_status = 'mobile'
        }
    }
    /****************** header *******************/
    function scroll_chk() {
        scroll_prev = scrolling
        scrolling = $(window).scrollTop()
        // console.log('스크롤', scrolling)

        if (scrolling > 0) {
            $('header').addClass('fixed')
            if (scrolling > scroll_prev) {
                $('header').addClass('gnb_up')
            }else{
                $('header').removeClass('gnb_up')
            }
        }else{
            $('header').removeClass('fixed')
        }
    }
})