
$(document).ready(function(){

    AOS.init({
        offset: 200,
        duration: 500,
        easing: 'ease',
    });



    $('.quick .btn').on('click', function(){
        if($(this).hasClass('open') == true){
            $(this).removeClass('open')
            $(this).addClass('close')
            $(this).find('span').text('닫기')
            $('.quick .detail').slideDown(300)
        }else{
            $(this).removeClass('close')
            $(this).addClass('open')
            $(this).find('span').text('열기')
            $('.quick .detail').slideUp(200)
        }
    })


/*************************** visual swiper 연결 : 시작 ***************************/
    let visual_name = ['Seokyeong Univ', 'Ideas, together', '2nd in jobs, career aid']
    const visual_swiper = new Swiper('.visual .swiper', {

        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
        },

        loop: true,

        pagination: {
            el: '.visual .paging',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">  ' + visual_name[index] + "</span>";
            },
        },
    });
    //visual_swiper.autoplay.stop();  /* 일시정지 기능 */
    //visual_swiper.autoplay.start();  /* 재생 기능 */

    $('.visual .swiper .ctrl_wrap button.btn_stop').on('click', function(){
        visual_swiper.autoplay.stop();
        $(this).hide()
        $('.visual .swiper .ctrl_wrap button.btn_play').show() //play 버튼 나타남
    })
    $('.visual .swiper .ctrl_wrap button.btn_play').on('click', function(){
        visual_swiper.autoplay.start()
        $(this).hide()
        $('.visual .swiper .ctrl_wrap button.btn_stop').show() //stop 버튼 나타남
    })

/*************************** visual swiper 연결 : 종료 ***************************/





/******************************* updates 탭 기능 : 시작 ******************************/
        let updates_content
        $('.updates .notice .list .tab_list ul li').on('click', function(){

            if($(this).hasClass('active') == false){
                //1.
                updates_content = $(this).attr('data-content')
                $('.updates .notice .list .tab_content .tab_item').removeClass('active')
                $('.updates .notice .list .tab_content').find('#'+updates_content).addClass('active')
    
                //2.
                $('.updates .notice .list .tab_list ul li').removeClass('active')
                $(this).addClass('active')
    
                //3.
                $('.updates .notice .list .tab_list ul li button span').text('')
                $(this).find('span').text('선택됨')
    
                //4.
                $('.updates .notice .list .tab_list ul li').attr('aria-selected', 'false')
                $(this).attr('aria-selected', 'true')
            }
        })
    /******************************* updates 탭 기능 : 끝 ******************************/




    /******************************* department list : 시작 ******************************/
    $('.department .list ul.depth1 > li').on('mouseenter', function(){
        $('.department .list ul.depth1 > li').removeClass('on')
        $(this).addClass('on')
    })
    



    /******************************* sns list : 시작 ******************************/
    const sns_swiper = new Swiper('.sns .list .swiper', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        breakpoints: {
            500: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 24,
            },
        },
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: '.btn_next',
            prevEl: '.btn_prev',
        },
    });
    //sns_swiper.autoplay.stop();  /* 일시정지 기능 */
    //sns_swiper.autoplay.start();  /* 재생 기능 */

    $('.sns .list .swiper .ctrl_wrap button.btn_stop').on('click', function(){
        sns_swiper.autoplay.stop();
        $(this).hide()
        $('.sns .list .swiper .ctrl_wrap button.btn_play').show() //play 버튼 나타남
    })
    $('.sns .list .swiper .ctrl_wrap button.btn_play').on('click', function(){
        sns_swiper.autoplay.start()
        $(this).hide()
        $('.sns .list .swiper .ctrl_wrap button.btn_stop').show() //stop 버튼 나타남
    })


}) //$(document).ready