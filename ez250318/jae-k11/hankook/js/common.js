let device_status // pc인지 모바일인지 구분하는 값 
let scrolling // 브라우저가 스크롤 된 값
let scroll_prev //이전에 스크롤 된값
let window_w // 브라우저의 넓이 값
let mobile_size = 1024 //모바일로 변경되는 사이트
let menu_open //모바일에서 사용할 메뉴가 열렸는지 여부를 저장 

$(window).scroll(function(){
    //console.log('브라우저스크롤')
    scroll_chk()
})
$(window).resize(function(){
    //console.log('브라우저크기 변함')
    resize_chk()
})


$(document).ready(function(){
    resize_chk()

     // 처음에 2차 메뉴 숨기기
    $('header .gnb .gnb_wrap ul.depth1 > li > .depth2').hide();

     // 1차 메뉴에 마우스 올렸을 때
   $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function () {
        if (device_status === 'pc') {
            $("header .gnb .gnb_wrap ul.depth1 > li > .depth2").hide(); // 다른 메뉴 숨김
            $(this).children(".depth2").show(); // 바로 표시
        }
    });

     // 마우스가 메뉴 영역에서 빠져나갔을 때
    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseleave', function () {
        if (device_status === 'pc') {
            $(this).children('.depth2').hide(); // 바로 숨김
        }
    });

    //본문바로가기- 2차메뉴에서 닫기
    $('header .util .search .search_open').on('focusout', function () {
        //console.log('아웃')
    if (device_status === 'pc') {
        $('header .gnb .gnb_wrap ul.depth1 > li > .depth2').hide();
    }

});

    

    /*************모바일 메뉴 열고 닫기 ****************/
    $('header .gnb .gnb_open').on('click', function(){
        $('header').addClass('menu_open')
    })
    $('header .gnb .gnb_close').on('click', function(){
        $('header').removeClass('menu_open')
    })


    $('header .gnb .gnb_wrap ul.depth1 > li > a').on('click', function(e){
       if(device_status == 'mobile'){ //== 비교연산자 이거맞아?
            //console.log ('눌린당눌린당')
            e.preventDefault()
            menu_open = $(this).parents('li').hasClass('open')
            if(menu_open == true){ //메뉴가 열려있으면
                $(this).parents('li').removeClass('open')
                $(this).next().slideUp()
            }else{ //닫혀있으면
                $('header .gnb .gnb_wrap ul.depth1 > li.open').removeClass('open')
                $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2').slideUp()
                $(this).parents('li').addClass('open')
                $(this).next().slideDown()
            }
       }    
    })

})

//함수의 선언
function resize_chk(){
    window_w = $(window).width()
    //console.log(window_w)
    if(window_w > mobile_size){ //1024보다 크면
        device_status = 'pc'
    }else{ //같거나 작으면
        device_status = 'mobile'
    }
   //console.log(device_status)
}

//함수의 선언 , fixed 추가
function scroll_chk(){
    scroll_prev = scrolling
    scrolling = $(window).scrollTop()
    //console.log(scroll_prev,scrolling)
    if(scrolling > 0){
        $('header').addClass('fixed')
        if(scrolling > scroll_prev){
            //console.log('내려감')
            $('header').addClass('gnb_up')
        }
        else{
            $('header').removeClass('gnb_up')
        }
    }else{ //맨위로가면 0일때
        $('header').removeClass('fixed')
    }
}

