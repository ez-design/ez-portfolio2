
$(document).ready(function(){

	let device_status //pc인지 모바일인지 구분하는 값
	let scrolling //브라우저가 스크롤 된 값
	let scroll_prev //이전에 스크롤된 값
	let window_w //브라우저의 넓이값
	let mobile_size = 1024 //모바일로 변경되는 사이즈
	let menu_hinged //모바일에서 사용할 메뉴의 여닫이 여부 

	function resize_chk(){
        window_w = $(window).width()
        if(window_w > mobile_size){
            device_status = 'pc'
        }else{
            device_status = 'mobile'
        }
    }

	//모바일에서 메뉴 오픈 했을때 js
	$('header .gnb .gnb_open').on('click', function(){
		$('header .total_menu').addClass('show');	
	});

	$('header .total_menu .gnb_close').on('click', function(){
		$('header .total_menu').removeClass('show');
	});

	/* fixed 작동 하는거 ↓ */
	scroll_chk() //함수 실행 (문서가 로딩 되었을때 1번)
	resize_chk()
	$(window).resize(function(){ //브라우저가 리사이즈 될때마다 1번씩 실행
		resize_chk() //함수 실행
	})
	$(window).scroll(function(){//브라우저를 스크롤 할때마다 1번씩 실행
		scroll_chk() //함수 실행
	})
	function scroll_chk(){ //함수 선언
		//console.log('스크롤!!!!!!!!!!!!!!')
		scrolling = $(window).scrollTop()
		//console.log(scrolling)
		if(scrolling > 0){
			$('header').addClass('fixed')
		}else{
			$('header').removeClass('fixed')
		}
	}
	/* 2차 메뉴 열리고 닫히는 js */
    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
        if(device_status == 'pc'){
            $('header .gnb .gnb_wrap ul.depth1').addClass('open')
            $('header .gnb .gnb_wrap ul.depth1 > li > a > ul.depth2 > li').removeClass('open')
            $(this).addClass('open')
        }
    })
    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseleave', function(){
        $('header .gnb .gnb_wrap ul.depth1').removeClass('open')
        $('header .gnb .gnb_wrap ul.depth1 > li > a > ul.depth2 > li').removeClass('open')
		$(this).removeClass('open')
    })
	$('header .gnb .gnb_wrap ul.depth1 > li:has(ul.dapth2) > a').on('click', function(e){
        if(device_status == 'mobile'){
            e.preventDefault()
            $(this).parents('li').toggleClass('open')
        }
    })


	/* visual 팝업 시작 ! */
	const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

		autoplay: {  /* 팝업 자동 실행 */
			delay: 3000,
			disableOnInteraction: true,
		},

		effect: "fade", /* fade 효과 */

		loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
	});


	/* custom 카드 넘기기 swiper  */
	var custom_swiper = new Swiper(".custom .mySwiper", {
		effect: "cards",
		grabCursor: true,
	  });


	/* gallery swiper 시작 */  
	const gallery_swiper = new Swiper('.gallery .swiper', { /* 팝업을 감싼는 요소의 class명 */
	slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
	spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
	breakpoints: {
			768: {    /* 640px 이상일때 적용 */
				slidesPerView: 3,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
				spaceBetween: 16,
				},
			1260: {    /* 640px 이상일때 적용 */
				slidesPerView: 4,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
				spaceBetween: 16,
			},
		},
		//centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
		loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
		autoplay: {  /* 팝업 자동 실행 */
			delay: 3000,
			disableOnInteraction: true,
		},
	});


	//fade in AOS animation
	AOS.init({
		offset: 150, // 해당 콘텐츠가 하단에서 몇 px 위로 올라와에 나타나는 효과가 나타날지 셋팅하는 값
		duration: 500, // 애니메이션 효과가 작동되는 시간
		easing: 'ease', // 가속도
	});


	//intro swiper 시작!!

	const intro_swiper = new Swiper('.intro .swiper', { /* 팝업을 감싼는 요소의 class명 */
	slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
	spaceBetween: 12, /* 팝업과 팝업 사이 여백 */
		breakpoints: {
			640: {    /* 640px 이상일때 적용 */
				slidesPerView: 2,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
				spaceBetween: 12,
			},
			1000: {    /* 640px 이상일때 적용 */
			slidesPerView: 3,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
			spaceBetween: 12,
			},
			1260: {    /* 640px 이상일때 적용 */
			slidesPerView: 4,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
			spaceBetween: 12,
		},
		},
		//centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
		loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
		autoplay: {  /* 팝업 자동 실행 */
			delay: 2500,
			disableOnInteraction: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
			el: '.swiper-pagination', /* 해당 요소의 class명 */
			clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
			type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
		},
	});


})//$(document).ready
