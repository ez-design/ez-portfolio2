$(document).ready(function(){
    let device_status
    let mobile_size = 768

    resize_chk()

    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter', function(){
        if(device_status == 'pc'){
            $('header').addClass('menu_over')
        }
    })
    $('header').on('mouseleave', function(){
        $('header').removeClass('menu_over')
    })

    function resize_chk(){
        window_w = $(window).width()
        //console.log(window_w)
        if(window_w > mobile_size){ //1024보다 크면
            device_status = 'pc'
        }else{ //같거나 작으면
            device_status = 'mobile'
        }
    }
})