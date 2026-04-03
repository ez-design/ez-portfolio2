$(document).ready(function(){
    
	// ----------------------------------------------------
    // 1. 내부 수평 Swiper 초기화 (portfolio_h)
    // ----------------------------------------------------
    var swiper_h = new Swiper(".portfolio_h", {
        direction: "horizontal",
        slidesPerView: 1,
        spaceBetween: 0,
        mousewheel: true,
        allowTouchMove: false,
        keyboard: true,
        nested: true,
        
    });

    // ----------------------------------------------------
    // 2. 외부 수직 Swiper 초기화 (portfolio_v)
    // ----------------------------------------------------
    var swiper_v = new Swiper(".portfolio_v", {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 0,
        mousewheel: true,
        allowTouchMove: false,
        keyboard: true,
        
    });

	function update_gnb_state(v_idx, h_idx){
		const $gnb = $('.gnb_menu');
	
		// 기본 상태 초기화
		$('.gnb_menu .gnb-item').removeClass('active');
		$gnb.removeClass('pos_profile pos_project01 pos_project02 pos_end');
	
		// *** 0번 슬라이드에서는 GNB를 무조건 숨김 ***
		if (v_idx === 0) {
			$gnb.removeClass('show'); // 숨김
			return;
		}
	
		// *** 1번 이후 슬라이드에서는 항상 노출 ***
		$gnb.addClass('show');
	
	
		// -----------------------------------
		// 아래는 기존 active/class 로직 유지
		// -----------------------------------
	
		if (v_idx === 1) {
			$('.gnb_menu .profile').addClass('active');
			$gnb.addClass('pos_profile');
		}
	
		if (v_idx === 2) {
			if (h_idx === 0) {
				$('.gnb_menu .project01').addClass('active');
				$gnb.addClass('pos_project01');
			}
			if (h_idx === 1) {
				$('.gnb_menu .project02').addClass('active');
				$gnb.addClass('pos_project02');
			}
		}
	
		if (v_idx === 3) {
			$('.gnb_menu .end').addClass('active');
			$gnb.addClass('pos_end');
		}
	}

	$('.gnb_menu .home').on('click', function(){
		swiper_v.slideTo(0);
	});
	
	$('.gnb_menu .profile').on('click', function(){
		swiper_v.slideTo(1);
	});
	
	$('.gnb_menu .project01').on('click', function(){
		swiper_v.slideTo(2);
		swiper_h.slideTo(0);
	});
	
	$('.gnb_menu .project02').on('click', function(){
		swiper_v.slideTo(2);
		swiper_h.slideTo(1);
	});
	
	$('.gnb_menu .end').on('click', function(){
		swiper_v.slideTo(3);
	});

	swiper_v.on('slideChange', function(){
		update_gnb_state(this.realIndex, swiper_h.realIndex);
	});
	
	swiper_h.on('slideChange', function(){
		if(swiper_v.realIndex === 2){
			update_gnb_state(2, this.realIndex);
		}
	});
	

	// CLICK 요소 생성
	const click_cursor = document.createElement("div");
	click_cursor.className = "cursor_click";
	click_cursor.textContent = "CLICK";
	document.body.appendChild(click_cursor);

	// 마우스 따라다니기
	document.addEventListener("mousemove", (e) => {
		click_cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
	});

	// a 태그들 가져오기
	const links = document.querySelectorAll("a");

	// a에 들어왔을 때 보이기
	links.forEach((link) => {
		link.addEventListener("mouseenter", () => {
			click_cursor.style.opacity = "1";
		});

		link.addEventListener("mouseleave", () => {
			click_cursor.style.opacity = "0";
		});
	});

})// 맨끝


