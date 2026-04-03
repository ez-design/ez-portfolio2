//콘텐츠 스타일 지정
$(document).ready(function(){
	$('a[href^="#"]').click(function(e){
		e.preventDefault();
	
		let target = $(this).attr('href');
		let pos = $(target).offset().top;
	
		$('html, body').animate({
			scrollTop: pos
		}, 600);
	});
	
	$('.head_wrap ul li a').click(function(e){
		e.preventDefault(); // a태그 기본 이동 막기
		
		let href = $(this).attr('href');   // 예: #about
		let targetTop = $(href).offset().top; // 이동할 위치
		 
		$('html, body').animate({
			scrollTop : targetTop
		}, 700); // 0.6초 동안 부드럽게 이동
	});
	
}) /* 끝 */