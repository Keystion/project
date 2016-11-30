/// <reference path="jquery-1.3.2-vsdoc2.js" />

///获取当前系统时间
function getNowDate() {
	var dd = new Date();
    var y = dd.getYear();
    var m = dd.getMonth() + 1; //获取当前月份
    var d = dd.getDate();
    var h = dd.getHours();
    var mi = dd.getMinutes();
    var nowdate = y + "-" + m + "-" + d + " " + h + ":" + mi;
    
    return nowdate;
}


///快捷留言
function qkmsg_content(qk_id){
	$qk_msg = $("#ha_qk_"+qk_id).text();
	var content = $("#txtMessage").val();
	$("#txtMessage").val(content+$qk_msg);
	//点击后隐藏快捷留言层
	if($(".qkmsg").attr("class") == "qkmsg selected"){
		$(".qkmsg").removeClass("selected");
	}
	else{
		
	}
}


///验证留言表单输入
function validateMsg(mname,mtel,memail,mqq,convenient,money,maddress,mcontent) {
	if(mname == ""){  //姓名
		alert("请输入您的姓名！");
		return false;
	}

	if(mtel == ""){  //联系电话
		alert("请输入您的联系电话！");
		return false;
	}
	else{  //联系电话不为空
        var reg =/^[08]\d{2,3}-?\d{7,8}$/;//验证电话号码为7-8位数字并带有区号
		var regmobile = /^((13[0-9])|(147)|(15[^4,\\D])|(18[0-9]))\d{8}$/;  //移动电话
		if (!reg.test(mtel) && (!regmobile.test(mtel))) {
			alert("您输入的联系电话格式不正确！");
            return false;
        }
	}
	
	if(memail != ""){ //电子邮件不为空
		var reg = new RegExp("^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$");
		if (!reg.test(memail)) {
			alert("您输入的电子邮箱格式不正确！");
			return false;
		}
	}
	
	if(mqq != ""){ //qq号码
		
	}
	
	if(convenient == "undefined"){  //方便联系时间
		alert("请选择方便联系时间！");
		return false;
	}
	
	if(money == "undefined"){  //投资能力
		alert("请选投资能力！");
		return false;
	}
	
	if(maddress == ""){  //联系地址
		alert("请填写您的详细地址！");
		return false;
	}
	
	if(mcontent == ""){  //留言内容
		alert("请输入您的留言内容！");
		return false;
	}
	return true;
}


