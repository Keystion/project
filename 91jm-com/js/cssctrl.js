// Jquery for css
		//表单单选框多选框美化
		;(function($){
			$.fn.hcheckbox=function(options){
				$(':checkbox+label',this).each(function(){
					$(this).addClass('checkbox');
					if($(this).prev().is(':disabled')==false){
						if($(this).prev().is(':checked'))
							$(this).addClass("checked");
					}else{
						$(this).addClass('disabled');
					}
				}).click(function(event){
						if(!$(this).prev().is(':checked')){
							$(this).addClass("checked");
							$(this).prev()[0].checked = true;
						}
						else{
							$(this).removeClass('checked');			
							$(this).prev()[0].checked = false;
						}
						event.stopPropagation();
					}
				).prev().hide();
			}
		
			$.fn.hradio = function(options){
				var self = this;
				return $(':radio+label',this).each(function(){
					$(this).addClass('hRadio');
					if($(this).prev().is("checked"))
						$(this).addClass('hRadio_Checked');
				}).click(function(event){
					$(this).siblings().removeClass("hRadio_Checked");
					if(!$(this).prev().is(':checked')){
			$(this).addClass("hRadio_Checked");
						$(this).prev()[0].checked = true;
					}
					   
					event.stopPropagation();
				})
				.prev().hide();
			}
		})(jQuery)


		$(function(){
			//alert("test");
			//$('#chklist').hcheckbox();//多选框
			$('#radiolist').hradio(); //单选框
			$('#radiolist_m').hradio(); //单选框
			$('#btnOK').click(function(){
//				var checkedValues = new Array();
//				$('#chklist :checkbox').each(function(){
//					if($(this).is(':checked'))
//					{
//						checkedValues.push($(this).val());
//					}
//				});
		
//				alert(checkedValues.join(','));
				//alert($('#radiolist :checked').val());
				//alert($('#radiolist_m :checked').val());
			})
		});	

//onload

