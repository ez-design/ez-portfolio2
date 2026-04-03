//header, footer 스타일 지정
$(document).ready(function(){
    $(function() {
        const $header = $('header');
        const $depth1com = $('header .gnb_wrap ul.depth1 > li:first-child'); // 회사소개 li
        const $depth2 = $depth1com.children('ul.depth2');
        let lastScroll = 0;
    
        // 초기 상태: default 클래스
        $header.addClass('default');
    
        // 스크롤 이벤트: header 숨김/보임
        $(window).on('scroll', function() {
            const scrollTop = $(this).scrollTop();
    
            if(scrollTop === 0){
                // 맨 위: default 상태
                $header.removeClass('scrolled hidden').addClass('default');
            } else if(scrollTop > lastScroll){
                // 스크롤 내림 → header 숨김
                $header.removeClass('default').addClass('scrolled hidden');
            } else {
                // 스크롤 올림 → header 나타남
                $header.removeClass('hidden').addClass('scrolled');
            }
    
            lastScroll = scrollTop;
        });
    
        // 1차 메뉴에 마우스 오버 시 header 항상 나타나게
        $depth1com.on('mouseenter focus', function() {
            $depth2.stop(true,true).slideDown(200);
            $header.removeClass('hidden'); // 메뉴 오버 시 header 강제 표시
        });
    
        // 1차 메뉴 마우스 아웃 시 depth2 슬라이드만 닫기
        $depth1com.on('mouseleave blur', function() {
            $depth2.stop(true,true).slideUp(150);
            // header 상태는 스크롤 이벤트에 맡김
            // 브라우저 최상단이면 default 상태로 강제 초기화
        if($(window).scrollTop() === 0){
            $header.removeClass('scrolled hidden').addClass('default');
        }
        });
    
        // 다른 1차 메뉴에는 depth2 없도록 안전 처리
        $('header .gnb_wrap ul.depth1 > li:not(:first-child)').each(function() {
            $(this).children('ul.depth2').hide();
        });
    
        // 1차 메뉴 마우스 오버 시 scrolled 클래스 유지
        const $depth1 = $('header .gnb_wrap ul.depth1 > li');
        $depth1.on('mouseenter', function() {
            $header.addClass('scrolled');
        });
        $depth1.on('mouseleave', function() {
            // 마우스 아웃 시 header 상태는 스크롤 이벤트에서 처리 → 아무 것도 안함
        });
    });


    $(function(){
        const $menuOpen = $('.menu_open');
        const $menuClose = $('.menu_close');
        const $gnbWrap = $('.gnb_wrap');
        const $depth1 = $('.gnb_wrap ul.depth1 > li');

    
        // -------------------------------
        // 1. 모바일 메뉴 열기/닫기
        // -------------------------------
        $menuOpen.on('click', function(e){
            e.preventDefault();
            $gnbWrap.addClass('active').scrollTop(0); // 메뉴 최상단 위치
        });
    
        $menuClose.on('click', function(e){
            e.preventDefault();
            $gnbWrap.removeClass('active');
            $depth1.removeClass('active'); // 2차 메뉴 초기화
            $depth1.find('ul.depth2').slideUp(0); // 2차 메뉴 숨기기
        });
    
        // -------------------------------
        // 2. 1차 메뉴 클릭 시 2차 메뉴 열기/닫기
        // -------------------------------
        $depth1.children('a').on('click', function(e){
            e.preventDefault(); // 링크 막기
            const $parent = $(this).parent();

            if($parent.hasClass('active')){
                // 이미 열려있으면 닫기만
                $parent.removeClass('active');
                $parent.children('ul.depth2').slideUp(200);
            } else {
                // 다른 메뉴 닫기
                $depth1.not($parent).removeClass('active').children('ul.depth2').slideUp(200);
                
                // 선택한 메뉴 열기
                $parent.addClass('active');
                $parent.children('ul.depth2').slideDown(200);
    }
        
            // 다른 메뉴 닫기
            $depth1.not($(this).parent()).removeClass('active')
                .children('ul.depth2').stop(true,true).animate({height: 0}, 200);
        });
        
        
            // -------------------------------
            // 3. 스크롤에 따른 헤더 상태
            // -------------------------------
            let lastScroll = 0;
            $(window).on('scroll', function(){
                const scrollTop = $(this).scrollTop();
        
                if(scrollTop === 0){
                    // 최상단
                    $('header').removeClass('scrolled hidden').addClass('default');
                } else if(scrollTop > lastScroll){
                    // 스크롤 내림 → 헤더 숨김
                    $('header').removeClass('default').addClass('scrolled hidden');
                } else {
                    // 스크롤 올림 → 헤더 나타남
                    $('header').removeClass('hidden default').addClass('scrolled');
                }
        
                lastScroll = scrollTop;
            });
    });
    
    
}) /* 끝 */