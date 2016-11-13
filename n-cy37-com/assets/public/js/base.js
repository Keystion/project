/**
 * 首页焦点图
 */
jQuery(".m-focuspic").slide({ titCell:".num li", mainCell:".pic",effect:"fold", autoPlay:true,trigger:"click",
	//下面startFun代码用于控制文字上下切换
	startFun:function(i){
		 jQuery(".m-focuspic .txt li").eq(i).animate({"bottom":0}).siblings().animate({"bottom":-50});
	}
});
/**
 * 首页服装加盟品牌推荐 左侧滚动信息列表[01]
 */
jQuery(".m-recommend-one").slide({mainCell:".bd ul",autoPage:true,effect:"topLoop",autoPlay:true,vis:9,interTime:2500});
/**
 * 首页服装加盟品牌推荐 左侧滚动信息列表[02]
 */
jQuery(".m-recommend-two").slide({mainCell:".bd ul",autoPage:true,effect:"topLoop",autoPlay:true,vis:9,interTime:3500});
/**
 * 列表页面服装加盟品牌推荐 左侧滚动信息列表[01]
 */
jQuery(".m-recommend-three").slide({mainCell:".bd ul",autoPage:true,effect:"topLoop",autoPlay:true,vis:7,interTime:2500});
/**
 * 列表页面服装加盟品牌推荐 左侧滚动信息列表[01]
 */
jQuery(".m-recommend-four").slide({mainCell:".bd ul",autoPage:true,effect:"topLoop",autoPlay:true,vis:7,interTime:3500});

/**
 * 
 $(function(){
	$(".nav-tabs a").click(function(){
		$(this).parent().addClass("active").siblings().removeClass("active");
	})
})
*/


/**
 * 回复留言相关
 */
$("#shadow").css("height", $(document).height()).hide();
$(".com_lamp").click(function(){	//点击回复 弹出层动作
	$("#shadow").toggle();
	$(".pingin").toggle();
});
$(".pclose").click(function(){		//点击关闭小图标 关闭弹出层动作
	$(".pingin").toggle();
	$("#shadow").toggle();
});
$(".quxiao").click(function(){		//点击取消按钮 关闭弹出层动作
	$(".pingin").toggle();
	$("#shadow").toggle();
});
/**
 * 编辑按钮 弹出层相关动作
 */
$(".closereply").click(function(){ //关闭小图标 动作
	$(".edit-reply-warp").toggle();
	$("#shadow").toggle();
});
$(".quxiaoreply").click(function(){ //取消按钮 动作
	$(".edit-reply-warp").toggle();
	$("#shadow").toggle();
});

function myFunction(a,b,c){ 		//弹出层取值 函数
	var reTitle = $(a).html();
	var reContent = $(b).html();
	
	$("#shadow").toggle();
	$(".edit-reply-warp").toggle();
	$("#commentsIDs").val(c);
	$("#reCommentsTitle").val(reTitle);
	$("#reCommentsContent").val(reContent);
}
/**
 * 弹出层回复、修改内容提交前验证表单
 */
function checkComments(a,b,c){
   	var commentsTitle = $(a).val();
	var commentsContent = $(b).val();
	var scurityCode = $(c).val();
	if( !commentsTitle || !commentsContent || !scurityCode){
		if(!commentsTitle){
			alert("\u8bf7\u586b\u5199\u56de\u590d\u3010\u6807\u9898\u3011\uff01");//请填写回复【标题】！
			$(a).focus();
			return false;
		}
		if(!commentsContent){
			alert("\u8bf7\u586b\u5199\u56de\u590d\u3010\u5185\u5bb9\u3011\uff01");//请填写回复【内容】！
			$(b).focus();
			return false;
		}
		if(!scurityCode){
			alert("\u8bf7\u586b\u5199\u3010\u9a8c\u8bc1\u7801\u3011\uff01");//请填写【验证码】！
			$(c).focus();
			return false;
		}
		return false;
	}
	return true;
}
/**
 * 验证留言板
 */
function check(){
	var names = document.getElementById("names");
	var tel = document.getElementById("tel");
	var text_content = document.getElementById("text_content");
	if (names.value==""){
		alert("\u8bf7\u586b\u5199\u60a8\u7684\u59d3\u540d");//请填写您的姓名
		names.focus();
		return false;
	}
	if (tel.value=="") {
		alert("\u8bf7\u586b\u5199\u60a8\u7684\u8054\u7cfb\u65b9\u5f0f");//请填写您的联系方式
		tel.focus();
		return false;
	}
	if (text_content.value==""){
		alert("\u8bf7\u586b\u5199\u7559\u8a00\u5185\u5bb9");//请填写留言内容
		text_content.focus();
		return false;
	}
	try{admingrictj1.sendKindyrooClass(document.getElementById("names").value,document.getElementById("tel").value,document.getElementById("email").value,document.getElementById("addr").value,document.getElementById("text_content").value);}catch(e){}
}