$(document).ready(function(){
    let mobile_size = 1024 //모바일 메뉴 시작 사이즈
    let header_mobile_size = 768;  // header 메뉴만 모바일 시작
    let window_w //브라우저 넓이
    let device_status //현재 pc인지 mobile인지 구분하는 값
    let header_device_status; // header device

    function device_chk(){
        window_w = $(window).width()
        if(window_w > mobile_size){
            device_status = 'pc'
        }else{
            device_status = 'mobile'
        }
        // header 전용 기준
        header_device_status = (window_w > header_mobile_size) ? 'pc' : 'mobile'
        // console.log(device_status)
    }
    device_chk() //문서가 로딩되었을때 1번실행
    $(window).resize(function(){
        device_chk() //브라우저가 리사이즈 할때마다 1번씩 실행
    })

    /*----------- 시작 : pc버전 메뉴오버 ----------*/
    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
        if( device_status == 'pc'){
            $('header').addClass('menu_pc')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
            $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2').slideUp()
            $(this).addClass('over')
            $(this).find('.depth2').slideDown()
            
        }
    })
    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseleave ', function(){
        $(this).removeClass('over')
        $(this).find('.depth2').slideUp()
    })
    $('header').on('mouseleave', function(){
        $(this).removeClass('menu_pc')
    })
    $('header .util .search .sch_open').on('foucusin', function(){
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
    })
     /*----------- 끝 : pc버전 메뉴오버 -----------*/

    /*----------- 시작 : 모바일버전 메뉴오버 (수정됨) -----------*/

    let gnb_open

    // 1. DEPTH1 메뉴 아코디언 로직 (클릭 위임 방식으로 변경)
    // 'header' 내부에서 발생하는 클릭 이벤트를 감지하고 ul.depth1 > li > a 인 경우에만 실행
    $('header').on('click', '.gnb .gnb_wrap ul.depth1 > li > a', function(e){
        console.log(header_device_status);
        if( header_device_status == 'mobile'){ // device_status 변수가 정의되어 있다고 가정합니다.
            
            // 닫기 버튼이 아닌, 메뉴의 depth1을 클릭했을 때만 e.preventDefault() 실행
            // (gnb_open 버튼 클릭 시는 작동하면 안 됨)
            e.preventDefault();
            
            gnb_open = $(this).parent().hasClass('open');
            
            if(gnb_open == true){ // 열려있다면 닫기
                $(this).parent().removeClass('open');
                $(this).next().slideUp();
            }else{ // 닫혀있다면 열기
                $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('open');
                $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2').slideUp();
                $(this).parent().addClass('open');
                $(this).next().slideDown();
            }
        }
    });


    // 2. 메뉴 열기 버튼 클릭 이벤트 (클릭 위임 방식으로 변경)
    // .gnb_open을 클릭하면 header에 .menu_mo 클래스를 추가
    $('header').on('click', '.gnb_open', function(){
        $('header').addClass('menu_mo');
    });


    // 3. 메뉴 닫기 버튼 클릭 이벤트 (작동하지 않던 핵심 문제 해결 및 초기화 로직 추가)
    // .gnb_close를 클릭하면 header에서 .menu_mo 클래스를 제거
    $('header').on('click', '.gnb_close', function(){
        
        // 1. 메인 메뉴 닫기 (문제 해결)
        $('header').removeClass('menu_mo');
        
        // 2. 하위 메뉴 (depth2) 정리 (추가 개선)
        // 다음에 메뉴를 열었을 때 모든 depth2가 닫혀 있도록 초기화
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('open');
        $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2').slideUp(); 
    });

    /*----------- 끝 : 모바일버전 메뉴오버 (수정됨) -----------*/

     /*----------- 시작 :스크롤 시 header에 fixed -----------*/
    let scrolling = $(window).scrollTop()//현재 스크롤된 값
    let prev_scroll //이전에 스크롤된 값
    let diff_scroll //차이 값(diffrent)
    function scroll_chk(){
        prev_scroll = scrolling
        scrolling = $(window).scrollTop()
        diff_scroll = prev_scroll - scrolling 
        // console.log(diff_scroll)
        if(diff_scroll < 0){// 스크롤을 위로 올라간다는 뜻
            $('header').addClass('up')
            // console.log('if?')
        }else{// 아래로 스크롤된다는 뜻
            $('header').removeClass('up')
            // console.log('else?')
        }
        if(scrolling > 0){ //스크롤내림
            $('header').addClass('fixed')
        }else{ //0이거나 0보다 작은경우 (fixed제거)
            $('header').removeClass('fixed')
        }
    }
    scroll_chk() //문서가 로딩되고 단 1번 실행
    $(window).scroll(function(){
        scroll_chk() //스크롤 할때마다 실행
    })
     /*----------- 끝 : 스크롤 시 header에 fixed -----------*/




})//나가지마세욤