$(document).ready(
	
	function(){
		
		//btn
		var btnLog = $("#log #mainLogA"); //btn-log [ login.html ]
		btnLog.hover(
			function(){
				btnLog.css("background-position","-260px -180px");
				},
				function(){
					btnLog.css("background-position","-260px -120px");
					}
		)
		//show other stores
		$(".show-fd-list").hover(function(){
			$(".show-fd-list").addClass("on");
			},function(){
				$(".show-fd-list").removeClass("on");
				})
		//gallery
		$(".btn-left-arror").hover(function(){
			//alert("1");
			$(this).css("cursor","url('images/arror_left.png'),default")
			})
		$(".btn-right-arror").hover(function(){
			//alert("1");
			$(this).css("cursor","url('images/arror_right.png'),default")
			})
			
		//btn-agree
		$(".btn-agree").hover(function(){
			$(this).find("span").hide();
			$(this).find("font").show();
			},function(){
				$(this).find("font").hide();
				$(this).find("span").show();
				})
		//show edit
		$(".btn-showAnswer").click(function(){
				var $editDis = $(".answer-editor").css("display");
				if($editDis != "none"){
					$(this).find("i").removeClass("on");
					$(".answer-editor").css("display","none");
				}else{
					$(this).find("i").addClass("on");
					$(".answer-editor").css("display","block");
					}
			})
		//add-ask-form showTip
		$(".add-ask-form dl").hover(function(){
			$(this).find(".tip-info").show()
			},function(){
			$(this).find(".tip-info").hide()
			})
		//submit-hover
		$(".btn-search , .ask-add-submit , .btn-msgSubmit , .btn-ask-topbar , .mod-login .btnLog , .pj-store-list dl").hover(
			function(){
			$(this).addClass("on");
			},function(){
				$(this).removeClass("on");
				})
		
		//快速留言
		$(".qkmsg").hover(function(){
				$(this).addClass("selected");
			},function(){
				$(this).removeClass("selected");
				})		
		//表单注释隐藏
		$(".regForm-item-ct").hover(function(){
				$(this).find("label").hide();
			},function(){
				if($(this).find("input").attr("value") == ""){
					$(this).find("label").show();
					}			
				})		
			
			
		//排行榜 [top.html] 
		$(".mod-listRk-ul li").hover(
				function(){
					$(this).css("background","#f1faff")
					},function(){
					$(this).css("background","#fff")
					}
			)
			//list-content
			$(".list-content tr").hover(
				function(){
					$(this).find("td").css("background","#f1faff")
					},function(){
					$(this).find("td").css("background","#fff")
					}
			)
			//citieslist 
			$(".citieslist li").hover(
				function(){
					$(this).addClass("hover");
					},function(){
					$(this).removeClass("hover");
					}
			)
			
		//Tab
	
		jQuery(".mod-certList").slide({titCell:".hd a",titOnClassName:"selected",delayTime : 0});
		
		jQuery("#forget_passwd .content").slide({titCell:".hd a",titOnClassName:"on",delayTime : 0 ,trigger: "click"});
		
		jQuery(".picBtnLeft").slide({ mainCell:".bd ul",effect:"left",autoPlay:true,titCell:".hd li",delayTime : 0 });//项目图片展示
		//menu_slide
		$(".left_menu_slide dl").hover(
			function(){
				$(this).addClass("on");
				},function(){
				$(this).removeClass("on");
				}
		)
		//i_main ShowMenu [i.html]
		$(".i_menu .showDT").hover(
			function(){
				$(this).find("div").css("display","block");
				$(this).find("a").eq(0).addClass("selected")
				},function(){
				$(this).find("div").css("display","none")	;
				$(this).find("a").eq(0).removeClass("selected")
					}
		)
		//个人资料预览按钮 [i.html i_menu]
		$(".i_menu ul").eq(1).hover(
			function(){
				$("#btn_repInfo").css("display","block")
				},function(){
					$("#btn_repInfo").css("display","none")
					}
		)
		//后台删除按钮显示与隐藏[i_history.html , i_favorites.html]
		$(".mod-history-item").hover(
			function(){
				$(this).find(".t-op-del").css("display","block")
				},function(){
					$(this).find(".t-op-del").css("display","none")
					}
		)
		//头像编辑按钮显示[admin/i_info.html]
		$(".edit-head").hover(
			function(){
				$(".ed-img-btn").css("display","block")
				},function(){
					$(".ed-img-btn").css("display","none")
					}
		)
		//范例显示隐藏[i_intention.html]
		$(".mod-yx-flA").hover(
				function(){
					$(".mod-yx-flA .mod-yx-content").css("display","block")
					},function(){
						$(".mod-yx-flA .mod-yx-content").css("display","none")
						}
			)
		//企业后台认证标志内容说明	
		$(".name-cutImg").hover(
			function(){
				$(".code-img-showtxt").css("display","block")
				},function(){
					$(".code-img-showtxt").css("display","none")
					}
		)
			
		//收缩留言内容 

		$(".cs-btn").click(
			
				function(){
					$id=$(this).attr("id");
					$sid=$("#s"+ $id);
					sidCut=$sid.css("display");
					//alert(sidCut);
					if(sidCut == "block"){ //判断是否展开
							$sid.slideUp(300);//收起速度
							$(this).empty();//清空内容
							$(this).append("展开");//修改内容
						}else{
								$sid.slideDown(300);//展开速度
								$(this).empty();
								$(this).append("收起")
							}
					
				}
		)
		//	弹出层 colorbox
		

		//Examples of how to assign the ColorBox event to elements
		$(".group1").colorbox({rel:'group1'});
		$(".group2").colorbox({rel:'group2', transition:"fade"});
		$(".group3").colorbox({rel:'group3', transition:"none", width:"75%", height:"75%"});
		$(".group4").colorbox({rel:'group4', slideshow:true});
		$(".ajax").colorbox();
		$(".youtube").colorbox({iframe:true, innerWidth:425, innerHeight:344});
		$(".iframe").colorbox({iframe:true, width:"80%", height:"80%"});
		$(".inline").colorbox({inline:true, width:"400px",speed:300});
		$(".callbacks").colorbox({
			onOpen:function(){ alert('onOpen: colorbox is about to open'); },
			onLoad:function(){ alert('onLoad: colorbox has started to load the targeted content'); },
			onComplete:function(){ alert('onComplete: colorbox has displayed the loaded content'); },
			onCleanup:function(){ alert('onCleanup: colorbox has begun the close process'); },
			onClosed:function(){ alert('onClosed: colorbox has completely closed'); }
		});
		
		//Example of preserving a JavaScript event for inline calls.
		$("#click").click(function(){ 
			$('#click').css({"background-color":"#f00", "color":"#fff", "cursor":"inherit"}).text("Open this window again and this message will still be here.");
			return false;
		});
		//
		}
)


