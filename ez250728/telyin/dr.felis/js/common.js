//header, footer 스타일 지정
$(document).ready(function(){
    let scrolling        //현재 스크롤 값
    let last_scroll      //이전 스크롤 값
    let header_h = $('header').outerHeight() //header 높이

    function header_scroll_chk(){

        scrolling = $(window).scrollTop() //현재 스크롤 값

        //1. 브라우저 맨 위(0px)일 때 - 투명헤더 유지
        if(scrolling === 0){
            $('header')
                .removeClass('fixed hide') //fixed 제거 + 숨김 제거
                .addClass('top_header')    //투명 헤더용 클래스(색상은 CSS에서)
        }

        //2. 아래로 스크롤 중일 때
        if(scrolling > last_scroll){
            //아래로 내려가는 중 → header를 위로 숨김
            $('header')
                .removeClass('top_header') //투명 제거
                .addClass('hide')          //위로 숨기기 (CSS에서 translateY 적용)
        }
        //3. 위로 스크롤 중일 때 (브라우저 상단이 아닐 때)
        else if(scrolling < last_scroll && scrolling > 0){
            $('header')
                .removeClass('hide top_header')
                .addClass('fixed') //고정 + 흰색배경 모드 (CSS에서)
        }

        last_scroll = scrolling //현재 스크롤 값을 이전 값으로 저장
    }

    header_scroll_chk() //로딩 후 1회 실행

    $(window).scroll(function(){
        header_scroll_chk() //스크롤 할 때마다 실행
    })

    let gnb_li = $('.gnb_wrap ul.depth1 > li')

    function pcHoverDepth2(){
        if($(window).width() >= 1280){
            gnb_li.off('mouseenter mouseleave') // 기존 이벤트 제거 후
            gnb_li.on('mouseenter', function(){
                if($(this).find('.depth2').length > 0){
                    $(this).find('.depth2').stop().slideDown(200)
                }
            })
            gnb_li.on('mouseleave', function(){
                $(this).find('.depth2').stop().slideUp(150)
            })
        } else {
            gnb_li.off('mouseenter mouseleave') // 모바일에서는 hover 이벤트 제거
        }
    }

    // 처음 로딩 시
    pcHoverDepth2()

    // 브라우저 리사이즈 시에도 체크
    $(window).resize(function(){
        pcHoverDepth2()
    })


        // 키보드 접근성: focus 처리
    gnb_li.find('> a').focus(function(){
        // 해당 li의 depth2 열기
        $(this).siblings('.depth2').stop().slideDown(200)
    }).blur(function(){
        // depth2 안의 마지막 a까지 tab 이동 후 닫기
        let depth2 = $(this).siblings('.depth2')
        setTimeout(function(){
            if(!depth2.find('a').is(':focus')){
                depth2.stop().slideUp(150)
            }
        }, 10)
    })

    // depth2 내부 a 포커스 처리
    gnb_li.find('.depth2 a').blur(function(){
        let depth2 = $(this).closest('.depth2')
        setTimeout(function(){
            if(!depth2.find('a').is(':focus')){
                depth2.stop().slideUp(150)
            }
        }, 10)
    })

    // 전체메뉴 열기/닫기
    let all_menu_btn = $('.gnb_util .all_menu')
    let all_menu_list = $('.gnb_util .all_menu_list')
    let all_menu_close = $('.gnb_util .all_menu_close')

    all_menu_btn.click(function(){
        all_menu_list.stop().fadeIn(200)   // 전체화면 메뉴 열기
        all_menu_close.show()               // 닫기 버튼 표시
    })

    all_menu_close.click(function(){
        all_menu_list.stop().fadeOut(200)  // 메뉴 닫기
        all_menu_close.hide()               // 닫기 버튼 숨김
    })


    //모바일
    let menu_open = $('.menu_open')
    let menu_close = $('.menu_close')
    let gnb = $('.gnb')
    let overlay = $('.mobile_overlay')

    // 메뉴 열기
    menu_open.click(function(){
        gnb.addClass('active') // active 클래스 추가
    })

    // 메뉴 닫기
    menu_close.click(function(){
        gnb.removeClass('active') // active 클래스 제거
    })

    // 오버레이 클릭해도 닫힘
    overlay.click(function(){
        gnb.removeClass('active')
    })
    let depth1_li = $('.gnb_wrap ul.depth1 > li')

    // 모바일 전용
    if($(window).width() <= 1024){

        // depth1 클릭
        depth1_li.children('a').click(function(e){
            e.preventDefault() // 링크 비활성화

            let parent_li = $(this).parent()

            // 다른 li 닫기
            parent_li.siblings().removeClass('active').children('ul.depth2').slideUp(300)

            // 클릭한 li 열기/닫기
            if(parent_li.hasClass('active')){
                parent_li.removeClass('active').children('ul.depth2').slideUp(300)
            } else {
                parent_li.addClass('active').children('ul.depth2').slideDown(300)
            }
        })
    }
    /* 검색 패널 열기/닫기 */
    /* 검색 열기/닫기 버튼 */
    $('header .gnb_util .search').click(function(e){
        e.stopPropagation(); // body로 전파 방지
        $('.search_panel').toggleClass('active');
    });

    /* 패널 내부 클릭하면 닫히지 않음 */
    $('header .gnb_util .search_panel').click(function(e){
        e.stopPropagation();
    });

    /* 패널 바깥(body 영역) 클릭하면 닫힘 */
    $('html, body').click(function(){
        if ($('header .gnb_util .search_panel').hasClass('active')) {
            $('header .gnb_util .search_panel').removeClass('active');
        }
    });



    //모바일 header 제어
    let $header = $('header')
    let lastScrollMobile = 0

    function mobileHeaderScroll(){
        let winWidth = $(window).width()

        if(winWidth <= 1024){ // 모바일 전용
            $(window).off('scroll.mobile').on('scroll.mobile', function(){
                let currentScroll = $(this).scrollTop()

                // 브라우저 최상단
                if(currentScroll <= 0){
                    $header.removeClass('fixed hide').addClass('top_header')
                } 
                // 스크롤 내림
                else if(currentScroll > lastScrollMobile){
                    $header.removeClass('top_header').addClass('fixed').removeClass('hide')
                } 
                // 스크롤 올림
                else if(currentScroll < lastScrollMobile){
                    if(currentScroll > 0){
                        $header.addClass('hide') // 브라우저 밖으로 숨김
                    }
                }

                lastScrollMobile = currentScroll
            })
        } else {
            // PC에서는 모바일 scroll 이벤트 제거
            $(window).off('scroll.mobile')
            $header.removeClass('top_header fixed hide') // 모바일 전용 클래스 제거
        }
    }

    // 로딩 시 실행
    mobileHeaderScroll()

    // 리사이즈 시 재적용
    $(window).resize(function(){
        mobileHeaderScroll()
    })



    // =============================
    // TOP 버튼 부드러운 스크롤 이동
    // =============================

    // 스크롤 위치 저장 변수
    let scrolling_top // 브라우저 현재 스크롤 값 저장

    function go_top(){
        // 현재 스크롤 값 가져오기
        scrolling_top = $(window).scrollTop()

        // TOP 버튼 클릭하면 부드럽게 최상단으로 이동
        $('footer .top').on('click', function(e){
            e.preventDefault() // a나 button의 기본동작 방지

            $('html, body').stop().animate({
                scrollTop: 0 // 브라우저 최상단
            }, 1000) // 1초 동안 부드럽게 이동
        })
    }

    go_top() // 문서 로딩 후 실행

})