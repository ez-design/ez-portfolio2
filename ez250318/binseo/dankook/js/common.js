    /* header, footer 공통요소에 들어가는 javascript/jquery */

    /* ************************************** header : 시작 ************************************ */
    /*

        pc버전, 모바일 버전 구분
        스크롤된 값 계산

        스크롤을 내리면 header에 fixed 클래스 추가
        메뉴에 마우스를 올리면 header에 menu_over 클래스 추가
        메뉴를 오버한 li에 over 클래스 추가

        스크롤을 내릴 때는 gnb_up 클래스 추가
        스크롤을 올릴 때는 gnb_up 클래스 삭제
        ===> 이전에 스크롤 값과 현재 스크롤 값을 비교해서
            현재 값이 더 크면 내려가는 중 ( 100 --> 200 )
            현재 값이 작으면 올라가는 중 ( 200 --> 100 )
    */


    let device_status // pc인지 모바일 구분하는 값
    let scrolling // 브라우저가 스크롤 된 값
    let scroll_prev // 이전에 스크롤 된 값
    let window_w // 브라우저의 넓이 값
    let mobile_size = 1024 // 모바일로 변경되는 사이트
    let menu_open // 모바일에서 사용할 메뉴가 열렸는지 여부

    $(window).scroll(function(){ // 브라우저가 스크롤 될 때마다 1번 실행
        // console.log('브라우저가 스크롤 된다 된다!!!!!!!')
        scroll_chk()
    })

    $(window).resize(function(){ // 리사이즈 될 때마다 1번 실행
        // console.log('브라우저 크기 변한다!!!!!')
        resize_chk() // 함수 실행
    })


    $(document).ready(function(){ // 문서가 로딩되고 단 한번

        /*############# TOP버튼을 클릭하면 상단으로 스크롤 ##############*/
        $('.quick .detail ul li.top button').on('click', function(){
            // console.log('???????')
            $('html, body').animate({
                scrollTop: 0
            }, 500)
        })


        // console.log('로딩됨~~~~~~~~~~~~~~')
        resize_chk() // 함수 실행
        scroll_chk()

        // $('header .header_wrap .nav_container .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
        //     if(device_status == 'pc'){
        //         // console.log('오버!!!!')
        //         $('header').addClass('menu_over')
        //         $('header .header_wrap .nav_container .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
        //         $(this).addClass('over')
        //     }
        // })
        // $('header').on('mouseleave', function(){
        //     $('header').removeClass('menu_over')
        //     $('header .header_wrap .nav_container .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
        // })

        // $('header .util:last-child').on('focusout', function(){
        //     $('header').removeClass('menu_over')
        //     $('header .header_wrap .nav_container .gnb .gnb_wrap ul.depth1 > li > .gnb_bg > ul.depth2 > li').removeClass('over')
            
        // })
        // // ##########################
        // $('header .header_wrap .nav_container .gnb .gnb_wrap ul.depth1 > li > .gnb_bg > ul.depth2 > li').on('mouseenter focusin', function(){
        //     if(device_status == 'pc'){
        //         // console.log('오버!!!!')
        //         $('header .header_wrap .nav_container .gnb .gnb_wrap ul.depth1 > li > .gnb_bg > ul.depth2 > li').removeClass('over')
        //         $(this).addClass('over')
        //     }
        // })
        // $('header .header_wrap .nav_container .gnb .gnb_wrap ul.depth1 > li > .gnb_bg > ul.depth2 > li').on('mouseleave', function(){
        //     $('header .header_wrap .nav_container .gnb .gnb_wrap ul.depth1 > li > .gnb_bg > ul.depth2 > li').removeClass('over')
        // })
        // // ##########################

        // ##################
       // 1차 메뉴 마우스 오버 / 키보드 포커스
        $('header .header_wrap .nav_container .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function () {
            if (device_status === 'pc') {
                const $this = $(this);
                const $gnbBg = $this.find('.gnb_bg');

                // 기존 오픈된 메뉴 초기화
                $('header').addClass('menu_over');
                $('header .depth1 > li').removeClass('over');
                $('header .gnb_bg').stop(true).animate({ height: 700 }, 0, function () {
                    $(this).css('display', 'none');
                });

                // 현재 메뉴 준비
                $gnbBg.css({
                    display: 'flex',
                    height: 'auto'
                });

                const targetHeight = $gnbBg.outerHeight();

                // 높이 부드럽게 적용
                $gnbBg
                    .css('height', 400)
                    .stop(true)
                    .animate({ height: targetHeight }, 700);

                $this.addClass('over');
            }
        });

        // 2차 메뉴 오버 처리
        $('header .depth2 > li').on('mouseenter focusin', function () {
            if (device_status === 'pc') {
                $('header .depth2 > li').removeClass('over');
                $(this).addClass('over');
            }
        }).on('mouseleave', function () {
            if (device_status === 'pc') {
                $(this).removeClass('over');
            }
        });

        // 3차 메뉴에 포커스 가면 2차 over 유지
        $('header .depth3 a').on('focusin', function () {
            if (device_status === 'pc') {
                $(this).closest('.depth2 > li').addClass('over');
            }
        });

        // 포커스가 header 전체에서 완전히 빠져나가면 초기화
        $('header').on('focusout mouseleave', function () {
            if (device_status === 'pc') {
                // 포커스가 완전히 나간 후 확인
                setTimeout(function () {
                    if (!$(document.activeElement).closest('header').length) {
                        $('header').removeClass('menu_over');
                        $('header .depth1 > li').removeClass('over');
                        $('header .depth2 > li').removeClass('over');
                        $('header .gnb_bg').stop(true).animate({ height: 0 }, 0, function () {
                            $(this).css('display', 'none');
                        });
                    }
                }, 0);
            }
        });

        
        // ##################

        $('li').each(function() { // 구버전 브라우저 지원 필요 li:has(> ul.depth3)
            if ($(this).find('ul.depth3').length > 0) {
                $(this).addClass('has-depth3');
            }
        });


        /* ****************************** 모바일 메뉴 열고 닫기 **************************** */
        $('header .header_wrap .nav_container .gnb .gnb_open').on('click', function(){
            $('header').addClass('menu_open')
            menu_open = true; // 추가
            // 첫 번째 1차 메뉴 자동으로 열기
            const $firstLi = $('header .gnb_wrap ul.depth1 > li').eq(0);
            $firstLi.addClass('open'); // open 클래스 추가
            $firstLi.find('>.gnb_bg').stop().slideDown(); // 2차 메뉴 열기
        })
        $('header .header_wrap .nav_container .gnb .gnb_close').on('click', function(){
            $('header').removeClass('menu_open')
            menu_open = false; // 추가
            // 열렸던 메뉴 초기화
            $('header .gnb_wrap ul.depth1 > li').removeClass('open')
            .find('.gnb_bg').stop().slideUp();
        })

        /* ****************************** 모바일 2차,3차 메뉴 열고 닫기 **************************
        * 지금 현재 메뉴가 열려있는 지 닫혀있는 지 구분 (li에 open 클래스 있는 지 유무)
        * 메뉴에 열려있으면 - li에 open 클래스를 삭제, 2차 메뉴 접기, 3차 메뉴 접기
        * 메뉴가 닫혀있으면 - li에 open 클래스를 추가, 2차 메뉴 열기, 3차 메뉴 열기
        * */

        function getDeviceStatus() {
            return window.innerWidth <= 1024 ? 'moblie' : 'pc';
        }
        
        let device_status = getDeviceStatus();
        let previous_device_status = device_status;
        
        // 윈도우 리사이즈 시 디바이스 변경 감지 및 메뉴 초기화
        $(window).on('resize', function () {
            device_status = getDeviceStatus();
        
            if (previous_device_status !== device_status) {
                previous_device_status = device_status;
        
                // 모바일로 전환 시
                if (device_status === 'moblie') {
                    $('header .gnb_wrap ul.depth1 > li').removeClass('open')
                        .find('.gnb_bg').removeAttr('style');
                    $('header .gnb_wrap ul.depth2 > li').removeClass('open')
                        .find('ul.depth3').removeAttr('style');
                }
        
                // PC로 전환 시
                if (device_status === 'pc') {
                    $('header .gnb_wrap ul.depth1 > li, header .gnb_wrap ul.depth2 > li').removeClass('open');
                    $('header .gnb_bg, header ul.depth3').removeAttr('style');
                }
            }
        });
        
        // 모바일: 1차 메뉴 클릭
        $('header .header_wrap .nav_container .gnb .gnb_wrap ul.depth1 > li > a').on('click', function (e) {
            if (device_status === 'moblie') {
                e.preventDefault();
        
                const $clickedLi = $(this).parent('li');
                const isOpen = $clickedLi.hasClass('open');
        
                if (!isOpen) {
                    // 다른 메뉴 닫기
                    $('header .gnb_wrap ul.depth1 > li').removeClass('open')
                        .find('.gnb_bg').stop(true).slideUp();
        
                    // 현재 메뉴 열기
                    $clickedLi.addClass('open');
                    $clickedLi.find('>.gnb_bg').stop(true).slideDown();
                }
                // 이미 열려 있으면 아무 동작 없음
            }
        });
        
        // 모바일: 2차 메뉴 클릭
        $('header .gnb_wrap ul.depth2 > li > a').on('click', function (e) {
            if (device_status === 'moblie') {
                e.preventDefault();
        
                const $clickedLi = $(this).parent('li');
                const isOpen = $clickedLi.hasClass('open');
        
                // 같은 2차 메뉴 내의 다른 3차 메뉴 닫기
                $clickedLi.siblings('li').removeClass('open')
                    .find('ul.depth3').stop(true).slideUp();
        
                if (isOpen) {
                    $clickedLi.removeClass('open');
                    $clickedLi.find('ul.depth3').stop(true).slideUp();
                } else {
                    $clickedLi.addClass('open');
                    $clickedLi.find('ul.depth3').stop(true).slideDown();
                }
            }
        });
        


        /* ************************************** footer : 시작 ************************************ */

        /*############# TOP버튼을 클릭하면 상단으로 스크롤 ##############*/
        $('footer .top').on('click', function(){
            // console.log('???????')
            $('html, body').animate({
                scrollTop: 0
            }, 500)
        })

         /* ****************************** f_link 메뉴 열고 닫기 **************************** */
         $('footer .f_link ul.depth1 > li > a').on('click', function(e) {
            e.preventDefault(); // 링크 이동 방지
            const $li = $(this).parent(); // 클릭한 a의 부모 li
        
            if ($li.hasClass('open')) {
                $li.removeClass('open'); // 열려 있으면 닫기
            } else {
                $('footer .f_link ul.depth1 > li').removeClass('open'); // 다른 건 닫고
                $li.addClass('open'); // 현재 것만 열기
            }
        });
        

        /* ************************************** footer : 끝 ************************************ */



    }) //$(document).ready(function()

    // 함수의 선언 -> 이런 것이 있다를 알려주는 것?
    function resize_chk(){
        window_w = $(window).width()
        // console.log(window_w)
        if(window_w > mobile_size){ // 1024 보다 크면 1025
            device_status = 'pc'
        }else{ // 같거나 작으면
            device_status = 'moblie'
        }
        // console.log(device_status)
    }

    function scroll_chk(){ //함수 선언
        // console.log('스크롤!!!!!!!!!!!!!!')
        if (menu_open === true) return;

        scrolling = $(window).scrollTop()
        // console.log(scrolling)
        if(scrolling > 0){
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
    }


    /* ************************************** header : 끝 ************************************ */
