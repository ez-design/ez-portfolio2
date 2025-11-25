$(document).ready(function(){

/***************갤러리***************** */


    const gallery_swiper = new Swiper('.gallery .bigphoto .swiper', { /* 팝업을 감싼는 요소의 class명 */

	// autoplay: {  /* 팝업 자동 실행 */
	// 	delay: 2500,
	// 	disableOnInteraction: true,
	// },

	effect: "fade", /* fade 효과 */

	loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

	pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
		el: '.gallery .count', /* 해당 요소의 class명 */
		clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
		type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
		// renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
		//     return '<span class="' + className + '">' + (index + 1) + "</span>";
		// },
	},
	

    });
    // gallery_swiper.autoplay.btn_stop();  /* 일시정지 기능 */
    // gallery_swiper.autoplay.btn_play();  /* 재생 기능 */

    $('.gallery .inner .bigphoto .swiper .ctrl_btn button.btn_stop').on('click', function(){
        gallery_swiper.autoplay.stop(); /* 일시정지 기능 */
        // console.log('정지버튼 클릭')
        $(this).hide()
        $('.gallery .inner .bigphoto .swiper .ctrl_btn button.btn_play').show()
    })
    $('.gallery .inner .bigphoto .swiper .ctrl_btn button.btn_play').on('click', function(){
        // console.log('재생버튼')
        gallery_swiper.autoplay.start();/* 재생 기능 */
        $(this).hide()
        $('.gallery .inner .bigphoto .swiper .ctrl_btn button.btn_stop').show()
    })

    $('.gallery .paging ul li').on('click', function(){ /*클릭하면 보이게*/
        gallery_swiper.slideTo($(this).index()+1)
    })

/**********************map_info*************************** */



    // 1. 클릭한 li에서 data-content값을 가져와서(############보류)
                //    ==>tab_item 중에 해당값이 id인 요소를 찾아서 나타나게 해야함 (다른 요소는 숨김)
                // 2. 클릭한 li에만 active 클래스 줌
                // 3.클릭한 li안에 있는 span에 선택됨이라고 글자 써줌( 다른 li에 있는건 삭제)
                // 4.클릭한 li속성 aria-selected값을 true로 변경 (다른 li는 모두 false)

                let map_info //클릭한 메뉴의 이름(id)
                $('.map_info .inner .area .tab_list ul li').on('click', function(){

                    
                    if($(this).hasClass('active') == false){
                        // console.log('선택안된메뉴...')
                        map_info = $(this).attr('data-content')//tab-item1
                        // console.log(find_content)
                        $('.map_info .inner .area .tab_content .tab_item ').removeClass('active')
                        $('.map_info .inner .area .tab_content').find('#'+map_info).addClass('active')
                        
                        $('.map_info .inner .area .tab_list ul li').removeClass('active')
                        $(this).addClass('active')
                    }
                })
    

   


})
    
    
    
    
    
    
    
    
    
    