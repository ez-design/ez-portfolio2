$(document).ready(function(){

    /****************** visual swiper : start *******************/
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        // autoplay: {  /* 팝업 자동 실행 */
        //     delay: 5000,
        //     disableOnInteraction: true,
        // },
        effect: "fade", /* fade 효과 */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.visual .paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            // type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
            renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
        navigation: {
            nextEl: '.visual .ctrl_wrap .btn_next',
            prevEl: '.visual .ctrl_wrap .btn_prev',
        },
    });

    $('.visual .ctrl_wrap button.btn_stop').on('click', function(){
        visual_swiper.autoplay.stop();
        $(this).hide()
        $('.visual .ctrl_wrap button.btn_play').show()
    })
    $('.visual .ctrl_wrap button.btn_play').on('click', function(){
        visual_swiper.autoplay.start();
        $(this).hide()
        $('.visual .ctrl_wrap button.btn_stop').show()
    })
    /****************** visual swiper : end *******************/

    /******** service swiper : start *********/

    const service_swiper = new Swiper('.service .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 0, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            1024: {    /* 640px 이상일때 적용 */
                slidesPerView: 'auto',    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 0,
            },
        },
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    });

    /******** service swiper : end *********/

    /****************** notice tab : start *******************/

    let notice_content //클릭한 메뉴의 이름(id)
    $('.notice .list .tab_list ul li').on('click', function() {

        if ($(this).hasClass('active') == false) {
            notice_content = $(this).attr('data-content')
            //console.log(find_content)

            $('.notice .list .tab_content .tab_item').removeClass('active')
            $('.notice .list .tab_content').find('#'+notice_content).addClass('active')

            $('.notice .list .tab_list ul li').removeClass('active')
            $(this).addClass('active')

            $('.notice .list .tab_list ul li button span').text('') // 모든글자 지움
            $(this).find('span').text('선택됨')

            $('.notice .list .tab_list ul li').attr('aria-selected', 'false')
            $(this).attr('aria-selected', 'true')
        }
    })

    /****************** notice tab : end *******************/

    /******** news swiper : start *********/

    const news_swiper = new Swiper('.news .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000,
            disableOnInteraction: true,
        },
        // effect: "fade", /* fade 효과 */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.news .paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
            renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
        navigation: {
            nextEl: '.news .ctrl_wrap .btn_next',
            prevEl: '.news .ctrl_wrap .btn_prev',  
        },
    });

    /******** news swiper : end *********/

})//$(document).ready