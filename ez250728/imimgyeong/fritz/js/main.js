/*------------------------------------------------------------------
 * 파일명 : main.js
    - 작성자 : 황난경
    - 작성일 : 2025-12-02
    - 설  명 : 메인페이지에서만 적용되는 js를 저장 (header/footer 제외)
---------------------------------------------------------------------*/

$(document).ready(function(){

    /*----------- 시작 : visual swriper ----------*/
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        // autoplay: {  /* 팝업 자동 실행 */
        //     delay: 5000,
        //     disableOnInteraction: true,
        // },

        //effect: "fade", /* fade 효과 */

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */


        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .swiper button.btn_next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .swiper button.btn_prev',  
        },

    });
    /*----------- 끝 : visual swriper ----------*/

    /*----------- 시작 : shop swriper ----------*/
    const shop_swiper = new Swiper('.shop .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            768: {    /* 768px 이상일때 적용 */
                slidesPerView: 3,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 16,
            },
            1024: {    /* 768px 이상일때 적용 */
                slidesPerView: 4,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,
            },
        },
        navigation: {
            nextEl: '.shop button.btn_next',
            prevEl: '.shop button.btn_prev',
        },
      
    });
    /*----------- 끝 : shop swriper ----------*/

    /*----------- top버튼 클릭하면 상단으로 이동 ----------*/
       
    $('aside.quick .top').on('click', function(){
        $('html, body').animate({
            scrollTop : 0
        }, 500)
    })





})//맨끝 나가기금지
