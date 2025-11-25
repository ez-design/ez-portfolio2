$(document).ready(function () {
 new fullpage('#fullpage', {
    anchors: ['home', 'profile', 'project01', 'project02', 'project03', 'end'],
    menu: '.header_wrap ul',
    afterLoad: function (origin, destination, direction) {
    var index = destination.index;

    $('.header_wrap ul li').removeClass('active');

    if (index === 1) {
      $('.header_wrap ul li').eq(0).addClass('active'); // PROFILE
    } else if (index === 2) {
      $('.header_wrap ul li').eq(1).addClass('active'); // PROJECT01
    } else if (index === 3) {
      $('.header_wrap ul li').eq(2).addClass('active'); // PROJECT02
    }else if (index === 4) {
      $('.header_wrap ul li').eq(3).addClass('active'); // PROJECT03
    }
    

      if (index >= 1 && index <= 4) {
      $('.header_wrap').show(); // 1~3번 섹션이면 보여줌
    } else {
      $('.header_wrap').hide(); // 0번, 4번 이상이면 숨김
    }
  }
    
    
});
});