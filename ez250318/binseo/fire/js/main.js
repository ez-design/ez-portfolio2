$(document).ready(function(){
    const myFullpage = new fullpage('#fullpage', {  /* html에서 페이지 전체를 감싸는 요소 */

		navigation: true, /* 오른쪽에 각 페이지의 paging */
		navigationPosition: 'left', /* 위치 */
		navigationTooltips: ['Main', '자주 찾는 서비스', '한눈에 보는 소식', '활동 사진', '119 체험 센터', '소방서 안내', 'footer'], /* 툴팁 */
		showActiveTooltip: true, /* 현재 활성화된 페이지의 툴팁에 특정 클래스 주기 */
		
		lockAnchors: false, // 수정해야함!! true !!!
		anchors: ['main', 'service', 'news', 'action', 'center', 'map', 'footer'], /* href="#link1" 이렇게 코딩하면 해당 링크명으로 이동 */

		autoScrolling:true, /* 한페이지씩 스크롤 */
		scrollHorizontally: true,

		verticalCentered: true, /* 컨텐츠 요소 위아래 가운데 */
		
		scrollOverflow: false, /* 컨텐츠가 넘쳐도 스크롤 금지 */

		afterLoad: function(origin, destination, direction, trigger){
			if(destination.index == 0){ /* index가 0면 슬라이드는 첫번째 슬라이드입니다. index 수는 0/1/2/3 */
				// console.log('1번째 슬라이드가 로딩 되었을때');
				$('body').removeClass('bg_white')
			}else if(destination.index == 1){ /* index가 1면 슬라이드는 두번째 슬라이드입니다. index 수는 0/1/2/3 */
				// console.log('2번째 슬라이드가 로딩 되었을때');
				$('body').addClass('bg_white')

			}else if(destination.index == 2){ /* index가 2면 슬라이드는 세번째 슬라이드입니다. index 수는 0/1/2/3 */
				// console.log('3번째 슬라이드가 로딩 되었을때');
				$('body').addClass('bg_white')
			}else if(destination.index == 3){ /* index가 3면 슬라이드는 네번째 슬라이드입니다. index 수는 0/1/2/3 */
				// console.log('4번째 슬라이드가 로딩 되었을때');
				$('body').removeClass('bg_white')
			}else if(destination.index == 4){ /* index가 3면 슬라이드는 네번째 슬라이드입니다. index 수는 0/1/2/3 */
				// console.log('5번째 슬라이드가 로딩 되었을때');
				$('body').addClass('bg_white')
			}else if(destination.index == 5){ /* index가 3면 슬라이드는 네번째 슬라이드입니다. index 수는 0/1/2/3 */
				// console.log('6번째 슬라이드가 로딩 되었을때');
				$('body').addClass('bg_white')
			}
		},

		responsiveWidth: 1025, /* fullpage를 적용시키지 않을 모바일 사이즈 (768부터 모바일) */
        responsiveHeight: 700 /* 브라우저 높이가 700이하로 줄면 fullpage 안함 */
        
	});// fullpage


	// /********************************** visual swiper :: 시작 ******************************/

	const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000,
            disableOnInteraction: true,
        },
    
        effect: "fade", /* fade 효과 부드럽게 */
    
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

		pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.visual .paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            // type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
            // renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
            //     return '<span class="' + className + '">' + (index + 1) + "</span>";
            // },
        },

        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .ctrl_wrap button.btn_next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .ctrl_wrap button.btn_prev',  
        },
    
    });

	$('.visual .ctrl_wrap button.btn_stop').on('click', function(){
		// console.log('정지버튼 클릭')
		visual_swiper.autoplay.stop();  /* 일시정지 기능 */
		$(this).hide()
		$('.visual .ctrl_wrap button.btn_play').show()
	})

	$('.visual .ctrl_wrap button.btn_play').on('click', function(){
		// console.log('재생 버튼')
		visual_swiper.autoplay.start();  /* 재생 기능 */
		$(this).hide()
		$('.visual .ctrl_wrap button.btn_stop').show()
	})
		


	/********************************** visual swiper :: 끝 ******************************/
	


	/************************************  theme 탭 기능 : 시작 ***********************************
     * 1. 클릭한 li에서 data-content 값을 가져와서
     *   ==> tab_item 중에 해당 값이 id인 요소를 찾아서 나타나게 해야함 (다른 요소는 숨김)
     * 2. 클릭한 li에만 active클래스 줌
     * 3. 클릭한 li안에 있는 span에 선택됨이라고 글자 써줌 (다른 li에 있는 건 삭제)
     * 4. 클릭한 li 속성 aria-selected 값을 true로 변경 (다른 li는 모두 false)
    */

    let notice_content // 클릭한 메뉴의 이름(id)
    $('.news .inner .notice .notice_btn ul li').on('click', function(){
        // console.log('누름!!!!!!!!!!!!!')
        // $(this).hasClass('active') 확인? 맞는 지 has
        if($(this).hasClass('active') == false){
            // console.log('선택안된 메뉴')
            //1번 시작
            notice_content = $(this).attr('data-content') // attr --> 속성 값을 가지고 오는 것
            // console.log(find_content)
            $('.news .inner .notice .notice_box .tab_item').removeClass('active')
            $('.news .inner .notice .notice_box').find('#'+notice_content).addClass('active') 
            // find는 자식을 선택하는 것 me 아님 
            // 1번 끝

            // 2번 시작
            $('.news .inner .notice .notice_btn ul li').removeClass('active')
            $(this).addClass('active')
            // 2번 끝
            
            //3번 시작
            $('.news .inner .notice .notice_btn ul li button span').text('')
            $(this).find('span').text('선택됨')
            //3번 끝

            $('.news .inner .notice .notice_btn ul li').attr('aria-selected', 'false') // 속성 값을 변경하는 방법
            $(this).attr('aria-selected', 'true')
        }
    })

    /************************************  theme 탭 기능 : 끝 ************************************/

	/********************************** notice swiper :: 시작 ******************************/

	const notice_box_swiper = new Swiper('.notice_box .swiper', { /* 팝업을 감싼는 요소의 class명 */
		slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
		spaceBetween: 4, /* 팝업과 팝업 사이 여백 */
		breakpoints: {
			1024: {    /* 640px 이상일때 적용 */
				spaceBetween: 9,
			},
		},
		//centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
		// loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
		navigation: {
			nextEl: '.news .inner .notice .notice_box .tab_item .group .ctrl_wrap button.btn_next',
			prevEl: '.news .inner .notice .notice_box .tab_item .group .ctrl_wrap button.btn_prev',
		},
	});	

	/********************************** notice swiper :: 끝 ******************************/



	/********************************** notice_popup swiper :: 시작 ******************************/
	const notice_popup_swiper = new Swiper('.notice_popup .swiper', { /* 팝업을 감싼는 요소의 class명 */
		
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
            nextEl: '.news .inner .notice_popup .ctrl_wrap button.btn_next',
            prevEl: '.news .inner .notice_popup .ctrl_wrap button.btn_prev',
        },
        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.news .inner .notice_popup .ctrl_wrap .paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
        },
    });

    $('.news .inner .notice_popup .ctrl_wrap button.btn_stop').on('click', function(){
        // console.log('정지버튼 클릭')
        notice_popup_swiper.autoplay.stop();  /* 일시정지 기능 */
        $(this).hide()
        $('.news .inner .notice_popup .ctrl_wrap button.btn_play').show()
    })

    $('.news .inner .notice_popup .ctrl_wrap button.btn_play').on('click', function(){
        // console.log('재생 버튼')
        notice_popup_swiper.autoplay.start();  /* 재생 기능 */
        $(this).hide()
        $('.news .inner .notice_popup .ctrl_wrap button.btn_stop').show()
    })

	/********************************** notice_popup swiper :: 끝 ******************************/


    const action_swiper = new Swiper('.action .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* css에서 slide의 넓이ㅓ 지정 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            768: {    /* 768px 이상일때 적용 */
                spaceBetween: 24,
            },
        },
        //centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        navigation: {
            nextEl: '.action .list .group .ctrl_wrap button.btn_next',
            prevEl: '.action .list .group .ctrl_wrap button.btn_prev',
        },
        on: {
            slideChange: function() {
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



}) //$(document).ready




