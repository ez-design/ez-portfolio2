$(document).ready(function(){

    AOS.init({
        offset: 150,
        duration: 1000,
        easing: 'ease',
    });
    

    const visual_swiper = new Swiper('.visual .swiper', {
        autoplay: {  
        delay: 5000,
        disableOnInteraction: true,
        },
        effect: "fade",
        loop: true,
        navigation: {  
        nextEl: '.visual .ctrl_wrap button.btn_next',
        prevEl: '.visual .ctrl_wrap button.btn_prev',
        },
        on: {
          init: function () {
              updateSlideCount(this); // 초기 숫자 설정
          },
          slideChange: function () {
              updateSlideCount(this); // 슬라이드 변경 시 숫자 업데이트
          }
        }
    });
    
    // 슬라이드 숫자 업데이트 함수
    function updateSlideCount(swiper) {
        const current = (swiper.realIndex || 0) + 1;
        const total = swiper.slides.length - swiper.loopedSlides * 2; // 실제 슬라이드 개수

        $('.ctrl_wrap .current-slide').text(current.toString().padStart(2, '0'));
        $('.ctrl_wrap .total-slide').text(total.toString().padStart(2, '0'));
    }

    /*********************  lang_open ****************** */
    
        $('.lang_open').click(function(e){
          e.stopPropagation();
          $('.box').toggleClass('active'); // hide 대신 active 토글
        });
      
        $('.box .item').click(function(e){
          e.preventDefault();
          var selected = $(this).text();
          $('.lang_open span').text(selected);
          $('.box').removeClass('active');
        });
      
        $(document).click(function(){
          $('.box').removeClass('active');
        });

    /*************** family site 열고닫기 ****************/

        $('.family_site .family_open').on('click', function () {
            // console.log('!!!!!!!!!!')
            $('.family_site ul').addClass('on');
            $('.family_open').addClass('hide');
            $('.family_close').removeClass('hide');
        });
    
        $('.family_site .family_close').on('click', function () {
            $('.family_site ul').removeClass('on');
            $('.family_close').addClass('hide');
            $('.family_open').removeClass('hide');
        });


});
