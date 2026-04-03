//콘텐츠 스타일 지정
$(document).ready(function(){
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

	autoplay: {  /* 팝업 자동 실행 */
		delay: 6000,
		disableOnInteraction: true,
	},

	effect: "fade", /* fade 효과 */

	loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

	pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
		el: '.paging', /* 해당 요소의 class명 */
		clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
		// type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
		
	},
	

	navigation: {  /* 이전, 다음 버튼 */
		nextEl: '.visual .swiper .visual_next',  /* 다음 버튼의 클래스명 */
		prevEl: '.visual .swiper .visual_prev',  
	},

	});

	const products_swiper = new Swiper('.products .swiper', { /* 팝업을 감싼는 요소의 class명 */
		slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
		spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
		breakpoints: {
			1025: {    /* 1025px 이상일때 적용 */
				slidesPerView: 'auto',    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
				spaceBetween: 24,
			},
		},
		centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
		loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
		navigation: {
			nextEl: '.products .swiper .ctl_wrap .next',
			prevEl: '.products .swiper .ctl_wrap .prev',
		},
	});


	gsap.registerPlugin(ScrollTrigger); //scrolltrigger를 호출 (js파일 내에서 1번만 부르면됨)

	let poStart = 100; // 상단에 고정할때의 위치
	let poGap = 60; // 첫번째와 두번째의 여백
	let poObj = '.subscription .accordion_wrap .accordion' // 고정요소
	let poObjCont = '.conts img' // 고정요소 내부의 내용

	$(poObj).each(function(i, e) {
		// 핀
		ScrollTrigger.create({
			trigger: e,
			start:  'top +='+(poStart + i * poGap),
			endTrigger: poObj+'.last',
			end: 'top +=80',
			pin: true,
			pinSpacing: false,
			markers: false,
			anticipatePin: 1,
		});
	
		// 회전
		gsap.to($(e).find(poObjCont), {
			rotateX: -6,
			ease: 'none',
			scrollTrigger: {
				trigger: e,
				start:  'top +='+(poStart + i * poGap),
				end: 'top -=30%',
				scrub: 1,
			},
		});
	
		// 스케일,어둡게
		gsap.to($(e).find(poObjCont), {
			scale: 0.05,
			top: -200,
			ease: 'none',
			scrollTrigger: {
				trigger: e,
				start:  'top +='+(poStart + i * poGap),
				end: 'top -=700%',
				scrub: 1,
			},
		});
	});


	const bestseller_swiper = new Swiper('.bestseller .swiper', { /* 팝업을 감싼는 요소의 class명 */
		slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
		spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
		breakpoints: {
			769: {    /* 769px 이상일때 적용 */
				slidesPerView: 'auto',    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
				spaceBetween: 20,
			},
			1025: {    /* 1025px 이상일때 적용 */
				slidesPerView: 'auto',    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
				spaceBetween: 24,
			},
		},
		//centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
		loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
		autoplay: {  /* 팝업 자동 실행 */
			delay: 4000,
			disableOnInteraction: true,
		},
		navigation: {
			nextEl: '.bestseller .swiper .ctl_wrap .next',
			prevEl: '.bestseller .swiper .ctl_wrap .prev',
		},
	});

}) /* 끝 */