///提交保存留言
function savemsg(){
	//获取方便联系时间和投资能力
	var convenient_id = $('#radiolist :checked').val();
	var money_id = $('#radiolist_m :checked').val();
	
	//获取其他表单信息
	var mname = $("#txtName").val();
	var msex = $("input[name='radioSex']:checked").val();
	var mtel = $("#txtTel").val();
	var memail = $("#txtEmail").val();
	var mqq = $("#txtqq").val();
	
	var mprovince = $("#selProvince").val();
	var mcity = $("#selCity").val();
	var mxian =  $("#selXian").val();
	var maddress = $("#txtAddress").val();
	var mcontent = $("#txtMessage").val();
	var login_name = $("#hd_lname").val();
	
	var provcity = $("#hdaddr").val();
	if(provcity == ""){  //省市县级联是由当前个人会员的个人信息加载的
		//获取省市县级联下拉框的文本
		var tprov = $("#selProvince").find("option:selected").text();
		var tcity = $("#selCity").find("option:selected").text();
		var txian = $("#selXian").find("option:selected").text();
		
		tprov = tprov.replace('省','').replace('市','').replace('壮族','').replace('回族','').replace('维吾尔','').replace('自治区','').replace('特别行政区','');
		tcity = tcity.replace('市辖区','').replace('县','').replace('市','').replace('地区','').replace('自治州','').replace('盟','').replace('苗族自治县','').replace('黎族','');
		txian = txian.replace('区','').replace('县','').replace('市','');

		if(mprovince == 0){ //省份ID为0
			tprov = "";
		}
		if(mcity == 0){  //城市ID为0
			tcity = "";
		}
		if(mxian == 0){  //区县ID为0
			txian = "";
		}
		if(tcity == ''){
			provcity = tprov+txian;
		}
		else{
			provcity = tprov+tcity;
		}
	}

	if(validateMsg(mname,mtel,memail,mqq,convenient_id,money_id,maddress,mcontent)){  //表单验证通过
		var curr_url = $("#hd_c_url").val();
		var prev_url = document.referrer;

		//if(login_name == "shangxian"){
		//	alert(curr_url);
		//	alert(prev_url);
		//return;
		//}		
		$.post("staticsubmit.php", {
		    type: 'savemsg',
			mcontent: escape(mcontent),
			convenient_id: convenient_id,
			money_id: money_id,
			mname: escape(mname),
			msex: msex,
			mtel: mtel,
			memail: memail,
			mqq: mqq,
			mprovince: mprovince,
			mcity: mcity,
			mxian: mxian,
			maddress: escape(maddress),
			login_name: escape(login_name),
			provcity: escape(provcity),
			curr_url: curr_url,
			prev_url: escape(prev_url)
		}, function(msg){
			if (msg == "ok") {
				alert("留言提交成功，我们将会尽快联系您！");
				
				var dd = new Date();
			    var y = dd.getYear();
			    var m = dd.getMonth() + 1; //获取当前月份
			    var d = dd.getDate();
			    var h = dd.getHours();
			    var mi = dd.getMinutes(); 
			    if(mi<10){
			    	mi = '0'+mi;
			    }
			    var nowdate = y + "年" + m + "月" + d + "日" + " " + h + ":" + mi;
			    
			    var mtype = $("#hd_i_mtype").val();  //获取留言会员类别
			    pic_str = "";
			    if(mtype == '1'){  //个人会员
			    	var u_lname = $("#hd_user_lname").val();
			    	var u_logo = $("#hd_i_logo").val();
			    	pic_str = "<a href='http://user.91jm.com/"+u_lname+"/' class='img-ft'><img src='"+u_logo+"' width='50' height='50' onerror=\"javascript:this.src='http://img.91jm.com/pics/head_person.jpg';\" /></a><a href='http://user.91jm.com/"+u_lname+"/' class=''>";
			    }
			    else{
			    	pic_str = "><a class='img-ft'><img src='http://img.91jm.com/pics/head_person.jpg' width='50' height='50' /></a><a class=''>";
			    }
			    
			    
				var tempCode = "<li class='fd-item'><div class='fd-avatar fl'>"+pic_str+"[--m_uname--]</a></div><div class='fd-wrap fl'><div class='fd-text'><p>[--m_content--]</p></div><div class='fd-re-wrap'><div class='arr'></div><div class='fd-re-title'>企业回复</div><div class='fd-re-text'><p></p></div></div><div class='fd-extra'><span class='fd-time'>[--m_time--]</span><span>来自<strong>[--m_area--]</strong></span></div></div><div class='clear'></div></li>";
				var temp = tempCode.replace("[--m_uname--]", mname);
				temp = temp.replace("[--m_content--]", mcontent);
				temp = temp.replace("[--m_time--]", nowdate);
				temp = temp.replace("[--m_area--]", provcity);
				
				$("#ulMessage").prepend(temp);  //将刚留言的信息追加到第一行
				$("#txtMessage").val('');  //清空留言
			}
			else if(msg == "hacker"){
				alert("非法留言，请更正内容后再提交！");
				return;
			}
			else if(msg == "self"){
				alert("不能给自己留言！");
				return;
			}
			else{
				alert("系统繁忙，请稍后再试！");
			}
		});  //ajax结束
	}
} 


///收藏品牌
function favorite_brand(login_name,brand_lname){
	if(login_name == ""){
		alert("请登录后收藏此品牌！");
		return;
	}
	$.post("staticsubmit.php", {
	    type: 'favorite',
	    brand_lname: escape(brand_lname)
	}, function(msg){
		if (msg == "0") {
			alert("您已成功收藏此品牌！");
			return;
		}
		else if(msg == "1"){
			alert("您已收藏过此品牌，无需重复收藏！");
			return;
		}
		else{
			alert("系统繁忙，请稍后再试！");
			return;
		}
	});  //ajax结束
}

//历史浏览品牌
$(document).ready(function(){
	var brand_lname = $("#hd_brand_lname").val();  	//品牌名
	var user_lname = $("#hd_user_lname").val(); 	//用户名
	$.post("staticsubmit.php", {
	    type: 'browse',
	    brand_lname: escape(brand_lname),
		user_lname: escape(user_lname)
	}, function(msg){	
	}); 
});
