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
	var defaultValue = "�����������⣬������ϸ���Ա�ﵽ����ϸ��רҵ�Ľ��"	//���񴥷��¼��Ķ��󣬲�����Ϊ��������Ĭ�϶���
	with(event.srcElement)	//�����ǰֵΪĬ��ֵ�������
	if(value==defaultValue) value="";
	$(".ipt-ask-topbar").css({color:"#333"})
}
function res(){	//���񴥷��¼��Ķ��󣬲�����Ϊ��������Ĭ�϶���
	with(event.srcElement)	//�����ǰֵΪ�գ�������ΪĬ��ֵ
	if(value=="") value=defaultValue;
	$(".ipt-ask-topbar").css({color:"#aaa"})
}	

//ͷ��
function topcls(){
	var defaultValue = "������ؼ���"	//���񴥷��¼��Ķ��󣬲�����Ϊ��������Ĭ�϶���
	with(event.srcElement)	//�����ǰֵΪĬ��ֵ�������
	if(value==defaultValue) value="";
	$(".input-search").css({color:"#333"})
}
function topres(){	//���񴥷��¼��Ķ��󣬲�����Ϊ��������Ĭ�϶���
	with(event.srcElement)	//�����ǰֵΪ�գ�������ΪĬ��ֵ
	if(value=="") value=defaultValue;
	$(".input-search").css({color:"#aaa"})
}	 
