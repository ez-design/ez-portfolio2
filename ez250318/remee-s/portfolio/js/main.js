
$(document).ready(function(){
	AOS.init({
		offset: 200, // 해당 콘텐츠가 하단에서 몇 px 위로 올라와에 나타나는 효과가 나타날지 셋팅하는 값
		duration: 500, // 애니메이션 효과가 작동되는 시간
		easing: 'ease', // 가속도
	});

	//마우스 커서 모양 바꾸는 js
	$(window).on('scroll mousemove', function(e){  /* html cursor가 마우스 포인터를 따라다니게 하는 값 */
		$('.contents .txt .cursor').css('left', e.pageX + 'px');
		$('.contents .txt .cursor').css('top', e.pageY + 'px');
	});
	$('.contents .txt ul li a').hover(function(){ /* 특정한 요소에 마우스를 올렸을때만 on 클래스 주기 */
		$('.contents .txt .cursor').toggleClass('on');
	});
})