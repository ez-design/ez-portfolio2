$(document).ready(function(){
gsap.registerPlugin(ScrollTrigger); //scrolltrigger를 호출 (js파일 내에서 1번만 부르면됨)    

let poStart = window.matchMedia("(max-width: 768px)").matches ? 305 : 0; 
let poGap = 0; // 첫번째와 두번째의 여백
let poObj = '.accordion_wrap .accordion' // 고정요소
let poObjCont = '.cont' // 고정요소 내부의 내용

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


	// 스케일,어둡게
	gsap.to($(e).find(poObjCont), {
		scale: 1,
		top: 0,
		ease: 'none',
		scrollTrigger: {
			trigger: e,
			start:  'top +='+(poStart + i * poGap),
			end: 'top -=700%',
			scrub: 1,
		},
	});	

		const event_swiper = new Swiper('.event .swiper', { /* 팝업을 감싼는 요소의 class명 */
		slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
		spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
		breakpoints: {
			769: {    /* 640px 이상일때 적용 */
				slidesPerView: 2,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
				spaceBetween: 20,
			},
			1025: {    /* 640px 이상일때 적용 */
				slidesPerView: 3,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
				spaceBetween: 24,
			},
		},
		//centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
		loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
		// autoplay: {  /* 팝업 자동 실행 */
		// 	delay: 2500,
		// 	disableOnInteraction: true,
		// },
		pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
			el: '.swiper-pagination', /* 해당 요소의 class명 */
			clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
			type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
		},
	});
	


	
});

	gsap.registerPlugin(ScrollTrigger);

	const lines = gsap.utils.toArray(".txt-front p");

	lines.forEach((line, i) => {
	gsap.to(line, {
		clipPath: "inset(0 0 0 0)", // 완전히 다 보이게
		ease: "none",
		scrollTrigger: {
		trigger: ".split",
		start: "top top",           // split 시작할 때부터
		end: "bottom bottom",       // 끝날 때까지 천천히
		scrub: true,
		}
	});
	});



	let slogan = $('.split .slogan_wrap') //글자를 감싸는 영역의 이름
	let slogan_obj = $('.slogan p span') //각 줄안에 나타날 글자
	let slogan_rate_s = 1 //처음에 애니메이션 시작할때 글씨가 하단에서 몇 %정도 올라왔을때 애니메이션 시작할 것인지 (1이 100%임)
	let slogan_rate_e = 0 //마지막에 애니메이션이 끝날때 마지막 글자가 하단에서 몇 %정도 올라왔을때 종료할 것인지
	let slogan_leng = slogan_obj.length
	let slogan_scroll
	let slogan_top
	let slogan_start
	let slogan_end
	let slogan_w
	let scrolling
	let win_h

	slogan_ani()
	$(window).scroll(function(){
	//스크롤 할때마다 1번씩
	slogan_ani()
	})
	$(window).resize(function(){
	//브라우저가 리사이즈 될때마다 1번씩 실행
	slogan_ani()
	})

	function slogan_ani(){
	win_h = $(window).height()
	scrolling = $(window).scrollTop()
	slogan_top = slogan.offset().top
	slogan_start = slogan_top - win_h + (win_h * slogan_rate_s)
	slogan_end = slogan_top + slogan.height() - win_h + (win_h * slogan_rate_e)
	slogan_scroll = (scrolling - slogan_start) / (slogan_end - slogan_start) * 100
	if(slogan_start > scrolling) {
	//console.log('시작 이전')
	slogan_obj.width(0)
	}else if(slogan_end > scrolling){
	//console.log('애니메이션중')
	for(i=0; i<slogan_leng; i++){
	slogan_w = (slogan_scroll - (100/slogan_leng)*i) * slogan_leng
	if(slogan_w > 100){
	slogan_w = 100
	}
	slogan_obj.eq(i).width(slogan_w + '%')
	}
	}else{
	//console.log('종료 이후')
	slogan_obj.width('100%')
	}
	}//slogan_ani



	let egg = $(".egg .egg_wrap");
	let txt = $(".and-text");
	let left = $(".left");
	let right = $(".right");
	let egg_rate_s = 0;   // 애니 시작 지점 (0=바로 시작, 1=스크롤 많이 내려야 시작)
	let egg_rate_e = 0.7;   // 애니 종료 지점 (0.3~1 사이로 조절)
	
	
	$(window).on("scroll", function () {
		let winH = $(window).height();
		let scr = $(window).scrollTop();
		let top = egg.offset().top;
	
		let progress = (scr - (top - winH * egg_rate_s)) / (winH * egg_rate_e);
		progress = Math.min(1, Math.max(0, progress));
	
		txt.css({
			opacity: progress,
			transform: `translate(-50%, -50%) scale(${0.2 + progress * 0.7})`
		});
	
		// ⭐ PC/모바일 분기
		let ww = $(window).width();
		let maxMove = ww >= 769 ? ww * 0.12 : ww * 0.18;
	
		let move = progress * maxMove;
		left.css("transform", `translateX(-${move}px)`);
		right.css("transform", `translateX(${move}px)`);
	});

	$('.center').slick({
		centerMode: true,
		slidesToShow: 3,
		centerPadding: '20px',
	
		prevArrow: '<button class="btn_prev"></button>',
		nextArrow: '<button class="btn_next"></button>',
	
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  arrows: false,
			  slidesToShow: 1
			}
		  }
		]
	});
	
	
	
