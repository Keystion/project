//maxlength for ask-add
$(function(){
	//textarea limited
		 $('textarea.limited').maxlength({
            'feedback' : '.charsLeft' // note: looks within the current form
        });
		 $('input.ipt-ask-topbar').maxlength({
            'feedback' : '.ask-q-charsLeft' // note: looks within the current form
        });
	})
	
//ask-submit-input
function cls(){
	var defaultValue = "输入您的问题，尽量详细，以便达到更详细更专业的解答。"	//捕获触发事件的对象，并设置为以下语句的默认对象
	with(event.srcElement)	//如果当前值为默认值，则清空
	if(value==defaultValue) value="";
	$(".ipt-ask-topbar").css({color:"#333"})
}
function res(){	//捕获触发事件的对象，并设置为以下语句的默认对象
	with(event.srcElement)	//如果当前值为空，则重置为默认值
	if(value=="") value=defaultValue;
	$(".ipt-ask-topbar").css({color:"#aaa"})
}	

//头部
function topcls(){
	var defaultValue = "请输入关键词"	//捕获触发事件的对象，并设置为以下语句的默认对象
	with(event.srcElement)	//如果当前值为默认值，则清空
	if(value==defaultValue) value="";
	$(".input-search").css({color:"#333"})
}
function topres(){	//捕获触发事件的对象，并设置为以下语句的默认对象
	with(event.srcElement)	//如果当前值为空，则重置为默认值
	if(value=="") value=defaultValue;
	$(".input-search").css({color:"#aaa"})
}	 
