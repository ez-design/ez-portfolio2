$(document).ready(function () {

	//건너뛰기 포커스 이동
	$(".skip_nav:eq(0)").click(function () {
		$("#container").attr("tabindex", -1).focus();
	});
	$(".skip_nav:eq(1)").click(function () {
		$("#gnb-box").attr("tabindex", -1).focus();
	});
	$(".skip_nav:eq(2)").click(function () {
		$("#footer").attr("tabindex", -1).focus();
	});


	// 기본 스크롤 효과
	let lenis;

	function smoothScrollLenis() {
		lenis = new Lenis({
			duration: 2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
		});

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
	}
	smoothScrollLenis();

	const header = document.querySelector('header');

	window.addEventListener('scroll', () => {
		if (window.scrollY > 0) {
			header.classList.add('is-scroll');
		} else {
			header.classList.remove('is-scroll');
		}
	});



	/******************* PC GNB *******************/
	$('.gnb').on('mouseenter mouseover', function () {
		$(this).addClass('on');
		$('.header').addClass('on');
	});

	$('.gnb').on('mouseleave', function () {
		$('.gnb').removeClass('on');
		$('.header').removeClass('on');
	});

	$('.dep2-tit').hover(
		function () {
			$(this).closest('.dep1').find('.gnb-tit').addClass('on');
		},
		function () {
			$(this).closest('.dep1').find('.gnb-tit').removeClass('on');
		}
	);




	/******************* Mobile GNB *******************/
	$(".mgnb").html($('.gnb-box').html());
	$(".fgnb").html($('.gnb-box').html());
	$('.mbtn-box .open').on('click', function () {
		$('body').addClass('overflow-hidden');
		$(this).next('.mgnb-con').addClass('on');
	});
	$('.mbtn-box .close').on('click', function () {
		$('body').removeClass('overflow-hidden');
		$(this).parents('.mgnb-con').removeClass('on');
	});
	$('.mgnb .gnb .dep1 a.gnb-tit').on('click', function () {
		$('.mgnb .gnb .dep1 a.gnb-tit').not($(this)).removeClass('on');
		$('.mgnb .gnb .dep1 .dep2-wrap').slideUp();
		var mSubMenu = $(this).next('.dep2-wrap');
		if (!(mSubMenu.is(":visible"))) {
			mSubMenu.slideDown();
			$(this).addClass('on');
		} else {
			mSubMenu.slideUp();
			$(this).removeClass('on');
		}
	});
	$('.mgnb .gnb .dep1 a.gnb-tit').each(function () {
		if ($(this).next('.dep2-wrap').length > 0) {
			$(this).addClass('arr');
		}
	})


	//2차, 3차 메뉴 있을때 링크 막기
	$('.mgnb-box a.gnb-tit, .mgnb-box a.dep2-tit').on("click", function (e) {
		e.preventDefault();
	});




	const wrap = document.getElementById("wrap");
	if (wrap && wrap.classList.contains("sub")) {
		// 서브 좌측 고정
		gsap.registerPlugin(ScrollTrigger);

		// 3dep용
		ScrollTrigger.matchMedia({

			"(min-width: 1024px)": function () {
				const aside = document.querySelector(".layout-aside-1");
				const main = document.querySelector(".layout-main-1");

				if (!aside || !main) return;

				const pinTrigger = ScrollTrigger.create({
					trigger: aside,
					start: "top top",
					end: () => (main.scrollHeight - aside.offsetHeight) + "px",
					pin: true,
					pinSpacing: false,
				});

				return () => {
					pinTrigger.kill();
				};
			},

			"(max-width: 1023px)": function () {
				const aside = document.querySelector(".layout-aside-1");
				if (aside) aside.removeAttribute("style");
			}
		});

		// 콘텐츠용
		ScrollTrigger.matchMedia({

			"(min-width: 1024px)": function () {
				const aside = document.querySelector(".grid-main .main-aside");
				const main = document.querySelector(".grid-main .con-body");

				if (!aside || !main) return;

				const pinTrigger = ScrollTrigger.create({
					trigger: aside,
					start: "top top",
					end: () => (main.scrollHeight - aside.offsetHeight) + "px",
					pin: true,
					pinSpacing: false,
				});

				return () => {
					pinTrigger.kill();
				};
			},

			"(max-width: 1023px)": function () {
				const aside = document.querySelector(".grid-main .main-aside");
				if (aside) aside.removeAttribute("style");
			}
		});
	}




	//필터 공통
	$('.filter-wrap').each(function () {
		const $wrap = $(this);

		$wrap.find('.btn').on('click', function () {
			const $item = $(this).closest('.item');
			const $content = $item.find('.cont');

			const isOpen = $item.hasClass('open');

			// 모두 닫기
			$wrap.find('.item').removeClass('open');

			// 눌린 게 닫힌 상태였으면 열기
			if (!isOpen) {
				$item.addClass('open');
			}
		});
	});




	/******************* 맨 위로 이동 *******************/
	$('.fix-btn-wrap .top-btn').on('click', function () {
		$("html, body").animate({
			scrollTop: 0
		}, "slow");
		return false;
	});







	$('.family-btn').on('click', function () {
		var $currentFamilyList = $(this).next('.family-list');

		if (!$currentFamilyList.is(':visible')) {
			$(this).addClass('on');
			$currentFamilyList.slideDown();
			$(this).closest('.faily-site').siblings('.faily-site').find('.family-list').slideUp();
		} else {
			$currentFamilyList.slideUp();
			$(this).removeClass('on');
		}
	});




	/******************* 공유하기 *******************/
	$('.share-wrap .share-btn').on('click', function () {
		if ($(this).next('.share-layer').is(':visible')) {
			$(this).next('.share-layer').removeClass('on').attr('aria-expanded', 'false');
		} else {
			$(this).next('.share-layer').addClass('on').attr('aria-expanded', 'true');
		}
	});
	$('.share-layer .share-close-btn').on('click', function () {
		$(this).parents('.share-layer').removeClass('on').attr('aria-expanded', 'false');
	})




	$('.popup-btn').each(function () {
		$(this).on('click', function () {
			const $btn = $(this);
			const modalId = $btn.data('modal');
			const $popup = $('.popup-wrap.' + modalId);

			if ($btn.hasClass('zoom-btn')) {
				// 버튼 내부의 img를 찾음
				const $imgTarget = $btn.find('img');
				const imgSrc = $imgTarget.attr('src');
				const imgAlt = $imgTarget.attr('alt') || '';

				const $popupImg = $popup.find('.img-target img');
				$popupImg.attr('src', imgSrc).attr('alt', imgAlt);

				if ($("#imgCn").length === 1) {
					if (imgAlt !== "") {
						$("#imgCn").show().text(imgAlt);
					} else {
						$("#imgCn").hide();
					}
				}
			}

			// 팝업 열기
			$popup.addClass('active');
			$('body').addClass('overflow-hidden');
			lenis.stop();
		});
	});

	// 팝업 닫기
	$('.popup-wrap .popup-close-btn').on('click', function () {
		$(this).closest('.popup-wrap').removeClass('active');
		$('body').removeClass('overflow-hidden');
		lenis.start();
	});



	/******************* 반응형 테이블 스크롤 안내 *******************/
	$('.table-scroll-wrap').on('scroll', function () {
		$(this).find('.table-scroll-event').addClass('hidden');
	})


	/******************* 반응형 테이블 *******************/
	$('table.bbs-data').not($('.prettyprint').children()).each(function () {
		var RowSpanExist = $(this).find('td, th').is('[rowspan]'),
			TheadExist = $(this).find('thead').length;
		if ((RowSpanExist == false) && (TheadExist != 0)) { //rowspan이 없을 경우만 실행 (rowspan이 있으면 지원불가)
			$(this).children('table.bbs-data tbody').children('tr').find('th, td').each(function () {
				var ThisIndex = $(this).index(),
					TheadText = $(this).parents('table.bbs-data tbody').siblings('thead').find('th').eq(ThisIndex).text();
				$(this).attr('data-content', TheadText);
			});
			$(this).children('table.bbs-data tfoot').children('tr').find('th, td').each(function () {
				var ThisIndex = $(this).index(),
					TheadText = $(this).parents('table.bbs-data tfoot').siblings('thead').find('th').eq(ThisIndex).text();
				$(this).attr('data-content', TheadText);
			});
		};
	});
});
