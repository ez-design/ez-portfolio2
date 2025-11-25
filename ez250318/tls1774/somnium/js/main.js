
let device_status //pc인지 모바일 구분하는 값
let scrolling //브라우저가 스크롤 된 값
let scroll_prev //이전에 스크롤 된값
let window_w //브라우저의 넓이 값
let mobile_size = 1024 //모바일로 변경되는 사이트
let menu_open //모바일에서 사용할 메뉴가 열렸는지 여부


$(window).scroll(function(){//브라우저가 스크롤 될때마다 1번 실행
    //console.log('브라우저가 스크롤 된다 된다!!!!!!!!')
    scroll_chk()
})
$(window).resize(function(){//리사이즈 될때마다 1번실행
    //console.log('브라우저 크기 변한다!!!!!!!!!!')
    resize_chk() //함수의 실행
})
$(document).ready(function(){

    
    /**************** visual swiper 연결 : 시작 *****************/
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */
        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000,
            disableOnInteraction: true,
        },
        effect: "fade", /* fade 효과 */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

            
        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.visual .paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            // type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
            // renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
            //     return '<span class="' + className + '">' + (index + 1) + "</span>";
            // },
        },
        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .ctrl_wrap button.btn_next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .ctrl_wrap button.btn_prev',  
        },
    });
 /**************** visual swiper 연결 : 끝 *****************/

   
     /* TOP 버튼을 클릭하면 상단으로 스크롤 */
     $('footer .top').on('click' , function(){
        // console.log('클릭됨 탑탑!!')
        $('html, body').animate({
            scrollTop: 0
        }, 500)
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
function scroll_chk(){
    scroll_prev = scrolling //스크롤값을 다시 계산하기 전에 이전값을 prev에 저장
    scrolling = $(window).scrollTop()
    console.log(scroll_prev, scrolling)
    if(scrolling > 0){ //조금이라도 스크롤 됐으면
        $('header').addClass('fixed')
        if(scrolling > scroll_prev){
            // console.log('내려가는 중!!!!!!!!!!!!!!')
            $('header').addClass('gnb_up')
        }else{
            // console.log('올라가는 중!!!!!!!!!!!!!!')
            $('header').removeClass('gnb_up')
        }
    }else{ //0일때
        $('header').removeClass('fixed')
    }
}