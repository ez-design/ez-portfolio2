//header, footer 스타일 지정
$(document).ready(function(){

    //브라우저 사이즈 체크
    let mobile_size = 1024
    let window_w 
    let device_status //pc or mobile

    function device_chk(){
        window_w = $(window).width()
        if(window_w > mobile_size){ //브라우저 넓이가 1024 이상일때
            device_status = 'PC'
        }else{
            device_status = 'Mobile'
        }
        console.log(device_status)
    }
    
    device_chk()

    $(window).resize(function(){
        device_chk()
    })
    //사이즈 체크 끝

    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
        if(device_status == 'PC'){ //pc일때만 실행
            $('header').addClass('menu_pc')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
            $('header .gnb .gnb_wrap .depth1 > li > ul.depth2').hide()
            $(this).addClass('over')
            $(this).find('.depth2').slideDown()
        }
        
    })
    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseleave', function(){
        if(device_status == 'PC'){ //pc일때만 실행
            $(this).removeClass('over')
            $(this).find('.depth2').hide()
        }
    })
    $('header').on('mouseleave', function(){
        $(this).removeClass('menu_pc')
    })
    $('header .util .search .sch_open').on('focusin', function(){
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
    })

    //pc ver. menu over end

    let gnb_open
    $('header .gnb .gnb_wrap ul.depth1 > li > a').on('click', function(e){
        if(device_status == 'Mobile'){
            e.preventDefault();
            gnb_open = $(this).parent().hasClass('open')
            if(gnb_open == true){ //메뉴가 열려있다면
                $(this).parent().removeClass('open')
                $(this).next().slideUp()
            }else{
                $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('open')
                $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2').slideUp()
                $(this).parent().addClass('open')
                $(this).next().slideDown()
            }
        }
    })
    $('header .gnb .gnb_open').on('click', function(){
        $('header').addClass('menu_mo')
    })
    $('header .gnb .gnb_wrap .gnb_close, header .gnb .gnb_bg').on('click', function(){
        $('header').removeClass('menu_mo')
    }) //메뉴 열기, 닫기 버튼 액션

    //스크롤을 내리면 header에 fixed클래스 추가
    let scrolling = $(window).scrollTop() //현재 스크롤된 값
    let prev_scroll //이전에 스크롤 된 값
    let diff_scroll //차이값
    function scroll_chk(){
        prev_scroll = scrolling
        scrolling = $(window).scrollTop()
        diff_scroll = prev_scroll - scrolling
        // console.log(diff_scroll)
        if(diff_scroll < 0){ //스크롤을 아래로 내렸을 때
            $('header').addClass('up')
        }else{ //아래로 스크롤 할 때
            $('header').removeClass('up')
        }
        if(scrolling > 0){ //스크롤 된 값이 0보다 크면 fixed를 주고 0이거나 0이하일 시 빼기
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
    }

    scroll_chk() //문서가 로딩된 후 단 한번 실행

    $(window).scroll(function(){
        scroll_chk() //스크롤 할 때 마다 실행
    })

    $('footer .top button').on('click', function(e){
        e.preventDefault() //기본 동작 막기
    
        $('html, body').stop().animate({
            scrollTop: 0 //스크롤 위치를 최상단(0)으로 이동
        }, 600) //0.6초 동안 부드럽게 스크롤
    })
})