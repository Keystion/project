// JavaScript Document
$(function (){
	(function(){
		var oMenu=document.getElementById('menu')
		var aBtn=oMenu.children;	
		var oDiv1=document.getElementById('banner');	
		
		for(var i=0;i<aBtn.length;i++)
		{
			aBtn[i].onmouseover=function()
			{
				this.className='submenu_active';
				this.children[1].style.display='block'
				oDiv1.style.zIndex='-1';
			}
			
			aBtn[i].onmouseout=function()
			{
				for(var i=0;i<aBtn.length;i++)
				{
					aBtn[i].className='submenu'
				}
				this.children[1].style.display='none'
				oDiv1.style.zIndex='200';		
			}
		
		}	
	})();
	
	(function(){
		var oDiv=document.getElementById('banner');
		var oOl=oDiv.getElementsByTagName('ol')[0];
		var aBtn=oOl.getElementsByTagName('li');
		var oUl=oDiv.getElementsByTagName('ul')[0];
		
		oUl.style.width=oUl.children[0].offsetWidth*oUl.children.length+'px';
		
		var now=0;
		
		for(var i=0;i<aBtn.length;i++)
		{
			aBtn[i].index=i;
			aBtn[i].onmouseover=function ()
			{
				now=this.index;
				
				tab();
			};
		}
		
		function tab()
		{
			for(var i=0;i<aBtn.length;i++)
			{
				aBtn[i].className='';
			}
			
			aBtn[now].className='active';
			startMove(oUl,{left:-now*(oUl.children[0].offsetWidth)});	
	
		}
		function next()
		{
			now++;
			if(now==aBtn.length)
			{
				now=0;
			}
			
			tab();
		}
		
		var timer=setInterval(next, 2000);
		
		oDiv.onmouseover=function ()
		{
			clearInterval(timer);
		};
		oDiv.onmouseout=function ()
		{
			timer=setInterval(next, 2000);
		};	
	})();
	
	(function(){
		var oDiv=document.getElementById('tored');
		var oUl=oDiv.getElementsByTagName('ul')[0];

		var now=0;	
		function tab()
		{
	
			startMove(oUl,{top:-now*oUl.children[0].offsetHeight})
		
		}
		
		function next()
		{
			now++;
			if(now==oUl.children.length)
			{
				now=0;
			}
			
			tab();
		}
	
		var timer=setInterval(next,2000)
		
		oDiv.onmouseover=function ()
		{
			clearInterval(timer);
		};
		oDiv.onmouseout=function ()
		{
			timer=setInterval(next, 2000);
		};	
	})();

});

	


