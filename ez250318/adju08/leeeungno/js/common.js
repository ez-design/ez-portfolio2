
let device_status
let scrolling
let scroll_prev
let window_w
let mobile_size = 1024
let menu_open


$(window).scroll(function(){
    //console.log('스크롤 된다!!')
    scroll_chk()
})
$(window).resize(function(){
    //console.log('브라우저 크기 변한다!!')
    resize_chk()
})
$(document).ready(function(){ //문서가 로딩되고 단 1번 실행
    //console.log('로딩됐다!!!')
    resize_chk()
    scroll_chk()

    // 메뉴에 마우스 오버/포커스 진입 시
    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
        if (device_status === 'pc') {
            $('header').addClass('menu_over');
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over');
            $(this).addClass('over');
        }
    });

    // 마우스 나가면 닫기
    $('header').on('mouseleave', function(){
        $('header').removeClass('menu_over');
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over');
    });

    // 키보드로 포커스가 메뉴 바깥으로 나가면 닫기
    $(document).on('focusin', function() {
        const isInMenu = $(document.activeElement).closest('header .gnb .gnb_wrap').length > 0;
        if (!isInMenu) {
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over');
            $('header').removeClass('menu_over');
        }
    });


    /************* 모바일 메뉴 열고 닫기 *************/
    $('header .gnb .gnb_open').on('click', function(){
        $('header').addClass('menu_open')
    })
    $('header .gnb .gnb_close').on('click', function(){
        $('header').removeClass('menu_open')
    })

    /************* 모바일 2차 메뉴 열고 닫기 *************/
    $('header .gnb .gnb_wrap ul.depth1 > li > a').on('click', function(e){
        if(device_status == 'mobile'){
            // console.log('눌려???')
            e.preventDefault()
            menu_open = $(this).parents('li').hasClass('open')
            // console.log(menu_open)

            if(menu_open == true){
                $(this).parents('li').removeClass('open')
                $(this).next().slideUp()
            }else{
                $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('open')
                $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2').slideUp()
                $(this).parents('li').addClass('open')
                $(this).next().slideDown()
            }
        }
    })


    /* top 버튼을 클릭하면 상단으로 스크롤 */
    $('footer .top').on('click', function(){
        // console.log('클릭했다')
        $('html, body').animate({
            scrollTop: 0
        }, 500)
    })



})//$(document).ready

function resize_chk(){
    window_w = $(window).width()
    //console.log(window_w)
    if(window_w > mobile_size){
        device_status = 'pc'
    }else{
        device_status = 'mobile'
    }
    //console.log(device_status)
}
function scroll_chk(){
    scroll_prev = scrolling
    scrolling = $(window).scrollTop()
    //console.log(scroll_prev, scrolling)
    if(scrolling > 0){
        $('header').addClass('fixed')
        if(scrolling > scroll_prev ){
            //console.log('내려가는 중')
            $('header').addClass('gnb_up')
        }else{
            //console.log('올라가는 중')
            $('header').removeClass('gnb_up')
        }
    }else{ //0일 때
        $('header').removeClass('fixed')
    }
}

