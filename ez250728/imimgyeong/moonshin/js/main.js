/*------------------------------------------------------------------
 * 파일명 : main.js
    - 작성자 : 황난경
    - 작성일 : 2025-11-12
    - 설  명 : 메인페이지에서만 적용되는 js를 저장 (header/footer 제외)
---------------------------------------------------------------------*/

$(document).ready(function(){

    

    
/*----------- 시작 : visual swiper -----------*/
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        // autoplay: {  /* 팝업 자동 실행 */
        //     delay: 5000,
        //     disableOnInteraction: true,
        // },

        //effect: "fade", /* fade 효과 */

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.visual .paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
        },
    });

    $('.visual .ctrl_btn .stop').on('click', function(){
        visual_swiper.autoplay.stop();  /* 일시정지 기능 */
        $(this).hide()
        $('.visual .ctrl_btn .play').show()
        // console.log('정지버튼')
    })
    $('.visual .ctrl_btn .play').on('click', function(){
        visual_swiper.autoplay.start();  /* 재생 기능 */
        $(this).hide()
        $('.visual .ctrl_btn .stop').show()
        // console.log('재생버튼')
    })
/*----------- 끝 : visual swiper -----------*/

/*----------- 시작 : .time scrollTrigger -----------*/
    let pageWrapper = document.querySelector(".time .time_list .container");/* 홈페이지 콘텐츠 전체를 감싸는 요소, 만약 .list로 준다면 화면에 list만 꽉차게됨. */
    let items = document.querySelector(".time .time_list .list ul");/* flex를 준 요소 */
    let localItems = gsap.utils.toArray(".time .time_list .list ul li");/* 좌우로 배치될 각각의 요소 */
    let mm = gsap.matchMedia();
    let distance = () => {
        let lastItemBounds = localItems[localItems.length-1].getBoundingClientRect(),
            containerBounds = items.getBoundingClientRect();
        return Math.max(0, lastItemBounds.right - containerBounds.right);
    };
    
    gsap.to(localItems, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
            trigger: items,
            start: "center center", /* 좌우로 스크롤 될 동안의 위치, top top 상단에 고정, top 20% 상단에서 20% 떨어져서 */
            pinnedContainer: pageWrapper,
            end: () => "+=" + distance(),
            pin: pageWrapper,
            scrub: true,
            invalidateOnRefresh: true 
        }
    })
/*----------- 끝 : .time scrollTrigger -----------*/




/*----------- 시작 : .collection .spec swiper -----------*/

    // 각 슬라이드의 텍스트 DOM 수집
    function getSpecData(index) {
        let slide = $('.collection .list .spec .swiper-slide').eq(index);

        return {
            title: slide.find('h3').text(),
            artist: slide.find('li').eq(0).find('span').text(),
            year: slide.find('li').eq(1).find('span').text(),
            material: slide.find('li').eq(2).find('span').text(),
            size: slide.find('li').eq(3).find('span').text()
        };
    }

    // 표시될 영역 (항상 1개)
    let $specBox = $('.collection .list .spec');
    let $title = $specBox.find('h3');
    let $list = $specBox.find('ul li');

    // 초기값 삽입
    function setSpec(index) {
        const data = getSpecData(index);

        // 애니메이션을 위해 먼저 아래로 내리고 투명하게
        $title.css({ top: '20px', opacity: 0 });
        $list.css({ top: '20px', opacity: 0 });

        // 텍스트 교체
        $title.find('h3').text(data.title);
        $list.eq(0).find('span').text(data.artist);
        $list.eq(1).find('span').text(data.year);
        $list.eq(2).find('span').text(data.material);
        $list.eq(3).find('span').text(data.size);

        // 위로 슬라이드 업 + fade-in
        $title.animate({ top: 0, opacity: 1 }, 400);
        $list.animate({ top: 0, opacity: 1 }, 400);
    }

        // Swiper 초기화
    const spec_swiper = new Swiper('.collection .list .spec .swiper', {
        slidesPerView: 1,
        allowTouchMove: false, // 텍스트는 직접 드래그 못하게 (국회도서관 스타일)
        
        loop: true,
        //effect: "fade",
        speed: 600,
        
    });
    /*----------- 끝 : .collection .spec swiper -----------*/
        

    /*----------- 시작 : .collection .art swiper -----------*/
    const art_swiper = new Swiper('.collection .list .art .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* css에서 slide의 넓이ㅓ 지정 */
        spaceBetween: 24, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            768: {    /* 768px 이상일때 적용 */
                spaceBetween: 16,
            },
        },
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        //effect: "slide",
        speed: 600,
        navigation: {
            nextEl: '.collection .ctrl_btn .btn_next',
            prevEl: '.collection .ctrl_btn .btn_prev',
        },
        on: {
            slideChange: function() {
                spec_swiper.slideTo(this.realIndex+1)
                const activeSlide = this.slides[this.activeIndex]
                const activeSlideWidth = activeSlide.offsetWidth
                const otherSlides = this.slides[this.previousIndex]
                const otherSlideWidth = otherSlides.offsetWidth			
                const slideWidthDifference = activeSlideWidth - otherSlideWidth;
                this.setTranslate(this.translate - slideWidthDifference);
            },
            slideChangeTransitionEnd: function() {
                // 전환이 끝나면 Swiper를 다시 업데이트
                setTimeout(() => {
                    this.update();
                }, 100);  // 잠시 딜레이를 주고 업데이트
            }
        },
    });
    /*----------- 시작 : notice tab  -----------
    *.notice .area .content .tap button 을 클릭했을때 1번째를 클릭하면 active클래스를 주고
    * button에서 어떤 tap을 보이게 해야하는지 단서를 줘야함
    *.notice .area .content .inner .tab_cont 에서 1번째 요소에 active클래스를 줌 
    */

    let tab_name
    $('.notice .area .content .tap button').on('click', function(){
        //클릭한 button을 active클래스 추가
        $('.notice .area .content .tap button').removeClass('active')
        $(this).addClass('active')
        //클릭한 button을 span에다가 선택됨이라고 글자쓰기
        $('.notice .area .content .tap button span').text('')
        $(this).find('button span').text('선택됨')

        // 클릭한 button과 관련된 inner tab_cont에 active클래스 주기
        tab_name = $(this).attr('data-tab')
        // console.log(tab_name)
        $('.notice .area .content .inner .tab_cont').removeClass('active')
        //.notice로 찾을때는 클래스명이면 .이 추가되어야함, 내가 가져온 이름은 .이 없음
        $('.notice .area .content .inner').find('.' +tab_name).addClass('active')

        //선택된 tab_cont의 title에만 '선택됨'이라고 써주기
        $('.notice .area .content .inner .tab_cont').attr('titlse', '')
        $('.notice .area .content .inner').find('.' +tab_name).attr('title', '선택됨')

    })
    /*----------- 끝 : 찾습니다 tap  -----------*/




})//맨끝