// 	let _syncTimer = null;
// 	let _resizeTimer = null;

// // 뷰포트에 따른 너비 설정을 반환하는 함수 (원하는 값으로 수정 가능)
// 	function getWidthSettings() {
// 	const vw = window.innerWidth;

// 	// 예시: 데스크탑 / 태블릿 / 모바일 분기
// 	if (vw >= 1200) {
// 		return { NORMAL_W: 360, ACTIVE_W: 618, DURATION: 360 }; // 대형 화면
// 	} else if (vw >= 768) {
// 		return { NORMAL_W: 250, ACTIVE_W: 400, DURATION: 360 }; // 태블릿 ~ 데스크탑
// 	} else {
// 		return { NORMAL_W: 200, ACTIVE_W: 300, DURATION: 300 }; // 모바일
// 	}
// }

// 	// translate 계산 함수 (고정 너비값 기준)
// 	function calcTranslateForIndex(swiper, activeIndex, normalW, activeW) {
// 	const space = swiper.params.spaceBetween || 0;
// 	let totalOffset = 0;

// 	// activeIndex 앞까지 너비 합
// 	for (let i = 0; i < activeIndex; i++) {
// 		// 각 인덱스가 active인지 비교해서 width 할당 (active 앞이므로 i===activeIndex는 false)
// 		const w = (i === activeIndex) ? activeW : normalW;
// 		totalOffset += w + space;
// 	}

// 	const centeredOffset = (swiper.width - activeW) / 2;
// 	const targetTranslate = -totalOffset + centeredOffset;
// 	return targetTranslate;
// 	}

// 	// 초기 로딩 시 transition 없이 너비 적용 (깜박임 방지)
// 	function applyWidthsInstant(swiper, normalW, activeW, durationMs, easing) {
// 	const slides = swiper.slides;
// 	const aIdx = swiper.activeIndex;

// 	// transition 임시 제거
// 	slides.forEach(slide => { slide.style.transition = 'none'; });

// 	for (let i = 0; i < slides.length; i++) {
// 		slides[i].style.width = (i === aIdx) ? activeW + 'px' : normalW + 'px';
// 	}

// 	// 강제 리플로우
// 	void swiper.wrapperEl.offsetWidth;

// 	// transition 복구 (width 애니메이션)
// 	slides.forEach(slide => {
// 		slide.style.transition = `width ${durationMs}ms cubic-bezier(.22,.9,.3,1)`;
// 	});
// 	}

// 	// widths를 적용하고 translate를 동기화 애니메이션으로 이동시키는 핵심 함수
// 	function syncWidthAndTranslate(swiper, activeIndex, normalW, activeW, durationMs) {
// 	// 이전 타이머 정리
// 	if (_syncTimer) {
// 		clearTimeout(_syncTimer);
// 		_syncTimer = null;
// 	}

// 	const slides = swiper.slides;

// 	// 1) 슬라이드 너비를 목표값(고정값)으로 설정 -> CSS width transition에 의해 부드럽게 변함
// 	for (let i = 0; i < slides.length; i++) {
// 		slides[i].style.width = (i === activeIndex) ? activeW + 'px' : normalW + 'px';
// 	}

// 	// 2) 예측된 타겟 translate 계산 (DOM 읽지 않고 고정 너비 사용)
// 	const targetTranslate = calcTranslateForIndex(swiper, activeIndex, normalW, activeW);

// 	// 3) 현재 translate가 아니라 swiper의 wrapper를 직접 애니메이션
// 	//    swiper.setTransition(duration) + swiper.setTranslate(target)로 동기화
// 	swiper.setTransition(durationMs);
// 	swiper.setTranslate(targetTranslate);

// 	// 4) duration 뒤 정리: transition 제거 및 update
// 	_syncTimer = setTimeout(() => {
// 		swiper.setTransition(0);
// 		swiper.update(); // 내부 재계산
// 		_syncTimer = null;
// 	}, durationMs + 10);
// 	}

