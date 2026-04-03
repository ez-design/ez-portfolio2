$(document).ready(function () {
    $(function() {

        let lastScroll = 0;
        let isHidden = false; // 헤더 숨김 여부
    
        $(window).on("scroll", function () {
            const currentScroll = $(this).scrollTop();
    
            // 맨 위에서는 항상 헤더 보이기
            if (currentScroll <= 0) {
                $("header").removeClass("hide");
                lastScroll = currentScroll;
                return;
            }
    
            if (currentScroll > lastScroll) {
                // ▼ 아래로 스크롤
                $("header").addClass("hide");
                isHidden = true;
            } else {
                // ▲ 위로 스크롤
                $("header").removeClass("hide");
                isHidden = false;
            }
    
            lastScroll = currentScroll;
        });
    
        // 마우스를 상단 영역에 올리면 헤더 표시
        $("body").on("mousemove", function (e) {
            if (e.clientY <= 80 && isHidden) { 
                // 화면 가장 위 80px에 마우스 있다면
                $("header").removeClass("hide");
            }
        });
    
    });
    
    
    
    
    const visual_swiper = new Swiper('.visual .swiper', {

        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },

        loop: true,

        /* ★ 페이드 효과 적용 */
        effect: "fade",
        fadeEffect: {
            crossFade: true, // 자연스럽게 겹치면서 사라짐
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'fraction', // 숫자 페이징(1/3 이런거)
        },

        navigation: {
            nextEl: '.btn_next',
            prevEl: '.btn_prev',
        },

    });


    const ex_swiper = new Swiper('.ex .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            640: {    /* 640px 이상일때 적용 */
                slidesPerView: 'auto',    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 16,
            },
        },
        //centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        autoplay: {  /* 팝업 자동 실행 */
            delay: 2500,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: '.btn_next',
            prevEl: '.btn_prev',
        },
        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.swiper-pagination', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
        },
    });
    const pu_swiper = new Swiper('.pu .swiper', {

        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },
    
        loop: true,
    
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets',  // bullet 타입으로 변경
        },
    
    });

    gsap.registerPlugin(ScrollTrigger);

    let mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
        const sections = document.querySelector(".section");      // 좌우요소를 감싸는 요소
        const large = document.querySelector(".section .cont_wrap .cont"); // 스크롤될 요소

        gsap.to(large, {
            y: () => (window.innerHeight - large.clientHeight - 64),
            ease: "none",
            scrollTrigger: {
                trigger: sections,
                pin: true,
                start: "top 60px",
                end: () => "+=500",
                scrub: 0.5,
                markers: false,
                invalidateOnRefresh: true,
            }
        });
    });
    $('footer .call_group .call_group_inner .top').on('click', function(){
        $('html, body').animate({
            scrollTop : 0
        }, 500)
    })
	
	window.addEventListener("load", () => {
		ScrollTrigger.refresh();
	});
}); // 맨끝