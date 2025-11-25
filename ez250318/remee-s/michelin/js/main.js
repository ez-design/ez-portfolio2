$(document).ready(function(){
	
	/* 모바일 메뉴 열기
	
	header .gnb .open 를 클릭하면 header .total_menu에 show라는 클래스를 추가 
	header .total_menu .close 를 클릭하면 header .total_menu에 show라는 클래스를 삭제
	*/

	$('header .gnb .open').on('click', function(){
		$('header .total_menu').addClass('show');	
	});

	$('header .total_menu .close').on('click', function(){
		$('header .total_menu').removeClass('show');
	});


	const magazine_swiper = new Swiper('.magazine .list .swiper', { /* 팝업을 감싼는 요소의 class명 */
		slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
		spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
		breakpoints: {
			768: {    /* 640px 이상일때 적용 */
				slidesPerView: 4,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
				spaceBetween: 16,
			},
			1260: {    /* 640px 이상일때 적용 */
			slidesPerView: 5,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
			spaceBetween: 20,
			},
			1500: {    /* 640px 이상일때 적용 */
			slidesPerView: 6,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
			spaceBetween: 24,
			},
		},
		//centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
		loop: false, /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
		scrollbar: {
			el: '.swiper-scrollbar', /* 스크롤바의 요소 */
			hide: false, /* 스크롤바 숨기지 않음 */
			draggable: true, /* 스크롤바를 드래그 가능하게 설정 */
			dragSize: 'auto',
		},
	});


	/****** new_rest swiper 시작 *****/
	const rest_swiper = new Swiper('.new_rest .swiper', { /* 팝업을 감싼는 요소의 class명 */
		slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
		spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
		breakpoints: {
			768: {    /* 640px 이상일때 적용 */
				slidesPerView: 'auto',    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
				spaceBetween: 24,
			},
		},
		//centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
		//loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
		pagination: {
			el: ".new_rest .progress",
			type: "progressbar",
		},

	});
	/****** new_rest swiper 끝 *****/
	AOS.init({
		offset: 200, // 해당 콘텐츠가 하단에서 몇 px 위로 올라와에 나타나는 효과가 나타날지 셋팅하는 값
		duration: 500, // 애니메이션 효과가 작동되는 시간
		easing: 'ease', // 가속도
	});
})

