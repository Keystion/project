// JavaScript Document
window.onload=function (){
	var oDiv=document.getElementById('navfixed');
	var oDiv2=document.getElementById('navbox');
	
	var top=oDiv.offsetTop;
	
	window.onscroll=function ()
	{
		var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		
		if(scrollTop>=top)
		{
			if(window.navigator.userAgent.indexOf('MSIE 6')!=-1)
			{
				oDiv.style.position='absolute';
				
				oDiv.style.top=scrollTop+'px';
				oDiv.style.left=0;
				
				oDiv2.style.display='block';
			}
			else
			{
				oDiv.style.position='fixed';
				oDiv.style.top='0';
				oDiv.style.left='0';
				
				oDiv2.style.display='block';
			}
		}
		else
		{
			oDiv.style.position='';
			
			oDiv2.style.display='none';
		}
	};
};