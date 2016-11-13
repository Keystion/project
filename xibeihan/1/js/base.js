TouchSlide({ 
	slideCell:"#slideBox",
	titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
	mainCell:".bd ul", 
	effect:"leftLoop", 
	autoPage:true,//自动分页
	autoPlay:true, //自动播放
	delayTime:"320"
});
$(".m-menu a").click(function(){
	$(this).parent().addClass("cur").siblings().removeClass("cur");
})
var h = window.screen.height;
var jsArr	=	new Array();
var tag		=	0; //用来表示是否	
var stag	=	0;		//计数器

/**
 *      marketSinglePrice_$		单个商品市场价
 * marketSingleTotalPrice_$		单个商品市场总价
 *        marketSingleTotal		商品市场总价
 *               dishItem_$		单个商品行数
 *               dishName_$		商品名称
 *             dishBtnNum_$		加入菜单按钮里面的计数器
 *       dishSingleCopies_$		单个商品 个数
 * 		   weiSinglePrice_$		单个商品微信价
 *   dishSingleTotalPrice_$		单个商品总价
 *          dishSingleTotal		单个商品总价
 
 */

function changeOrder(mid){
	
	tag++;
	dishSingleTotal   = $("#weiSinglePrice_"+mid).html()*1;
	marketSingleTotal = $("#marketSinglePrice_"+mid).html()*1
	
	var oClassName = $("#countNums").attr("class");
	
	obj = '<tr id="dishItem_'+mid+'"><td width="50%" height="30px">'+$("#dishName_"+mid).html()+'</td><td  width="15%">'+$("#weiSinglePrice_"+mid).html()+'</td><td  width="15%"><span id="dishSingleCopies_'+mid+'">1</span> &nbsp; <input type="button" onclick="del('+mid+')" class="buttond" value="删1"></td><td  width="30%" id="dishSingleTotalPrice_'+mid+'">'+dishSingleTotal+'</td></tr>';
	
	if( $("#dishItem_"+mid).length>0 && oClassName == "fadeInUp" ) {
		
		console.log("add+1");
		
		$("#dishSingleCopies_"+mid).html(parseFloat($("#dishSingleCopies_"+mid).html())+1)
		$("#dishBtnNum_"+mid).html(parseFloat($("#dishBtnNum_"+mid).html())+1);
		$("#countNums").removeClass("fadeInUp");
		$("#countNums").addClass("fadeOutUp");
		$("#countNums").html(tag);
		$("#dishSingleTotalPrice_"+mid).html(parseFloat($("#dishSingleTotalPrice_"+mid).html()) + parseFloat($("#weiSinglePrice_"+mid).html()));
		$("#marketSingleTotalPrice_"+mid).html(parseFloat($("#marketSingleTotalPrice_").html()) + parseFloat($("#marketSinglePrice_"+mid).html()));
		
		
	}else if( $("#dishItem_"+mid).length>0 && oClassName == "fadeOutUp" ) {
		
		console.log("add+2");
		
		$("#dishSingleCopies_"+mid).html(parseFloat($("#dishSingleCopies_"+mid).html())+1);
		$("#dishBtnNum_"+mid).html(parseFloat($("#dishBtnNum_"+mid).html())+1);
		$("#countNums").removeClass("fadeOutUp");
		$("#countNums").addClass("fadeInUp");
		$("#countNums").html(tag);
		$("#dishSingleTotalPrice_"+mid).html(parseFloat($("#dishSingleTotalPrice_"+mid).html()) + parseFloat($("#weiSinglePrice_"+mid).html()));
		$("#marketSingleTotalPrice_"+mid).html(parseFloat($("#marketSingleTotalPrice_"+mid).html()) + parseFloat($("#marketSinglePrice_"+mid).html()));
		
	} else if( oClassName == "fadeOutUp" ) {
		
		console.log("add+3");
		
		$("#countNums").removeClass("fadeOutUp");
		$("#countNums").addClass("fadeInUp");
		$(".shoppingbar").show();
		$("#mid_"+mid).addClass("show");
		$("#dishBtnNum_"+mid).html(1);
		$("#countNums").html(tag);
		
		$("#asktbl").append(obj);

	} else if( oClassName == "fadeInUp" ) {
		
		console.log("add+4");
		
		$("#countNums").removeClass("fadeInUp");
		$("#countNums").addClass("fadeOutUp");
		$(".shoppingbar").show();
		$("#mid_"+mid).addClass("show");
		$("#dishBtnNum_"+mid).html(1);
		$("#countNums").html(tag);
		$("#asktbl").append(obj);

	}
	$("#dishSingleTotal").html(parseFloat($("#dishSingleTotal").html())+ dishSingleTotal + ".00");
	$("#marketSingleTotal").html(parseFloat($("#marketSingleTotal").html()) + marketSingleTotal + ".00");
	$(".hidebar").addClass("on");
}

