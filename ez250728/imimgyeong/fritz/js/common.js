/*------------------------------------------------------------------
 * 파일명 : common.js
    - 작성자 : 황난경
    - 작성일 : 2025-12-02
    - 설  명 : header/footer만 적용되는 js를 저장
---------------------------------------------------------------------*/
$(document).ready(function(){
    let mobile_size = 1024
    let window_w 
    let device_status // pc, mobile

    function device_chk(){ //함수를 정의한다(선언한다)
        window_w = $(window).width()
        if(window_w > mobile_size){ // 브라우저 넓이가 1024보다 클때 pc버전이라는말
            device_status = 'pc'
        }else{
            device_status = 'mobile'
        }
        console.log(device_status)
    }

    device_chk() // html의 로딩이 완료도니 이후 단 1번 실행
    $(window).resize(function(){ // 브라우저가 리사이즈 될때마다 실행
        device_chk()
    })

    /*----------- 시작 : pc버전 메뉴오버 -----------*/
    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter', function(){
        if(device_status == 'pc'){ //pc일때만 동작 
            // console.log('오버했음')
            $('header').addClass('menu_pc')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
            $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2').slideUp()
            $(this).addClass('over')
            $(this).find('.depth2').slideDown()
        }
    })
    $('header .gnb .gnb_wrap ul.depth1 > li').on('focusin', function(){
        if(device_status == 'pc'){ //pc일때만 동작 
            // console.log('오버했음')
            $(this).addClass('over')
            $(this).find('.depth2').slideDown()
        }
    })
    $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2 > li:last-child').on('focusout', function(){
        if(device_status == 'pc'){ //pc일때만 동작 
            // console.log('오버했음')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
            $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2').slideUp()
        }
    })
    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseleave', function(){
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

    /*----------- 시작 : 모바일버전 1차메뉴 클릭 -----------
    * 닫혀있는 메뉴를 클릭하면 기존에 열려있던 다른메뉴를 닫고 나만열기(open클래스 추가)
    * 열려있는 메뉴를 클릭하면 나 자신을 닫고 끝남
    * 열린메뉴, 닫힌메뉴를 구분하는 방법 - open있으면 열린메뉴, 없으면 닫힌메뉴 
    * 1차메뉴 a의 링크를 삭제 (링크 이동을 못하게 막아야함 ?2차메뉴가 열려야하니까)
    */
    $('header .gnb .gnb_wrap ul.depth1 > li > a').on('click', function(e){
        if(device_status == 'mobile'){
            e.preventDefault();
            if($(this).parent().hasClass('open') == true){ //열려있는 메뉴를 다시 클릭했을때
                // console.log('열림')
                $(this).parent().removeClass('open')
                $(this).next().slideUp() //2차메뉴를 슬라이드로 닫기
            }else{//닫혀있는 다른 메뉴를 다시 여는것
                // console.log('닫힘')
                $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('open') /* 모든 li의 open을 삭제 */
                $(' header .gnb .gnb_wrap ul.depth1 > li > ul.depth2').slideUp() //모든 2차메뉴 닫기
                $(this).parent().addClass('open')
                $(this).next().slideDown() //2차메뉴를 슬라이드로 열기
            }
        }
        
    })
    /*----------- 끝 : 모바일버전 1차메뉴 클릭 -----------*/

    /*----------- 시작 : 모바일버전 2차메뉴 열기 -----------
    * 열기를 클릭하면 header에 menu_mo 추가 (header .gnb .gnb_open)
    * 닫기를 클릭하면 header에 menu_mo 삭제 (header .gnb .gnb_wrap .gnb_close)
    */
    $('header .gnb .gnb_open').on('click', function(){
        $('header').addClass('menu_mo')
    })
    $('header .gnb .gnb_wrap .gnb_close').on('click', function(){
        $('header').removeClass('menu_mo')
    })
    /*----------- 끝 : 모바일버전 2차메뉴 닫기 -----------*/

    /*----------- 시작 : 스크롤 시 header에 fixed -----------
    * pc mobile 둘다
    * 스크롤이 조금만 되도 header에 fixed 클래스를 줌
    * 다시 맨 꼭대기로 올라가면 header에 fixed 클래스 삭제
    */

    let scrolling //스크롤된 값

    function scroll_chk(){
        scrolling = $(window).scrollTop() //현재 스크롤값
        if(scrolling > 0){
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
    }

    scroll_chk()//문서가 로딩되고 단 1번 실행
    $(window).scroll(function(){
        scroll_chk()//스크롤 될때마다 1번씩 실행
    })
    /*----------- 끝 : 스크롤 시 header에 fixed  -----------*/

   




})//맨끝 나가기금지