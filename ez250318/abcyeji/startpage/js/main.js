$(document).ready(function(){


		const myFullpage = new fullpage('#fullpage', {  /* html에서 페이지 전체를 감싸는 요소 */

			navigation: false, /* 오른쪽에 각 페이지의 paging */
			navigationPosition: 'left', /* 위치 */
			navigationTooltips: ['home', 'proflie', 'project1', 'project2'], /* 툴팁 */
			showActiveTooltip: true, /* 현재 활성화된 페이지의 툴팁에 특정 클래스 주기 */
			
			lockAnchors: false,
			anchors: ['home', 'proflie', 'project1', 'project2'], /* href="#link1" 이렇게 코딩하면 해당 링크명으로 이동 */

			autoScrolling:true, /* 한페이지씩 스크롤 */
			scrollHorizontally: true,

			verticalCentered: true, /* 컨텐츠 요소 위아래 가운데 */
			
			scrollOverflow: false, /* 컨텐츠가 넘쳐도 스크롤 금지 */

			afterLoad: function(origin, destination, direction, trigger){
				$('header .gnb ul li').removeClass('active')
				$('header .gnb ul li').eq(destination.index).addClass('active')
			},

			responsiveWidth: 640 /* fullpage를 적용시키지 않을 모바일 사이즈 */
		});
		
/************마우스커서변경*************************** */
		$(window).on('scroll mousemove', function(e){  /* html cursor가 마우스 포인터를 따라다니게 하는 값 */
			$('.cursor').css('left', e.pageX + 'px');
			$('.cursor').css('top', e.pageY + 'px');
		});
		$('section a').hover(function(){ /* 특정한 요소에 마우스를 올렸을때만 on 클래스 주기 */
			$('.cursor').toggleClass('on');
		});


	
})