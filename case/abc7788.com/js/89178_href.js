function getspecailvar(name)
{
	var str=window.location.search;
	//大小写兼容，如果没有Sid，处理sid
	if (name=='Sid' && str.indexOf(name)==-1) {
		name = 'sid'
	}
	if(name=='sid'&&str.indexOf(name)==-1){
	    name = 'sourceid';
	}
	if (str.indexOf(name)!=-1)
	{
		var pos_start=str.indexOf(name)+name.length+1;
		var pos_end=str.indexOf("&",pos_start);
		if (pos_end==-1)
		{
			return str.substring(pos_start);
		}
		else
		{
			return str.substring(pos_start,pos_end)
		}
	}
	else
	{
		return '';
	}
}

function get_baidu_tg()
{
	var name="&tn";
	var ret="";
	var str=window.location.search;
	var ss=str.indexOf(name);

	if (str.indexOf(name)!=-1)
	{
		var pos_start=str.indexOf(name);
		ret=str.substring(pos_start+1,str.length);
	}

	return ret;
}


/*function get_baidu_jj()
{
	var name="idunit";
	var ret="";
	var str=window.location.search;
	var ss=str.indexOf(name);

	if (str.indexOf(name)!=-1)
	{
		var pos_start=str.indexOf(name);
		ret=str.substring(pos_start,str.length);
	}
	
	
	if(ret.indexOf("Sid")!=-1)
	{
		var patrn=/Sid=(\d+)&/;
		ret=ret.replace(patrn,"");
	}
	
	return ret;
}*/


function get_baidu_jj()
{
	var ret="";
	var str=window.location.search;
	var jjarray = ['idunit','JJID','WMID','SSQJID'];
	for(j=0;j<jjarray.length;j++) {
		var name = jjarray[j];
		var ss=str.indexOf(name);
		if (ss>0){
			var pos_start=str.indexOf(name);
			ret=str.substring(pos_start,str.length);
		}
	}
	if(ret.indexOf("sid")!=-1)
	{
		var pattern=/sid=(\d+)&/;
		ret=ret.replace(pattern,"");
	}
	return ret;
}



function replace_href(id)
{
	var kidstr="";
	//var baidu_lm_keystr=get_baidu_tg();
	
	var baidu_jj_keystr=get_baidu_jj();

	if(baidu_jj_keystr) kidstr=baidu_jj_keystr;
   //if(baidu_lm_keystr) kidstr=kidstr+"&"+baidu_lm_keystr;
   var saygao_id=getspecailvar("sgid");
   if(saygao_id) kidstr+="sgid="+saygao_id;

   var vendor_id=getspecailvar("vendor_id");
   if(vendor_id) kidstr+="vendor_id="+vendor_id;

   var xylm_id=getspecailvar("xylm_id");
   if(xylm_id) kidstr+="xylm_id="+xylm_id;

   var gzdx_id=getspecailvar("gzdx_id");
   if(gzdx_id) kidstr+="gzdx_id="+gzdx_id;

   var wid=getspecailvar("wid");
   if(wid) kidstr+="wid="+wid;
	

   var a=document.getElementsByTagName("a");
   for(var i=0, l= a.length; i<l;i++){
	   var location_a = a[i].getAttribute("data_1");
	   if(location_a){
          if(location_a.indexOf("#")!=-1) continue;
	      if(a[i].className == "no" || location_a.indexOf("Sid")>0 || location_a.indexOf("sid")>0 || location_a.indexOf("sourceid")>0) continue;
		   if(location_a.indexOf("?")!=-1)
			 {
				 if(kidstr)
				 {
					location_a+="&"+kidstr;
				 }
			 }
			 else
			 {
				 if(kidstr)
				 {
					location_a+="?"+kidstr;
				 }
			 }
			 if(location_a.indexOf("?")!=-1)
			 {
				 if(location_a.indexOf("Sid=")==-1 && location_a.indexOf("sid=")==-1)
				 {
					location_a+="&Sid="+id
				 }
			 }
			 else
			 {
				if(location_a.indexOf("Sid=")==-1 && location_a.indexOf("sid=")==-1)
				 {
					location_a+="?Sid="+id
				 }
			 }
			a[i].setAttribute('data_1',location_a)
	   }else{
	       if(a[i].href)
		   {
				 var tmpstr=a[i].href;
				 if(tmpstr.indexOf("#")!=-1) continue;

				 if(a[i].className == "no" || tmpstr.indexOf("Sid")>0 || tmpstr.indexOf("sid")>0 || tmpstr.indexOf("sourceid")>0) continue;

				 if(tmpstr.indexOf("?")!=-1)
				 {
					 if(kidstr)
					 {
						a[i].href+="&"+kidstr;
					 }
				 }
				 else
				 {
					 if(kidstr)
					 {
						a[i].href+="?"+kidstr;
					 }
				 }
				
				 if(a[i].href.indexOf("?")!=-1)
				 {
					 if(a[i].href.indexOf("Sid=")==-1 && a[i].href.indexOf("sid=")==-1)
					 {
						a[i].href+="&Sid="+id
					 }
				 }
				 else
				 {
					if(a[i].href.indexOf("Sid=")==-1 && a[i].href.indexOf("sid=")==-1)
					 {
						a[i].href+="?Sid="+id
					 }
				 }
		   }
	   }
	}
}

//真正链接的地址
function showExtratag(obj){
	var str=obj.getAttribute('data_1');
	if(typeof str=='string'){
		obj.setAttribute('href',str)
	}
}

function display_none_div(){
	document.getElementById('yqlj').style.display='none';
	document.getElementById('bdLink_qq').style.display='none';
}

function iestateshow()
{
self.status="欢迎光临网上商机杂志【89178.com】，认准网址www.89178.com,建议先给感兴趣的项目留言，再实地考察！";
clearInterval(iestateshow);
}

setInterval('iestateshow()',1000);
