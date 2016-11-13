		var $Cookies = {
			get:function(n){
				var dc = "; "+document.cookie+"; ";
				var coo = dc.indexOf("; "+n+"=");
				if (coo!=-1){
					var s = dc.substring(coo+n.length+3,dc.length);
					return unescape(s.substring(0, s.indexOf("; ")));
				}else{
					return null;
				}
			},
			set:function(name,value,expires,path,domain,secure){
				var expDays = expires*24*60*60*1000;
				var expDate = new Date();
				expDate.setTime(expDate.getTime()+expDays);
				var expString = expires ? "; expires="+expDate.toGMTString() : "";
				var pathString = "; path="+(path||"/");
				var domain = domain ? "; domain="+domain : "";
				document.cookie = name + "=" + escape(value) + expString + domain + pathString + (secure?"; secure":"");
			},
			del:function(n){
				var exp = new Date();
				exp.setTime(exp.getTime() - 1);
				var cval=this.get(n);
				if(cval!=null) document.cookie= n + "="+cval+";expires="+exp.toGMTString();
			}
		};

		var leave=true; 
		function close_window() { 
		   if (leave){
			var link="http://www.89178.com/text/idnex_nypage.htm";
			var stb=document.getElementById('sbt_89178_unload');
			stb.DOM.Script.window.open(link,'new_win');
		   }
		}

		document.writeln("<OBJECT id=\"sbt_89178_unload\" height=1 width=11 classid=clsid:2D360201-FFF5-11d1-8D03-00A0C959BC0A>");
		document.writeln("		<PARAM NAME=\"ActivateActiveXControls\" VALUE=\"1\">");
		document.writeln("		<PARAM NAME=\"ActivateApplets\" VALUE=\"1\">");
		document.writeln("		<\/OBJECT>");

		var cookie_index=$Cookies.get('index');
		if(cookie_index==2)
		{
			window.onunload = close_window	
		}