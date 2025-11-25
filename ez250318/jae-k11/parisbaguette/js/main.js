$(document).ready(function(){

    /*************visual 의 swiper 연결 : 시작 ************/

    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 2500,
            disableOnInteraction: true,
        },
    
        //effect: "fade", /* fade 효과 */
    
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    
        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.visual .swiper-pagination', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            observer: true,
            observeParents: true,
            resizeObserver: true,
            // type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
            // renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
            //     return '<span class="' + className + '">' + (index + 1) + "</span>";
            // },
        },
    
        });
        // swiper.autoplay.stop();  /* 일시정지 기능 */
        // swiper.autoplay.start();  /* 재생 기능 */

    /*************visual 의 swiper 연결 : 끝 ************/

    /*************menu 의 tap 연결 : 시작 ************/
    let menu_content 
    $('.menu .list .tap_list ul > li').on('click', function(){
        if($(this).hasClass('active') == false){
            console.log('선택안된메뉴')
            menu_content = $(this).attr('data-content')
            console.log(menu_content)

            $('.menu .list .tab_content .tab_item').removeClass('active')
            $('.menu .list .tab_content').find('#'+menu_content).addClass('active')

            $('.menu .list .tap_list ul > li').removeClass('active')
            $(this).addClass('active')
            
            $('.menu .list .tap_list ul > li button span').text('')
            $(this).find('span').text('선택됨')

            $('.menu .list .tap_list ul > li').attr('aria-selected', 'false')
            $(this).attr('aria-selected', 'true')
        }
        
        
    })
    /*************menu 의 tap 연결 : 끝 ************/

    /*************promotion 의 swiper 연결 : 시작 ************/

    const promotion02_swiper = new Swiper('.promotion02 .swiper', { /* 팝업을 감싼는 요소의 class명 */
      slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
      spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
      breakpoints: {
        1580: {    /* 640px 이상일때 적용 */
          slidesPerView: 6,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
          spaceBetween: 30,
        },
        1330: {    /* 640px 이상일때 적용 */
          slidesPerView: 5,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
          spaceBetween: 30,
        },
        900: {    /* 640px 이상일때 적용 */
          slidesPerView: 4,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
          spaceBetween:30,
        },
        630: {    /* 640px 이상일때 적용 */
          slidesPerView: 3,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
          spaceBetween:16,
        },
      },
      //centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
      loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
      // autoplay: {  /* 팝업 자동 실행 */
      //   delay: 2500,
      //   disableOnInteraction: true,
      // },


    });

    /*************promotion 의 swiper 연결 : 끝 ************/
	
});