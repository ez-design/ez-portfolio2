
  document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('header ul li');

    navItems.forEach(function (item) {
      const link = item.querySelector('a');
      const href = link.getAttribute('href');
      const currentPath = window.location.pathname;

      // 현재 경로에 링크 경로가 포함되면 'on' 클래스 추가
      if (currentPath.includes(href.replace('../', '').replace('./', ''))) {
        item.classList.add('on');
      }
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
    $('a:not(header a)').hover(
    function () {
      $('.cursor').addClass('on');
    },
    function () {
      $('.cursor').removeClass('on');
    }
    );
  });