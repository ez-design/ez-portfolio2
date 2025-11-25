
$(document).ready(function(){

    AOS.init({
    offset: 150, 
    duration: 500, // 애니메이션 효과가 작동되는 시간
    easing: 'ease', // 가속도
    });
    

    let totalNum
    let currNum
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */
        autoplay: {  /* 팝업 자동 실행 */
            delay: 3500,
            disableOnInteraction: true,
        },
        effect: "fade", /* fade 효과 */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        on: {
            init: function (swiper) {
                totalNum = swiper.slides.length - (swiper.loopedSlides * 2);
                currNum = swiper.realIndex + 1;
                $('.visual .paging .total').text(totalNum); // loop 때문에 가짜 슬라이드 2개 빼기
                $('.visual .paging .current').text(currNum);
            },
            slideChange: function (swiper) {
                currNum = swiper.realIndex + 1
                $('.visual .paging .current').text(currNum);
            },
        }

    });



    let device_status //pc인지 모바일인지 구분하는 값
    let scrolling = $(window).scrollTop() //브라우저가 스크롤 된 값
    // let scroll_prev //이전에 스크롤 된 값
    let window_w = $(window).width() //브라우저의 넓이 값
    let window_h = $(window).height() // 브라우저의 높이값
    let mobile_size = 1024 //모바일로 변경되는 사이트

    about_chk()
    resize_chk()

    $(window).scroll(function(){ //브라우저가 스크롤 될 때마다 1번 실행
        about_chk()
    })
    $(window).resize(function(){ //브라우저가 리사이즈 될 떄마다 1번씩 실행
        resize_chk()
    })
    function resize_chk(){
        win_h = $(window).height()
        // console.log('브라우저 높이', win_h)
    }
    

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

    function about_chk(){

        let about = $('.about')
        let about_top = about.offset().top
        window_h = $(window).height()
        window_w = $(window).width()
        scrolling = $(window).scrollTop()
        
        //console.log('about_top', about_top-window_h, 'scroll', scrolling)

        if((about_top - window_h + window_h*0.3) < scrolling){ 
            /*
            1. 내가 about까지 스크롤된 값에서 윈도우 높이를 빼줌
            2. 거기서 절반정도를 더 내려오고 싶으면 윈도우 브라우저 높이에 0.5를 곱하거나 너무 많으면 0.3 곱해주기
            3. 그게 전체 브라우저가 스크롤링 된 값보다 작으면 실행
            */
            $('.about').addClass('active')
            // console.log('나타남')
        }else{
            $('.about').removeClass('active')
        }
    }



    

})










    
