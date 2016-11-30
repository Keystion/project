// JavaScript Document
function changePrices(priceName,radioName){
	$(priceName).click(function(){
		$(this).children("input").attr("checked",'checked');
		/*var val = $('input:radio[name="'+radioName+'"]:checked').val();
		alert(val);*/
		$(this).addClass("on").siblings().removeClass("on");
	})
}
$(document).ready(function() {
/**
 * 左侧搜索模块
 */
	$('input:radio[name="type"]').click(function() {
		if ($('input:radio[name="type"]').is(":checked")) {
			var val = $('input:radio[name="type"]:checked').val();
			if (val == '0') {
				$(".room").addClass("on").siblings().removeClass("on");
			} else if (val == '1') {
				$(".sport").addClass("on").siblings().removeClass("on");
			} else if (val == '2') {
				$(".spa").addClass("on").siblings().removeClass("on");
			} else if (val == '3') {
				$(".meeting").addClass("on").siblings().removeClass("on");
			} else if (val == '4') {
				$(".affordable").addClass("on").siblings().removeClass("on");
			} else if (val == '5') {
				$(".food").addClass("on").siblings().removeClass("on");
			}
		}
	});
	
	changePrices(".s-price-li-s","sport-price");
	changePrices(".s-price-li-spa","spa-price");
	changePrices(".s-price-li-m","meeting-price");
	changePrices(".s-price-li-f","food-price");
	
/**
 * 全局头部导航 鼠标经过 显示下拉功能菜单
 */
	$(".has-pulldown").hover(function(){
		$(".pulldown").show();
		$(this).addClass("on");
	},function(){
		$(".pulldown").hide();
		$(this).removeClass("on");
	})
	
/**
 *  管理账户 用户设置  编辑保存功能
 */
	$("#edit").click(function (){
		$("#userName").removeClass("readonly-ipt");
	});
	$("#definite").click(function (){
		$("#userName").addClass("readonly-ipt");
	});
	
/**
 * 管理账户 修改密码 获取验证码
 */
	
	$("#getyzm").click(function (){
		$(this).siblings(".getpwd_tips").show();
	});
	
/**
 * 首页焦点图  右侧上面
 */
	jQuery(".focusBox").hover(function(){ jQuery(this).find(".prev,.next").stop(true,true).fadeTo("show",0.2) },function(){ jQuery(this).find(".prev,.next").fadeOut()});
	jQuery(".focusBox").slide({ mainCell:".pic",effect:"fold", autoPlay:true, interTime:5000, delayTime:600, trigger:"click"});
	
/**
 * 首页微博互动
 */
	jQuery(".aside-sns").slide({trigger:"click"});
	
/**
 * 首页底部  合作酒店
 */
	jQuery(".cooperation").slide({ titCell:".list li", mainCell:".piclist", effect:"left",vis:5,scroll:1,autoPlay:true,interTime:5000,delayTime:800,trigger:	"click",easing:"easeOutCirc"});
	
/**
 * 在线订购页面 左侧 图片切换
 */
	jQuery(".picMarquee-top").slide({mainCell:".bd ul",autoPlay:true,effect:"topLoop",vis:4,scroll:1,interTime:3000,trigger:"click"});
	
/**
 * 在线订购页面 右侧 酒店图片展示
 */
	jQuery(".h-picshow").slide({ effect:"fold", autoPlay:true, delayTime:300});
	
/**
 * 购买房间
 */
	jQuery(".hotel-pic").slide({ titCell:".smallImg li", mainCell:".bigImg", effect:"fold", autoPlay:true,delayTime:200,
		startFun:function(i,p){
			//控制小图自动翻页
			if(i==0){ jQuery(".hotel-pic .sPrev").click() } else if( i%4==0 ){ jQuery(".hotel-pic .sNext").click()}
		}
	});
	//小图左滚动切换
	jQuery(".hotel-pic .smallScroll").slide({ mainCell:"ul",delayTime:100,vis:3,scroll:3,effect:"left",autoPage:true,prevCell:".sPrev",nextCell:".sNext",pnLoop:false });
});
