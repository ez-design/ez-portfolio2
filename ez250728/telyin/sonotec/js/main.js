//콘텐츠 스타일 지정
$(document).ready(function(){
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */
		
		autoplay: {  /* 팝업 자동 실행 */
			delay: 6000,
			disableOnInteraction: true,
		},

		//effect: "fade", /* fade 효과 */

		loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
		

		navigation: {  /* 이전, 다음 버튼 */
			nextEl: '.visual .swiper .ctl_wrap .next',  /* 다음 버튼의 클래스명 */
			prevEl: '.visual .swiper .ctl_wrap .prev',  
		},

	});
	setTimeout(function(){
		$('.visual .progress-bar span').css({
			'transition': 'width 6s linear',
			'width': '100%'
		});
	}, 50);


	$('.visual .swiper .ctl_wrap .stop').on('click', function(){
		$(this).hide()
		visual_swiper.autoplay.stop();
		$('.visual video').each(function(){
			this.pause()
		})
		$('.visual .progress-bar span').css({
			'transition': 'none',
			'width': $('.visual .progress-bar span').width() // 현재 상태 유지
		});
		$('.visual .swiper .ctl_wrap .play').show()
	})
	$('.visual .swiper .ctl_wrap .play').on('click', function(){
		$(this).hide()
		visual_swiper.autoplay.start();
		$('.visual video').each(function(){
			this.play()
		})
		setTimeout(function(){
			$('.visual .progress-bar span').css({
				'transition': 'width 6s linear',
				'width': '100%'
			});
		}, 30);
		$('.visual .swiper .ctl_wrap .stop').show()
	})

	visual_swiper.on('slideChangeTransitionStart', function(){
		// 바 초기화
		$('.visual .progress-bar span').css({
			'transition': 'none',
			'width': '0%'
		});
	});
	
	visual_swiper.on('slideChangeTransitionEnd', function(){
		// 다시 차오르기 시작 (6초)
		setTimeout(function(){
			$('.visual .progress-bar span').css({
				'transition': 'width 6s linear',
				'width': '100%'
			});
		}, 30);
	});
	
}) /* visual swiper 끝 */