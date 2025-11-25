$(document).ready(function() {
	const myFullpage = new fullpage('#fullpage', {  /* html에서 페이지 전체를 감싸는 요소 */

		navigation: true, /* 오른쪽에 각 페이지의 paging */
		navigationPosition: 'left', /* 위치 */
		navigationTooltips: ['HOME', 'PROFILE', 'LS ELECTRIC', 'BRITZ', 'CJU', 'END'], /* 툴팁 */
		showActiveTooltip: true, /* 현재 활성화된 페이지의 툴팁에 특정 클래스 주기 */
		
		lockAnchors: true,
		anchors: ['home', 'profile', 'ls', 'britz', 'cju', 'end'], /* href="#link1" 이렇게 코딩하면 해당 링크명으로 이동 */

		autoScrolling:true, /* 한페이지씩 스크롤 */
		scrollHorizontally: true,

		verticalCentered: true, /* 컨텐츠 요소 위아래 가운데 */
		
		scrollOverflow: false, /* 컨텐츠가 넘쳐도 스크롤 금지 */

		afterLoad: function(origin, destination, direction, trigger){
			if(destination.index == 5){
				$('body').addClass('bg_b')
			}else {
				$('body').removeClass('bg_b')
			}
		},

		responsiveWidth: 1025, /* fullpage를 적용시키지 않을 모바일 사이즈 (768부터 모바일) */
        responsiveHeight: 700   /* 브라우저 높이가 700이하로 줄면 fullpage 안함 */
	});
	$(window).on('scroll mousemove', function(e){  /* html cursor가 마우스 포인터를 따라다니게 하는 값 */
		$('.cursor').css('left', e.pageX + 'px');
		$('.cursor').css('top', e.pageY + 'px');
	});
	$('.popup').hover(function(){ /* 특정한 요소에 마우스를 올렸을때만 on 클래스 주기 */
		$('.cursor').toggleClass('on');
	});
})