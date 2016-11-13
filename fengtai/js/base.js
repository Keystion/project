// JavaScript Document
$(function () {

	var oSentMailBtn = document.getElementById("btn"),
		oSentMailOkTips = document.getElementById("J_btn_email_code_tip");
	oSentMailBtn.onclick = function () { //发送邮件
		var wait = 60;
		function time(o) {
			if (wait == 0) {
				o.removeAttribute("disabled");
				o.value = "免费获取验证码";
				wait = 60;
			} else {
				o.setAttribute("disabled", true);
				o.value = "(" + wait + ")秒后重新发送";
				wait--;
				setTimeout(function () {
						time(o)
					},
					1000)
			}
		}
		oSentMailOkTips.style.visibility = "visible";
		oSentMailOkTips.className = "msg msg-inline msg-weak show";
	}
	
})