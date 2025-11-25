$(document).ready(function(){

    /********visual의 swiper 연결: 시작 ***********/
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

	autoplay: {  /* 팝업 자동 실행 */
		delay: 2500,
		disableOnInteraction: true,
	},

	//effect: "fade", /* fade 효과 */

	loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

	pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
		el: '.visual .swiper-pagination', /* 해당 요소의 class명 */
		clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
		// type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
		// renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
		//     return '<span class="' + className + '">' + (index + 1) + "</span>";
		// },
	},

    });
    /********visual의 swiper 연결: 끝 ***********/


	/********medical_center의 swiper 연결: 시작 ***********/
	
	const medical_center_swiper = new Swiper('.medical_center .swiper', { 

	slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
	spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
	breakpoints: {
		640: {    /* 640px 이상일때 적용 */
			slidesPerView: 'auto',    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
			spaceBetween: 24,
		},
	},
	//centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
	loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
	// autoplay: {  /* 팝업 자동 실행 */
	// 	delay: 5000,
	// 	disableOnInteraction: true,
	// },
	navigation: {
		nextEl: '.medical_center .ctrl_wrap button.btn_next',
		prevEl: '.medical_center .ctrl_wrap button.btn_prev',
	},
	// pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
	// 	el: '.swiper-pagination', /* 해당 요소의 class명 */
	// 	clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
	// 	type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
	// },
	
});

/********medical_center의 swiper 연결: 끝 ***********/


/*************notice 의 tap: 시작 *************/
	let notice_content // 클릭한메뉴 이름(id)
	$('.notice .list .tab_list ul li').on('click', function(){
		//console.log('눌려라')
		if($(this).hasClass('active') == false){
			console.log('선택안된메뉴')
			notice_content = $(this).attr('data-content')
			console.log(notice_content)

			$('.notice .list .tab_content .tab_item').removeClass('active')
			$('.notice .list .tab_content').find('#'+notice_content).addClass('active')
			
			$('.notice .list .tab_list ul li').removeClass('active')
			$(this).addClass('active')

			$('.notice .list .tab_list ul li button span').text('')
			$(this).find('span').text('선택됨')

			$('.notice .list .tab_list ul li').attr('aria-selected', 'false')
			$(this).attr('aria-selected', 'true')
		}
	})

/*************notice 의 tap: 끝 *************/


/********notice의 card swiper연결: 시작 ***********/
const card_swiper = new Swiper('.card .swiper', { /* 팝업을 감싼는 요소의 class명 */

	autoplay: {  /* 팝업 자동 실행 */
		delay: 2200,
		disableOnInteraction: true,
	},
	slidesPerView: 1,   // 한 화면에 하나씩
	loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

	// pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
	// 	el: '.swiper-pagination', /* 해당 요소의 class명 */
	// 	clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
	// 	type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
	// 	renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
	// 	    return '<span class="' + className + '">' + (index + 1) + "</span>";
	// 	},
	// },
	
});
/********notice의 card swiper 연결: 끝 ***********/

})