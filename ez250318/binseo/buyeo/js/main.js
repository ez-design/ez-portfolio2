$(document).ready(function(){
    // console.log('???????')
    /* ************************************** visual_swiper : 시작 ************************************ */

    const visual_swiper = new Swiper('.visual .swiper', {
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },
        pagination: {
            el: '.visual .paging',
            type: 'fraction',
            formatFractionCurrent: n => ('0' + n).slice(-2),
            formatFractionTotal: n => ('0' + n).slice(-2),
        },
        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .ctrl_wrap button.btn_next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .ctrl_wrap button.btn_prev',  
        },
        on: {
            slideChangeTransitionStart: function () {
            resetProgressAnimation();
          },
        }
    });
      
    // 처음 로딩 시 1회 시작
    resetProgressAnimation();
    
    function resetProgressAnimation() {
        const progress = document.querySelector('.progress-bar .progress');
        if (!progress) return;

        progress.style.animation = 'none';
        progress.offsetHeight; // 강제 리플로우
        progress.style.animation = null;
    }

     $('.visual .ctrl_wrap button.btn_stop').on('click', function(){
        // console.log('정지버튼 클릭')
        visual_swiper.autoplay.stop();  /* 일시정지 기능 */
        $(this).hide()
        $('.visual .ctrl_wrap button.btn_play').show()
        document.querySelector('.progress').style.animationPlayState = 'paused'; // progress 정지
    })

    $('.visual .ctrl_wrap button.btn_play').on('click', function(){
        // console.log('재생 버튼')
        visual_swiper.autoplay.start();  /* 재생 기능 */
        $(this).hide()
        $('.visual .ctrl_wrap button.btn_stop').show()
        resetProgressAnimation(); // progress 다시 재생
    })

    /* ************************************ visual_swiper : 끝 *********************************** */


    /* ************************************** theme_swiper : 시작 ************************************ */
    const theme_swiper = new Swiper('.theme .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            768: {    /* 768px 이상일때 적용 */
                spaceBetween: 24,
            },
        },
        //centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.theme .paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            // type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
        },
        
        navigation: {
            nextEl: '.theme .ctrl_wrap button.btn_next',
            prevEl: '.theme .ctrl_wrap button.btn_prev',
        },
        
    });

    /************************************  theme 탭 기능 : 시작 ***********************************
     * 1. 클릭한 li에서 data-content 값을 가져와서
     *   ==> tab_item 중에 해당 값이 id인 요소를 찾아서 나타나게 해야함 (다른 요소는 숨김)
     * 2. 클릭한 li에만 active클래스 줌
     * 3. 클릭한 li안에 있는 span에 선택됨이라고 글자 써줌 (다른 li에 있는 건 삭제)
     * 4. 클릭한 li 속성 aria-selected 값을 true로 변경 (다른 li는 모두 false)
    */

    let theme_content // 클릭한 메뉴의 이름(id)
    $('.theme .theme_tab ul li').on('click', function(){
        // console.log('누름!!!!!!!!!!!!!')
        // $(this).hasClass('active') 확인? 맞는 지 has
        if($(this).hasClass('active') == false){
            // console.log('선택안된 메뉴')
            //1번 시작
            theme_content = $(this).attr('data-content') // attr --> 속성 값을 가지고 오는 것
            // console.log(find_content)
            $('.theme .list .tab_item').removeClass('active')
            $('.theme .list').find('#'+theme_content).addClass('active') 
            // find는 자식을 선택하는 것 me 아님 
            // 1번 끝

            // 2번 시작
            $('.theme .theme_tab ul li').removeClass('active')
            $(this).addClass('active')
            // 2번 끝
            
            //3번 시작
            $('.theme .theme_tab ul li button span').text('')
            $(this).find('span').text('선택됨')
            //3번 끝

            $('.theme .theme_tab ul li').attr('aria-selected', 'false') // 속성 값을 변경하는 방법
            $(this).attr('aria-selected', 'true')
        }
    })

    /************************************  theme 탭 기능 : 끝 ************************************/



    /* ************************************** theme_swiper : 끝 ************************************ */


    /* ************************************** festival_swiper : 시작 ************************************ */

    const festival_swiper = new Swiper('.festival .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            768: {    
                spaceBetween: 16,
            },
            1024: {   
                spaceBetween: 24,
            },
        },
        //centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        // loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        // autoplay: {  /* 팝업 자동 실행 */
        //     delay: 2500,
        //     disableOnInteraction: true,
        // },
        navigation: {
            nextEl: '.festival .list .swiper_btm .ctrl_wrap button.btn_next',
            prevEl: '.festival .list .swiper_btm .ctrl_wrap button.btn_prev',
        },
    });

    /* ************************************** festival_swiper : 끝 ************************************ */
    

    /* ************************************** popup_swiper : 시작 ************************************ */
    const popup_swiper = new Swiper('.popup .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            767: {    /* 640px 이상일때 적용 */
                spaceBetween: 16,
            },
            768: {    /* 640px 이상일때 적용 */
                spaceBetween: 24,
            },

        },
        //centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        autoplay: {  /* 팝업 자동 실행 */
            delay: 2500,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: '.notice .popup .swiper .ctrl_wrap button.btn_next',
            prevEl: '.notice .popup .swiper .ctrl_wrap button.btn_prev',
        },
        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.notice .popup .swiper .ctrl_wrap .paging ', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            // type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
        },
    });

    $('.notice .popup .swiper .ctrl_wrap button.btn_stop').on('click', function(){
        // console.log('정지버튼 클릭')
        popup_swiper.autoplay.stop();  /* 일시정지 기능 */
        $(this).hide()
        $('.notice .popup .swiper .ctrl_wrap button.btn_play').show()
    })

    $('.notice .popup .swiper .ctrl_wrap button.btn_play').on('click', function(){
        // console.log('재생 버튼')
        popup_swiper.autoplay.start();  /* 재생 기능 */
        $(this).hide()
        $('.notice .popup .swiper .ctrl_wrap button.btn_stop').show()
    })


    /* ************************************** popup_swiper : 끝 ************************************ */


});

    
    
