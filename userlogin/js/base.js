$(function() {
	function reTimeline(){
		var currentTime = $('i[name=time_plot][num=0]').get(0), windowWidth = $(window).width();
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
		var allTime = $("i[name=time_plot]"), len = allTime.length, width = $('.time_line').width();
		if (windowWidth <= 1280) {
			var space = (width - 350) / (len - 1);
		} else if (windowWidth > 1280) {
			var space = (width - 180) / (len - 1);
		}
		for (var i = len - 1; i >= 0; i--) {
			var timePlot = allTime[i], num = parseInt($(timePlot).attr('num'));			
			$(timePlot).css({"left": (50 + num * space) + "px"});
		}
		$('i[name=time_plot][num=12]').mousemove();
	};reTimeline();
	function reSponse() {
        var windowWidth = $(window).width();
        if (windowWidth <= 1280) {//小于1280Px
        	$(".container").css({"width":"998px"});$(".contBox").css({"width":"900px"});$(".siteShow").css({"width":"680px"});$(".siteMain").css({"width":"680px"});$(".tempWrap").css({"width":"630px"});$(".slide").css({"width":"1360px"});$(".slide ul").css({"width":"630px"});$(".tree").css({"width":"1010px"});$(".time_line").css({"background-position":"0px -4px"})
        } else if (windowWidth > 1280) {//大于1280Px
			$(".container").css({"width":"1210px"});$(".contBox").css({"width":"1100px"});$(".siteShow").css({"width":"890px"});$(".siteMain").css({"width":"890px"});$(".tempWrap").css({"width":"840px"});$(".slide").css({"width":"1680px"});$(".slide ul").css({"width":"840px"});$(".tree").css({"width":"1102px"});$(".time_line").css({"background-position":"0px 0px"})
        }
    };
    reSponse();
    $(window).resize(function() { reSponse(); reTimeline();})	
})

$(function() {
	var tc1 = $("#ajax1"), tc2 = $("#ajax2"), oT1 = $('.o1'), cT1 = $('.c1'), oT2 = $('.o2'), cT2 = $('.c2'), cS1 = $('.close1'), cS2 = $('.close2'), aj = $(".ajax");
	oT1.click(function(){
		switch($('#ajax2').css('display'))
		{
			case "block":tc2.hide();break;
			case "none":break;
			default:
		}
		$(this).removeClass("o1").addClass("c1");
		tc1.slideToggle();
	});
	cT1.click(function(){$(this).removeClass("c1").addClass("o1");});
	cS1.click(function(){tc1.slideToggle();});
	oT2.click(function(){
		switch($('#ajax1').css('display'))
		{
			case "block":tc1.hide();break;
			case "none":break;
			default:
		}
		$(this).removeClass("o2").addClass("c2");
		tc2.slideToggle();
	})
	cT2.click(function(){ $(this).removeClass("c2").addClass("o2"); });
	cS2.click(function(){ tc2.slideToggle(); });
	aj.css({"display":"none"});
});