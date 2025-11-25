

let device_status //pc인지 모바일인지 구분하는 값
let scrolling //브라우저가 스크롤된 값
let scroll_prev //이전에 스크롤된 값
let window_w //브라우저 넓이 값
let mobile_size = 1024 // 모바일로 변경되는 사이트
let menu_open //모바일에서 사용할 메뉴가 열렸는지 여부를 저장

$(window).scroll(function(){
    //console.log('스크롤')
    scroll_chk()
})
$(window).resize(function(){
    //console.log('브라우저크기변함')
    resize_chk()
})
$(document).ready(function(){

    scroll_chk()
    resize_chk()
    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
        //console.log('오버했다')
        if(device_status == 'pc'){
            $('header').addClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
            $(this).addClass('over')
        }
    })//메뉴오버끝
    $('header').on('mouseleave', function(){
        $('header').removeClass('menu_over')
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
    })

    $('header .util .search .search_open').on('focusout', function(){
        //console.log('아웃임')
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
        $('header').removeClass('menu_over')
    })

    /******모바일메뉴 열고닫기 *****/
    $('header .gnb .gnb_open').on('click', function(){
        //console.log('눌림')
        $('header').addClass('menu_open')
    })
    $('header .gnb .gnb_close').on('click', function(){
        //console.log('닫')
        $('header').removeClass('menu_open')
    })
    /******모바일메뉴 li 열고닫기*****/
    $('header .gnb .gnb_wrap ul.depth1 > li > a ').on('click', function(e){
        if(device_status == 'mobile'){
            //console.log('눌려')
            e.preventDefault()
            menu_open = $(this).parents('li').hasClass('open')
            //console.log(menu_open)
            if(menu_open == true) {
                $(this).parents('li').removeClass('open')
                $(this).next().slideUp()
            }else{
                $('header .gnb .gnb_wrap ul.depth1 > li.open').removeClass('open')
                $('header .gnb .gnb_wrap ul.depth1 > li.open > ul.depth2').slideUp()
                $(this).parents('li').addClass('open')
                $(this).next() .slideDown()
            }
        }
    })

})


//함수의 선언
function resize_chk(){
    window_w = $(window).width()
    //console.log(window_w)
    if(window_w > mobile_size){ //1024보다크면
        device_status = 'pc'
    }else{
        device_status = 'mobile'
    }
    //console.log(device_status)
}
function scroll_chk(){
    scroll_prev = scrolling 
    scrolling = $(window).scrollTop()
    //console.log(scroll_prev,scrolling)
    if(scrolling > 0){ 
        $('header').addClass('fixed')
        if(scrolling > scroll_prev){
            //console.log('내려가는중')
            $('header').addClass('gnb_up')
        }else{
            $('header').removeClass('gnb_up')
        }
    }else{//맨위로가면 0일때
        $('header').removeClass('fixed')
    }
}
