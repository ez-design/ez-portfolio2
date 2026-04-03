$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 200) {  // 스크롤 200px 넘으면 등장
        $('.btn-top').addClass('show');
    } else {
        $('.btn-top').removeClass('show');
    }
});

$('.btn-top').on('click', function(){
    $('html, body').animate({ scrollTop : 0 }, 500);
});
let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 50) {
        header.classList.add("hide");
    } else {
        header.classList.remove("hide");
    }

    lastScroll = currentScroll;
});

window.addEventListener("mousemove", function (e) {
    if (e.clientY < 80) {
        header.classList.remove("hide");
    }
});
});
