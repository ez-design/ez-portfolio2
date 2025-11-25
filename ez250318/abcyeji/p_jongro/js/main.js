$(document).ready(function(){

// /**********header시작*********** */((((((((((common으로 이동)))))))))))))
//         //header .gnb .gnb_wrap ul.depth1 > li 
//         // $('header .gnb .gnb_wrap ul.depth1 > li').addClass('over') 클래스추가삭제확인
//         // $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')

//         $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
//             $('header').addClass('menu_over')

//         $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2 > li:last-child').on('focusout', function(){/*?????**/
//             $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')  //탭으로이동시 마지막 하위메뉴에서 메뉴사라지게
//     })

//         $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over') //마우스오버삭제
//             $(this).addClass('over')
//         })

//         $('header .gnb').on('mouseleave', function(){
//             $('header').removeClass('menu_over')
//             $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
//         })

//         /****모바일* */
//         $('header .gnb .gnb_wrap ul.depth1 > li > a').on('click', function(e){
//             e.preventDefault()
//             // console.log('눌렀니?')
//             // $(this).parents('li').addClass('open')//li선택할려고
            
//             let depth1_open =  $(this).parents('li').hasClass('open') //나자신
//             // console.log(depth1_open) //클릭된애 ture 아닌거 false
//             if(depth1_open == true){ //열려있는상태
//                 $(this).parents('li').removeClass('open')
//             }else{ //닫혀있는상태
//                 $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('open') //클릭된거 삭제
//                 $(this).parents('li').addClass('open')
//             }
//         })

//         /**모바일-메뉴열고닫기* */
//         $('header .gnb .gnb_open').on('click', function(){
//             $('header').addClass('menu_open')
//         })
//         $('header .gnb .gnb_close').on('click', function(){
//             $('header').removeClass('menu_open')
//         })

    
//         $(function(){
//             $("html, body").animate({ scrollTop: 0 }, "fast"); 
//         });


/**************visual 시작************** */
            const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

            // autoplay: {  /* 팝업 자동 실행 */
            //     delay: 2500,
            //     disableOnInteraction: true,
            // },

            //effect: "fade", /* fade 효과 */

            loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

            pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
                el: '.visual .paging', /* 해당 요소의 class명 */
                clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
                // type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
                // renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
                //     return '<span class="' + className + '">' + (index + 1) + "</span>";
                // },
            },
            
        });
/***************tourist 시작**************************/
                // 1. 클릭한 li에서 data-content값을 가져와서
                //    ==>tab_item 중에 해당값이 id인 요소를 찾아서 나타나게 해야함 (다른 요소는 숨김)
                // 2. 클릭한 li에만 active 클래스 줌
                // 3.클릭한 li안에 있는 span에 선택됨이라고 글자 써줌( 다른 li에 있는건 삭제)
                // 4.클릭한 li속성 aria-selected값을 true로 변경 (다른 li는 모두 false)

                let tourist_content //클릭한 메뉴의 이름(id)
                $('.tourist .inner .tap_list ul li').on('click', function(){

                    
                    if($(this).hasClass('active') == false){
                        // console.log('선택안된메뉴...')
                        tourist_content = $(this).attr('data-content')//tab-item1
                        // console.log(find_content)
                        $('.tourist .tab_content .tab_item').removeClass('active')
                        $('.tourist .tab_content').find('#'+tourist_content).addClass('active')
                        
                        $('.tourist .inner .tap_list ul li').removeClass('active')
                        $(this).addClass('active')
                    }
                })


/******************notice시작**************************** */
    const popupzone_swiper = new Swiper('.popupzone .swiper', { /* 팝업을 감싼는 요소의 class명 */

        // autoplay: {  /* 팝업 자동 실행 */
        //     delay: 2500,
        //     disableOnInteraction: true,
        // },

        //effect: "fade", /* fade 효과 */

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.notice .ctrl_wrap .count', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
            renderBullet: function (currentClass, totalClass) {   /* paging에 특정 코드 넣기 */
            return `<span class="${currentClass}"></span> / <span class="${totalClass}"></span>`;
            },
            formatFractionCurrent: function (number) {
                return number < 10 ? '0' + number : number;  // 현재 슬라이드 숫자에 0 추가
            },
            formatFractionTotal: function (number) {
                return number < 10 ? '0' + number : number;  // 총 슬라이드 숫자에 0 추가
            },
        },


        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.popupzone .btn_next',  /* 다음 버튼의 클래스명 */
            prevEl: '.popupzone .btn_prev',  
        },

        });
})