// JavaScript Document

function tanchu()
{
	var odiv=document.getElementById('qbnr');
	var ostrong=odiv.getElementsByTagName('strong')[0];
	var oul=odiv.getElementsByTagName('div')[0];
	
	odiv.onclick=showHideUl;
}

function showHideUl()
{
	var odiv=document.getElementById('qbnr');
	var ostrong=odiv.getElementsByTagName('strong')[0];
	var oul=odiv.getElementsByTagName('div')[0];
	
	if(oul.style.display === 'block')
	{
		oul.style.display='none';
		}
		else
		{
			oul.style.display='block';
		}
	}
	
	function xiala()
	{
		var jingguo=document.getElementById('xian')
		jingguo.style.display='block';	
		}
	function yincang()
	{
		var jingguo=document.getElementById('xian')
		jingguo.style.display='none';
	}
	
	