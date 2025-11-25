$(document).ready(function(){
  AOS.init();

  const swiper = new Swiper('.swiper', {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: {
      forceToAxis: true,
      sensitivity: 5,
      thresholdDelta: 1,
      thresholdTime: 0
    },
    touchStartPreventDefault: false,
    speed: 600,
    on: {
      slideChange: function () {
        const idx = this.realIndex;
        
        $("header nav ul li").removeClass("on");
        $("header nav ul li").eq(idx).addClass("on");

        if (idx === 0) {
          $("header").removeClass("on");
        } else {
          $("header").addClass("on");
        }

        this.update();
      }
    }
  });

  $("header nav ul li").click(function () {
    const idx = $(this).index();
    swiper.slideTo(idx);
  });

  $(window).on('scroll mousemove', function(e){
    $('.cursor').css('left', e.pageX + 'px');
    $('.cursor').css('top', e.pageY + 'px');
  });

  $('.project1 .box').hover(function(){
    $('.cursor').toggleClass('on');
  });
  $('.project2 .box').hover(function(){
    $('.cursor').toggleClass('on');
  });
  $('.project3 .box').hover(function(){
    $('.cursor').toggleClass('on');
  });
});