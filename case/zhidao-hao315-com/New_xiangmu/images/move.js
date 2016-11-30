function getStyle(obj, name)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[name];
	}
	else
	{
		return getComputedStyle(obj, false)[name];
	}
}

function startMove(obj, json, fnEnd)
{
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		var bStop=true;	//假设所有的都到了
		
		for(var name in json)
		{
			if(name=='opacity')
			{
				var cur=Math.round(parseFloat(getStyle(obj, name))*100);
			}
			else
			{
				var cur=parseInt(getStyle(obj, name));
			}
			
			var speed=(json[name]-cur)/6;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			
			if(cur!=json[name])	//碰到了没到的
			{
				bStop=false;
			}
			
			if(name=='opacity')
			{
				obj.style.filter='alpha(opacity:'+(cur+speed)+')';
				obj.style.opacity=(cur+speed)/100;
			}
			else
			{
				obj.style[name]=cur+speed+'px';
			}
		}
		
		if(bStop)
		{
			clearInterval(obj.timer);
			
			if(fnEnd)
			{
				fnEnd();
			}
		}
	}, 30);
}

