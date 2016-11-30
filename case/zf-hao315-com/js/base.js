//获取class封装
function findArr(arr,n){
	for(var i=0; i<arr.length; i++){
		if(arr[i]==n)return true;
	}
	return false;
}
function getByClass(oParent,sClass){
	if(oParent.getElementsByClassName){
		return oParent.getElementsByClassName(sClass);
	}else{
		var arr=[];
		var aEle=oParent.getElementsByTagName('*');
		for(var i=0; i<aEle.length; i++){
			/*if(aEle[i].className.indexOf(sClass)!=-1){
				arr.push(aEle[i]);	
			}*/
			var tmp=aEle[i].className.split(' ');
			if(findArr(tmp,sClass)){
				arr.push(aEle[i]);	
			}
		}
		return arr;
	}
}

function noBorder(e){
	$(e).css("border","none");
}
noBorder(".zsgzcywt_02");
/**
 * 首页焦点图
 */
jQuery(".m-focuspic").slide({ titCell:".num li", mainCell:".pic",effect:"fold", autoPlay:true,trigger:"click",
	//下面startFun代码用于控制文字上下切换
	startFun:function(i){
		 jQuery(".m-focuspic .txt li").eq(i).animate({"bottom":0}).siblings().animate({"bottom":-50});
	}
});

jQuery(".slideTxtBox").slide({effect:"left",trigger:"click"});

jQuery(".m-tab-01").slide({});

jQuery(".xm-foucebox").slide({ effect:"fold", autoPlay:true, delayTime:300});

jQuery(".m_wnews").slide({ mainCell:"#miniNewsRegion ul", effect:"topLoop", autoPlay:true,vis:7});

jQuery(".msg-list").slide({ mainCell:"#miniNewsRegion ul", effect:"topLoop",interTime:"3500", autoPlay:true,vis:4});

jQuery(".picshow01").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"leftLoop",autoPlay:true,vis:4});

jQuery(".sj-zizhu-cont-pic-min").slide({mainCell:".sj-min-picBox ul",effect:"left",trigger:"click",vis:9,scroll:1,autoPage:true,pnLoop:true});

/**
 * 问答首页 左侧问答模块 鼠标经过事件
 */
$(".hywd_list_li").hover(function(){
	$(this).addClass("hover");	
},function(){
	$(this).removeClass("hover");
})

jQuery(".ask_focuspic").slide({ mainCell:".bd ul",effect:"fold",autoPlay:true,delayTime:200 });

jQuery(".txtScroll-top").slide({mainCell:".bd ul",autoPage:true,effect:"topLoop",autoPlay:true,vis:6});

/**
 * 微信
 */
$(".weixin").hover(
function(){
	$(".weixin_pic").css({"display":"block"})
},function(){
	$(".weixin_pic").css({"display":"none"})
})


/**
 * 商机排行榜tab选项卡
 */
function opporTab()
{
	var oppor_tab=document.getElementById('oppor_tab');
	var oppor_List=getByClass(oppor_tab,'opportab_left')[0];
	var oppor_Div=getByClass(oppor_tab,'opportab_right')[0];
	var oppor_btn=oppor_List.getElementsByTagName('a');
	var oppor_Con=oppor_Div.getElementsByTagName('ul');
	oppor_btn[0].className='on';
	oppor_Con[0].style.display='block';
	for(var i=0;i<oppor_btn.length;i++)
	{
		oppor_btn[i].index=i;
		oppor_btn[i].onmouseover=function()
		{
			for(var i=0;i<oppor_btn.length;i++)
			{
				oppor_btn[i].className='';
				oppor_Con[i].style.display='';
			}
			this.className='on';
			oppor_Con[this.index].style.display='block';
		}
		var oEm=oppor_Con[i].getElementsByTagName('em');
		for(var j=0;j<3;j++)
		{
			oEm[j].style.background='url(images/sub_01.gif)';//前三排行背景为红色
		};
	}
}

/**
 * 
 */
function xmNav(){
	$("#xmNav li").hover(function(){
		$(this).addClass("hover").siblings().removeClass("hover");
	});
	$("#xmNav li").mouseleave(function(){
		$(this).removeClass("hover");
	});
}
function showInfo(){
	$(".m-company").hover(function(){
		$(this).find(".showInfo").show();
	},function(){
		$(this).find(".showInfo").hide();
	})
}

/**
 * 验证留言板
 */
function check(){
	var names = document.getElementById("name");
	var tel = document.getElementById("tel");
	var address = document.getElementById("address");
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
	if (address.value=="") {
		alert("\u8bf7\u586b\u5199\u60a8\u7684\u8054\u7cfb\u5730\u5740");//请填写您的联系地址
		address.focus();
		return false;
	}
	if (text_content.value==""){
		alert("\u8bf7\u586b\u5199\u7559\u8a00\u5185\u5bb9");//请填写留言内容
		text_content.focus();
		return false;
	}
	try{admingrictj1.sendKindyrooClass(document.getElementById("names").value,document.getElementById("tel").value,document.getElementById("email").value,document.getElementById("addr").value,document.getElementById("text_content").value);}catch(e){}
}
$(function() {
	$(".pinglun_s").click(function(){
		$(".pingin").toggle();
		$("#shadow").show();
		$("#ptextarea").attr("autofocus","autofocus");
	});
	$(".pclose").click(function(){
		$(".pingin").hide();
		$("#shadow").hide();
	});
	$(".quxiao").click(function(){
		$(".pingin").toggle();
		$("#shadow").hide();
	});
	$(".fabu").click(function(){
		var ptValue = $("#ptextarea").val();
		if(!ptValue){
			alert("请填写内容！   ^_^");
			$("#ptextarea").focus();
		}else{
			$("#shadow").hide();
			$(".pingin").toggle();
		}
	});
	$(".v_bd ul li").hover(function() {
		$(this).toggleClass("h");
	});
})





window.onload=function(){
	document.getElementById('oppor_tab')?opporTab():false;//选项卡
	document.getElementById('xmNav')?xmNav():false;
	document.getElementById('mCompany')?showInfo():false;
}