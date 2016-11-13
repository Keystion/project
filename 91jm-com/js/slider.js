$(function() {
	var sWidth = 540; //��ȡ����ͼ�Ŀ�ȣ���ʾ�����$("#focus").width(); 
	var len = $("#focus ul li").length; //��ȡ����ͼ����
	var index = 0;
	var picTimer;
	
	//���´���������ְ�ť�Ͱ�ť��İ�͸������
	var btn = "<div class='btnBg'></div><div class='btn'>";
	for(var i=0; i < len; i++) {
		btn += "<span>" + (i+1) + "</span>";
	}
	btn += "</div>"
	$("#focus").append(btn);
	$("#focus .btnBg").css("opacity",0.5);
	
	//Ϊ���ְ�ť�����껬���¼�������ʾ��Ӧ������
	$("#focus .btn span").mouseenter(function() {
		index = $("#focus .btn span").index(this);
		showPics(index);
	}).eq(0).trigger("mouseenter");
	
	//����Ϊ���ҹ�����������liԪ�ض�����ͬһ�����󸡶�������������Ҫ�������ΧulԪ�صĿ��
	$("#focus ul").css("width","2700px");
	
	//��껬��ĳli�е�ĳdiv�������ͬ��divԪ�ص�͸���ȣ�����li�ı���Ϊ��ɫ�����Ի��б䰵��Ч��
	$("#focus ul li div").hover(function() {
		$(this).siblings().css("opacity",0.7);
	},function() {
		$("#focus ul li div").css("opacity",1);
	});
	
	//��껬�Ͻ���ͼʱֹͣ�Զ����ţ�����ʱ��ʼ�Զ�����
	$("#focus").hover(function() {
		clearInterval(picTimer);
	},function() {
		picTimer = setInterval(function() {
			if(index == len) { //�������ֵ����liԪ�ظ�����˵�����һ��ͼ������ϣ�������Ҫ��ʾ��һ��ͼ��������showFirPic()��Ȼ������ֵ����
				showFirPic();
				index = 0;
			} else { //�������ֵ������liԪ�ظ���������ͨ״̬�л�������showPics()
				showPics(index);
			}
			index++;
		},3000); //��3000�����Զ����ŵļ������λ������
	}).trigger("mouseleave");
	
	//��ʾͼƬ���������ݽ��յ�indexֵ��ʾ��Ӧ������
	function showPics(index) { //��ͨ�л�
		var nowLeft = -index*sWidth; //����indexֵ����ulԪ�ص�leftֵ
		$("#focus ul").stop(true,false).animate({"left":nowLeft},500); //ͨ��animate()����ulԪ�ع������������position
		$("#focus .btn span").removeClass("on").eq(index).addClass("on"); //Ϊ��ǰ�İ�ť�л���ѡ�е�Ч��
	}
	
	function showFirPic() { //���һ��ͼ�Զ��л�����һ��ͼʱר��
		$("#focus ul").append($("#focus ul li:first").clone());
		var nowLeft = -len*sWidth; //ͨ��liԪ�ظ�������ulԪ�ص�leftֵ��Ҳ�������һ��liԪ�ص��ұ�
		$("#focus ul").stop(true,false).animate({"left":nowLeft},500,function() {
			//ͨ��callback���ڶ����������ulԪ�����¶�λ����㣬Ȼ��ɾ�����һ�����ƹ�ȥ��Ԫ��
			$("#focus ul").css("left","0");
			$("#focus ul li:last").remove();
		}); 
		$("#focus .btn span").removeClass("on").eq(0).addClass("on"); //Ϊ��һ����ť���ѡ�е�Ч��
	}
});


/*---------------------- ����˵�-------------------*/
/*

*/
$(function(){
	
	$(".jm_menu li").hover(function(){
			//$(this).addClass("mhover");
			//$(this).css("background","#608ec3");
			$(this).find("p").slideDown(200);
			//$(this).find("s").addClass("on");
		},function(){
			//$(this).removeClass("mhover");
			$(this).find("p").slideUp(200);
			//$(this).find("s").removeClass("on");
			})

	$(".jm_menu ul , .subCategory , .arrow_bottom , .arrow_bottom_hover").hover(
		function(){
			$(".arrow_bottom").hide();
			$(".arrow_bottom_hover").show();
			$(".jm_menu ul").addClass("menu-show")
			//$(".subCategory").show()
			},
			function(){
			$(".arrow_bottom").show();
			$(".arrow_bottom_hover").hide();
			$(".jm_menu ul").removeClass("menu-show");
			//$(".subCategory").hide()
			}
	)		
	})	
	
/*--------------- ͷ���û������� / չ��ͨ�� --------------*/
$(function(){

	$(".log-in , .show-admin").hover(function(){
			$(".show-admin").show();
		},function(){
			$(".show-admin").hide();
		}
		)
})
/*---------------------- һ���������� -------------------*/

$(function() {
			// Set starting slide to 1
			var startSlide = 1;
			// Get slide number if it exists
			if (window.location.hash) {
				//startSlide = window.location.hash.replace('#','');
			}
			// Initialize Slides
			$('#news_slides,#news_slides_img , #bd_logo_slides , #jmStory_slides').slides({
				preload: true,
				preloadImage: 'img/loading.gif',
				generatePagination: true,
				play: 5000,
				pause: 2500,
				hoverPause: true,
				// Get the starting slide
				start: startSlide,
				animationComplete: function(current){
					// Set the slide number as a hash
					//window.location.hash = '#' + current;
				}
			});
			
			$("#news_slides_img").hover(
				function(){
					$("#news_slides_img .step").show()
					},function(){
					$("#news_slides_img .step").hide()
					}
			)
			
});
/*---------------------- ���������� -------------------*/
$(function(){
		$(".btn-screen").click(
			function(){
				$(".curtlist").css("display","block");
				}
		);
		$(".curtlist a").click(
			function(){
				$(".curtlist").css("display","none");
				var curtCon = $(this).html();
				//alert(curtCon);
				$(".btn-screen").empty();
				$(".btn-screen").append(curtCon + "<i></i>")
				//$(".btn-screen").replaceWith("<span class='btn-screen'>" + curtCon + "<i></i></span>");
				//�����ֵ
				}
		);
	})


	