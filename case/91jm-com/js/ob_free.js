
$(document).ready(function(){
var $scroll_nav_top = $('#scroll_nav').offset();
var offset=100;
var row_1=0,row_2=0,row_3=0,row_4=0,row_5=0,row_6=0,row_7=0,row_8=0,row_9=0;
function scrollLocation () {
         row_1 = $('#row_1').offset()?$('#row_1').offset().top-offset:0;
         row_2 = $('#row_2').offset()?$('#row_2').offset().top-offset:0;
         row_3 = $('#row_3').offset()?$('#row_3').offset().top-offset:0;
         row_4 = $('#row_4').offset()?$('#row_4').offset().top-offset:0;
         row_5 = $('#row_5').offset()?$('#row_5').offset().top-offset:0;
         row_6 = $('#row_6').offset()?$('#row_6').offset().top-offset:0;
         row_7 = $('#row_7').offset()?$('#row_7').offset().top-offset:0;
         row_8 = $('#row_8').offset()?$('#row_8').offset().top-offset:0;
         row_9 = $('#row_9').offset()?$('#row_9').offset().top-offset:0;
}
x = 0;
    $(window).on('selectTp load',function(){
        scrollLocation ();
    }).resize(function() {
		$("#as").text(x+=1);
         scrollLocation ();
    }).scroll(function(){  //监听滚动条
        var $scrollTop = $(this).scrollTop(),$scroll_nav = $('#float-c-nav');
            if($scroll_nav.attr('selfpack')==='true'){
                
            }else{
				if ( $.browser.msie ) {
					$scrollTop>=$scroll_nav_top.top?$scroll_nav.css({top:$scrollTop-208}):$scroll_nav.css({top:0});//IE6定位
				} 
                $scrollTop>=$scroll_nav_top.top?$scroll_nav.addClass('scroll_nav_change'):$scroll_nav.removeClass('scroll_nav_change');//浮动导航
               // $scrollTop>0?$goTopBtn.show():$goTopBtn.hide();//返回顶部
            }
            if(row_9>0&&$scrollTop >= row_9) {
                $('_ul li').removeClass('scroll_nav_current');
                $('.row_9').addClass('scroll_nav_current');
            } else if(row_8>0&&$scrollTop >= row_8) {
                $('.scroll_nav_ul li').removeClass('scroll_nav_current');
                $('.row_8').addClass('scroll_nav_current');
            }else  if(row_7>0&&$scrollTop >= row_7) {
                $('.scroll_nav_ul li').removeClass('scroll_nav_current');
                $('.row_7').addClass('scroll_nav_current');
            }else  if(row_6>0&&$scrollTop >= row_6) {
                $('.scroll_nav_ul li').removeClass('scroll_nav_current');
                $('.row_6').addClass('scroll_nav_current');
            }else  if(row_5>0&&$scrollTop >= row_5) {
                $('.scroll_nav_ul li').removeClass('scroll_nav_current');
                $('.row_5').addClass('scroll_nav_current');
            }else  if(row_4>0&&$scrollTop >= row_4) {
                $('.scroll_nav_ul li').removeClass('scroll_nav_current');
                $('.row_4').addClass('scroll_nav_current');
            }else  if(row_3>0&&$scrollTop >= row_3) {
                $('.scroll_nav_ul li').removeClass('scroll_nav_current');
                $('.row_3').addClass('scroll_nav_current');
            }else  if(row_2>0&&$scrollTop >= row_2) {
                $('.scroll_nav_ul li').removeClass('scroll_nav_current');
                $('.row_2').addClass('scroll_nav_current');
            }else  if(row_1>0&&$scrollTop >= row_1) {
                $('.scroll_nav_ul li').removeClass('scroll_nav_current');
                $('.row_1').addClass('scroll_nav_current');
            }
    });
		$('.scroll_nav_ul li').removeClass('scroll_nav_current')
		    .first().addClass('scroll_nav_current').end()
            .live('click',function(event){ 
                //$(this).off('click');
                var $scroll_nav_ul_li = $('.scroll_nav_ul li');
    			var li_id = $(this).attr("class"); 
    			var $li = $('#'+li_id);
    			if($li.length){
                    $('html, body').stop(true).animate({scrollTop:$li.offset().top},1000);
                }
    			event.stopPropagation(); 
        });
});
