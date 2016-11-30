/*搜索详细*/
$(function() {
    $(".soso_detail").click(function() {
        $(".soso_keyword").toggle();
    });
    //INPUT框焦点
    $(".soso_input").focus(function() {
        var txt_value = $(this).val();
        if (txt_value == this.defaultValue) {
            $(this).val("");
        }
    });
    $(".soso_input").blur(function() {
        var txt_value = $(this).val();
        if (txt_value == "") {
            $(this).val(this.defaultValue);
        }

    });
    //鼠标放上去 显示箭头
    $(".hot_list a").hover(function() {
        $(this).find('.mask').toggle();
        $(this).find('.masktime').toggle();
    });

    $(".newest_left a").hover(function() {
        $(this).find('.mask01').toggle();
        $(this).find('.masktime01').toggle();
    });

    $(".newest_r a").hover(function() {
        $(this).find('.mask02').toggle();
        $(this).find('.masktime02').toggle();
    });
    $(".box_list dt a").hover(function() {
        $(this).find('em').toggle();
    });
    $(".message_attention ul li").hover(function() {
        $(this).find('em').toggle();
    });

    $(".interest_box  li").hover(function() {
        $(this).find('em').toggle();
    });
	$(".b_sort").hover(
		function(){ $(".s_sort").css({"display":"block"})},function(){ $(".s_sort").css({"display":"none"})}
	);
	//开关灯
	$("#shadow").css("height", $(document).height()).hide();
	$(".close_lamp").click(function(){
		$("#shadow").toggle();
		$(".shear_lamp").toggle();
		$(".com_lamp").toggle();
		$(".gotop").toggle();
		$(this).toggleClass("open_lamp");
	});
	$(".close_lamp").hover(function(){
		$(this).toggleClass("hclose_lamp");
	});
	$(".shear_lamp").hover(function(){
		$(this).toggleClass("hshear_lamp");
		$(".shear_lamp #bdshare").toggle();
	});
	$(".com_lamp").hover(function(){
		$(this).toggleClass("hcom_lamp");
	});	
	$(".gotop").hover(function(){
		$(this).toggleClass("hgotop");
	});	
	
	$(".com_lamp").click(function(){
		$(this).hide();
		$(".pingin").toggle();
		$("#ptextarea").attr("autofocus","autofocus");
		$("#shadow").toggle();
		$(".close_lamp").toggle();
		$(".shear_lamp").toggle();
		$(".gotop").toggle();
	});
	//分享弹出框
	$(".fn").click(function(){
		$(".panel").toggle();
		$(this).toggleClass("fn_ed");
	});
	$(".close").click(function(){
		$(".panel").hide();
		$(".fn").toggleClass("fn_ed");
	});
	//我要评论弹出框
	$(".pinglun_s").click(function(){
		$(".pingin").toggle();
		$("#shadow").show();
		$("#ptextarea").attr("autofocus","autofocus");
		$(".close_lamp").toggle();
		$(".shear_lamp").toggle();
		$(".com_lamp").toggle();
		$(".gotop").toggle();
	});
	$(".pclose").click(function(){
		$(".pingin").hide();
		$("#shadow").hide();
		$(".close_lamp").toggle();
		$(".shear_lamp").toggle();
		$(".com_lamp").toggle();
		$(".gotop").toggle();
	});
	$(".quxiao").click(function(){
		$(".pingin").toggle();
		$("#shadow").hide();
		$(".close_lamp").toggle();
		$(".shear_lamp").toggle();
		$(".com_lamp").toggle();
		$(".gotop").toggle();		
	});
	$(".fabu").click(function(){
		var ptValue = $("#ptextarea").val();
		if(!ptValue){
			alert("请填写内容！   ^_^");
		}else{
			$("#shadow").hide();
			$(".pingin").toggle();
			$(".close_lamp").toggle();
			$(".shear_lamp").toggle();
			$(".com_lamp").toggle();
			$(".gotop").toggle();
		}
	});
	$(".v_bd ul li").hover(function() {
		$(this).toggleClass("h");
	});
	$(".panel_con input[type=button]").click(function() {
		var p = $(this).prev(".item input[type=text]");
		p.select();
		alert("抱歉，您使用的浏览器不能支持自动复制功能，您可以使用键盘上 Ctrl+C 键或者鼠标右键进行复制。")
	});
});

