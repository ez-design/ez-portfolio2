$(document).ready(function(){

    let device_status //pc인지 mobile인지
    let window_W //브라우저 넓이
    let mobile_size = 1024

    function device_chk(){
        window_W = $(window).width()
        if(window_W > mobile_size){
            device_status = 'pc'
        }else{
            device_status = 'mobile'
        }
        console.log(device_status)
    }

    device_chk() //문서가 로딩 됐을때 1번 실행

    $(window).resize(function(){
        device_chk() //브라우저가 리사이즈 될때마다 실행
    })


    /*    
        메뉴(header .header_body .gnb .gnb_wrap ul.depth1 > li)에 마우스 오버하면 
        header_body에 menu_over라는 클래스를 추가

        header .header_body .gnb .gnb_wrap ul.depth1 > li 중에서 마우스를 오버한 li에만 over 클래스를 추가
        -- 이전에 마우스를 오버했던 li에서는 over 삭제해야함 
        --- 이전에 마우스를 오버한 li를 찾기가 어려워움
        ----- 그냥 모든 li의 over를 지웠다가 오버한 li에만 다시 over 클래스를 줌

        ----> header .header_body를 벗어나면 
              1. header_body에 menu_over라는 클래스를 삭제
              2. 그냥 모든 li의 over를 삭제
    */
    $('header .header_body .gnb .gnb_wrap ul.depth1 > li').on('mouseenter', function(){
        if(device_status == 'pc'){
            $('header .header_body').addClass('menu_over');	
            $('header .header_body .gnb .gnb_wrap ul.depth1 > li').removeClass('over');	
            $(this).addClass('over');
        }
    });
    $('header .header_body').on('mouseleave', function(){
        $('header .header_body').removeClass('menu_over');	
        $('header .header_body .gnb .gnb_wrap ul.depth1 > li').removeClass('over');	
    });


    /*
        header .header_body .gnb .gnb_open를 클릭했을때
        header .header_body에 menu_open이라는 클래스를 추가

        header .header_body.menu_open .gnb .gnb_close 를 클릭하면
        header .header_body에 menu_open이라는 클래스를 삭제

    */
    $('header .header_body .gnb .gnb_open').on('click', function(){
        $('header .header_body').addClass('menu_open');
    });
    $('header .header_body .gnb .gnb_close').on('click', function(){
        console.log('ff')
        $('header .header_body').removeClass('menu_open')
    })

    /*
        모바일일때 1차메뉴를 클릭하면 
        1차메뉴의 링크를 삭제 (메뉴를 이동하면 X 하위메뉴가 열려야함)

        -- 메뉴가 열린 상태면  (li에 open클래스가 있으면 열린 상태)
           나 자신을 닫으면 됨 (클릭한 li에 open 클래스 삭제)

        -- 메뉴가 닫힌 상태라면 (li에 open클래스가 없으면 닫힌 상태)
            다른 열려있는 메뉴가 있다면 닫음
            클릭한 나자신의 메뉴를 열음 (클릭한 li에 open 클래스를 추가)
    */
    $('header .header_body .gnb .gnb_wrap ul.depth1 > li > a').on('click', function(e){
        if($(this).next().length > 0){
            //console.log('하위메뉴 있음')
            e.preventDefault();		/* a 태그의 href를 작동 시키지 않음 */
            if($(this).parent().hasClass('open') == true){
                //console.log('열려있음')
                $(this).parent().removeClass('open')
            }else{
                //console.log('닫힘')
                $('header .header_body .gnb .gnb_wrap ul.depth1 > li').removeClass('open')
                $(this).parent().addClass('open')
            }
        }
       
    });
});//$(document).ready