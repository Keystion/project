// JavaScript Document
$(function (){

	
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

	


