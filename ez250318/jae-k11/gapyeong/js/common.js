/* header, footer*/

let device_status //pc인지 모바일인지 구분값
let scrolling //브라우저가 스크롤된 값
let scroll_prev //이전에 스크롤된 값
let window_w //브라우저 넓이 값
let mobile_size = 1024 //모바일로 변경되는 사이즈
let menu_open //모바일에서 사용할 메뉴가 열였는지 여부를 저장

$(window).scroll(function(){
    //console.log('브라우저가 스크롤됨')
    scroll_chk()
})
$(window).resize(function(){
    //console.log('브라우저 크기 변함')
    resize_chk()
    
})

$(document).ready(function(){
    //console.log('로딩로딩')
    scroll_chk()
    resize_chk()

    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
        if(device_status == 'pc') {
            //console.log('오버했다')
            $('header').addClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
            $(this).addClass('over')
        }
    })
    $('header').on('mouseleave', function(){
        $('header').removeClass('menu_over')
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
    })
    $('header .util .lang .lang_open').on('focusout', function(){
        //console.log('아웃')
       $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
       $('header').removeClass('menu_over')
    })

 

    /******** 모바일 메뉴 열고 닫기 *********/
    $('header .gnb .gnb_open').on('click', function(){
        //console.log('눌려?')
        $('header').addClass('menu_open')
    })
    $('header .gnb .gnb_close').on('click', function(){
        $('header').removeClass('menu_open')
    })

    /******** 모바일 메뉴 열고 닫기 *********/
    $('header .gnb .gnb_wrap ul.depth1 > li > a').on('click', function(e){
        if(device_status == 'mobile'){
            //console.log('눌')
            e.preventDefault()
            menu_open = $(this).parents('li').hasClass('open')
            //console.log(menu_open)
            if(menu_open == true){ //메뉴가 열였을때
                $(this).parents('li').removeClass('open')
                $(this).next().slideUp()
            }else{//닫혔을때
                $('header .gnb .gnb_wrap ul.depth1 > li.open').removeClass('open')
                $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2').slideUp()
                $(this).parents('li').addClass('open')
                $(this).next().slideDown()
            }
        }
    })



})//$(document).ready









//함수의 선언
function resize_chk(){
    window_w = $(window).width()
    console.log(window_w)
    if(window_w > mobile_size){ //1159보다 크면
        device_status = 'pc'
    }else{//작거나 같으면
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
            //console.log('올라가는중')
            $('header').removeClass('gnb_up')
        }
    }else{//맨위로가면 0일때
        $('header').removeClass('fixed')
    }
}

