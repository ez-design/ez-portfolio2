$(document).ready(function(){
    AOS.init();

    // PC에서 swiper 사용 해제
    let boxSwiper = null;
    let businessSwiper = null;

    function initBoxSwiper() {
        boxSwiper = new Swiper('.box .swiper', {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            navigation: {
            nextEl: '.box .swiper-button-next',
            prevEl: '.box .swiper-button-prev',
            },
        });
        businessSwiper = new Swiper('.business .swiper', {
            slidesPerView: 1,
            spaceBetween: 16,
            breakpoints: {
                769: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                },
            },
            loop: true,
            navigation: {
            },
        });
    }

    function destroyBoxSwiper() {
        if (boxSwiper && businessSwiper) {
            boxSwiper.destroy(true, true);
            businessSwiper.destroy(true, true);
            boxSwiper = null;
            businessSwiper = null;
        }
    }

    function handleResize() {

        let isMobile = window.innerWidth < 768;
        let isTablet = window.innerWidth < 1024;

        if (isMobile && !boxSwiper && !businessSwiper) {
            initBoxSwiper();
        } else if (!isMobile && boxSwiper && businessSwiper) {
            destroyBoxSwiper();
        }

        if (isTablet && !businessSwiper) {
            initBoxSwiper();
        } else if (!isTablet && businessSwiper) {
            destroyBoxSwiper();
        }
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    const progressBar = document.querySelector('.visual .ctrl_wrap .autoplay-progress .progress-bar');
    const maxWidth = 128;
    
    const visualSwiper = new Swiper('.visual .swiper', {

        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },

        effect: "fade",
        loop: true,

        on: {
            autoplayTimeLeft(s, time, progress) {
            progressBar.style.width = ( (1 - progress) * maxWidth ) + 'px';
            }
        }
    });

    $('.visual .ctrl_wrap button.btn_pause').on('click', function(){
        visualSwiper.autoplay.pause();
        $(this).hide();
        $('.visual .ctrl_wrap button.btn_play').show();
    })

    $('.visual .ctrl_wrap button.btn_play').on('click', function(){
        visualSwiper.autoplay.resume();
        $(this).hide();
        $('.visual .ctrl_wrap button.btn_pause').show();
    })

    const alarmSwiper = new Swiper('.news .alarm .swiper', {

        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
        },

        loop: true,

        pagination: {
            el: '.news .alarm .swiper-pagination',
            clickable: true,
            type: 'fraction',
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
        

        navigation: {
            nextEl: '.news .alarm .ctrl_wrap .btn_next',
            prevEl: '.news .alarm .ctrl_wrap .btn_prev',  
        },

    });
    $('.news .alarm .ctrl_wrap button.btn_pause').on('click', function(){
        alarmSwiper.autoplay.pause();
        $(this).hide();
        $('.news .alarm .ctrl_wrap button.btn_play').show();
    })

    $('.news .alarm .ctrl_wrap button.btn_play').on('click', function(){
        alarmSwiper.autoplay.resume();
        $(this).hide();
        $('.news .alarm .ctrl_wrap button.btn_pause').show();
    })

    const dataSwiper = new Swiper('.news .data .swiper', {
        slidesPerView: 1,
        spaceBetween: 16,
        breakpoints: {
            769: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            1025: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
            1301: {
                slidesPerView: 4,
                spaceBetween: 24,
            },
        },

        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
        },

        loop: true,

        navigation: {
            nextEl: '.news .data .ctrl_wrap .btn_next',
            prevEl: '.news .data .ctrl_wrap .btn_prev',  
        },

    });
    $('.news .data .ctrl_wrap button.btn_pause').on('click', function(){
        dataSwiper.autoplay.pause();
        $(this).hide();
        $('.news .data .ctrl_wrap button.btn_play').show();
    })

    $('.news .data .ctrl_wrap button.btn_play').on('click', function(){
        dataSwiper.autoplay.resume();
        $(this).hide()
        $('.news .data .ctrl_wrap button.btn_pause').show();
    })

    $('.business .swiper ul li').on('mouseenter', function() {
        $('.business .swiper ul li').removeClass('on');
        $(this).addClass('on');
    });

})
