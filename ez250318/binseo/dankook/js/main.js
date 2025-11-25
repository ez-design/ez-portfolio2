$(document).ready(function(){
    // console.log('????')
    /* ************************************** service_swiper : 시작 ************************************ */
    const service_swiper = new Swiper('.service .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        
        //centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: false,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        
    });

    /* ************************************** service_swiper : 끝 ************************************ */


    /************************************ notice 탭 기능 : 시작 ***********************************
     * 1. 클릭한 li에서 data-content 값을 가져와서
     *   ==> tab_item 중에 해당 값이 id인 요소를 찾아서 나타나게 해야함 (다른 요소는 숨김)
     * 2. 클릭한 li에만 active클래스 줌
     * 3. 클릭한 li안에 있는 span에 선택됨이라고 글자 써줌 (다른 li에 있는 건 삭제)
     * 4. 클릭한 li 속성 aria-selected 값을 true로 변경 (다른 li는 모두 false)
    */

    let notice_content // 클릭한 메뉴의 이름(id)
    $('.notice .group01 .notice_btn ul li').on('click', function(){
        // console.log('누름!!!!!!!!!!!!!')
        // $(this).hasClass('active') 확인? 맞는 지 has
        if($(this).hasClass('active') == false){
            // console.log('선택안된 메뉴')
            //1번 시작
            notice_content = $(this).attr('data-content') // attr --> 속성 값을 가지고 오는 것
            // console.log(find_content)
            $('.notice .group01 .notice_box .tab_item').removeClass('active')
            $('.notice .group01 .notice_box').find('#'+notice_content).addClass('active') 
            // find는 자식을 선택하는 것 me 아님 
            // 1번 끝

            // 2번 시작
            $('.notice .group01 .notice_btn ul li').removeClass('active')
            $(this).addClass('active')
            // 2번 끝
            
            //3번 시작
            $('.notice .group01 .notice_btn ul li button span').text('')
            $(this).find('span').text('선택됨')
            //3번 끝

            $('.notice .group01 .notice_btn ul li').attr('aria-selected', 'false') // 속성 값을 변경하는 방법
            $(this).attr('aria-selected', 'true')
        }
    })

    /************************************ notice 탭 기능 : 끝 ************************************/

    
    /************************************ calendar 탭 기능 : 시작 ***********************************
     * 1. 클릭한 li에서 data-content 값을 가져와서
     *   ==> tab_item 중에 해당 값이 id인 요소를 찾아서 나타나게 해야함 (다른 요소는 숨김)
     * 2. 클릭한 li에만 active클래스 줌
     * 3. 클릭한 li안에 있는 span에 선택됨이라고 글자 써줌 (다른 li에 있는 건 삭제)
     * 4. 클릭한 li 속성 aria-selected 값을 true로 변경 (다른 li는 모두 false)
    */

    let calendar_content // 클릭한 메뉴의 이름(id)
    $('.notice .group02 .calendar .calendar_btn ul li').on('click', function(){
        // console.log('누름!!!!!!!!!!!!!')
        // $(this).hasClass('active') 확인? 맞는 지 has
        if($(this).hasClass('active') == false){
            // console.log('선택안된 메뉴')
            //1번 시작
            calendar_content = $(this).attr('data-content') // attr --> 속성 값을 가지고 오는 것
            // console.log(find_content)
            $('.notice .group02 .calendar_box .tab_item').removeClass('active')
            $('.notice .group02 .calendar_box').find('#'+calendar_content).addClass('active') 
            // find는 자식을 선택하는 것 me 아님 
            // 1번 끝

            // 2번 시작
            $('.notice .group02 .calendar .calendar_btn ul li').removeClass('active')
            $(this).addClass('active')
            // 2번 끝
            
            //3번 시작
            $('.notice .group02 .calendar .calendar_btn ul li button span').text('')
            $(this).find('span').text('선택됨')
            //3번 끝

            $('.notice .group02 .calendar .calendar_btn ul li').attr('aria-selected', 'false') // 속성 값을 변경하는 방법
            $(this).attr('aria-selected', 'true')
        }
    })

    /************************************ calendar 탭 기능 : 끝 ************************************/

    /************************************ indicators 숫자 : 시작 ************************************/
     // 클래스가 "counter"인 모든 요소를 선택합니다.
    const $counters = $(".indicators .counter");
        
    // 노출 비율(%)과 애니메이션 속도(ms)을 설정합니다.
    const exposurePercentage = 100; // ex) 스크롤 했을 때 $counters 컨텐츠가 화면에 100% 노출되면 숫자가 올라갑니다.
    const duration = 1000; // ex) 1000 = 1초
    
    // 숫자에 쉼표를 추가할지 여부를 설정합니다.
    const addCommas = true; // ex) true = 1,000 / false = 1000
    
    // 숫자를 업데이트하고 애니메이션하는 함수 정의
    function updateCounter($el, start, end) {
        let startTime;
        function animateCounter(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = (timestamp - startTime) / duration;
            const current = Math.round(start + progress * (end - start));
            const formattedNumber = addCommas ? current.toLocaleString() : current;
            $el.text(formattedNumber);
            
            if (progress < 1) {
                requestAnimationFrame(animateCounter);
            } else {
                $el.text(addCommas ? end.toLocaleString() : end);
            }
        }
        requestAnimationFrame(animateCounter);
    }
    
    // 윈도우의 스크롤 이벤트를 모니터링합니다.
    $(window).on('scroll', function() {
        // 각 "counter" 요소에 대해 반복합니다.
        $counters.each(function() {
            const $el = $(this);
            // 요소가 아직 스크롤되지 않았다면 처리합니다.
            if (!$el.data('scrolled')) {
                // 요소의 위치 정보를 가져옵니다.
                const rect = $el[0].getBoundingClientRect();
                const winHeight = window.innerHeight;
                const contentHeight = rect.bottom - rect.top;
                
                // 요소가 화면에 특정 비율만큼 노출될 때 처리합니다.
                if (rect.top <= winHeight - (contentHeight * exposurePercentage / 100) && rect.bottom >= (contentHeight * exposurePercentage / 100)) {
                    const start = parseInt($el.data("start"));
                    const end = parseInt($el.data("end"));
                    // 숫자를 업데이트하고 애니메이션을 시작합니다.
                    updateCounter($el, start, end);
                    $el.data('scrolled', true);
                }
            }
        });
    }).scroll();
    /************************************ indicators 숫자 : 끝 ************************************/

    /***********************
	 * aside quick 열고 닫기
	 * 닫혀있을 때 (open클래스가 있을 때) - close클래스 교체, detail보임
	 * 열려있을 때 (open클래스가 없을 때) - open 클래스 교체, detail보임
	 * */
	$('.quick .btn').on('click', function(){
		// console.log('눌렀음!!!!!!!!!')
		if($(this).hasClass('open') == true){ //open가 있으면 (true)
			//console.log('open이다!!!!!!!!!!!')
			$(this).removeClass('open')
			$(this).addClass('close')
			$(this).find('span').text('닫기')
			$('.quick .detail').slideDown(300) // 나오는 속도
		}else{
			// console.log('아니다!!!!!!!!!!!')
			$(this).removeClass('close')
			$(this).addClass('open')
			$(this).find('span').text('열기')
			$('.quick .detail').slideUp(200)
		}
	})

    $('.quick .detail ul li > button').on('click', function (e) {
        e.preventDefault(); // 혹시나 버튼이 form 안에 있을 경우 방지
    
        const $li = $(this).closest('li');
    
        // 다른 li들은 닫고 현재 li만 열기
        $('.quick .detail ul li').not($li).removeClass('open');
        
        // 현재 클릭한 li 토글
        $li.toggleClass('open');
    });

    $('.quick .btn_close').on('click', function () {
        $(this).closest('li').removeClass('open');
    });


    /* ************************************** sns_swiper : 시작 ************************************ */
    const sns_wrap_swiper = new Swiper('.sns_wrap .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            1024: {  
                spaceBetween: 24,
            },
        },
        //centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: false,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        
        
    });

    /* ************************************** sns_swiper : 끝 ************************************ */
    

}) //$(document).ready