// 	// 리사이즈 핸들러: 디바운스 후 너비 재계산 및 위치 보정
// 	function onWindowResize(swiper) {
// 	if (_resizeTimer) clearTimeout(_resizeTimer);
// 	_resizeTimer = setTimeout(() => {
// 		const { NORMAL_W, ACTIVE_W, DURATION } = getWidthSettings();

// 		// 리사이즈 시에는 깜박임을 최소화하기 위해 transition 0으로 일단 적용
// 		applyWidthsInstant(swiper, NORMAL_W, ACTIVE_W, DURATION);

// 		// 계산된 translate를 바로 적용 (애니메이션 없이)하여 위치 정렬
// 		const translate = calcTranslateForIndex(swiper, swiper.activeIndex, NORMAL_W, ACTIVE_W);
// 		swiper.setTransition(0);
// 		swiper.setTranslate(translate);
// 		swiper.update();

// 		_resizeTimer = null;
// 	}, 120); // 120ms 디바운스 (필요시 조정)
// 	}


// 	/* ---------- Swiper 초기화 ---------- */
// 	const longswiper = new Swiper('.long .swiper', {
// 	slidesPerView: 'auto',
// 	centeredSlides: true,
// 	spaceBetween: -80,
// 	loop: true,
// 	navigation: {
// 		nextEl: '.long .btn .btn_next',
// 		prevEl: '.long .btn .btn_prev',
// 	},
// 	pagination: {
// 		el: '.swiper-pagination',
// 		clickable: true,
// 		type: 'fraction',
// 	},
// 	// autoplay: { 
// 	// 	delay: 5000,
// 	// 	disableOnInteraction: true,
// 	// },
// 	on: {
// 		init: function() {
// 			// 초기 너비값 가져와서 즉시 적용 및 초깃값 translate 세팅
// 			const { NORMAL_W, ACTIVE_W, DURATION } = getWidthSettings();

// 			// 초기에는 instant로 너비 적용 -> translate 계산 -> 위치 적용 (애니메이션 없이)
// 			applyWidthsInstant(this, NORMAL_W, ACTIVE_W, DURATION);
// 			const initialTranslate = calcTranslateForIndex(this, this.activeIndex, NORMAL_W, ACTIVE_W);
// 			this.setTransition(0);
// 			this.setTranslate(initialTranslate);

// 			// window resize 리스너 등록
// 			window.addEventListener('resize', () => onWindowResize(this));
// 		},

// 		slideChangeTransitionStart: function() {
// 			const { NORMAL_W, ACTIVE_W, DURATION } = getWidthSettings();
// 			// 슬라이드 전환 시작 시 width/translate 동기화 애니메이션 실행
// 			syncWidthAndTranslate(this, this.activeIndex, NORMAL_W, ACTIVE_W, DURATION);
// 		},

// 		slideChangeTransitionEnd: function() {
// 			// 안전을 위해 update
// 			if (_syncTimer) { clearTimeout(_syncTimer); _syncTimer = null; }
// 			this.setTransition(0);
// 			this.update();
// 		}
// 	},

// 		observer: true,
// 		observeParents: true,

		
// 	});


	// const youtube_long_swiper = new Swiper('.long .swiper', { /* 팝업을 감싼는 요소의 class명 */
    const longswiper = new Swiper('.long .swiper', { /* 팝업을 감싼는 요소의 class명 */
		slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
		spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
		centeredSlides: true,
		breakpoints: {
			769: {    /* 640px 이상일때 적용 */
				slidesPerView: 2,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
				spaceBetween: 24,
				centeredSlides: false,
			},
			1025: {    /* 640px 이상일때 적용 */
				slidesPerView: 3,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
				spaceBetween: 30,
			},
		},
		//centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
		loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
		navigation: {
			nextEl: '.long .btn .btn_next',
			prevEl: '.long .btn .btn_prev',
		},
		pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
			el: '.swiper-pagination', /* 해당 요소의 class명 */
			clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
			type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
		},
	});




	const short_swiper = new Swiper('.youtube .short .swiper', {
		slidesPerView: 'auto', 
		spaceBetween: 16, // ✨ 기본 간격을 24px로 통일
		loop: true,
		autoplay: {
			delay: 1500,
			disableOnInteraction: true,
		},
		breakpoints: {
			// 2. 1025px 이상에서도 'auto'와 24px 간격을 유지하도록 확인합니다.
			1025: {
				spaceBetween: 24,
			},
		},
	});

	$('footer .f_sub .wrapper .top').on('click', function(){
        $('html, body').animate({
            scrollTop : 0
        }, 500)
    })
	
	window.addEventListener("load", () => {
		ScrollTrigger.refresh();
	});
})//맨끝