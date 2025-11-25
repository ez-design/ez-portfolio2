$(document).ready(function(){

    
    const myFullpage = new fullpage('#fullpage', {

        navigation: true,
        navigationPosition: 'left',
        navigationTooltips: ['Main', 'Lineup', 'Global Net', 'Media', 'footer'],
        showActiveTooltip: true,
        
        lockAnchors: true,
        anchors: ['Main', 'Lineup', 'Global', 'Media', 'footer'],

        autoScrolling:true,
        scrollHorizontally: true,

        verticalCentered: true,
        
        scrollOverflow: false,

        afterLoad: function(origin, destination, direction, trigger){
            if(destination.index == 0){
                $('body').removeClass('bg_w')

            }else if(destination.index == 1){
                $('body').addClass('bg_w')
                $('.counter').counterUp();

            }else if(destination.index == 2){
                $('body').removeClass('bg_w')

            }else if(destination.index == 3){
                $('body').addClass('bg_w')
            }
        },

        responsiveWidth: 1025,
        responsiveHeight: 700
    }); //fullpage





    /********************* visual swiper 추가 ********************/
    const visual_swiper = new Swiper('.visual .swiper', {

        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000,
            disableOnInteraction: true,
        },

        loop: true,

        pagination: {
            el: '.visual .paging',
            type: 'fraction',
        },

        navigation: {
		nextEl: '.btn_next',
		prevEl: '.btn_prev',
	    },
        
    });
    //visual_swiper.autoplay.stop();  /* 일시정지 기능 */
    //visual_swiper.autoplay.start();  /* 재생 기능 */

    $('.visual .swiper .ctrl_wrap .btn_wrap button.btn_stop').on('click', function(){
        //console.log('정지버튼 클릭')
        visual_swiper.autoplay.stop();
        $(this).hide()
        $('.visual .swiper .ctrl_wrap .btn_wrap button.btn_play').show() //play 버튼 나타남
    })
    $('.visual .swiper .ctrl_wrap .btn_wrap button.btn_play').on('click', function(){
        //console.log('재생버튼 클릭')
        visual_swiper.autoplay.start()
        $(this).hide()
        $('.visual .swiper .ctrl_wrap .btn_wrap button.btn_stop').show() //stop 버튼 나타남
    })






    /********************* lineup swiper 추가 ********************/
    const lineup_swiper = new Swiper('.lineup .swiper', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        breakpoints: {
            
            769: {
                slidesPerView: 'auto',
                spaceBetween: 24,
            },
        },
    });






    /******************************* media 탭 기능 : 시작 ******************************/
        let media_content
        $('.media .group .notice .list .tab_list ul li').on('click', function(){

            if($(this).hasClass('active') == false){
                //1.
                media_content = $(this).attr('data-content')
                $('.media .group .notice .list .tab_content .tab_item').removeClass('active')
                $('.media .group .notice .list .tab_content').find('#'+media_content).addClass('active')
    
                //2.
                $('.media .group .notice .list .tab_list ul li').removeClass('active')
                $(this).addClass('active')
    
                //3.
                $('.media .group .notice .list .tab_list ul li button span').text('')
                $(this).find('span').text('선택됨')
    
                //4.
                $('.media .group .notice .list .tab_list ul li').attr('aria-selected', 'false')
                $(this).attr('aria-selected', 'true')
            }
        })
    /******************************* media 탭 기능 : 끝 ******************************/


    

    
    /******************************* global 아이콘 애니메이션 ******************************/
    const items = document.querySelectorAll('.global .map .list ul li');
        let current = 0;

        function animateItem(index) {
            const item = items[index];
            item.classList.add('animate');

            item.addEventListener('animationend', () => {
            item.classList.remove('animate');
            const next = (index + 1) % items.length;
            animateItem(next);
            }, { once: true });
    }

  animateItem(0);

})//$(document).ready