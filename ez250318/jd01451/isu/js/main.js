$(document).ready(function(){

        const myFullpage = new fullpage('#fullpage', {  /* html에서 페이지 전체를 감싸는 요소 */

        lockAnchors: false,
        anchors: ['visual', 'info', 'chemical', 'erection', 'bio', 'it', 'esg', 'footer'], /* href="#link1" 이렇게 코딩하면 해당 링크명으로 이동 */

        autoScrolling: true, /* 한페이지씩 스크롤 */
        scrollHorizontally: true,

        verticalCentered: true, /* 컨텐츠 요소 위아래 가운데 */

        scrollOverflow: false, /* 컨텐츠가 넘쳐도 스크롤 금지 */

        afterLoad: function(origin, destination, direction, trigger){

            if(destination.index == 2){
                $('.chemical ul li:first-child').addClass('on')
            }else if(destination.index == 3){
                $('.erection ul li:nth-child(2)').addClass('on')
            }else if(destination.index == 4){
                $('.bio ul li:nth-child(3)').addClass('on')
            }else if(destination.index == 5){
                $('.it ul li:last-child').addClass('on')
            }
            
        },

        onLeave: function(origin, destination, direction, trigger){
            if(destination.index == 2, 3, 4, 5){
                $('ul li').removeClass('on')
            }
        },

        responsiveWidth: 769, /* fullpage를 적용시키지 않을 모바일 사이즈 */
        responsiveHeight: 800

    });

})