$(function() {
	
	/*	时光轴	*/
	
	function reTimeline(){
		var currentTime = $('i[name=time_plot][num=0]').get(0);
		var windowWidth = $(window).width();
		$('div .time_show').css('height', ($('div .time_show a').height() + 5) + 'px');
		$("i[name=time_plot]").mousemove(function() {
			if (currentTime == this) { return;}
			var timeName = $(this).find("a:first-child").attr('href');
			if (windowWidth <= 1280) {
				$('.time_show a').css({"left": $(this).position().left - 26 + "px"});
				$('.case_show div p').remove();
				$('.case_show div').hide().css({"left": $(this).position().left - 50 + "px"}).fadeIn();
			} else if (windowWidth > 1280) {
				$('.time_show a').css({"left": $(this).position().left - 8 + "px"});
				$('.case_show div p').remove();
				$('.case_show div').hide().css({"left": $(this).position().left - 30 + "px"}).fadeIn();
			}
			$('.case_show div').append($(this).attr('tips'));
			$('div .time_show span').html($(this).attr('tag'));
			$('div .time_show a').attr('tag', $(this).attr('tag').replace('.', ''));
			$('div .time_show a *').hide().fadeIn();
			$('div .time_show a').attr('href', timeName);
			$(this).addClass("on");
			$(currentTime).removeClass("on");
			currentTime = this;
		});
		var allTime = $("i[name=time_plot]");
		var len = allTime.length;
		var width = $('.time_line').width();
		if (windowWidth <= 1280) {
			var space = (width - 350) / (len - 1);
		} else if (windowWidth > 1280) {
			var space = (width - 180) / (len - 1);
		}
		for (var i = len - 1; i >= 0; i--) {
			var timePlot = allTime[i];
			var num = parseInt($(timePlot).attr('num'));			
			$(timePlot).css({"left": (50 + num * space) + "px"});
		}
		$('i[name=time_plot][num=12]').mousemove();
	};reTimeline();

	/*响应式布局*/
	
	function Response() {
        var windowWidth = $(window).width();
        if (windowWidth <= 1280) {//小于1280Px
			$("body").addClass("s");
        	$(".container").css({"width":"998px"});
			$(".contBox").css({"width":"900px"});
			$(".siteShow").css({"width":"680px"});
			$(".siteMain").css({"width":"680px"});
			$(".tempWrap").css({"width":"630px"});
			$(".slide").css({"width":"1360px"});
			$(".slide ul").css({"width":"630px"});
			$(".tree").css({"width":"1010px"});
			$(".time_line").css({"background-position":"0px -4px"});
        } else if (windowWidth > 1280) {//大于1280Px
			$("body").addClass("b");
			$(".container").css({"width":"1210px"});
			$(".contBox").css({"width":"1100px"});
			$(".siteShow").css({"width":"890px"})
			$(".siteMain").css({"width":"890px"});
			$(".tempWrap").css({"width":"840px"});
			$(".slide").css({"width":"1680px"});
			$(".slide ul").css({"width":"840px"});
			$(".tree").css({"width":"1102px"});
			$(".time_line").css({"background-position":"0px 0px"});
        }
    };
    Response();
	
	//窗口变化
    $(window).resize(function() {
        Response();
		reTimeline();
    })	
	
})

$(document).ready(function() {
	var topHeight = "745px";
	var tc = $("#ajax");
	var bH = 190;
	var cH = 520;
	var oTrigger = $('.open'),
        cTrigger = $('.close');
    tc.css('top',topHeight);
	oTrigger.click(function(){
		$("#ajax").html("<div class='loading'></div>");
		$("#ajax").animate({top:855,height:0},350,function(){ window.scrollTo(0,0);});
		setTimeout(function(){
			tc.load("about.html");
			tc.show().animate({top:190,height:bH+cH+145},350,function(){ window.scrollTo(0,0);});
			$(".footer").css({"position":"fixed","bottom":"0px"});			
		},350);
	});
	$(".open2").click(function(){
		$("#ajax").html("<div class='loading'></div>");
		$("#ajax").animate({top:855,height:0},350,function(){ window.scrollTo(0,0);});
		setTimeout(function(){
			tc.load("history.html");
			tc.show().animate({top:190,height:bH+cH+235},350,function(){ window.scrollTo(0,0);});
			$(".footer").css({"position":"fixed","bottom":"0px"})
		},350);
	})
});