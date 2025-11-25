$(document).ready(function(){


    /*
    
        pc버전일때 
        메뉴( header .gnb .gnb_wrap ul.depth1 > li )에 마우스를 오버하면 li에 over클래스가 추가

        언제 메뉴가 아웃되는지... 메뉴가 사라지는지 ... 
        메뉴( header .gnb .gnb_wrap ul.depth1 > li )가 벗어났을때 li에 over를 삭제
    */

    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
        if($(window).width() > 1024){
            $(this).addClass('over');
        }
    });

    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseleave', function(){
        $(this).removeClass('over');
    });

    $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2 > li:last-child').on('focusout', function(){
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over');
    });


    /*
    
        모바일 
        header .gnb button.gnb_open 를 클릭하면 header - menu_open 클래스가 추가됨

        header .gnb .gnb_close 를 클릭하면 header - menu_open 클래스가 삭제
    */

    $('header .gnb button.gnb_open').on('click', function(){
        $('header').addClass('menu_open');
    });
    $('header .gnb .gnb_close').on('click', function(){
        $('header').removeClass('menu_open');
    });

    /*
    
        모바일 
        메뉴( header .gnb .gnb_wrap ul.depth1 > li > a )를 클릭했을때 하위메뉴 열음 (li에 open 클래스를 추가)
        --> 모바일에서는 1차메뉴 a를 클릭하면 페이지 이동하는 걸 막고 하위메뉴를 열어야함....

        메뉴가 열려있다면 (li에 open 클래스가 있는 경우)
           - 나 자신을 닫음

        메뉴가 닫혀있다면 (li에 open 클래스가 없는 경우)
           - 다른 모든 애들을 닫음 (이전에 오버한 애만 닫아야하는데 누군지 알기 어려움)
           - 클릭한 나 자신의 li에만 open 클래스를 줌
    */

    $('header .gnb .gnb_wrap ul.depth1 > li > a').on('click', function(e){
        if($(window).width() <= 1024){
            e.preventDefault();		/* a 태그의 href를 작동 시키지 않음 */
            if($(this).parent().hasClass('open') == true){ //open 클래스가 있는 경우 - 열려있는 경우
                $(this).parent().removeClass('open');
            }else{
                $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('open');
                $(this).parent().addClass('open')
            }
        }
    });

})