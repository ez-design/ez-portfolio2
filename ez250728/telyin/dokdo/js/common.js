//header, footer 스타일 지정
$(document).ready(function(){
    let mobile_size = 1279
    let window_w
    let device_status

    function device_chk(){
        window_w = $(window).width()
        if(window_w > mobile_size){
            device_status = 'pc'
        }else{
            device_status = 'mobile'
        }
        // console.log(device_status)
    }

    device_chk()//문서가 로딩 되었을때 한번 실행
    $(window).resize(function(){
        device_chk()//문서가 리사이즈 될 때 마다 실행
    })


    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
        if(device_status == 'pc'){
            $('header').addClass('menu_pc')
        }
        
    })
    $('header').on('mouseleave', function(){
        $('header').removeClass('menu_pc')
    })
    $('header .gnb_util .lang').on('focusin', function(){
        $('header').removeClass('menu_pc')
    })

    let gnb_open
    $('header .gnb .gnb_wrap ul.depth1 > li > a').on('click', function(e){
        if(device_status == 'mobile'){
            e.preventDefault();		/* a 태그의 href를 작동 시키지 않음 */
            gnb_open = $(this).parent().hasClass('open')
            // console.log(gnb_open)
            if(gnb_open == true){ //메뉴가 열려있다면...
                $(this).parent().removeClass('open')
                $(this).next().slideUp()
            }else{
                $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('open')
                $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2').slideUp()
                $(this).parent().addClass('open')
                $(this).next().slideDown()
            }
        }
	});


    //header .gnb .gnb_wrap .gnb_close
    //header .gnb .gnb_open

    $('header .gnb .menu_open').on('click', function(){
        $('header').addClass('menu_mo')
    })
    $('header .gnb .gnb_wrap .menu_close').on('click', function(){
        $('header').removeClass('menu_mo')
    })

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

    $(function(){
        // lang 버튼 클릭 시 메뉴 슬라이드
        $('header .gnb_util .lang').click(function(e){
            e.preventDefault();
    
            var $depth = $(this).siblings('.lang_depth'); // 버튼 바로 아래 ul 선택
            $depth.stop(true, true).slideToggle(200);     // 슬라이드 토글
            $(this).toggleClass('active');                // 화살표 회전용 active 토글
        });
    
        // 언어 선택 시 버튼 글자 변경
        $('header .gnb_util .lang_depth li a').click(function(e){
            e.preventDefault();
            var selected = $(this).text(); // 선택한 언어
            var $btn = $(this).closest('header .gnb_util').find('.lang');
    
            $btn.find('strong').text(selected);    // 버튼 글자 변경
            $btn.siblings('header .gnb_util .lang_depth').slideUp(200); // 메뉴 닫기
    
            // 선택 표시
            $(this).closest('header .gnb_util .lang_depth').find('li').removeClass('active');
            $(this).parent().addClass('active');
        });
    
        // 버튼 외부 클릭 시 닫기
        $(document).click(function(e){
            if(!$(e.target).closest('header .gnb_util').length){
                $('header .gnb_util .lang_depth').slideUp(200);
                $('header .gnb_util .lang').removeClass('active'); // 화살표 원래 상태로
            }
        });
    });
    
    

    // 스크롤 위치 저장 변수
    let scrolling_top;

    // TOP 버튼 클릭 시
    function scrollToTop() {
        // 부드럽게 0 위치까지 스크롤
        $('html, body').animate({
            scrollTop: 0
        }, 400); // 400ms 동안 이동
    }

    // 문서 준비 시 이벤트 연결
    $(document).ready(function() {
        // TOP 버튼 클릭 이벤트
        $('footer .top').click(function(e) {
            e.preventDefault(); // 링크일 경우 기본 동작 막기
            scrollToTop();
        });
    });

    

})