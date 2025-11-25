$(document).ready(function(){

	console.log('들어가니')
	gsap.registerPlugin(ScrollTrigger);
	const items = gsap.utils.toArray(".accordion");

	items.forEach((item, i) => {
		const content = item.querySelector(".accordion .conts");
		const header = item.querySelector(".accordion .tit");
		gsap.to(content, {
			height: 0,
			ease: "none",
			scrollTrigger: {
				trigger: item,
				start: "top " + header.clientHeight * i,
				endTrigger: ".final",  // 고정요소 하단에 종료를 뜻하는 class
				end: "top " + header.clientHeight * items.length,
				pin: true,
				pinSpacing: false,
				scrub: true,
				markers: false,
				id: i + 1
			}
		});
	});



	$(window).on('scroll mousemove', function (e) {
		$('.cursor').css({
		  left: e.pageX + 'px',
		  top: e.pageY + 'px'
		});
	});
	
	// popup 요소에 호버 시 on 클래스 토글
	$('.popup').hover(
	function () {
		$('.cursor').addClass('on');
	},
	function () {
		$('.cursor').removeClass('on');
	}
	);
	
	// a 태그에 호버 시 on 클래스 토글
	$('a').hover(
	function () {
		$('.cursor').addClass('on');
	},
	function () {
		$('.cursor').removeClass('on');
	}
	);
})//$(document).ready
