// JavaScript Document
$(function(){

	//网友点评滚动
	var scrtime;
	 $("#gradeList_roll").hover(function(){
		clearInterval(scrtime);
	},
	function(){
		scrtime = setInterval(function(){
			var news = $("#gradeList_roll ul");
			var liNums = $("#gradeList_roll ul li").length;
			var liHeight = news.find("li:last").height();
			if(liNums>=3){
				news.animate({marginTop : liHeight+ 17 +"px"},700,function(){
				news.find("li:last").prependTo(news)
				news.find("li:first").hide();
				news.css({marginTop:0});
				news.find("li:first").fadeIn(300);
			});
		 }
		},3000);
	}).trigger("mouseleave");


	//点评打分
	$('.gradeRank_big li a').hover(
		function(){
			$('.gradeRank_big li a').addClass('clrs');
			$(this).addClass('hover_star');
			var note=$(this).attr('data-note');
			$('.gradeBox .note').append('<i>'+note+'</i>').find('em').hide();
		},
		function(){
			 $(this).removeClass('hover_star')
			 $('.gradeRank_big li a').removeClass('clrs');
			 $('.gradeBox .note i').remove();
			 $('.gradeBox .note em').show();
		});

	$('.gradeRank_big li a').click(function(){
			$('.gradeRank_big li a').removeClass('choose_star');
			$(this).addClass('choose_star');
			var note=$(this).attr('data-note');
			$('.gradeBox .note em').html(note);
            $('#grade_num').val($(this).attr('data-rate-value'));
		});

	//显示表情

	$('.show_expression').hover(
        function(){
			$(this).addClass('curr');
		},
        function(){
  			$(this).removeClass('curr');
        });
    var isexpression = false;
	$('.expression_list a').hover(
		function(){
			$(this).addClass('Hover');
            isexpression = true;
		},
		function(){
			$(this).removeClass('Hover');
            isexpression = false;
		});

	//评论回复文本域效果
	$('#com_text').click(function(){
	 	$(this).animate({'opacity':1},300).addClass('txtColor');
		if($(this).val()==" 与网友分享您的感受..."){
				$(this).val('');
			}
	
	});
	$('#com_text').blur(function(){
		if($(this).val()==""){
			$(this).animate({'opacity':0.6},300).removeClass('txtColor');		 
				 $(this).val(' 与网友分享您的感受...');		 
		}
	});	

	$('.formSubmit_btn').hover(
        function(){
			$(this).stop().animate({'opacity':0.7},300);
		},
        function(){
  			$(this).stop().animate({'opacity':1},300);
        });

	$('.replyTextarea').click(function(){
		if($(this).height()==22){
			$("i[id^=show_dom]").html("200");
			$('.replyTextarea').val(" 回复TA一句...").animate({'opacity':0.6},300).removeClass('txtColor');
		 	$(this).animate({'opacity':1},300).addClass('txtColor');
			if($(this).val()==" 回复TA一句..."){
					$(this).val('');
				}
			$('.replyTextarea').animate({'height':22},100,function(){
			 	$('.replyTextarea').next('.expression_input').hide();
			 })
			$(this).animate({'height':70},100,function(){
			 	$(this).next('.expression_input').show();
			 })
		}
		
	});
	$('.replyTextarea').blur(function(){
		if($(this).val()==""&&!isexpression){
			$(this).animate({'opacity':0.6},300).removeClass('txtColor');
			$(this).val(' 回复TA一句...').animate({'height':22},100,function(){
			 	$(this).next('.expression_input').hide();
			 })
		}
	});

	//隐藏显示回复
	$("a[name='toggleReply']").click(function(){
		var tips=$(this).attr('title');
		if(tips=='隐藏回复'){
			  $(this).attr('title','显示回复')
			}
			else{
			  $(this).attr('title','隐藏回复')
			}
		$(this).parents('.userOperate').next('.replyGrade').fadeToggle(300);

	});

	//如果回复列表条数≧4则显示“查看更多”
	$('.replyList').each(function(){
		var length=$(this).find('li').length;
		if(length>=4){
			$(this).next('.viewMore_list').show();
		}
	});

	$('.viewMore_list').hover(
		function(){
		    $(this).addClass('hover');
		},
		function(){
			 $(this).removeClass('hover');
		});

	//显示“收起”
	$('.click_viewMore').click(function(){
		$(this).parents('span').animate({'width':197},200,function(){
				$(this).find('.click_fold').fadeIn(300);
			});
	 })

	//收起列表
	$('.click_fold').click(function(){
		$(this).fadeOut(300,function(){
			var li_obj=$(this).parents('.replyGrade').find('.replyList li');
			var li_h1=li_obj.eq(0).height();
			var li_h2=li_obj.eq(1).height();
			var li_h3=li_obj.eq(2).height();
			var li_h4=li_obj.eq(3).height();
			var h_all=li_h1+li_h2+li_h3+li_h4+84;
			$(this).parents('.replyGrade').find('.replyList').animate({'height':h_all},200);
			$(this).parents('span').animate({'width':132},200);
		});

	 })
});
function checkLength(theId,showdom,len) {
    var val = $('#'+theId).val();
    var strLen = val.length;
    if(parseInt(strLen)>parseInt(len)){$('#'+theId).val(val.substr(0,len));return false;}
    $('#'+showdom).html(parseInt(len)-parseInt(strLen));return true;
}
// 插入表情
//Cid要插入的容器
//Mes容器初始化的字
//Face表情字符
//function insertFace(Cid,Face,Mes) {
//    var theContainer = $('#'+Cid);
//	var len = theContainer.val().length;
//    if(theContainer.val() == Mes){
//        theContainer.val(Face);return;
//    }
//    var oldConVal = theContainer.val();
//	theContainer.focus();
//	//获取光标处的位置
//	if(typeof document.selection != "undefined") {
//		document.selection.createRange().text = Face;
//	}else {
//		var start = theContainer.selectionStart;
//        var newContainer = theContainer.val().substr(0, start)  + Face + theContainer.val().substr(start)
//    }
//}
function insertFace(Cid,Face,Mes) {
            var obj = document.getElementById(Cid);
            var str = Face;
               if (document.selection) {
                   obj.focus();
                   var sel = document.selection.createRange();
                   sel.text = str;
               } else if (typeof obj.selectionStart === 'number' && typeof obj.selectionEnd === 'number') {
                   var startPos = obj.selectionStart;
                   var endPos = obj.selectionEnd;
                    var tmpStr = obj.value;
                    obj.value = tmpStr.substring(0, startPos) + str + tmpStr.substring(endPos, tmpStr.length);
                } else {
                    obj.value += str;
            }
}


