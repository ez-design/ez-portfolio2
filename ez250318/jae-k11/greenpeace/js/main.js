
$(document).ready(function(){
        /*************visual 의 swiper 연결 : 시작 ************/

        const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

            autoplay: {  /* 팝업 자동 실행 */
               delay: 25000,
               disableOnInteraction: true,
            },

            effect: "fade", /* fade 효과 */

            loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
            
            	pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
                    el: '.visual .control .ctrl_wrap .pagination', /* 해당 요소의 class명 */
                    clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
                    type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
                    // renderBullet: function (currentClass, totalClass) {   /* paging에 특정 코드 넣기 */
                    //     return '<span class="current ${currentClass}">' + (index + 1) + "</span>";
                    // },
                },
            

            navigation: {  /* 이전, 다음 버튼 */
                nextEl: '.visual .control .ctrl_wrap button.btn_next',  /* 다음 버튼의 클래스명 */
                prevEl: '.visual .control .ctrl_wrap button.btn_prev',  
            },
        });
        

        $('.visual .control .ctrl_wrap button.btn_stop').on('click', function(){
            visual_swiper.autoplay.stop();  /* 일시정지 기능 */
            $('.visual .control .ctrl_wrap button.btn_stop').hide();
            $('.visual .control .ctrl_wrap button.btn_play').show();
        })
        $('.visual .control .ctrl_wrap button.btn_play').on('click', function(){
            visual_swiper.autoplay.start();  /* 재생 기능 */
            $('.visual .control .ctrl_wrap button.btn_stop').show();
            $('.visual .control .ctrl_wrap button.btn_play').hide();

           //console.log('클릭')
        })
        

        /*************visual 의 swiper 연결 : 끝 ************/

      
})//$(document).ready