function del(mid) {
	tag--;
	dishSingleTotal =	$("#weiSinglePrice_"+mid).html()*1;
	
	nums  =	parseFloat($("#dishSingleCopies_"+mid).html());
	if (nums > 1)  //超过或者两份
	{
		console.log("del-1");
			
		$("#dishSingleCopies_"+mid).html(parseFloat($("#dishSingleCopies_"+mid).html())-1);
		$("#dishSingleTotalPrice_"+mid).html(parseFloat($("#dishSingleTotalPrice_"+mid).html()) - dishSingleTotal + ".00");
		$("#marketSingleTotalPrice_"+mid).html(parseFloat($("#marketSingleTotalPrice_"+mid).html()) - marketSingleTotal + ".00");
		$("#dishBtnNum_"+mid).html(parseFloat($("#dishBtnNum_"+mid).html())-1);
		$("#countNums").html(tag);
		//jsArr['k' + mid]	=	jsArr['k' + mid] - 1;
	} else if( $("#dishItem_"+mid).length == 1) {
		
		console.log("del-2");
		
		$(".hidebar").removeClass("on");
		$("#dishItem_"+mid).remove();
		$("#countNums").html(tag);
		$("#mid_"+mid).removeClass("show");
		
		//alert($("#dishItem_"+mid).length);
		
		
		//jsArr['k' + mid]	=	0;
	} else {
		
		console.log("del-3");
		
		$("#dishItem_"+mid).remove();
		$("#countNums").html(0);
		$("#shadow").hide();
		$(".icon-arrow-up").hide()
		$(".icon-arrow-down").show();
		$("#mid_"+mid).removeClass("show");
		
	}
	
	$("#dishSingleTotal").html(parseFloat($("#dishSingleTotal").html()) - dishSingleTotal + ".00");
	$("#marketSingleTotal").html(parseFloat($("#marketSingleTotal").html()) - marketSingleTotal + ".00");
	stag = stag - 1;
}




$(document).ready(function() {
	$("#shadow").height(h);
	$("#shadow").hide();
	$(".bill-list").css({top:h,height:h});
	$(".hidebar").click(function(){
		$("#shadow").hide();
		$(".icon-arrow-up").hide()
		$(".icon-arrow-down").show();
		$(".bill-list").animate({top:h,height:75});
		
		if( $(".hidebar").hasClass("on") == false){
			console.log("shoppingbar-hide");
			$(".shoppingbar").hide();
		}
	});
	$(".icon-arrow-up").click(function(){
		$(this).hide()
		$(".icon-arrow-down").show();
		$("#shadow").toggle();
		$(".bill-list").animate({top:h,height:75});
	});
	$(".icon-arrow-down").click(function(){
		$(this).hide();
		$(".icon-arrow-up").show();
		$("#shadow").toggle();
		$(".bill-list").animate({top:0,height:h});
	});
});


$(document).ready(function() {
	
	var oRight = ($(document).width()-1000)/2;
	$("#scrolltop").css({"right":oRight});
	
});