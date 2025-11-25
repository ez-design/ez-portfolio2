$(document).ready(function(){
	//header .total_menu .open
    //header .total_menu .total_menu_wrap .close
    $('header .total_menu .open').on('click', function(){
		$('header .total_menu .total_menu_wrap').addClass('active');	
	});
    $('header .total_menu .total_menu_wrap .close').on('click', function(){
		$('header .total_menu .total_menu_wrap').removeClass('active');	
	});
})