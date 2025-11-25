// 마우스를 따라다니는 커서 위치 설정
$(function () {
    $(window).on('mousemove', function (e) {
        // console.log('dfsdfsdf')
        $('.cursor').css({
          left: e.pageX + 'px',
          top: e.pageY + 'px'
        });
      });
      
      // 특정 요소에 마우스를 올렸을 때만 커서 보이기
      $('.gnb .back, .go a, .pc a, .pc img').hover(
        function () {
          $('.cursor').addClass('on').text('click'); // 텍스트는 필요에 따라 변경 가능
        },
        function () {
          $('.cursor').removeClass('on').text('');
        }
      );
});
