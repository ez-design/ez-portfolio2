$(document).ready(function(){

    const myFullpage = new fullpage('#fullpage', {  /* html에서 페이지 전체를 감싸는 요소 */

        navigation: true, /* 오른쪽에 각 페이지의 paging */
        navigationPosition: 'left', /* 위치 */
        navigationTooltips: ['첫번째', '두번째', '세번째', '네번째'], /* 툴팁 */
        showActiveTooltip: true, /* 현재 활성화된 페이지의 툴팁에 특정 클래스 주기 */
        
        lockAnchors: true,
        anchors: ['link1', 'link2', 'link3', 'link4'], /* href="#link1" 이렇게 코딩하면 해당 링크명으로 이동 */
    
        autoScrolling:true, /* 한페이지씩 스크롤 */
        scrollHorizontally: true,
    
        verticalCentered: true, /* 컨텐츠 요소 위아래 가운데 */
        
        scrollOverflow: false, /* 컨텐츠가 넘쳐도 스크롤 금지 */

        onLeave: function(origin, destination, direction) {
            const header = document.getElementById('mainheader');
        
            if (destination.index === 0) {
              header.style.display = 'none';  // 첫 번째 페이지에서는 숨김
            } else {
              header.style.display = 'block'; // 다른 페이지에서는 보임
            }
          },
    
        afterLoad: function(origin, destination, direction, trigger){
            const header = document.getElementById('mainheader');
            if (destination.index === 0) {
            header.style.display = 'none';
            }
        },
        responsiveWidth: 640 /* fullpage를 적용시키지 않을 모바일 사이즈 */

    });//fullpage

    
    $(window).on('scroll mousemove', function(e){  /* html cursor가 마우스 포인터를 따라다니게 하는 값 */
      $('.cursor').css('left', e.pageX + 'px');
      $('.cursor').css('top', e.pageY + 'px');
    });
    $('.project01_wrap a.pj01').hover(function(){ /* 특정한 요소에 마우스를 올렸을때만 on 클래스 주기 */
      $('.cursor').toggleClass('on');
    });

    $(window).on('scroll mousemove', function(e){  /* html cursor가 마우스 포인터를 따라다니게 하는 값 */
      $('.cursor').css('left', e.pageX + 'px');
      $('.cursor').css('top', e.pageY + 'px');
    });
    $('.project02_wrap a.pj02').hover(function(){ /* 특정한 요소에 마우스를 올렸을때만 on 클래스 주기 */
      $('.cursor').toggleClass('on');
    });

    $(window).on('scroll mousemove', function(e){  /* html cursor가 마우스 포인터를 따라다니게 하는 값 */
      $('.cursor').css('left', e.pageX + 'px');
      $('.cursor').css('top', e.pageY + 'px');
    });
    $('.project03_wrap a.pj03').hover(function(){ /* 특정한 요소에 마우스를 올렸을때만 on 클래스 주기 */
      $('.cursor').toggleClass('on');
    });


})