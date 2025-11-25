$(document).ready(function(){
    //console.log('되ㅏ니');
    $('header .gnb .open').on('click', function(){
        console.log('눌렸니???');
        $('header').addClass('menu_open')
    })
    $('header .total_menu .close').on('click', function(){
        console.log('눌렸니???');
        $('header').removeClass('menu_open')
    })  
})