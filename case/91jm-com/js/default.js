
$(document).ready(function() {
	//初始化搜索大行业
	$("[id$=a_sel]").empty();
	$("[id$=a_sel]").append("<option value='0'>加盟行业</option>");
	$.each(industry, function(i, n) {
		if (n.ssid == 0) {
			var typeValue = n.id+"[@]"+n.http;
			$("[id$=a_sel]").append("<option value='" + typeValue + "'>" + n.name + "</option>");
		}
	});
	$("[id$=a_sel]").get(0).selectedIndex = 0;


	//大行业选中事件
	$("[id$=a_sel]").change(function() {
		var industryArr = $("[id$=a_sel]").val().split("[@]");  						
		var industryId = industryArr[0];  //获取大行业ID
		$("[id$=c_sel]").get(0).selectedIndex = 0;  //投资金额第一项选中
		$("[id$=b_sel]").empty();  //小行业清空
		
		$("[id$=b_sel]").append("<option value='0'>不限类别</option>");
		if(industryId ==0){  //没有选择任何大行业
			return;
		}
		//将当前的大行业下的小行业循环叠加到小行业下拉框
		$.each(industry, function(i, n) {
			if (n.ssid == industryId) {
				$("[id$=b_sel]").append("<option value='" + n.id + "'>" + n.name + "</option>");
			}
		});
	});

	//关键字输入框
	$("#txtKeyword").focus(function(){
		var val = $("#txtKeyword").val();
		if(val=='请输入品牌关键字...') {
			$("#txtKeyword").val("");
		}
	});
	$("#txtKeyword").blur(function(){
		var val = $("#txtKeyword").val();
		if($.trim(val)=="") {
			$("#txtKeyword").val("请输入品牌关键字...");								
		}
	});
	
	
});



//关键字回车键搜索
function enterSearchTop(){
	if(event.keyCode == 13){
		Search();
		return false;
	}
}

//条件回车键搜索
function enterSearch(){
	if(event.keyCode == 13){
		getBrandSearch();
		return false;
	}
}

//头部搜索
function Search(){
	var word = document.getElementById("keyword").value.replace(/(^\s*)|(\s*$)/g,'');
	if(word!="")
	{
		//window.open("http://so.91jm.com/index.php?word="+word);
		window.open("http://so.91jm.com/0-0-0-1.htm?q="+word);
	}
	else{
		window.open("http://so.91jm.com/");
	}
}


//进行品牌搜索
function getBrandSearch(){
	//关键字搜索
	var keyWord = $("#txtKeyword").val();
	
	//条件搜索
	var btypeUrl = "";
	var mtypeUrl = "";
	var moneyUrl = "";
	var btype = $("[id$=a_sel]").val();  //大行业
	var mtype =  $("[id$=b_sel]").val();  //小行业
	var money = $("[id$=c_sel]").val();  //投资金额
	
	if(btype != 0){
		var btypeArr = btype.split("[@]");
		btypeUrl=btypeArr[0];
	}
	else{
		btypeUrl="0";
	}
	if(mtype != "" && mtype != 0){
		btypeUrl=mtype;
	}
	if(money != 0){
		moneyUrl = money;
	}
	else{
		moneyUrl="0";
	}
	
	if(keyWord!='请输入品牌关键字...' && keyWord != "") {  //关键字不为空
		//var shref="http://so.91jm.com/index.php?area=&hy="+btypeUrl+"&money="+moneyUrl;
		var shref="http://so.91jm.com/0-"+btypeUrl+"-"+moneyUrl+"-1.htm?q="+keyWord;
	}
	else{
		var shref="http://so.91jm.com/0-"+btypeUrl+"-"+moneyUrl+"-1.htm";
	}
	
	window.open(shref);
	return;
	
}

