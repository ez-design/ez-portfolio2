$(document).ready(function(){


    $('.quick .btn').on('click', function(){
        if($(this).hasClass('open') == true){
            $(this).removeClass('open')
            $(this).addClass('close')
            $(this).find('span').text('닫기')
            $('.quick .detail').slideDown(300)
        }else{
            $(this).removeClass('close')
            $(this).addClass('open')
            $(this).find('span').text('열기')
            $('.quick .detail').slideUp(200)
        }
    })




    //breadcrumb 메뉴
    $('.sub_menu .breadcrumb ol > li').on('click', function(){
        if($(this).hasClass('open') == true){
            $(this).removeClass('open')
        }else{
            $('.sub_menu .breadcrumb ol > li').removeClass('open')
            $(this).addClass('open')
        }
    })





    //his_tit 글자 색 차오름
    let scrolling;
    let win_h;
    let slogan = $('.ctn_history .his_tit');
    let slogan_obj = $('.ctn_history .his_tit h2 span');
    let slogan_leng = slogan_obj.length;
    let slogan_top, slogan_start, slogan_end, slogan_scroll;

    function slogan_ani() {
        slogan_top = slogan.offset().top;
        slogan_start = slogan_top - win_h + (win_h * 0.3);
        slogan_end = slogan_top + slogan.height() - win_h + (win_h * 0.5);

        slogan_scroll = (scrolling - slogan_start) / (slogan_end - slogan_start) * 100;

        if (scrolling < slogan_start) {
            slogan_obj.width(0);
        } else if (scrolling >= slogan_end) {
            slogan_obj.width('100%');
        } else {
            for (let i = 0; i < slogan_leng; i++) {
                let part = (slogan_scroll - (100 / slogan_leng) * i) * slogan_leng;
                if (part < 0) part = 0;
                if (part > 100) part = 100;
                slogan_obj.eq(i).width(part + '%');
            }
        }
    }

    $(window).on('scroll resize', function () {
    scrolling = $(window).scrollTop();
    win_h = $(window).height();
    slogan_ani();
    });

    // 최초 실행
    $(function () {
        scrolling = $(window).scrollTop();
        win_h = $(window).height();
        slogan_ani();
    });





    if($('.ctn_history').length > 0){
    
        let scrolling
        let window_h
        let obj_name = $('.ctn_history .his_photo')
        let obj_photo
        let obj_photo_top
        let obj_photo_show
        let obj_nav = $('.ctn_history .his_nav')
        let obj_nav_area = $('.ctn_history')
        let obj_nav_start
        let obj_nav_end
        let obj_nav_p = $('.sub_visual .depth1_name span')
        

        
    

        function nav_show(){
            obj_nav_start = obj_nav_area.offset().top

            obj_nav_end = obj_nav_area.height() + obj_nav_p.offset().top


            if((scrolling > obj_nav_start) && (scrolling < obj_nav_end)){
                obj_nav.addClass('active')
            }else{
                obj_nav.removeClass('active')
            }
        }
        function scroll_chk(){
            scrolling = $(window).scrollTop()
        }
        function resize_chk(){
            window_h = $(window).height()
        }
        function photo_show(){
            for(i = 0; i < obj_name.length; i++){
                // console.log(i)
                obj_photo = obj_name.eq(i)
                obj_photo_top = obj_photo.offset().top
                obj_photo_show = (window_h + scrolling) - obj_photo_top - obj_photo.height()
                if(obj_photo_show > 0){
                    obj_photo.addClass('active')
                }else{
                    obj_photo.removeClass('active')
                }
            }
        }
        

        $(window).scroll(function(){
            scroll_chk()
            photo_show()
            nav_show()
        })
        $(window).resize(function(){
            resize_chk()
            photo_show()
            nav_show()
        })
        

        scroll_chk()
        resize_chk()
        photo_show()
        nav_show()




        /************* nav 메뉴 선택 클릭 이동 *****************/
        let menuName = $('.ctn_history .his_nav')
        let menuItem = $('.ctn_history .his_nav ul li')
        let sectionName
        let moveTop
        let areaTop
        let areaH
        let areaName
        let scrollTop
        menuItem.on('click', function(){
            sectionName = $(this).attr('data-link');
            let target = $('*[data-menu="'+sectionName+'"]');
            let menuHeight = menuName.height();
            let targetTop = target.offset().top - menuHeight;

            let documentHeight = $(document).height();
            let windowHeight = $(window).height();
            let maxScrollTop = documentHeight - windowHeight;

            if (targetTop > maxScrollTop) {
                targetTop = maxScrollTop;
            }

            $('html, body').animate({
                scrollTop : targetTop
            }, 500);
        });
        menuChk()
        $(window).scroll(function(){
            menuChk()
        })
        function menuChk(){
            scrollTop = $(window).scrollTop();
            let winH = $(window).height();
            let triggerLine = scrollTop + winH / 2;

            menuItem.removeClass('active');

            $('*[data-menu]').each(function () {
                let $this = $(this);
                let thisTop = $this.offset().top;
                let thisBottom = thisTop + $this.outerHeight();
                let thisName = $this.attr('data-menu');

                if (triggerLine >= thisTop && triggerLine < thisBottom) {
                    menuItem.filter('[data-link="' + thisName + '"]').addClass('active');
                    return false;
                }
            });
        }
    } //if종료

})//$(document).ready