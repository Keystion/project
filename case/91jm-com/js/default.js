
$(document).ready(function() {
	//��ʼ����������ҵ
	$("[id$=a_sel]").empty();
	$("[id$=a_sel]").append("<option value='0'>������ҵ</option>");
	$.each(industry, function(i, n) {
		if (n.ssid == 0) {
			var typeValue = n.id+"[@]"+n.http;
			$("[id$=a_sel]").append("<option value='" + typeValue + "'>" + n.name + "</option>");
		}
	});
	$("[id$=a_sel]").get(0).selectedIndex = 0;


	//����ҵѡ���¼�
	$("[id$=a_sel]").change(function() {
		var industryArr = $("[id$=a_sel]").val().split("[@]");  						
		var industryId = industryArr[0];  //��ȡ����ҵID
		$("[id$=c_sel]").get(0).selectedIndex = 0;  //Ͷ�ʽ���һ��ѡ��
		$("[id$=b_sel]").empty();  //С��ҵ���
		
		$("[id$=b_sel]").append("<option value='0'>�������</option>");
		if(industryId ==0){  //û��ѡ���κδ���ҵ
			return;
		}
		//����ǰ�Ĵ���ҵ�µ�С��ҵѭ�����ӵ�С��ҵ������
		$.each(industry, function(i, n) {
			if (n.ssid == industryId) {
				$("[id$=b_sel]").append("<option value='" + n.id + "'>" + n.name + "</option>");
			}
		});
	});

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
		Search();
		return false;
	}
}

//�����س�������
function enterSearch(){
	if(event.keyCode == 13){
		getBrandSearch();
		return false;
	}
}

//ͷ������
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


//����Ʒ������
function getBrandSearch(){
	//�ؼ�������
	var keyWord = $("#txtKeyword").val();
	
	//��������
	var btypeUrl = "";
	var mtypeUrl = "";
	var moneyUrl = "";
	var btype = $("[id$=a_sel]").val();  //����ҵ
	var mtype =  $("[id$=b_sel]").val();  //С��ҵ
	var money = $("[id$=c_sel]").val();  //Ͷ�ʽ��
	
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
	
	if(keyWord!='������Ʒ�ƹؼ���...' && keyWord != "") {  //�ؼ��ֲ�Ϊ��
		//var shref="http://so.91jm.com/index.php?area=&hy="+btypeUrl+"&money="+moneyUrl;
		var shref="http://so.91jm.com/0-"+btypeUrl+"-"+moneyUrl+"-1.htm?q="+keyWord;
	}
	else{
		var shref="http://so.91jm.com/0-"+btypeUrl+"-"+moneyUrl+"-1.htm";
	}
	
	window.open(shref);
	return;
	
}

