$(document).ready(function(){

    let device_status //pc인지 모바일인지 구분하는 값
    let scrolling //브라우저가 스크롤 된 값
    let scroll_prev //이전에 스크롤 된 값
    let window_w //브라우저의 넓이 값
    let mobile_size = 1024 //모바일로 변경되는 사이트
    let menu_open //모바일에서 사용할 메뉴가 열렸는지 여부

    scroll_chk() //함수 실행 (처음에 문서가 로딩되었을 때 1번)
    resize_chk() //함수 실행
    $(window).resize(function(){ //브라우저가 리사이즈 될 떄마다 1번씩 실행
        resize_chk() //함수 실행
    })
    $(window).scroll(function(){ //브라우저를 스크롤 할 때마다 1번씩 실행
        scroll_chk() //함수 실행
    })

    function scroll_chk(){
        scroll_prev = scrolling
        scrolling = $(window).scrollTop()
        if(scrolling > 0){
            $('header').addClass('fixed')
            if(scrolling > scroll_prev){
                $('header').addClass('gnb_up')
            }else{
                $('header').removeClass('gnb_up')
            }
        }else{
            $('header').removeClass('fixed')
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

    /***** header에 마우스를 오버했을 때 */

    $('header').on('mouseenter focusin', function(){
        if(device_status == 'pc'){
            $('header').addClass('fixed') /* 마우스 오버 시 fixed 메뉴바가 나타남*/
        }
    })
    $('header').on('mouseleave', function(){
        if(scrolling <= 0){
            $('header').removeClass('fixed')
        }
    })

    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
        if(device_status == 'pc'){
            $(this).addClass('over') /*2차 메뉴 나타났다가 사라짐*/
        }
    })
    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseleave', function(){
        $(this).removeClass('over')
    })

    $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2 > li:last-child').on('focusout', function(){
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over') /*탭으로 갔을 때 */
    })


    /***************** 모바일 메뉴 열고 닫기 **************/
    $('header .gnb .gnb_open').on('click', function(){
        $('header').addClass('menu_open')
    })
    $('header .gnb .gnb_close').on('click', function(){
        $('header').removeClass('menu_open')
    })

    /***************** 모바일 2차 메뉴 열고 닫기 ************/
    $('header .gnb .gnb_wrap ul.depth1 > li > a').on('click', function(e){
        if(device_status == 'mobile'){ /*pc에서만 a링크로 이동됨*/
            e.preventDefault()
            menu_open = $(this).parents('li').hasClass('open')
            if(menu_open == true){ //메뉴가 열려있으면
                $(this).parents('li').removeClass('open')
                $(this).next().slideUp()
            }else{ //닫혀있으면
                $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('open')
                $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2 ').slideUp()
                $(this).parents('li').addClass('open')
                $(this).next().slideDown()
            }
        }
    })

})