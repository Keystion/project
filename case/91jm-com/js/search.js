

$(document).ready(function() {
	

	//�ؼ��������
	$("#txtKeyword").focus(function(){
		var val = $("#txtKeyword").val();
		if(val=='������Ʒ�ƹؼ���...') {
			$("#txtKeyword").val("");
		}
	});
	$("#txtKeyword").blur(function(){
		var val = $("#txtKeyword").val();
		if($.trim(val)=="") {
			$("#txtKeyword").val("������Ʒ�ƹؼ���...");								
		}
	});
	
	

});



//�ؼ��ֻس�������
function enterSearchTop(){
	if(event.keyCode == 13){
		WordSearch();
		return false;
	}
}


function WordSearch() {

    var queryString = "";
    var keyWord = $("#txtKeyword").val().replace(/(^\s*)|(\s*$)/g,'');
    
    if(keyWord=="������Ʒ�ƹؼ���..."||keyWord=="")
    {
    	queryString = "/0-0-0-1.htm";
    }
    else{
	    queryString = "/0-0-0-1.htm?q=" + keyWord;
    }
    window.location.href = queryString;
}


function SetCookies(obj) {
	var cbPrj=$(obj).closest('li').find('input').val();
    var arrValue = cbPrj.split("[@]");
	var strCookie=document.cookie;
	var arrCookie=strCookie.split("; ");

	var brandMessage = "";
	//����cookie���飬����ÿ��cookie��
	for(var i=0;i<arrCookie.length;i++){
		var arr=arrCookie[i].split("=");
		//�ҵ�����ΪbrandViewed��cookie������������ֵ
		if("browsingHistory"==arr[0]){
			if (arr.length > 1) {
				brandMessage=arr[1];
			}
			break;
		}
	}
	var brandArray = new Array();
	var brandArrayNew = new Array();
	if (brandMessage != "") {
		var brandArray = brandMessage.split("[#]");
		for (var i = 0; i < brandArray.length; i++) {
			brandArrayNew.push(brandArray[i]);
		}
	}
	//�ж�cookie���Ƿ��Ѱ�����Ʒ��
	var ifContains = false;
	//��������Ʒ�������5��
	for (var i = 0; i < brandArrayNew.length; i++) {
		var brandAttiArray = new Array();
		brandAttiArray = brandArrayNew[i].split(",");
		if (brandAttiArray.length > 0 && brandAttiArray[0] == arrValue[0]) {
			ifContains = true;
			break;
		}
	}
	if (!ifContains) {
		if (brandArrayNew.length < 5) {
			for (var i = 0; i < brandArrayNew.length; i++) {
				brandArrayNew[i] = brandArrayNew[i] + "[#]";
			}
			brandArrayNew.push(arrValue[0] + "," + escape(arrValue[1]) + "," + arrValue[2] + "," + arrValue[3] + "," + arrValue[4] + "," + arrValue[5] + "," + arrValue[6] + "," + arrValue[7]) + ";";
		} else {
			brandArrayNew[4] = brandArrayNew[3] + "[#]";
			brandArrayNew[3] = brandArrayNew[2] + "[#]";
			brandArrayNew[2] = brandArrayNew[1] + "[#]";
			brandArrayNew[1] = brandArrayNew[0] + "[#]";
			brandArrayNew[0] = arrValue[0] + "," + escape(arrValue[1]) + "," + arrValue[2] + "," + arrValue[3] + "," + arrValue[4] + "," + arrValue[5] + "," + arrValue[6] + "," + arrValue[7] + "[#]";
		}
		brandMessage = "";
		for (var i = 0; i < brandArrayNew.length; i++) {
			brandMessage += brandArrayNew[i];
		}
	}
	var expires = new Date();
	expires.setTime(expires.getTime() + 24 * 60 * 60 * 1000);
	//��userId��userName����cookie����Ϊ10������
	document.cookie="browsingHistory="+brandMessage+";expires="+expires.toGMTString();
}