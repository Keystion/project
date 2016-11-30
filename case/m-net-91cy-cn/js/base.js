$(function(){
	$(".search-btn").click(function(){
		$(".search-warp").addClass("show");	
		$("#q").focus();
	})
	$(".btn-cancel").click(function(){
		$(".search-warp").removeClass("show");	
	})
	$(".showicon").click(
		function(){
			$(".channel-nav").toggle();
			$(this).toggleClass("hideicon");
		}
		/*function(){
			$(this).addClass("hideicon");
			$(".channel-nav").stop(true,true).css("display","block");
		},function(){
			$(this).removeClass("hideicon");
			$(".channel-nav").stop(true,true).css("display","none");
		}*/
	)
	//
	function scrollerTouchSlide(){
		TouchSlide({ slideCell:"#scroller" });
	}
	
	TouchSlide({ 
		slideCell:"#slideBox",
		titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
		mainCell:".bd ul", 
		effect:"leftLoop", 
		autoPage:true,//自动分页
		autoPlay:false, //自动播放
		delayTime:"320"
	});
	TouchSlide({ 
		slideCell:"#picScroll",
		titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
		autoPlay:false, //自动播放
		switchLoad:"_src" //切换加载，真实图片路径为"_src" 
	});
	
	var scrollUp;
	scrollUp || (scrollUp = {});
	(function(a) {
		a.fn.extend({
			returntop: function() {
				if (this[0]) {
					var b = this.click(function() {
						a('html, body').animate({
							scrollTop: 0
						},300)
					})
				}
			}
	
		})	
	})($);
	$('#topcontrol').returntop();
	
	resMenu = function() {
		if($(window).scrollTop() > 60){
			$("#navigation").css({
				display: "block"
			})
		}else{
			$("#navigation").css({
				display: "none"
			})
		}
	}
	$(window).scroll(function() {
		resMenu()
	});
	
	$(".load-all .btn").click(function(){
		$(".xm-content-wrap").css({
			height: "initial"
		})
		$(this).hide();
	})
	
	
	
	window.onload=function(){
		document.getElementById('scroller')?scrollerTouchSlide():false;
	}
})
