$(document).ready(function(){

    const snbScroll = function() {
                    const $menu_wrap = $(".lnb ul");  /* 선택자를 잘 입력해야함 */
                    const $menu_li = $(".lnb ul li");  
                    function scrollToElement($element) {
                        const containerWidth = $menu_wrap.width();
                        const itemWidth = $element.outerWidth(true);
                        const totalItemsWidth = $menu_wrap[0].scrollWidth;
                        const newScrollPosition = ($element.index() === 0) ? 0 :
                            ($element.index() === $menu_li.length - 1) ? totalItemsWidth - containerWidth :
                            $element.position().left + $menu_wrap.scrollLeft() - (containerWidth - itemWidth) / 2;
                        $menu_wrap.animate({
                            scrollLeft: newScrollPosition
                        }, 500);
                    }
                    const $activeItem = $menu_wrap.find(".active");
                    if ($activeItem.length) {
                        scrollToElement($activeItem);
                    }
                } 
                snbScroll();   /* 함수의 실행 */

                
/***********애니메이션***************/
                AOS.init({
                offset: 150, // 해당 콘텐츠가 하단에서 몇 px 위로 올라와에 나타나는 효과가 나타날지 셋팅하는 값
                duration: 500, // 애니메이션 효과가 작동되는 시간
                easing: 'ease', // 가속도
                });
})