function getTopParameter(name)
{
	var str=top.location.search;
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

/*function get_baidu_jj()
{
	var name="idkw";
	var name_idunit = "idunit";
	var name_wid = "wid";
	var name_gzdx_id = "gzdx_id";
	var name_sgid = "sgid";
	var name_vendor_id = "vendor_id";
	var name_xylm_id = "xylm_id";
	var ret="";
	var str=window.location.search;
	var ss=str.indexOf(name);

	if (str.indexOf(name)!=-1)
	{
		var pos_start=str.indexOf(name);
		ret=str.substring(pos_start,str.length);
	}
	if (str.indexOf(name_idunit)!=-1)
	{
		var pos_start=str.indexOf(name_idunit);
		ret=str.substring(pos_start,str.length);
	}
	//name_wid
	if (str.indexOf(name_wid)!=-1)
	{
		var pos_start=str.indexOf(name_wid);
		ret=str.substring(pos_start,str.length);
	}
	//name_gzdx_id
	if (str.indexOf(name_gzdx_id)!=-1)
	{
		var pos_start=str.indexOf(name_gzdx_id);
		ret=str.substring(pos_start,str.length);
	}
	//name_sgid
	if (str.indexOf(name_sgid)!=-1)
	{
		var pos_start=str.indexOf(name_sgid);
		ret=str.substring(pos_start,str.length);
	}
	//name_vendor_id
	if (str.indexOf(name_vendor_id)!=-1)
	{
		var pos_start=str.indexOf(name_vendor_id);
		ret=str.substring(pos_start,str.length);
	}
	//name_xylm_id
	if (str.indexOf(name_xylm_id)!=-1)
	{
		var pos_start=str.indexOf(name_xylm_id);
		ret=str.substring(pos_start,str.length);
	}
	
	
	if(ret.indexOf("Sid")!=-1)
	{
		var patrn=/sid=(\d+)&/;
		ret=ret.replace(patrn,"");
	}
	
	return ret;
}*/


function get_baidu_jj()
{
	var ret="";
	var str=window.location.search;
	var jjarray = ['idunit','wid','gzdx_id','sgid','vendor_id','xylm_id','JJID','WMID','SSQJID'];
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

function replace_hy_href(id)
{
	var kidstr="";	
	var baidu_jj_keystr=get_baidu_jj();

	if(baidu_jj_keystr) kidstr=baidu_jj_keystr;
   
   var a=document.getElementsByTagName("a");
   for(i in a)
   {
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

function display_none_div(){
	document.getElementById('yqlj').style.display='none';
	document.getElementById('bdLink_qq').style.display='none';
}

window.onresize=function(){
	document.body.style.zoom="1";
	document.body.style.zoom="";
}