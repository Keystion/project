/*!
 *
 * jQuery JavaScript Library v1.4.2
 * http://jquery.com/
 *
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2010, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Sat Feb 13 22:33:48 2010 -0500
 *
 */

var swfobject = function() {
	function a() {
		if (!P) {
			try {
				var e = j.getElementsByTagName("body")[0].appendChild(j.createElement("span"));
				e.parentNode.removeChild(e)
			} catch(c) {
				return
			}
			P = true;
			for (var e = I.length,
			a = 0; a < e; a++) I[a]()
		}
	}
	function c(e) {
		P ? e() : I[I.length] = e
	}
	function d(e) {
		if (typeof n.addEventListener != z) n.addEventListener("load", e, false);
		else if (typeof j.addEventListener != z) j.addEventListener("load", e, false);
		else if (typeof n.attachEvent != z) t(n, "onload", e);
		else if (typeof n.onload == "function") {
			var c = n.onload;
			n.onload = function() {
				c();
				e()
			}
		} else n.onload = e
	}
	function f() {
		var e = j.getElementsByTagName("body")[0],
		c = j.createElement(C);
		c.setAttribute("type", K);
		var a = e.appendChild(c);
		if (a) {
			var d = 0; (function() {
				if (typeof a.GetVariable != z) {
					var f = a.GetVariable("$version");
					if (f) f = f.split(" ")[1].split(","),
					B.pv = [parseInt(f[0], 10), parseInt(f[1], 10), parseInt(f[2], 10)]
				} else if (d < 10) {
					d++;
					setTimeout(arguments.callee, 10);
					return
				}
				e.removeChild(c);
				a = null;
				g()
			})()
		} else g()
	}
	function g() {
		var e = q.length;
		if (e > 0) for (var c = 0; c < e; c++) {
			var a = q[c].id,
			d = q[c].callbackFn,
			g = {
				success: false,
				id: a
			};
			if (B.pv[0] > 0) {
				var f = u(a);
				if (f) if (l(q[c].swfVersion) && !(B.wk && B.wk < 312)) {
					if (D(a, true), d) g.success = true,
					g.ref = h(a),
					d(g)
				} else if (q[c].expressInstall && k()) {
					g = {};
					g.data = q[c].expressInstall;
					g.width = f.getAttribute("width") || "0";
					g.height = f.getAttribute("height") || "0";
					if (f.getAttribute("class")) g.styleclass = f.getAttribute("class");
					if (f.getAttribute("align")) g.align = f.getAttribute("align");
					for (var j = {},
					f = f.getElementsByTagName("param"), n = f.length, t = 0; t < n; t++) f[t].getAttribute("name").toLowerCase() != "movie" && (j[f[t].getAttribute("name")] = f[t].getAttribute("value"));
					m(g, j, a, d)
				} else w(f),
				d && d(g)
			} else if (D(a, true), d) {
				if ((a = h(a)) && typeof a.SetVariable != z) g.success = true,
				g.ref = a;
				d(g)
			}
		}
	}
	function h(e) {
		var c = null;
		if ((e = u(e)) && e.nodeName == "OBJECT") typeof e.SetVariable != z ? c = e: (e = e.getElementsByTagName(C)[0]) && (c = e);
		return c
	}
	function k() {
		return ! S && l("6.0.65") && (B.win || B.mac) && !(B.wk && B.wk < 312)
	}
	function m(c, a, d, g) {
		S = true;
		M = g || null;
		J = {
			success: false,
			id: d
		};
		var f = u(d);
		if (f) {
			f.nodeName == "OBJECT" ? (e = o(f), R = null) : (e = f, R = d);
			c.id = N;
			if (typeof c.width == z || !/%$/.test(c.width) && parseInt(c.width, 10) < 310) c.width = "310";
			if (typeof c.height == z || !/%$/.test(c.height) && parseInt(c.height, 10) < 137) c.height = "137";
			j.title = j.title.slice(0, 47) + " - Flash Player Installation";
			g = B.ie && B.win ? "ActiveX": "PlugIn";
			g = "MMredirectURL=" + n.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + g + "&MMdoctitle=" + j.title;
			typeof a.flashvars != z ? a.flashvars += "&" + g: a.flashvars = g;
			if (B.ie && B.win && f.readyState != 4) g = j.createElement("div"),
			d += "SWFObjectNew",
			g.setAttribute("id", d),
			f.parentNode.insertBefore(g, f),
			f.style.display = "none",
			function() {
				f.readyState == 4 ? f.parentNode.removeChild(f) : setTimeout(arguments.callee, 10)
			} ();
			r(c, a, d)
		}
	}
	function w(e) {
		if (B.ie && B.win && e.readyState != 4) {
			var c = j.createElement("div");
			e.parentNode.insertBefore(c, e);
			c.parentNode.replaceChild(o(e), c);
			e.style.display = "none"; (function() {
				e.readyState == 4 ? e.parentNode.removeChild(e) : setTimeout(arguments.callee, 10)
			})()
		} else e.parentNode.replaceChild(o(e), e)
	}
	function o(e) {
		var c = j.createElement("div");
		if (B.win && B.ie) c.innerHTML = e.innerHTML;
		else if (e = e.getElementsByTagName(C)[0]) if (e = e.childNodes) for (var a = e.length,
		d = 0; d < a; d++) ! (e[d].nodeType == 1 && e[d].nodeName == "PARAM") && e[d].nodeType != 8 && c.appendChild(e[d].cloneNode(true));
		return c
	}
	function r(e, c, a) {
		var d, g = u(a);
		if (B.wk && B.wk < 312) return d;
		if (g) {
			if (typeof e.id == z) e.id = a;
			if (B.ie && B.win) {
				var f = "",
				h;
				for (h in e) if (e[h] != Object.prototype[h]) h.toLowerCase() == "data" ? c.movie = e[h] : h.toLowerCase() == "styleclass" ? f += ' class="' + e[h] + '"': h.toLowerCase() != "classid" && (f += " " + h + '="' + e[h] + '"');
				h = "";
				for (var n in c) c[n] != Object.prototype[n] && (h += '<param name="' + n + '" value="' + c[n] + '" />');
				g.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + f + ">" + h + "</object>";
				L[L.length] = e.id;
				d = u(e.id)
			} else {
				n = j.createElement(C);
				n.setAttribute("type", K);
				for (var l in e) e[l] != Object.prototype[l] && (l.toLowerCase() == "styleclass" ? n.setAttribute("class", e[l]) : l.toLowerCase() != "classid" && n.setAttribute(l, e[l]));
				for (f in c) c[f] != Object.prototype[f] && f.toLowerCase() != "movie" && (e = n, h = f, l = c[f], a = j.createElement("param"), a.setAttribute("name", h), a.setAttribute("value", l), e.appendChild(a));
				g.parentNode.replaceChild(n, g);
				d = n
			}
		}
		return d
	}
	function p(e) {
		var c = u(e);
		if (c && c.nodeName == "OBJECT") B.ie && B.win ? (c.style.display = "none",
		function() {
			if (c.readyState == 4) {
				var a = u(e);
				if (a) {
					for (var d in a) typeof a[d] == "function" && (a[d] = null);
					a.parentNode.removeChild(a)
				}
			} else setTimeout(arguments.callee, 10)
		} ()) : c.parentNode.removeChild(c)
	}
	function u(e) {
		var c = null;
		try {
			c = j.getElementById(e)
		} catch(a) {}
		return c
	}
	function t(e, c, a) {
		e.attachEvent(c, a);
		O[O.length] = [e, c, a]
	}
	function l(e) {
		var c = B.pv,
		e = e.split(".");
		e[0] = parseInt(e[0], 10);
		e[1] = parseInt(e[1], 10) || 0;
		e[2] = parseInt(e[2], 10) || 0;
		return c[0] > e[0] || c[0] == e[0] && c[1] > e[1] || c[0] == e[0] && c[1] == e[1] && c[2] >= e[2] ? true: false
	}
	function s(e, c, a, d) {
		if (!B.ie || !B.mac) {
			var f = j.getElementsByTagName("head")[0];
			if (f) {
				a = a && typeof a == "string" ? a: "screen";
				d && (W = G = null);
				if (!G || W != a) d = j.createElement("style"),
				d.setAttribute("type", "text/css"),
				d.setAttribute("media", a),
				G = f.appendChild(d),
				B.ie && B.win && typeof j.styleSheets != z && j.styleSheets.length > 0 && (G = j.styleSheets[j.styleSheets.length - 1]),
				W = a;
				B.ie && B.win ? G && typeof G.addRule == C && G.addRule(e, c) : G && typeof j.createTextNode != z && G.appendChild(j.createTextNode(e + " {" + c + "}"))
			}
		}
	}
	function D(e, c) {
		if (X) {
			var a = c ? "visible": "hidden";
			P && u(e) ? u(e).style.visibility = a: s("#" + e, "visibility:" + a)
		}
	}
	function F(e) {
		return /[\\\"<>\.;]/.exec(e) != null && typeof encodeURIComponent != z ? encodeURIComponent(e) : e
	}
	var z = "undefined",
	C = "object",
	K = "application/x-shockwave-flash",
	N = "SWFObjectExprInst",
	n = window,
	j = document,
	A = navigator,
	x = false,
	I = [function() {
		x ? f() : g()
	}],
	q = [],
	L = [],
	O = [],
	e,
	R,
	M,
	J,
	P = false,
	S = false,
	G,
	W,
	X = true,
	B = function() {
		var e = typeof j.getElementById != z && typeof j.getElementsByTagName != z && typeof j.createElement != z,
		c = A.userAgent.toLowerCase(),
		a = A.platform.toLowerCase(),
		d = a ? /win/.test(a) : /win/.test(c),
		a = a ? /mac/.test(a) : /mac/.test(c),
		c = /webkit/.test(c) ? parseFloat(c.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false,
		f = !+"\u000b1",
		g = [0, 0, 0],
		h = null;
		if (typeof A.plugins != z && typeof A.plugins["Shockwave Flash"] == C) {
			if ((h = A.plugins["Shockwave Flash"].description) && !(typeof A.mimeTypes != z && A.mimeTypes[K] && !A.mimeTypes[K].enabledPlugin)) x = true,
			f = false,
			h = h.replace(/^.*\s+(\S+\s+\S+$)/, "$1"),
			g[0] = parseInt(h.replace(/^(.*)\..*$/, "$1"), 10),
			g[1] = parseInt(h.replace(/^.*\.(.*)\s.*$/, "$1"), 10),
			g[2] = /[a-zA-Z]/.test(h) ? parseInt(h.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
		} else if (typeof n.ActiveXObject != z) try {
			var l = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
			if (l && (h = l.GetVariable("$version"))) f = true,
			h = h.split(" ")[1].split(","),
			g = [parseInt(h[0], 10), parseInt(h[1], 10), parseInt(h[2], 10)]
		} catch(k) {}
		return {
			w3: e,
			pv: g,
			wk: c,
			ie: f,
			win: d,
			mac: a
		}
	} (); (function() {
		B.w3 && ((typeof j.readyState != z && j.readyState == "complete" || typeof j.readyState == z && (j.getElementsByTagName("body")[0] || j.body)) && a(), P || (typeof j.addEventListener != z && j.addEventListener("DOMContentLoaded", a, false), B.ie && B.win && (j.attachEvent("onreadystatechange",
		function() {
			j.readyState == "complete" && (j.detachEvent("onreadystatechange", arguments.callee), a())
		}), n == top &&
		function() {
			if (!P) {
				try {
					j.documentElement.doScroll("left")
				} catch(e) {
					setTimeout(arguments.callee, 0);
					return
				}
				a()
			}
		} ()), B.wk &&
		function() {
			P || (/loaded|complete/.test(j.readyState) ? a() : setTimeout(arguments.callee, 0))
		} (), d(a)))
	})(); (function() {
		B.ie && B.win && window.attachEvent("onunload",
		function() {
			for (var e = O.length,
			c = 0; c < e; c++) O[c][0].detachEvent(O[c][1], O[c][2]);
			e = L.length;
			for (c = 0; c < e; c++) p(L[c]);
			for (var a in B) B[a] = null;
			B = null;
			for (var d in swfobject) swfobject[d] = null;
			swfobject = null
		})
	})();
	return {
		registerObject: function(e, c, a, d) {
			if (B.w3 && e && c) {
				var f = {};
				f.id = e;
				f.swfVersion = c;
				f.expressInstall = a;
				f.callbackFn = d;
				q[q.length] = f;
				D(e, false)
			} else d && d({
				success: false,
				id: e
			})
		},
		getObjectById: function(e) {
			if (B.w3) return h(e)
		},
		embedSWF: function(e, a, d, f, g, h, n, j, t, x) {
			var A = {
				success: false,
				id: a
			};
			B.w3 && !(B.wk && B.wk < 312) && e && a && d && f && g ? (D(a, false), c(function() {
				d += "";
				f += "";
				var c = {};
				if (t && typeof t === C) for (var o in t) c[o] = t[o];
				c.data = e;
				c.width = d;
				c.height = f;
				o = {};
				if (j && typeof j === C) for (var q in j) o[q] = j[q];
				if (n && typeof n === C) for (var p in n) typeof o.flashvars != z ? o.flashvars += "&" + p + "=" + n[p] : o.flashvars = p + "=" + n[p];
				if (l(g)) q = r(c, o, a),
				c.id == a && D(a, true),
				A.success = true,
				A.ref = q;
				else if (h && k()) {
					c.data = h;
					m(c, o, a, x);
					return
				} else D(a, true);
				x && x(A)
			})) : x && x(A)
		},
		switchOffAutoHideShow: function() {
			X = false
		},
		ua: B,
		getFlashPlayerVersion: function() {
			return {
				major: B.pv[0],
				minor: B.pv[1],
				release: B.pv[2]
			}
		},
		hasFlashPlayerVersion: l,
		createSWF: function(e, c, a) {
			if (B.w3) return r(e, c, a)
		},
		showExpressInstall: function(e, c, a, d) {
			B.w3 && k() && m(e, c, a, d)
		},
		removeSWF: function(e) {
			B.w3 && p(e)
		},
		createCSS: function(e, c, a, d) {
			B.w3 && s(e, c, a, d)
		},
		addDomLoadEvent: c,
		addLoadEvent: d,
		getQueryParamValue: function(e) {
			var c = j.location.search || j.location.hash;
			if (c) { / \ ? /.test(c)&&(c=c.split("?")[1]);if(e==null)return F(c);for(var c=c.split("&"),a=0;a<c.length;a++)if(c[a].substring(0,c[a].indexOf("="))==e)return F(c[a].substring(c[a].indexOf("=")+1))}return""},expressInstallCallback:function(){if(S){var c=u(N);if(c&&e){c.parentNode.replaceChild(e,c);if(R&&(D(R,true),B.ie&&B.win))e.style.display="block";M&&M(J)}S=false}}}}();(function(a,c){function d(b){var i=R[b]={},e,c,b=b.split(/\s + /);for(e=0,c=b.length;e<c;e++)i[b[e]]=true;return i}function f(b,i,a){if(a===c&&b.nodeType===1)if(a="data-"+i.replace(P,"-$1").toLowerCase(),a=b.getAttribute(a),typeof a==="string"){try{a=a==="true"?true:a==="false"?false:a==="null"?null:e.isNumeric(a)?parseFloat(a):J.test(a)?e.parseJSON(a):a}catch(v){}e.data(b,i,a)}else a=c;return a}function g(b){for(var i in b)if(!(i==="data"&&e.isEmptyObject(b[i]))&&i!=="toJSON")return false;return true}
function h(b,i,c){var a=i+"defer",E=i+"queue",d=i+"mark",f=e._data(b,a);f&&(c==="queue"||!e._data(b,E))&&(c==="mark"||!e._data(b,d))&&setTimeout(function(){!e._data(b,E)&&!e._data(b,d)&&(e.removeData(b,a,true),f.fire())},0)}function k(){return false}function m(){return true}function w(b,i,c){i=i||0;if(e.isFunction(i))return e.grep(b,function(b,e){return!!i.call(b,e,b)===c});else if(i.nodeType)return e.grep(b,function(b){return b===i===c});else if(typeof i==="string"){var a=e.grep(b,function(b){return b.nodeType===
1});if(Wa.test(i))return e.filter(i,a,!c);else i=e.filter(i,a)}return e.grep(b,function(b){return e.inArray(b,i)>=0===c})}function o(b){var i=xa.split("|"),b=b.createDocumentFragment();if(b.createElement)for(;i.length;)b.createElement(i.pop());return b}function r(b,i){if(i.nodeType===1&&e.hasData(b)){var c,a,E;a=e._data(b);var d=e._data(i,a),f=a.events;if(f)for(c in delete d.handle,d.events={},f)for(a=0,E=f[c].length;a<E;a++)e.event.add(i,c+(f[c][a].namespace?".":"")+f[c][a].namespace,f[c][a],f[c][a].data);
if(d.data)d.data=e.extend({},d.data)}}function p(b,i){var c;if(i.nodeType===1){i.clearAttributes&&i.clearAttributes();i.mergeAttributes&&i.mergeAttributes(b);c=i.nodeName.toLowerCase();if(c==="object")i.outerHTML=b.outerHTML;else if(c==="input"&&(b.type==="checkbox"||b.type==="radio")){if(b.checked)i.defaultChecked=i.checked=b.checked;if(i.value!==b.value)i.value=b.value}else if(c==="option")i.selected=b.defaultSelected;else if(c==="input"||c==="textarea")i.defaultValue=b.defaultValue;i.removeAttribute(e.expando)}}
function u(b){return typeof b.getElementsByTagName!=="undefined"?b.getElementsByTagName("*"):typeof b.querySelectorAll!=="undefined"?b.querySelectorAll("*"):[]}function t(b){if(b.type==="checkbox"||b.type==="radio")b.defaultChecked=b.checked}function l(b){var i=(b.nodeName||"").toLowerCase();i==="input"?t(b):i!=="script"&&typeof b.getElementsByTagName!=="undefined"&&e.grep(b.getElementsByTagName("input"),t)}function s(b,i){i.src?e.ajax({url:i.src,async:false,dataType:"script"}):e.globalEval((i.text||
i.textContent||i.innerHTML||"").replace(Xa,"/ * $0 * /"));i.parentNode&&i.parentNode.removeChild(i)}function D(b,i,c){var a=i==="width"?b.offsetWidth:b.offsetHeight,E=i==="width"?Ya:Za,d=0,f=E.length;if(a>0){if(c!=="border")for(;d<f;d++)c||(a-=parseFloat(e.css(b,"padding"+E[d]))||0),c==="margin"?a+=parseFloat(e.css(b,c+E[d]))||0:a-=parseFloat(e.css(b,"border"+E[d]+"Width"))||0;return a+"px"}a=ba(b,i,i);if(a<0||a==null)a=b.style[i]||0;a=parseFloat(a)||0;if(c)for(;d<f;d++)a+=parseFloat(e.css(b,"padding"+
E[d]))||0,c!=="padding"&&(a+=parseFloat(e.css(b,"border"+E[d]+"Width"))||0),c==="margin"&&(a+=parseFloat(e.css(b,c+E[d]))||0);return a+"px"}function F(b){return function(i,c){var v;typeof i!=="string"&&(c=i,i="*");if(e.isFunction(c))for(var a=i.toLowerCase().split(ya),E=0,d=a.length,f,g;E<d;E++)f=a[E],(g=/ ^ \ + /.test(f))&&(f=f.substr(1)||"*"),v=b[f]=b[f]||[],f=v,f[g?"unshift":"push"](c)}}function z(b,i,e,a,d,f){d=d||i.dataTypes[0];f=f||{};f[d]=true;for(var d=b[d],g=0,h=d?d.length:0,n=b===na,j;g<h&&
(n||!j);g++)j=d[g](i,e,a),typeof j==="string"&&(!n||f[j]?j=c:(i.dataTypes.unshift(j),j=z(b,i,e,a,j,f)));if((n||!j)&&!f["*"])j=z(b,i,e,a,"*",f);return j}function C(b,i){var a,v,d=e.ajaxSettings.flatOptions||{};for(a in i)i[a]!==c&&((d[a]?b:v||(v={}))[a]=i[a]);v&&e.extend(true,b,v)}function K(b,i,c,a){if(e.isArray(i))e.each(i,function(i,d){c||$a.test(b)?a(b,d):K(b+"["+(typeof d==="object"||e.isArray(d)?i:"")+"]",d,c,a)});else if(!c&&i!=null&&typeof i==="object")for(var d in i)K(b+"["+d+"]",i[d],c,a);
else a(b,i)}function N(){try{return new a.XMLHttpRequest}catch(b){}}function n(){setTimeout(j,0);return ia=e.now()}function j(){ia=c}function A(b,i){var c={};e.each(za.concat.apply([],za.slice(0,i)),function(){c[this]=b});return c}function x(b){if(!oa[b]){var i=q.body,c=e("<"+b+">").appendTo(i),a=c.css("display");c.remove();if(a==="none"||a===""){if(!V)V=q.createElement("iframe"),V.frameBorder=V.width=V.height=0;i.appendChild(V);if(!ca||!V.createElement)ca=(V.contentWindow||V.contentDocument).document,
ca.write((q.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),ca.close();c=ca.createElement(b);ca.body.appendChild(c);a=e.css(c,"display");i.removeChild(V)}oa[b]=a}return oa[b]}function I(b){return e.isWindow(b)?b:b.nodeType===9?b.defaultView||b.parentWindow:false}var q=a.document,L=a.navigator,O=a.location,e=function(){function b(){if(!i.isReady){try{q.documentElement.doScroll("left")}catch(e){setTimeout(b,1);return}i.ready()}}var i=function(b,e){return new i.fn.init(b,e,d)},e=a.jQuery,
v=a.$,d,f=/ ^ ( ? :[ ^ # < ] * ( < [\w\W] + >)[ ^ >] * $ | # ([\w\ - ] * ) $) / ,
				g = /\S/,
				h = /^\s+/,
				j = /\s+$/,
				n = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
				l = /^[\],:{}\s]*$/,
				k = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
				t = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
				m = /(?:^|:|,)(?:\s*\[)+/g,
				x = /(webkit)[ \/]([\w.]+)/,
				o = /(opera)(?:.*version)?[ \/]([\w.]+)/,
				A = /(msie) ([\w.]+)/,
				H = /(mozilla)(?:.*? rv:([\w.]+))?/,
				p = /-([a-z]|[0-9])/ig,
				w = /^-ms-/,
				r = function(b, i) {
					return (i + "").toUpperCase()
				},
				s = L.userAgent,
				ja,
				da,
				bb = Object.prototype.toString,
				pa = Object.prototype.hasOwnProperty,
				qa = Array.prototype.push,
				fa = Array.prototype.slice,
				u = String.prototype.trim,
				Aa = Array.prototype.indexOf,
				Q = {};
				i.fn = i.prototype = {
					constructor: i,
					init: function(b, e, a) {
						var y;
						if (!b) return this;
						if (b.nodeType) return this.context = this[0] = b,
						this.length = 1,
						this;
						if (b === "body" && !e && q.body) return this.context = q,
						this[0] = q.body,
						this.selector = b,
						this.length = 1,
						this;
						if (typeof b === "string") if ((y = b.charAt(0) === "<" && b.charAt(b.length - 1) === ">" && b.length >= 3 ? [null, b, null] : f.exec(b)) && (y[1] || !e)) if (y[1]) return a = (e = e instanceof i ? e[0] : e) ? e.ownerDocument || e: q,
						(b = n.exec(b)) ? i.isPlainObject(e) ? (b = [q.createElement(b[1])], i.fn.attr.call(b, e, true)) : b = [a.createElement(b[1])] : (b = i.buildFragment([y[1]], [a]), b = (b.cacheable ? i.clone(b.fragment) : b.fragment).childNodes),
						i.merge(this, b);
						else {
							if ((e = q.getElementById(y[2])) && e.parentNode) {
								if (e.id !== y[2]) return a.find(b);
								this.length = 1;
								this[0] = e
							}
							this.context = q;
							this.selector = b;
							return this
						} else return ! e || e.jquery ? (e || a).find(b) : this.constructor(e).find(b);
						else if (i.isFunction(b)) return a.ready(b);
						if (b.selector !== c) this.selector = b.selector,
						this.context = b.context;
						return i.makeArray(b, this)
					},
					selector: "",
					jquery: "1.7.1",
					length: 0,
					size: function() {
						return this.length
					},
					toArray: function() {
						return fa.call(this, 0)
					},
					get: function(b) {
						return b == null ? this.toArray() : b < 0 ? this[this.length + b] : this[b]
					},
					pushStack: function(b, e, c) {
						var a = this.constructor();
						i.isArray(b) ? qa.apply(a, b) : i.merge(a, b);
						a.prevObject = this;
						a.context = this.context;
						if (e === "find") a.selector = this.selector + (this.selector ? " ": "") + c;
						else if (e) a.selector = this.selector + "." + e + "(" + c + ")";
						return a
					},
					each: function(b, e) {
						return i.each(this, b, e)
					},
					ready: function(b) {
						i.bindReady();
						ja.add(b);
						return this
					},
					eq: function(b) {
						b = +b;
						return b === -1 ? this.slice(b) : this.slice(b, b + 1)
					},
					first: function() {
						return this.eq(0)
					},
					last: function() {
						return this.eq( - 1)
					},
					slice: function() {
						return this.pushStack(fa.apply(this, arguments), "slice", fa.call(arguments).join(","))
					},
					map: function(b) {
						return this.pushStack(i.map(this,
						function(i, e) {
							return b.call(i, e, i)
						}))
					},
					end: function() {
						return this.prevObject || this.constructor(null)
					},
					push: qa,
					sort: [].sort,
					splice: [].splice
				};
				i.fn.init.prototype = i.fn;
				i.extend = i.fn.extend = function() {
					var b, e, a, y, v, d = arguments[0] || {},
					E = 1,
					f = arguments.length,
					g = false;
					typeof d === "boolean" && (g = d, d = arguments[1] || {},
					E = 2);
					typeof d !== "object" && !i.isFunction(d) && (d = {});
					f === E && (d = this, --E);
					for (; E < f; E++) if ((b = arguments[E]) != null) for (e in b) a = d[e],
					y = b[e],
					d !== y && (g && y && (i.isPlainObject(y) || (v = i.isArray(y))) ? (v ? (v = false, a = a && i.isArray(a) ? a: []) : a = a && i.isPlainObject(a) ? a: {},
					d[e] = i.extend(g, a, y)) : y !== c && (d[e] = y));
					return d
				};
				i.extend({
					noConflict: function(b) {
						if (a.$ === i) a.$ = v;
						if (b && a.jQuery === i) a.jQuery = e;
						return i
					},
					isReady: false,
					readyWait: 1,
					holdReady: function(b) {
						b ? i.readyWait++:i.ready(true)
					},
					ready: function(b) {
						if (b === true && !--i.readyWait || b !== true && !i.isReady) {
							if (!q.body) return setTimeout(i.ready, 1);
							i.isReady = true;
							b !== true && --i.readyWait > 0 || (ja.fireWith(q, [i]), i.fn.trigger && i(q).trigger("ready").off("ready"))
						}
					},
					bindReady: function() {
						if (!ja) {
							ja = i.Callbacks("once memory");
							if (q.readyState === "complete") return setTimeout(i.ready, 1);
							if (q.addEventListener) q.addEventListener("DOMContentLoaded", da, false),
							a.addEventListener("load", i.ready, false);
							else if (q.attachEvent) {
								q.attachEvent("onreadystatechange", da);
								a.attachEvent("onload", i.ready);
								var e = false;
								try {
									e = a.frameElement == null
								} catch(c) {}
								q.documentElement.doScroll && e && b()
							}
						}
					},
					isFunction: function(b) {
						return i.type(b) === "function"
					},
					isArray: Array.isArray ||
					function(b) {
						return i.type(b) === "array"
					},
					isWindow: function(b) {
						return b && typeof b === "object" && "setInterval" in b
					},
					isNumeric: function(b) {
						return ! isNaN(parseFloat(b)) && isFinite(b)
					},
					type: function(b) {
						return b == null ? String(b) : Q[bb.call(b)] || "object"
					},
					isPlainObject: function(b) {
						if (!b || i.type(b) !== "object" || b.nodeType || i.isWindow(b)) return false;
						try {
							if (b.constructor && !pa.call(b, "constructor") && !pa.call(b.constructor.prototype, "isPrototypeOf")) return false
						} catch(e) {
							return false
						}
						for (var a in b);
						return a === c || pa.call(b, a)
					},
					isEmptyObject: function(b) {
						for (var e in b) return false;
						return true
					},
					error: function(b) {
						throw Error(b);
					},
					parseJSON: function(b) {
						if (typeof b !== "string" || !b) return null;
						b = i.trim(b);
						if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
						if (l.test(b.replace(k, "@").replace(t, "]").replace(m, ""))) return (new Function("return " + b))();
						i.error("Invalid JSON: " + b)
					},
					parseXML: function(b) {
						var e, y;
						try {
							a.DOMParser ? (y = new DOMParser, e = y.parseFromString(b, "text/xml")) : (e = new ActiveXObject("Microsoft.XMLDOM"), e.async = "false", e.loadXML(b))
						} catch(v) {
							e = c
						} (!e || !e.documentElement || e.getElementsByTagName("parsererror").length) && i.error("Invalid XML: " + b);
						return e
					},
					noop: function() {},
					globalEval: function(b) {
						b && g.test(b) && (a.execScript ||
						function(b) {
							a.eval.call(a, b)
						})(b)
					},
					camelCase: function(b) {
						return b.replace(w, "ms-").replace(p, r)
					},
					nodeName: function(b, e) {
						return b.nodeName && b.nodeName.toUpperCase() === e.toUpperCase()
					},
					each: function(b, e, a) {
						var y, v = 0,
						d = b.length,
						E = d === c || i.isFunction(b);
						if (a) if (E) for (y in b) {
							if (e.apply(b[y], a) === false) break
						} else for (; v < d;) {
							if (e.apply(b[v++], a) === false) break
						} else if (E) for (y in b) {
							if (e.call(b[y], y, b[y]) === false) break
						} else for (; v < d;) if (e.call(b[v], v, b[v++]) === false) break;
						return b
					},
					trim: u ?
					function(b) {
						return b == null ? "": u.call(b)
					}: function(b) {
						return b == null ? "": b.toString().replace(h, "").replace(j, "")
					},
					makeArray: function(b, e) {
						var c = e || [];
						if (b != null) {
							var a = i.type(b);
							b.length == null || a === "string" || a === "function" || a === "regexp" || i.isWindow(b) ? qa.call(c, b) : i.merge(c, b)
						}
						return c
					},
					inArray: function(b, e, i) {
						var c;
						if (e) {
							if (Aa) return Aa.call(e, b, i);
							c = e.length;
							for (i = i ? i < 0 ? Math.max(0, c + i) : i: 0; i < c; i++) if (i in e && e[i] === b) return i
						}
						return - 1
					},
					merge: function(b, e) {
						var i = b.length,
						a = 0;
						if (typeof e.length === "number") for (var y = e.length; a < y; a++) b[i++] = e[a];
						else for (; e[a] !== c;) b[i++] = e[a++];
						b.length = i;
						return b
					},
					grep: function(b, e, i) {
						for (var c = [], a, i = !!i, y = 0, v = b.length; y < v; y++) a = !!e(b[y], y),
						i !== a && c.push(b[y]);
						return c
					},
					map: function(b, e, a) {
						var y, v, d = [],
						E = 0,
						f = b.length;
						if (b instanceof i || f !== c && typeof f === "number" && (f > 0 && b[0] && b[f - 1] || f === 0 || i.isArray(b))) for (; E < f; E++) y = e(b[E], E, a),
						y != null && (d[d.length] = y);
						else for (v in b) y = e(b[v], v, a),
						y != null && (d[d.length] = y);
						return d.concat.apply([], d)
					},
					guid: 1,
					proxy: function(b, e) {
						if (typeof e === "string") var a = b[e],
						e = b,
						b = a;
						if (!i.isFunction(b)) return c;
						var y = fa.call(arguments, 2),
						a = function() {
							return b.apply(e, y.concat(fa.call(arguments)))
						};
						a.guid = b.guid = b.guid || a.guid || i.guid++;
						return a
					},
					access: function(b, e, a, y, v, d) {
						var E = b.length;
						if (typeof e === "object") {
							for (var f in e) i.access(b, f, e[f], y, v, a);
							return b
						}
						if (a !== c) {
							y = !d && y && i.isFunction(a);
							for (f = 0; f < E; f++) v(b[f], e, y ? a.call(b[f], f, v(b[f], e)) : a, d);
							return b
						}
						return E ? v(b[0], e) : c
					},
					now: function() {
						return (new Date).getTime()
					},
					uaMatch: function(b) {
						b = b.toLowerCase();
						b = x.exec(b) || o.exec(b) || A.exec(b) || b.indexOf("compatible") < 0 && H.exec(b) || [];
						return {
							browser: b[1] || "",
							version: b[2] || "0"
						}
					},
					sub: function() {
						function b(e, i) {
							return new b.fn.init(e, i)
						}
						i.extend(true, b, this);
						b.superclass = this;
						b.fn = b.prototype = this();
						b.fn.constructor = b;
						b.sub = this.sub;
						b.fn.init = function(a, c) {
							c && c instanceof i && !(c instanceof b) && (c = b(c));
							return i.fn.init.call(this, a, c, e)
						};
						b.fn.init.prototype = b.fn;
						var e = b(q);
						return b
					},
					browser: {}
				});
				i.each("Boolean Number String Function Array Date RegExp Object".split(" "),
				function(b, e) {
					Q["[object " + e + "]"] = e.toLowerCase()
				});
				s = i.uaMatch(s);
				if (s.browser) i.browser[s.browser] = true,
				i.browser.version = s.version;
				if (i.browser.webkit) i.browser.safari = true;
				g.test("\u00a0") && (h = /^[\s\xA0]+/, j = /[\s\xA0]+$/);
				d = i(q);
				q.addEventListener ? da = function() {
					q.removeEventListener("DOMContentLoaded", da, false);
					i.ready()
				}: q.attachEvent && (da = function() {
					q.readyState === "complete" && (q.detachEvent("onreadystatechange", da), i.ready())
				});
				return i
			} (),
			R = {};
			e.Callbacks = function(b) {
				var b = b ? R[b] || d(b) : {},
				i = [],
				a = [],
				v,
				E,
				f,
				g,
				h,
				j = function(a) {
					var c, y, v, d;
					for (c = 0, y = a.length; c < y; c++) v = a[c],
					d = e.type(v),
					d === "array" ? j(v) : d === "function" && (!b.unique || !l.has(v)) && i.push(v)
				},
				n = function(e, c) {
					c = c || [];
					v = !b.memory || [e, c];
					E = true;
					h = f || 0;
					f = 0;
					for (g = i.length; i && h < g; h++) if (i[h].apply(e, c) === false && b.stopOnFalse) {
						v = true;
						break
					}
					E = false;
					i && (b.once ? v === true ? l.disable() : i = [] : a && a.length && (v = a.shift(), l.fireWith(v[0], v[1])))
				},
				l = {
					add: function() {
						if (i) {
							var b = i.length;
							j(arguments);
							E ? g = i.length: v && v !== true && (f = b, n(v[0], v[1]))
						}
						return this
					},
					remove: function() {
						if (i) for (var e = arguments,
						a = 0,
						c = e.length; a < c; a++) for (var y = 0; y < i.length; y++) if (e[a] === i[y] && (E && y <= g && (g--, y <= h && h--), i.splice(y--, 1), b.unique)) break;
						return this
					},
					has: function(b) {
						if (i) for (var e = 0,
						a = i.length; e < a; e++) if (b === i[e]) return true;
						return false
					},
					empty: function() {
						i = [];
						return this
					},
					disable: function() {
						i = a = v = c;
						return this
					},
					disabled: function() {
						return ! i
					},
					lock: function() {
						a = c; (!v || v === true) && l.disable();
						return this
					},
					locked: function() {
						return ! a
					},
					fireWith: function(e, i) {
						a && (E ? b.once || a.push([e, i]) : (!b.once || !v) && n(e, i));
						return this
					},
					fire: function() {
						l.fireWith(this, arguments);
						return this
					},
					fired: function() {
						return !! v
					}
				};
				return l
			};
			var M = [].slice;
			e.extend({
				Deferred: function(b) {
					var i = e.Callbacks("once memory"),
					a = e.Callbacks("once memory"),
					c = e.Callbacks("memory"),
					d = "pending",
					f = {
						resolve: i,
						reject: a,
						notify: c
					},
					g = {
						done: i.add,
						fail: a.add,
						progress: c.add,
						state: function() {
							return d
						},
						isResolved: i.fired,
						isRejected: a.fired,
						then: function(b, e, i) {
							h.done(b).fail(e).progress(i);
							return this
						},
						always: function() {
							h.done.apply(h, arguments).fail.apply(h, arguments);
							return this
						},
						pipe: function(b, i, a) {
							return e.Deferred(function(c) {
								e.each({
									done: [b, "resolve"],
									fail: [i, "reject"],
									progress: [a, "notify"]
								},
								function(b, i) {
									var a = i[0],
									y = i[1],
									v;
									if (e.isFunction(a)) h[b](function() {
										if ((v = a.apply(this, arguments)) && e.isFunction(v.promise)) v.promise().then(c.resolve, c.reject, c.notify);
										else c[y + "With"](this === h ? c: this, [v])
									});
									else h[b](c[y])
								})
							}).promise()
						},
						promise: function(b) {
							if (b == null) b = g;
							else for (var e in g) b[e] = g[e];
							return b
						}
					},
					h = g.promise({}),
					j;
					for (j in f) h[j] = f[j].fire,
					h[j + "With"] = f[j].fireWith;
					h.done(function() {
						d = "resolved"
					},
					a.disable, c.lock).fail(function() {
						d = "rejected"
					},
					i.disable, c.lock);
					b && b.call(h, h);
					return h
				},
				when: function(b) {
					function i(b) {
						return function(e) {
							c[b] = arguments.length > 1 ? M.call(arguments, 0) : e; --h || j.resolveWith(j, c)
						}
					}
					function a(b) {
						return function(e) {
							g[b] = arguments.length > 1 ? M.call(arguments, 0) : e;
							j.notifyWith(n, g)
						}
					}
					var c = M.call(arguments, 0),
					d = 0,
					f = c.length,
					g = Array(f),
					h = f,
					j = f <= 1 && b && e.isFunction(b.promise) ? b: e.Deferred(),
					n = j.promise();
					if (f > 1) {
						for (; d < f; d++) c[d] && c[d].promise && e.isFunction(c[d].promise) ? c[d].promise().then(i(d), j.reject, a(d)) : --h;
						h || j.resolveWith(j, c)
					} else j !== b && j.resolveWith(j, f ? [b] : []);
					return n
				}
			});
			e.support = function() {
				var b, i, c, v, d, f, g, h, j = q.createElement("div");
				j.setAttribute("className", "t");
				j.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
				i = j.getElementsByTagName("*");
				c = j.getElementsByTagName("a")[0];
				if (!i || !i.length || !c) return {};
				v = q.createElement("select");
				d = v.appendChild(q.createElement("option"));
				i = j.getElementsByTagName("input")[0];
				b = {
					leadingWhitespace: j.firstChild.nodeType === 3,
					tbody: !j.getElementsByTagName("tbody").length,
					htmlSerialize: !!j.getElementsByTagName("link").length,
					style: /top/.test(c.getAttribute("style")),
					hrefNormalized: c.getAttribute("href") === "/a",
					opacity: /^0.55/.test(c.style.opacity),
					cssFloat: !!c.style.cssFloat,
					checkOn: i.value === "on",
					optSelected: d.selected,
					getSetAttribute: j.className !== "t",
					enctype: !!q.createElement("form").enctype,
					html5Clone: q.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>",
					submitBubbles: true,
					changeBubbles: true,
					focusinBubbles: false,
					deleteExpando: true,
					noCloneEvent: true,
					inlineBlockNeedsLayout: false,
					shrinkWrapBlocks: false,
					reliableMarginRight: true
				};
				i.checked = true;
				b.noCloneChecked = i.cloneNode(true).checked;
				v.disabled = true;
				b.optDisabled = !d.disabled;
				try {
					delete j.test
				} catch(n) {
					b.deleteExpando = false
				} ! j.addEventListener && j.attachEvent && j.fireEvent && (j.attachEvent("onclick",
				function() {
					b.noCloneEvent = false
				}), j.cloneNode(true).fireEvent("onclick"));
				i = q.createElement("input");
				i.value = "t";
				i.setAttribute("type", "radio");
				b.radioValue = i.value === "t";
				i.setAttribute("checked", "checked");
				j.appendChild(i);
				c = q.createDocumentFragment();
				c.appendChild(j.lastChild);
				b.checkClone = c.cloneNode(true).cloneNode(true).lastChild.checked;
				b.appendChecked = i.checked;
				c.removeChild(i);
				c.appendChild(j);
				j.innerHTML = "";
				if (a.getComputedStyle) i = q.createElement("div"),
				i.style.width = "0",
				i.style.marginRight = "0",
				j.style.width = "2px",
				j.appendChild(i),
				b.reliableMarginRight = (parseInt((a.getComputedStyle(i, null) || {
					marginRight: 0
				}).marginRight, 10) || 0) === 0;
				if (j.attachEvent) for (g in {
					submit: 1,
					change: 1,
					focusin: 1
				}) i = "on" + g,
				h = i in j,
				h || (j.setAttribute(i, "return;"), h = typeof j[i] === "function"),
				b[g + "Bubbles"] = h;
				c.removeChild(j);
				c = v = d = i = j = i = null;
				e(function() {
					var i, c, a, y, v = q.getElementsByTagName("body")[0];
					if (v) {
						i = q.createElement("div");
						i.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px";
						v.insertBefore(i, v.firstChild);
						j = q.createElement("div");
						i.appendChild(j);
						j.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
						f = j.getElementsByTagName("td");
						h = f[0].offsetHeight === 0;
						f[0].style.display = "";
						f[1].style.display = "none";
						b.reliableHiddenOffsets = h && f[0].offsetHeight === 0;
						j.innerHTML = "";
						j.style.width = j.style.paddingLeft = "1px";
						e.boxModel = b.boxModel = j.offsetWidth === 2;
						if (typeof j.style.zoom !== "undefined") j.style.display = "inline",
						j.style.zoom = 1,
						b.inlineBlockNeedsLayout = j.offsetWidth === 2,
						j.style.display = "",
						j.innerHTML = "<div style='width:4px;'></div>",
						b.shrinkWrapBlocks = j.offsetWidth !== 2;
						j.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;visibility:hidden;border:0;";
						j.innerHTML = "<div style='position:absolute;top:0;left:0;width:1px;height:1px;margin:0;border:5px solid #000;padding:0;'><div></div></div><table style='position:absolute;top:0;left:0;width:1px;height:1px;margin:0;border:5px solid #000;padding:0;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
						c = j.firstChild;
						a = c.firstChild;
						y = {
							doesNotAddBorder: a.offsetTop !== 5,
							doesAddBorderForTableAndCells: c.nextSibling.firstChild.firstChild.offsetTop === 5
						};
						a.style.position = "fixed";
						a.style.top = "20px";
						y.fixedPosition = a.offsetTop === 20 || a.offsetTop === 15;
						a.style.position = a.style.top = "";
						c.style.overflow = "hidden";
						c.style.position = "relative";
						y.subtractsBorderForOverflowNotVisible = a.offsetTop === -5;
						y.doesNotIncludeMarginInBodyOffset = v.offsetTop !== 1;
						v.removeChild(i);
						j = null;
						e.extend(b, y)
					}
				});
				return b
			} ();
			var J = /^(?:\{.*\}|\[.*\])$/,
			P = /([A-Z])/g;
			e.extend({
				cache: {},
				uuid: 0,
				expando: "jQuery" + (e.fn.jquery + Math.random()).replace(/\D/g, ""),
				noData: {
					embed: true,
					object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
					applet: true
				},
				hasData: function(b) {
					b = b.nodeType ? e.cache[b[e.expando]] : b[e.expando];
					return !! b && !g(b)
				},
				data: function(b, i, a, v) {
					if (e.acceptData(b)) {
						var d;
						d = e.expando;
						var f = typeof i === "string",
						g = b.nodeType,
						j = g ? e.cache: b,
						h = g ? b[d] : b[d] && d,
						n = i === "events";
						if (h && j[h] && (n || v || j[h].data) || !(f && a === c)) {
							h || (g ? b[d] = h = ++e.uuid: h = d);
							if (!j[h] && (j[h] = {},
							!g)) j[h].toJSON = e.noop;
							if (typeof i === "object" || typeof i === "function") v ? j[h] = e.extend(j[h], i) : j[h].data = e.extend(j[h].data, i);
							d = b = j[h];
							if (!v) {
								if (!b.data) b.data = {};
								b = b.data
							}
							a !== c && (b[e.camelCase(i)] = a);
							if (n && !b[i]) return d.events;
							f ? (a = b[i], a == null && (a = b[e.camelCase(i)])) : a = b;
							return a
						}
					}
				},
				removeData: function(b, i, a) {
					if (e.acceptData(b)) {
						var c, d, f, j = e.expando,
						h = b.nodeType,
						n = h ? e.cache: b,
						l = h ? b[j] : j;
						if (n[l]) {
							if (i && (c = a ? n[l] : n[l].data)) {
								e.isArray(i) || (i in c ? i = [i] : (i = e.camelCase(i), i = i in c ? [i] : i.split(" ")));
								for (d = 0, f = i.length; d < f; d++) delete c[i[d]];
								if (! (a ? g: e.isEmptyObject)(c)) return
							}
							if (!a && (delete n[l].data, !g(n[l]))) return;
							e.support.deleteExpando || !n.setInterval ? delete n[l] : n[l] = null;
							h && (e.support.deleteExpando ? delete b[j] : b.removeAttribute ? b.removeAttribute(j) : b[j] = null)
						}
					}
				},
				_data: function(b, i, c) {
					return e.data(b, i, c, true)
				},
				acceptData: function(b) {
					if (b.nodeName) {
						var i = e.noData[b.nodeName.toLowerCase()];
						if (i) return ! (i === true || b.getAttribute("classid") !== i)
					}
					return true
				}
			});
			e.fn.extend({
				data: function(b, i) {
					var a, v, d, g = null;
					if (typeof b === "undefined") {
						if (this.length && (g = e.data(this[0]), this[0].nodeType === 1 && !e._data(this[0], "parsedAttrs"))) {
							v = this[0].attributes;
							for (var j = 0,
							h = v.length; j < h; j++) d = v[j].name,
							d.indexOf("data-") === 0 && (d = e.camelCase(d.substring(5)), f(this[0], d, g[d]));
							e._data(this[0], "parsedAttrs", true)
						}
						return g
					} else if (typeof b === "object") return this.each(function() {
						e.data(this, b)
					});
					a = b.split(".");
					a[1] = a[1] ? "." + a[1] : "";
					return i === c ? (g = this.triggerHandler("getData" + a[1] + "!", [a[0]]), g === c && this.length && (g = e.data(this[0], b), g = f(this[0], b, g)), g === c && a[1] ? this.data(a[0]) : g) : this.each(function() {
						var c = e(this),
						v = [a[0], i];
						c.triggerHandler("setData" + a[1] + "!", v);
						e.data(this, b, i);
						c.triggerHandler("changeData" + a[1] + "!", v)
					})
				},
				removeData: function(b) {
					return this.each(function() {
						e.removeData(this, b)
					})
				}
			});
			e.extend({
				_mark: function(b, i) {
					b && (i = (i || "fx") + "mark", e._data(b, i, (e._data(b, i) || 0) + 1))
				},
				_unmark: function(b, i, a) {
					b !== true && (a = i, i = b, b = false);
					if (i) {
						var a = a || "fx",
						c = a + "mark"; (b = b ? 0 : (e._data(i, c) || 1) - 1) ? e._data(i, c, b) : (e.removeData(i, c, true), h(i, a, "mark"))
					}
				},
				queue: function(b, i, a) {
					var c;
					if (b) return i = (i || "fx") + "queue",
					c = e._data(b, i),
					a && (!c || e.isArray(a) ? c = e._data(b, i, e.makeArray(a)) : c.push(a)),
					c || []
				},
				dequeue: function(b, i) {
					var i = i || "fx",
					a = e.queue(b, i),
					c = a.shift(),
					d = {};
					c === "inprogress" && (c = a.shift());
					c && (i === "fx" && a.unshift("inprogress"), e._data(b, i + ".run", d), c.call(b,
					function() {
						e.dequeue(b, i)
					},
					d));
					a.length || (e.removeData(b, i + "queue " + i + ".run", true), h(b, i, "queue"))
				}
			});
			e.fn.extend({
				queue: function(b, i) {
					typeof b !== "string" && (i = b, b = "fx");
					return i === c ? e.queue(this[0], b) : this.each(function() {
						var a = e.queue(this, b, i);
						b === "fx" && a[0] !== "inprogress" && e.dequeue(this, b)
					})
				},
				dequeue: function(b) {
					return this.each(function() {
						e.dequeue(this, b)
					})
				},
				delay: function(b, i) {
					b = e.fx ? e.fx.speeds[b] || b: b;
					return this.queue(i || "fx",
					function(e, i) {
						var a = setTimeout(e, b);
						i.stop = function() {
							clearTimeout(a)
						}
					})
				},
				clearQueue: function(b) {
					return this.queue(b || "fx", [])
				},
				promise: function(b) {
					function i() {--g || a.resolveWith(d, [d])
					}
					typeof b !== "string" && (b = c);
					var b = b || "fx",
					a = e.Deferred(),
					d = this,
					f = d.length,
					g = 1,
					j = b + "defer",
					h = b + "queue";
					b += "mark";
					for (var n; f--;) if (n = e.data(d[f], j, c, true) || (e.data(d[f], h, c, true) || e.data(d[f], b, c, true)) && e.data(d[f], j, e.Callbacks("once memory"), true)) g++,
					n.add(i);
					i();
					return a.promise()
				}
			});
			var S = /[\n\t\r]/g,
			G = /\s+/,
			W = /\r/g,
			X = /^(?:button|input)$/i,
			B = /^(?:button|input|object|select|textarea)$/i,
			Y = /^a(?:rea)?$/i,
			ga = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
			ha = e.support.getSetAttribute,
			H, Q, U;
			e.fn.extend({
				attr: function(b, i) {
					return e.access(this, b, i, true, e.attr)
				},
				removeAttr: function(b) {
					return this.each(function() {
						e.removeAttr(this, b)
					})
				},
				prop: function(b, i) {
					return e.access(this, b, i, true, e.prop)
				},
				removeProp: function(b) {
					b = e.propFix[b] || b;
					return this.each(function() {
						try {
							this[b] = c,
							delete this[b]
						} catch(e) {}
					})
				},
				addClass: function(b) {
					var i, a, c, d, f, g, j;
					if (e.isFunction(b)) return this.each(function(i) {
						e(this).addClass(b.call(this, i, this.className))
					});
					if (b && typeof b === "string") {
						i = b.split(G);
						for (a = 0, c = this.length; a < c; a++) if (d = this[a], d.nodeType === 1) if (!d.className && i.length === 1) d.className = b;
						else {
							f = " " + d.className + " ";
							for (g = 0, j = i.length; g < j; g++)~f.indexOf(" " + i[g] + " ") || (f += i[g] + " ");
							d.className = e.trim(f)
						}
					}
					return this
				},
				removeClass: function(b) {
					var i, a, d, f, g, j, h;
					if (e.isFunction(b)) return this.each(function(i) {
						e(this).removeClass(b.call(this, i, this.className))
					});
					if (b && typeof b === "string" || b === c) {
						i = (b || "").split(G);
						for (a = 0, d = this.length; a < d; a++) if (f = this[a], f.nodeType === 1 && f.className) if (b) {
							g = (" " + f.className + " ").replace(S, " ");
							for (j = 0, h = i.length; j < h; j++) g = g.replace(" " + i[j] + " ", " ");
							f.className = e.trim(g)
						} else f.className = ""
					}
					return this
				},
				toggleClass: function(b, i) {
					var a = typeof b,
					c = typeof i === "boolean";
					return e.isFunction(b) ? this.each(function(a) {
						e(this).toggleClass(b.call(this, a, this.className, i), i)
					}) : this.each(function() {
						if (a === "string") for (var d, f = 0,
						g = e(this), j = i, h = b.split(G); d = h[f++];) j = c ? j: !g.hasClass(d),
						g[j ? "addClass": "removeClass"](d);
						else if (a === "undefined" || a === "boolean") this.className && e._data(this, "__className__", this.className),
						this.className = this.className || b === false ? "": e._data(this, "__className__") || ""
					})
				},
				hasClass: function(b) {
					for (var b = " " + b + " ",
					e = 0,
					a = this.length; e < a; e++) if (this[e].nodeType === 1 && (" " + this[e].className + " ").replace(S, " ").indexOf(b) > -1) return true;
					return false
				},
				val: function(b) {
					var i, a, d, f = this[0];
					if (arguments.length) return d = e.isFunction(b),
					this.each(function(a) {
						var y = e(this);
						if (this.nodeType === 1 && (a = d ? b.call(this, a, y.val()) : b, a == null ? a = "": typeof a === "number" ? a += "": e.isArray(a) && (a = e.map(a,
						function(b) {
							return b == null ? "": b + ""
						})), i = e.valHooks[this.nodeName.toLowerCase()] || e.valHooks[this.type], !i || !("set" in i) || i.set(this, a, "value") === c)) this.value = a
					});
					else if (f) {
						if ((i = e.valHooks[f.nodeName.toLowerCase()] || e.valHooks[f.type]) && "get" in i && (a = i.get(f, "value")) !== c) return a;
						a = f.value;
						return typeof a === "string" ? a.replace(W, "") : a == null ? "": a
					}
				}
			});
			e.extend({
				valHooks: {
					option: {
						get: function(b) {
							var e = b.attributes.value;
							return ! e || e.specified ? b.value: b.text
						}
					},
					select: {
						get: function(b) {
							var i, a, c = b.selectedIndex,
							d = [],
							f = b.options,
							g = b.type === "select-one";
							if (c < 0) return null;
							b = g ? c: 0;
							for (a = g ? c + 1 : f.length; b < a; b++) if (i = f[b], i.selected && (e.support.optDisabled ? !i.disabled: i.getAttribute("disabled") === null) && (!i.parentNode.disabled || !e.nodeName(i.parentNode, "optgroup"))) {
								i = e(i).val();
								if (g) return i;
								d.push(i)
							}
							return g && !d.length && f.length ? e(f[c]).val() : d
						},
						set: function(b, i) {
							var a = e.makeArray(i);
							e(b).find("option").each(function() {
								this.selected = e.inArray(e(this).val(), a) >= 0
							});
							if (!a.length) b.selectedIndex = -1;
							return a
						}
					}
				},
				attrFn: {
					val: true,
					css: true,
					html: true,
					text: true,
					data: true,
					width: true,
					height: true,
					offset: true
				},
				attr: function(b, i, a, d) {
					var f, g, j = b.nodeType;
					if (b && !(j === 3 || j === 8 || j === 2)) {
						if (d && i in e.attrFn) return e(b)[i](a);
						if (typeof b.getAttribute === "undefined") return e.prop(b, i, a);
						if (d = j !== 1 || !e.isXMLDoc(b)) i = i.toLowerCase(),
						g = e.attrHooks[i] || (ga.test(i) ? Q: H);
						if (a !== c) if (a === null) e.removeAttr(b, i);
						else return g && "set" in g && d && (f = g.set(b, a, i)) !== c ? f: (b.setAttribute(i, "" + a), a);
						else return g && "get" in g && d && (f = g.get(b, i)) !== null ? f: (f = b.getAttribute(i), f === null ? c: f)
					}
				},
				removeAttr: function(b, a) {
					var c, d, f, g, j = 0;
					if (a && b.nodeType === 1) {
						d = a.toLowerCase().split(G);
						for (g = d.length; j < g; j++) if (f = d[j]) c = e.propFix[f] || f,
						e.attr(b, f, ""),
						b.removeAttribute(ha ? f: c),
						ga.test(f) && c in b && (b[c] = false)
					}
				},
				attrHooks: {
					type: {
						set: function(b, a) {
							if (X.test(b.nodeName) && b.parentNode) e.error("type property can't be changed");
							else if (!e.support.radioValue && a === "radio" && e.nodeName(b, "input")) {
								var c = b.value;
								b.setAttribute("type", a);
								if (c) b.value = c;
								return a
							}
						}
					},
					value: {
						get: function(b, a) {
							return H && e.nodeName(b, "button") ? H.get(b, a) : a in b ? b.value: null
						},
						set: function(b, a, c) {
							if (H && e.nodeName(b, "button")) return H.set(b, a, c);
							b.value = a
						}
					}
				},
				propFix: {
					tabindex: "tabIndex",
					readonly: "readOnly",
					"for": "htmlFor",
					"class": "className",
					maxlength: "maxLength",
					cellspacing: "cellSpacing",
					cellpadding: "cellPadding",
					rowspan: "rowSpan",
					colspan: "colSpan",
					usemap: "useMap",
					frameborder: "frameBorder",
					contenteditable: "contentEditable"
				},
				prop: function(b, a, d) {
					var f, g, j = b.nodeType;
					if (b && !(j === 3 || j === 8 || j === 2)) {
						if (j !== 1 || !e.isXMLDoc(b)) a = e.propFix[a] || a,
						g = e.propHooks[a];
						return d !== c ? g && "set" in g && (f = g.set(b, d, a)) !== c ? f: b[a] = d: g && "get" in g && (f = g.get(b, a)) !== null ? f: b[a]
					}
				},
				propHooks: {
					tabIndex: {
						get: function(b) {
							var e = b.getAttributeNode("tabindex");
							return e && e.specified ? parseInt(e.value, 10) : B.test(b.nodeName) || Y.test(b.nodeName) && b.href ? 0 : c
						}
					}
				}
			});
			e.attrHooks.tabindex = e.propHooks.tabIndex;
			Q = {
				get: function(b, a) {
					var d, f = e.prop(b, a);
					return f === true || typeof f !== "boolean" && (d = b.getAttributeNode(a)) && d.nodeValue !== false ? a.toLowerCase() : c
				},
				set: function(b, a, c) {
					a === false ? e.removeAttr(b, c) : (a = e.propFix[c] || c, a in b && (b[a] = true), b.setAttribute(c, c.toLowerCase()));
					return c
				}
			};
			if (!ha) U = {
				name: true,
				id: true
			},
			H = e.valHooks.button = {
				get: function(b, e) {
					var a;
					return (a = b.getAttributeNode(e)) && (U[e] ? a.nodeValue !== "": a.specified) ? a.nodeValue: c
				},
				set: function(b, e, a) {
					var c = b.getAttributeNode(a);
					c || (c = q.createAttribute(a), b.setAttributeNode(c));
					return c.nodeValue = e + ""
				}
			},
			e.attrHooks.tabindex.set = H.set,
			e.each(["width", "height"],
			function(b, a) {
				e.attrHooks[a] = e.extend(e.attrHooks[a], {
					set: function(b, e) {
						if (e === "") return b.setAttribute(a, "auto"),
						e
					}
				})
			}),
			e.attrHooks.contenteditable = {
				get: H.get,
				set: function(b, e, a) {
					e === "" && (e = "false");
					H.set(b, e, a)
				}
			};
			e.support.hrefNormalized || e.each(["href", "src", "width", "height"],
			function(b, a) {
				e.attrHooks[a] = e.extend(e.attrHooks[a], {
					get: function(b) {
						b = b.getAttribute(a, 2);
						return b === null ? c: b
					}
				})
			});
			if (!e.support.style) e.attrHooks.style = {
				get: function(b) {
					return b.style.cssText.toLowerCase() || c
				},
				set: function(b, e) {
					return b.style.cssText = "" + e
				}
			};
			if (!e.support.optSelected) e.propHooks.selected = e.extend(e.propHooks.selected, {
				get: function() {
					return null
				}
			});
			if (!e.support.enctype) e.propFix.enctype = "encoding";
			e.support.checkOn || e.each(["radio", "checkbox"],
			function() {
				e.valHooks[this] = {
					get: function(b) {
						return b.getAttribute("value") === null ? "on": b.value
					}
				}
			});
			e.each(["radio", "checkbox"],
			function() {
				e.valHooks[this] = e.extend(e.valHooks[this], {
					set: function(b, a) {
						if (e.isArray(a)) return b.checked = e.inArray(e(b).val(), a) >= 0
					}
				})
			});
			var ma = /^(?:textarea|input|select)$/i,
			ua = /^([^\.]*)?(?:\.(.+))?$/,
			Ra = /\bhover(\.\S+)?\b/,
			Sa = /^key/,
			Ta = /^(?:mouse|contextmenu)|click/,
			va = /^(?:focusinfocus|focusoutblur)$/,
			Ua = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
			Va = function(b) {
				if (b = Ua.exec(b)) b[1] = (b[1] || "").toLowerCase(),
				b[3] = b[3] && RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)");
				return b
			},
			wa = function(b) {
				return e.event.special.hover ? b: b.replace(Ra, "mouseenter$1 mouseleave$1")
			};
			e.event = {
				add: function(b, a, d, f, g) {
					var j, h, n, l, k, t, m, x, o;
					if (! (b.nodeType === 3 || b.nodeType === 8 || !a || !d || !(j = e._data(b)))) {
						if (d.handler) m = d,
						d = m.handler;
						if (!d.guid) d.guid = e.guid++;
						n = j.events;
						if (!n) j.events = n = {};
						h = j.handle;
						if (!h) j.handle = h = function(b) {
							return typeof e !== "undefined" && (!b || e.event.triggered !== b.type) ? e.event.dispatch.apply(h.elem, arguments) : c
						},
						h.elem = b;
						a = e.trim(wa(a)).split(" ");
						for (j = 0; j < a.length; j++) {
							l = ua.exec(a[j]) || [];
							k = l[1];
							t = (l[2] || "").split(".").sort();
							o = e.event.special[k] || {};
							k = (g ? o.delegateType: o.bindType) || k;
							o = e.event.special[k] || {};
							l = e.extend({
								type: k,
								origType: l[1],
								data: f,
								handler: d,
								guid: d.guid,
								selector: g,
								quick: Va(g),
								namespace: t.join(".")
							},
							m);
							x = n[k];
							if (!x && (x = n[k] = [], x.delegateCount = 0, !o.setup || o.setup.call(b, f, t, h) === false)) b.addEventListener ? b.addEventListener(k, h, false) : b.attachEvent && b.attachEvent("on" + k, h);
							if (o.add && (o.add.call(b, l), !l.handler.guid)) l.handler.guid = d.guid;
							g ? x.splice(x.delegateCount++, 0, l) : x.push(l);
							e.event.global[k] = true
						}
						b = null
					}
				},
				global: {},
				remove: function(b, a, c, d, f) {
					var g = e.hasData(b) && e._data(b),
					j,
					h,
					n,
					l,
					k,
					t,
					x,
					m,
					o,
					A;
					if (g && (x = g.events)) {
						a = e.trim(wa(a || "")).split(" ");
						for (j = 0; j < a.length; j++) if (h = ua.exec(a[j]) || [], n = l = h[1], h = h[2], n) {
							m = e.event.special[n] || {};
							n = (d ? m.delegateType: m.bindType) || n;
							o = x[n] || [];
							k = o.length;
							h = h ? RegExp("(^|\\.)" + h.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
							for (t = 0; t < o.length; t++) if (A = o[t], (f || l === A.origType) && (!c || c.guid === A.guid) && (!h || h.test(A.namespace)) && (!d || d === A.selector || d === "**" && A.selector)) o.splice(t--, 1),
							A.selector && o.delegateCount--,
							m.remove && m.remove.call(b, A);
							o.length === 0 && k !== o.length && ((!m.teardown || m.teardown.call(b, h) === false) && e.removeEvent(b, n, g.handle), delete x[n])
						} else for (n in x) e.event.remove(b, n + a[j], c, d, true);
						if (e.isEmptyObject(x)) {
							if (a = g.handle) a.elem = null;
							e.removeData(b, ["events", "handle"], true)
						}
					}
				},
				customEvent: {
					getData: true,
					setData: true,
					changeData: true
				},
				trigger: function(b, i, d, f) {
					if (!d || !(d.nodeType === 3 || d.nodeType === 8)) {
						var g = b.type || b,
						j = [],
						h,
						n,
						l,
						k,
						t;
						if (!va.test(g + e.event.triggered) && (g.indexOf("!") >= 0 && (g = g.slice(0, -1), h = true), g.indexOf(".") >= 0 && (j = g.split("."), g = j.shift(), j.sort()), d && !e.event.customEvent[g] || e.event.global[g])) if (b = typeof b === "object" ? b[e.expando] ? b: new e.Event(g, b) : new e.Event(g), b.type = g, b.isTrigger = true, b.exclusive = h, b.namespace = j.join("."), b.namespace_re = b.namespace ? RegExp("(^|\\.)" + j.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, h = g.indexOf(":") < 0 ? "on" + g: "", d) {
							b.result = c;
							if (!b.target) b.target = d;
							i = i != null ? e.makeArray(i) : [];
							i.unshift(b);
							l = e.event.special[g] || {};
							if (! (l.trigger && l.trigger.apply(d, i) === false)) {
								t = [[d, l.bindType || g]];
								if (!f && !l.noBubble && !e.isWindow(d)) {
									k = l.delegateType || g;
									j = va.test(k + g) ? d: d.parentNode;
									for (n = null; j; j = j.parentNode) t.push([j, k]),
									n = j;
									n && n === d.ownerDocument && t.push([n.defaultView || n.parentWindow || a, k])
								}
								for (n = 0; n < t.length && !b.isPropagationStopped(); n++) j = t[n][0],
								b.type = t[n][1],
								(k = (e._data(j, "events") || {})[b.type] && e._data(j, "handle")) && k.apply(j, i),
								(k = h && j[h]) && e.acceptData(j) && k.apply(j, i) === false && b.preventDefault();
								b.type = g;
								if (!f && !b.isDefaultPrevented() && (!l._default || l._default.apply(d.ownerDocument, i) === false) && !(g === "click" && e.nodeName(d, "a")) && e.acceptData(d)) if (h && d[g] && (g !== "focus" && g !== "blur" || b.target.offsetWidth !== 0) && !e.isWindow(d))(n = d[h]) && (d[h] = null),
								e.event.triggered = g,
								d[g](),
								e.event.triggered = c,
								n && (d[h] = n);
								return b.result
							}
						} else for (n in d = e.cache, d) d[n].events && d[n].events[g] && e.event.trigger(b, i, d[n].handle.elem, true)
					}
				},
				dispatch: function(b) {
					var b = e.event.fix(b || a.event),
					i = (e._data(this, "events") || {})[b.type] || [],
					d = i.delegateCount,
					f = [].slice.call(arguments, 0),
					g = !b.exclusive && !b.namespace,
					j = [],
					h,
					n,
					l,
					k,
					t,
					m,
					x;
					f[0] = b;
					b.delegateTarget = this;
					if (d && !b.target.disabled && !(b.button && b.type === "click")) {
						l = e(this);
						l.context = this.ownerDocument || this;
						for (n = b.target; n != this; n = n.parentNode || this) {
							t = {};
							m = [];
							l[0] = n;
							for (h = 0; h < d; h++) {
								k = i[h];
								x = k.selector;
								if (t[x] === c) {
									var o = t,
									A = x,
									q;
									if (k.quick) {
										q = k.quick;
										var H = n.attributes || {};
										q = (!q[1] || n.nodeName.toLowerCase() === q[1]) && (!q[2] || (H.id || {}).value === q[2]) && (!q[3] || q[3].test((H["class"] || {}).value))
									} else q = l.is(x);
									o[A] = q
								}
								t[x] && m.push(k)
							}
							m.length && j.push({
								elem: n,
								matches: m
							})
						}
					}
					i.length > d && j.push({
						elem: this,
						matches: i.slice(d)
					});
					for (h = 0; h < j.length && !b.isPropagationStopped(); h++) {
						d = j[h];
						b.currentTarget = d.elem;
						for (i = 0; i < d.matches.length && !b.isImmediatePropagationStopped(); i++) if (k = d.matches[i], g || !b.namespace && !k.namespace || b.namespace_re && b.namespace_re.test(k.namespace)) if (b.data = k.data, b.handleObj = k, k = ((e.event.special[k.origType] || {}).handle || k.handler).apply(d.elem, f), k !== c) b.result = k,
						k === false && (b.preventDefault(), b.stopPropagation())
					}
					return b.result
				},
				props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
				fixHooks: {},
				keyHooks: {
					props: "char charCode key keyCode".split(" "),
					filter: function(b, e) {
						if (b.which == null) b.which = e.charCode != null ? e.charCode: e.keyCode;
						return b
					}
				},
				mouseHooks: {
					props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
					filter: function(b, e) {
						var a, d, f = e.button,
						g = e.fromElement;
						if (b.pageX == null && e.clientX != null) a = b.target.ownerDocument || q,
						d = a.documentElement,
						a = a.body,
						b.pageX = e.clientX + (d && d.scrollLeft || a && a.scrollLeft || 0) - (d && d.clientLeft || a && a.clientLeft || 0),
						b.pageY = e.clientY + (d && d.scrollTop || a && a.scrollTop || 0) - (d && d.clientTop || a && a.clientTop || 0);
						if (!b.relatedTarget && g) b.relatedTarget = g === b.target ? e.toElement: g;
						if (!b.which && f !== c) b.which = f & 1 ? 1 : f & 2 ? 3 : f & 4 ? 2 : 0;
						return b
					}
				},
				fix: function(b) {
					if (b[e.expando]) return b;
					var a, d, f = b,
					g = e.event.fixHooks[b.type] || {},
					j = g.props ? this.props.concat(g.props) : this.props,
					b = e.Event(f);
					for (a = j.length; a;) d = j[--a],
					b[d] = f[d];
					if (!b.target) b.target = f.srcElement || q;
					if (b.target.nodeType === 3) b.target = b.target.parentNode;
					if (b.metaKey === c) b.metaKey = b.ctrlKey;
					return g.filter ? g.filter(b, f) : b
				},
				special: {
					ready: {
						setup: e.bindReady
					},
					load: {
						noBubble: true
					},
					focus: {
						delegateType: "focusin"
					},
					blur: {
						delegateType: "focusout"
					},
					beforeunload: {
						setup: function(b, a, c) {
							if (e.isWindow(this)) this.onbeforeunload = c
						},
						teardown: function(b, a) {
							if (this.onbeforeunload === a) this.onbeforeunload = null
						}
					}
				},
				simulate: function(b, a, c, d) {
					b = e.extend(new e.Event, c, {
						type: b,
						isSimulated: true,
						originalEvent: {}
					});
					d ? e.event.trigger(b, null, a) : e.event.dispatch.call(a, b);
					b.isDefaultPrevented() && c.preventDefault()
				}
			};
			e.event.handle = e.event.dispatch;
			e.removeEvent = q.removeEventListener ?
			function(b, a, e) {
				b.removeEventListener && b.removeEventListener(a, e, false)
			}: function(b, a, e) {
				b.detachEvent && b.detachEvent("on" + a, e)
			};
			e.Event = function(b, a) {
				if (! (this instanceof e.Event)) return new e.Event(b, a);
				b && b.type ? (this.originalEvent = b, this.type = b.type, this.isDefaultPrevented = b.defaultPrevented || b.returnValue === false || b.getPreventDefault && b.getPreventDefault() ? m: k) : this.type = b;
				a && e.extend(this, a);
				this.timeStamp = b && b.timeStamp || e.now();
				this[e.expando] = true
			};
			e.Event.prototype = {
				preventDefault: function() {
					this.isDefaultPrevented = m;
					var b = this.originalEvent;
					if (b) b.preventDefault ? b.preventDefault() : b.returnValue = false
				},
				stopPropagation: function() {
					this.isPropagationStopped = m;
					var b = this.originalEvent;
					if (b) b.stopPropagation && b.stopPropagation(),
					b.cancelBubble = true
				},
				stopImmediatePropagation: function() {
					this.isImmediatePropagationStopped = m;
					this.stopPropagation()
				},
				isDefaultPrevented: k,
				isPropagationStopped: k,
				isImmediatePropagationStopped: k
			};
			e.each({
				mouseenter: "mouseover",
				mouseleave: "mouseout"
			},
			function(b, a) {
				e.event.special[b] = {
					delegateType: a,
					bindType: a,
					handle: function(b) {
						var c = b.relatedTarget,
						d = b.handleObj,
						f;
						if (!c || c !== this && !e.contains(this, c)) b.type = d.origType,
						f = d.handler.apply(this, arguments),
						b.type = a;
						return f
					}
				}
			});
			if (!e.support.submitBubbles) e.event.special.submit = {
				setup: function() {
					if (e.nodeName(this, "form")) return false;
					e.event.add(this, "click._submit keypress._submit",
					function(b) {
						b = b.target;
						if ((b = e.nodeName(b, "input") || e.nodeName(b, "button") ? b.form: c) && !b._submit_attached) e.event.add(b, "submit._submit",
						function(b) {
							this.parentNode && !b.isTrigger && e.event.simulate("submit", this.parentNode, b, true)
						}),
						b._submit_attached = true
					})
				},
				teardown: function() {
					if (e.nodeName(this, "form")) return false;
					e.event.remove(this, "._submit")
				}
			};
			if (!e.support.changeBubbles) e.event.special.change = {
				setup: function() {
					if (ma.test(this.nodeName)) {
						if (this.type === "checkbox" || this.type === "radio") e.event.add(this, "propertychange._change",
						function(b) {
							if (b.originalEvent.propertyName === "checked") this._just_changed = true
						}),
						e.event.add(this, "click._change",
						function(b) {
							if (this._just_changed && !b.isTrigger) this._just_changed = false,
							e.event.simulate("change", this, b, true)
						});
						return false
					}
					e.event.add(this, "beforeactivate._change",
					function(b) {
						b = b.target;
						if (ma.test(b.nodeName) && !b._change_attached) e.event.add(b, "change._change",
						function(b) {
							this.parentNode && !b.isSimulated && !b.isTrigger && e.event.simulate("change", this.parentNode, b, true)
						}),
						b._change_attached = true
					})
				},
				handle: function(b) {
					var a = b.target;
					if (this !== a || b.isSimulated || b.isTrigger || a.type !== "radio" && a.type !== "checkbox") return b.handleObj.handler.apply(this, arguments)
				},
				teardown: function() {
					e.event.remove(this, "._change");
					return ma.test(this.nodeName)
				}
			};
			e.support.focusinBubbles || e.each({
				focus: "focusin",
				blur: "focusout"
			},
			function(b, a) {
				var c = 0,
				d = function(b) {
					e.event.simulate(a, b.target, e.event.fix(b), true)
				};
				e.event.special[a] = {
					setup: function() {
						c++===0 && q.addEventListener(b, d, true)
					},
					teardown: function() {--c === 0 && q.removeEventListener(b, d, true)
					}
				}
			});
			e.fn.extend({
				on: function(b, a, d, f, g) {
					var j, h;
					if (typeof b === "object") {
						typeof a !== "string" && (d = a, a = c);
						for (h in b) this.on(h, a, d, b[h], g);
						return this
					}
					d == null && f == null ? (f = a, d = a = c) : f == null && (typeof a === "string" ? (f = d, d = c) : (f = d, d = a, a = c));
					if (f === false) f = k;
					else if (!f) return this;
					if (g === 1) j = f,
					f = function(b) {
						e().off(b);
						return j.apply(this, arguments)
					},
					f.guid = j.guid || (j.guid = e.guid++);
					return this.each(function() {
						e.event.add(this, b, f, d, a)
					})
				},
				one: function(b, a, e, c) {
					return this.on.call(this, b, a, e, c, 1)
				},
				off: function(b, a, d) {
					if (b && b.preventDefault && b.handleObj) {
						var f = b.handleObj;
						e(b.delegateTarget).off(f.namespace ? f.type + "." + f.namespace: f.type, f.selector, f.handler);
						return this
					}
					if (typeof b === "object") {
						for (f in b) this.off(f, a, b[f]);
						return this
					}
					if (a === false || typeof a === "function") d = a,
					a = c;
					d === false && (d = k);
					return this.each(function() {
						e.event.remove(this, b, d, a)
					})
				},
				bind: function(b, a, e) {
					return this.on(b, null, a, e)
				},
				unbind: function(b, a) {
					return this.off(b, null, a)
				},
				live: function(b, a, c) {
					e(this.context).on(b, this.selector, a, c);
					return this
				},
				die: function(b, a) {
					e(this.context).off(b, this.selector || "**", a);
					return this
				},
				delegate: function(b, a, e, c) {
					return this.on(a, b, e, c)
				},
				undelegate: function(b, a, e) {
					return arguments.length == 1 ? this.off(b, "**") : this.off(a, b, e)
				},
				trigger: function(b, a) {
					return this.each(function() {
						e.event.trigger(b, a, this)
					})
				},
				triggerHandler: function(b, a) {
					if (this[0]) return e.event.trigger(b, a, this[0], true)
				},
				toggle: function(b) {
					var a = arguments,
					c = b.guid || e.guid++,
					d = 0,
					f = function(c) {
						var f = (e._data(this, "lastToggle" + b.guid) || 0) % d;
						e._data(this, "lastToggle" + b.guid, f + 1);
						c.preventDefault();
						return a[f].apply(this, arguments) || false
					};
					for (f.guid = c; d < a.length;) a[d++].guid = c;
					return this.click(f)
				},
				hover: function(b, a) {
					return this.mouseenter(b).mouseleave(a || b)
				}
			});
			e.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
			function(b, a) {
				e.fn[a] = function(b, e) {
					e == null && (e = b, b = null);
					return arguments.length > 0 ? this.on(a, null, b, e) : this.trigger(a)
				};
				e.attrFn && (e.attrFn[a] = true);
				if (Sa.test(a)) e.event.fixHooks[a] = e.event.keyHooks;
				if (Ta.test(a)) e.event.fixHooks[a] = e.event.mouseHooks
			}); (function() {
				function b(b, a, e, c, i, d) {
					for (var i = 0,
					g = c.length; i < g; i++) {
						var j = c[i];
						if (j) {
							for (var h = false,
							j = j[b]; j;) {
								if (j[f] === e) {
									h = c[j.sizset];
									break
								}
								if (j.nodeType === 1 && !d) j[f] = e,
								j.sizset = i;
								if (j.nodeName.toLowerCase() === a) {
									h = j;
									break
								}
								j = j[b]
							}
							c[i] = h
						}
					}
				}
				function a(b, e, c, i, d, g) {
					for (var d = 0,
					j = i.length; d < j; d++) {
						var h = i[d];
						if (h) {
							for (var y = false,
							h = h[b]; h;) {
								if (h[f] === c) {
									y = i[h.sizset];
									break
								}
								if (h.nodeType === 1) {
									if (!g) h[f] = c,
									h.sizset = d;
									if (typeof e !== "string") {
										if (h === e) {
											y = true;
											break
										}
									} else if (m.filter(e, [h]).length > 0) {
										y = h;
										break
									}
								}
								h = h[b]
							}
							i[d] = y
						}
					}
				}
				var d = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
				f = "sizcache" + (Math.random() + "").replace(".", ""),
				g = 0,
				j = Object.prototype.toString,
				h = false,
				n = true,
				l = /\\/g,
				k = /\r\n/g,
				t = /\W/; [0, 0].sort(function() {
					n = false;
					return 0
				});
				var m = function(b, a, e, c) {
					var e = e || [],
					i = a = a || q;
					if (a.nodeType !== 1 && a.nodeType !== 9) return [];
					if (!b || typeof b !== "string") return e;
					var f, g, h, v, n, l = true,
					E = m.isXML(a),
					k = [],
					t = b;
					do
					if (d.exec(""), f = d.exec(t)) if (t = f[3], k.push(f[1]), f[2]) {
						v = f[3];
						break
					}
					while (f);
					if (k.length > 1 && A.exec(b)) if (k.length === 2 && o.relative[k[0]]) g = Q(k[0] + k[1], a, c);
					else for (g = o.relative[k[0]] ? [a] : m(k.shift(), a); k.length;) b = k.shift(),
					o.relative[b] && (b += k.shift()),
					g = Q(b, g, c);
					else if (!c && k.length > 1 && a.nodeType === 9 && !E && o.match.ID.test(k[0]) && !o.match.ID.test(k[k.length - 1]) && (f = m.find(k.shift(), a, E), a = f.expr ? m.filter(f.expr, f.set)[0] : f.set[0]), a) {
						f = c ? {
							expr: k.pop(),
							set: w(c)
						}: m.find(k.pop(), k.length === 1 && (k[0] === "~" || k[0] === "+") && a.parentNode ? a.parentNode: a, E);
						g = f.expr ? m.filter(f.expr, f.set) : f.set;
						for (k.length > 0 ? h = w(g) : l = false; k.length;) f = n = k.pop(),
						o.relative[n] ? f = k.pop() : n = "",
						f == null && (f = a),
						o.relative[n](h, f, E)
					} else h = [];
					h || (h = g);
					h || m.error(n || b);
					if (j.call(h) === "[object Array]") if (l) if (a && a.nodeType === 1) for (b = 0; h[b] != null; b++) h[b] && (h[b] === true || h[b].nodeType === 1 && m.contains(a, h[b])) && e.push(g[b]);
					else for (b = 0; h[b] != null; b++) h[b] && h[b].nodeType === 1 && e.push(g[b]);
					else e.push.apply(e, h);
					else w(h, e);
					v && (m(v, i, e, c), m.uniqueSort(e));
					return e
				};
				m.uniqueSort = function(b) {
					if (r && (h = n, b.sort(r), h)) for (var a = 1; a < b.length; a++) b[a] === b[a - 1] && b.splice(a--, 1);
					return b
				};
				m.matches = function(b, a) {
					return m(b, null, null, a)
				};
				m.matchesSelector = function(b, a) {
					return m(a, null, null, [b]).length > 0
				};
				m.find = function(b, a, e) {
					var c, i, d, f, g, j;
					if (!b) return [];
					for (i = 0, d = o.order.length; i < d; i++) if (g = o.order[i], f = o.leftMatch[g].exec(b)) if (j = f[1], f.splice(1, 1), j.substr(j.length - 1) !== "\\" && (f[1] = (f[1] || "").replace(l, ""), c = o.find[g](f, a, e), c != null)) {
						b = b.replace(o.match[g], "");
						break
					}
					c || (c = typeof a.getElementsByTagName !== "undefined" ? a.getElementsByTagName("*") : []);
					return {
						set: c,
						expr: b
					}
				};
				m.filter = function(b, a, e, i) {
					for (var d, f, g, j, h, v, y, n, k = b,
					l = [], E = a, t = a && a[0] && m.isXML(a[0]); b && a.length;) {
						for (g in o.filter) if ((d = o.leftMatch[g].exec(b)) != null && d[2]) if (v = o.filter[g], h = d[1], f = false, d.splice(1, 1), h.substr(h.length - 1) !== "\\") {
							E === l && (l = []);
							if (o.preFilter[g]) if (d = o.preFilter[g](d, E, e, l, i, t)) {
								if (d === true) continue
							} else f = j = true;
							if (d) for (y = 0; (h = E[y]) != null; y++) h && (j = v(h, d, y, E), n = i ^ j, e && j != null ? n ? f = true: E[y] = false: n && (l.push(h), f = true));
							if (j !== c) {
								e || (E = l);
								b = b.replace(o.match[g], "");
								if (!f) return [];
								break
							}
						}
						if (b === k) if (f == null) m.error(b);
						else break;
						k = b
					}
					return E
				};
				m.error = function(b) {
					throw Error("Syntax error, unrecognized expression: " + b);
				};
				var x = m.getText = function(b) {
					var a, e;
					a = b.nodeType;
					var c = "";
					if (a) if (a === 1 || a === 9) if (typeof b.textContent === "string") return b.textContent;
					else if (typeof b.innerText === "string") return b.innerText.replace(k, "");
					else for (b = b.firstChild; b; b = b.nextSibling) c += x(b);
					else {
						if (a === 3 || a === 4) return b.nodeValue
					} else for (a = 0; e = b[a]; a++) e.nodeType !== 8 && (c += x(e));
					return c
				},
				o = m.selectors = {
					order: ["ID", "NAME", "TAG"],
					match: {
						ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
						CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
						NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
						ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
						TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
						CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
						POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
						PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
					},
					leftMatch: {},
					attrMap: {
						"class": "className",
						"for": "htmlFor"
					},
					attrHandle: {
						href: function(b) {
							return b.getAttribute("href")
						},
						type: function(b) {
							return b.getAttribute("type")
						}
					},
					relative: {
						"+": function(b, a) {
							var e = typeof a === "string",
							c = e && !t.test(a),
							e = e && !c;
							c && (a = a.toLowerCase());
							for (var c = 0,
							i = b.length,
							d; c < i; c++) if (d = b[c]) {
								for (; (d = d.previousSibling) && d.nodeType !== 1;);
								b[c] = e || d && d.nodeName.toLowerCase() === a ? d || false: d === a
							}
							e && m.filter(a, b, true)
						},
						">": function(b, a) {
							var e, c = typeof a === "string",
							i = 0,
							d = b.length;
							if (c && !t.test(a)) for (a = a.toLowerCase(); i < d; i++) {
								if (e = b[i]) e = e.parentNode,
								b[i] = e.nodeName.toLowerCase() === a ? e: false
							} else {
								for (; i < d; i++)(e = b[i]) && (b[i] = c ? e.parentNode: e.parentNode === a);
								c && m.filter(a, b, true)
							}
						},
						"": function(e, c, d) {
							var f, j = g++,
							h = a;
							typeof c === "string" && !t.test(c) && (f = c = c.toLowerCase(), h = b);
							h("parentNode", c, j, e, f, d)
						},
						"~": function(e, c, d) {
							var f, j = g++,
							h = a;
							typeof c === "string" && !t.test(c) && (f = c = c.toLowerCase(), h = b);
							h("previousSibling", c, j, e, f, d)
						}
					},
					find: {
						ID: function(b, a, e) {
							if (typeof a.getElementById !== "undefined" && !e) return (b = a.getElementById(b[1])) && b.parentNode ? [b] : []
						},
						NAME: function(b, a) {
							if (typeof a.getElementsByName !== "undefined") {
								for (var e = [], c = a.getElementsByName(b[1]), i = 0, d = c.length; i < d; i++) c[i].getAttribute("name") === b[1] && e.push(c[i]);
								return e.length === 0 ? null: e
							}
						},
						TAG: function(b, a) {
							if (typeof a.getElementsByTagName !== "undefined") return a.getElementsByTagName(b[1])
						}
					},
					preFilter: {
						CLASS: function(b, a, e, c, i, d) {
							b = " " + b[1].replace(l, "") + " ";
							if (d) return b;
							for (var d = 0,
							f; (f = a[d]) != null; d++) f && (i ^ (f.className && (" " + f.className + " ").replace(/[\t\n\r]/g, " ").indexOf(b) >= 0) ? e || c.push(f) : e && (a[d] = false));
							return false
						},
						ID: function(b) {
							return b[1].replace(l, "")
						},
						TAG: function(b) {
							return b[1].replace(l, "").toLowerCase()
						},
						CHILD: function(b) {
							if (b[1] === "nth") {
								b[2] || m.error(b[0]);
								b[2] = b[2].replace(/^\+|\s*/g, "");
								var a = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(b[2] === "even" && "2n" || b[2] === "odd" && "2n+1" || !/\D/.test(b[2]) && "0n+" + b[2] || b[2]);
								b[2] = a[1] + (a[2] || 1) - 0;
								b[3] = a[3] - 0
							} else b[2] && m.error(b[0]);
							b[0] = g++;
							return b
						},
						ATTR: function(b, a, e, c, i, d) {
							a = b[1] = b[1].replace(l, ""); ! d && o.attrMap[a] && (b[1] = o.attrMap[a]);
							b[4] = (b[4] || b[5] || "").replace(l, "");
							b[2] === "~=" && (b[4] = " " + b[4] + " ");
							return b
						},
						PSEUDO: function(b, a, e, c, i) {
							if (b[1] === "not") if ((d.exec(b[3]) || "").length > 1 || /^\w/.test(b[3])) b[3] = m(b[3], null, null, a);
							else return b = m.filter(b[3], a, e, 1 ^ i),
							e || c.push.apply(c, b),
							false;
							else if (o.match.POS.test(b[0]) || o.match.CHILD.test(b[0])) return true;
							return b
						},
						POS: function(b) {
							b.unshift(true);
							return b
						}
					},
					filters: {
						enabled: function(b) {
							return b.disabled === false && b.type !== "hidden"
						},
						disabled: function(b) {
							return b.disabled === true
						},
						checked: function(b) {
							return b.checked === true
						},
						selected: function(b) {
							return b.selected === true
						},
						parent: function(b) {
							return !! b.firstChild
						},
						empty: function(b) {
							return ! b.firstChild
						},
						has: function(b, a, e) {
							return !! m(e[3], b).length
						},
						header: function(b) {
							return /h\d/i.test(b.nodeName)
						},
						text: function(b) {
							var a = b.getAttribute("type"),
							e = b.type;
							return b.nodeName.toLowerCase() === "input" && "text" === e && (a === e || a === null)
						},
						radio: function(b) {
							return b.nodeName.toLowerCase() === "input" && "radio" === b.type
						},
						checkbox: function(b) {
							return b.nodeName.toLowerCase() === "input" && "checkbox" === b.type
						},
						file: function(b) {
							return b.nodeName.toLowerCase() === "input" && "file" === b.type
						},
						password: function(b) {
							return b.nodeName.toLowerCase() === "input" && "password" === b.type
						},
						submit: function(b) {
							var a = b.nodeName.toLowerCase();
							return (a === "input" || a === "button") && "submit" === b.type
						},
						image: function(b) {
							return b.nodeName.toLowerCase() === "input" && "image" === b.type
						},
						reset: function(b) {
							var a = b.nodeName.toLowerCase();
							return (a === "input" || a === "button") && "reset" === b.type
						},
						button: function(b) {
							var a = b.nodeName.toLowerCase();
							return a === "input" && "button" === b.type || a === "button"
						},
						input: function(b) {
							return /input|select|textarea|button/i.test(b.nodeName)
						},
						focus: function(b) {
							return b === b.ownerDocument.activeElement
						}
					},
					setFilters: {
						first: function(b, a) {
							return a === 0
						},
						last: function(b, a, e, c) {
							return a === c.length - 1
						},
						even: function(b, a) {
							return a % 2 === 0
						},
						odd: function(b, a) {
							return a % 2 === 1
						},
						lt: function(b, a, e) {
							return a < e[3] - 0
						},
						gt: function(b, a, e) {
							return a > e[3] - 0
						},
						nth: function(b, a, e) {
							return e[3] - 0 === a
						},
						eq: function(b, a, e) {
							return e[3] - 0 === a
						}
					},
					filter: {
						PSEUDO: function(b, a, e, c) {
							var i = a[1],
							d = o.filters[i];
							if (d) return d(b, e, a, c);
							else if (i === "contains") return (b.textContent || b.innerText || x([b]) || "").indexOf(a[3]) >= 0;
							else if (i === "not") {
								a = a[3];
								e = 0;
								for (c = a.length; e < c; e++) if (a[e] === b) return false;
								return true
							} else m.error(i)
						},
						CHILD: function(b, a) {
							var e, c, i, d, g, j;
							e = a[1];
							j = b;
							switch (e) {
							case "only":
							case "first":
								for (; j = j.previousSibling;) if (j.nodeType === 1) return false;
								if (e === "first") return true;
								j = b;
							case "last":
								for (; j = j.nextSibling;) if (j.nodeType === 1) return false;
								return true;
							case "nth":
								e = a[2];
								c = a[3];
								if (e === 1 && c === 0) return true;
								i = a[0];
								if ((d = b.parentNode) && (d[f] !== i || !b.nodeIndex)) {
									g = 0;
									for (j = d.firstChild; j; j = j.nextSibling) if (j.nodeType === 1) j.nodeIndex = ++g;
									d[f] = i
								}
								j = b.nodeIndex - c;
								return e === 0 ? j === 0 : j % e === 0 && j / e >= 0
							}
						},
						ID: function(b, a) {
							return b.nodeType === 1 && b.getAttribute("id") === a
						},
						TAG: function(b, a) {
							return a === "*" && b.nodeType === 1 || !!b.nodeName && b.nodeName.toLowerCase() === a
						},
						CLASS: function(b, a) {
							return (" " + (b.className || b.getAttribute("class")) + " ").indexOf(a) > -1
						},
						ATTR: function(b, a) {
							var e = a[1],
							e = m.attr ? m.attr(b, e) : o.attrHandle[e] ? o.attrHandle[e](b) : b[e] != null ? b[e] : b.getAttribute(e),
							c = e + "",
							i = a[2],
							d = a[4];
							return e == null ? i === "!=": !i && m.attr ? e != null: i === "=" ? c === d: i === "*=" ? c.indexOf(d) >= 0 : i === "~=" ? (" " + c + " ").indexOf(d) >= 0 : !d ? c && e !== false: i === "!=" ? c !== d: i === "^=" ? c.indexOf(d) === 0 : i === "$=" ? c.substr(c.length - d.length) === d: i === "|=" ? c === d || c.substr(0, d.length + 1) === d + "-": false
						},
						POS: function(b, a, e, c) {
							var i = o.setFilters[a[2]];
							if (i) return i(b, e, a, c)
						}
					}
				},
				A = o.match.POS,
				H = function(b, a) {
					return "\\" + (a - 0 + 1)
				},
				p;
				for (p in o.match) o.match[p] = RegExp(o.match[p].source + /(?![^\[]*\])(?![^\(]*\))/.source),
				o.leftMatch[p] = RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[p].source.replace(/\\(\d+)/g, H));
				var w = function(b, a) {
					b = Array.prototype.slice.call(b, 0);
					return a ? (a.push.apply(a, b), a) : b
				};
				try {
					Array.prototype.slice.call(q.documentElement.childNodes, 0)
				} catch(s) {
					w = function(b, a) {
						var e = 0,
						c = a || [];
						if (j.call(b) === "[object Array]") Array.prototype.push.apply(c, b);
						else if (typeof b.length === "number") for (var i = b.length; e < i; e++) c.push(b[e]);
						else for (; b[e]; e++) c.push(b[e]);
						return c
					}
				}
				var r, u;
				q.documentElement.compareDocumentPosition ? r = function(b, a) {
					return b === a ? (h = true, 0) : !b.compareDocumentPosition || !a.compareDocumentPosition ? b.compareDocumentPosition ? -1 : 1 : b.compareDocumentPosition(a) & 4 ? -1 : 1
				}: (r = function(b, a) {
					if (b === a) return h = true,
					0;
					else if (b.sourceIndex && a.sourceIndex) return b.sourceIndex - a.sourceIndex;
					var e, c, i = [],
					d = [];
					e = b.parentNode;
					c = a.parentNode;
					var f = e;
					if (e === c) return u(b, a);
					else if (e) {
						if (!c) return 1
					} else return - 1;
					for (; f;) i.unshift(f),
					f = f.parentNode;
					for (f = c; f;) d.unshift(f),
					f = f.parentNode;
					e = i.length;
					c = d.length;
					for (f = 0; f < e && f < c; f++) if (i[f] !== d[f]) return u(i[f], d[f]);
					return f === e ? u(b, d[f], -1) : u(i[f], a, 1)
				},
				u = function(b, a, e) {
					if (b === a) return e;
					for (b = b.nextSibling; b;) {
						if (b === a) return - 1;
						b = b.nextSibling
					}
					return 1
				}); (function() {
					var b = q.createElement("div"),
					a = "script" + (new Date).getTime(),
					e = q.documentElement;
					b.innerHTML = "<a name='" + a + "'/>";
					e.insertBefore(b, e.firstChild);
					if (q.getElementById(a)) o.find.ID = function(b, a, e) {
						if (typeof a.getElementById !== "undefined" && !e) return (a = a.getElementById(b[1])) ? a.id === b[1] || typeof a.getAttributeNode !== "undefined" && a.getAttributeNode("id").nodeValue === b[1] ? [a] : c: []
					},
					o.filter.ID = function(b, a) {
						var e = typeof b.getAttributeNode !== "undefined" && b.getAttributeNode("id");
						return b.nodeType === 1 && e && e.nodeValue === a
					};
					e.removeChild(b);
					e = b = null
				})(); (function() {
					var b = q.createElement("div");
					b.appendChild(q.createComment(""));
					if (b.getElementsByTagName("*").length > 0) o.find.TAG = function(b, a) {
						var e = a.getElementsByTagName(b[1]);
						if (b[1] === "*") {
							for (var c = [], i = 0; e[i]; i++) e[i].nodeType === 1 && c.push(e[i]);
							e = c
						}
						return e
					};
					b.innerHTML = "<a href='#'></a>";
					if (b.firstChild && typeof b.firstChild.getAttribute !== "undefined" && b.firstChild.getAttribute("href") !== "#") o.attrHandle.href = function(b) {
						return b.getAttribute("href", 2)
					};
					b = null
				})();
				q.querySelectorAll &&
				function() {
					var b = m,
					a = q.createElement("div");
					a.innerHTML = "<p class='TEST'></p>";
					if (! (a.querySelectorAll && a.querySelectorAll(".TEST").length === 0)) {
						m = function(a, e, c, i) {
							e = e || q;
							if (!i && !m.isXML(e)) {
								var d = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(a);
								if (d && (e.nodeType === 1 || e.nodeType === 9)) if (d[1]) return w(e.getElementsByTagName(a), c);
								else if (d[2] && o.find.CLASS && e.getElementsByClassName) return w(e.getElementsByClassName(d[2]), c);
								if (e.nodeType === 9) {
									if (a === "body" && e.body) return w([e.body], c);
									else if (d && d[3]) {
										var f = e.getElementById(d[3]);
										if (f && f.parentNode) {
											if (f.id === d[3]) return w([f], c)
										} else return w([], c)
									}
									try {
										return w(e.querySelectorAll(a), c)
									} catch(g) {}
								} else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
									var d = e,
									j = (f = e.getAttribute("id")) || "__sizzle__",
									h = e.parentNode,
									v = /^\s*[+~]/.test(a);
									f ? j = j.replace(/'/g, "\\$&") : e.setAttribute("id", j);
									if (v && h) e = e.parentNode;
									try {
										if (!v || h) return w(e.querySelectorAll("[id='" + j + "'] " + a), c)
									} catch(y) {} finally {
										f || d.removeAttribute("id")
									}
								}
							}
							return b(a, e, c, i)
						};
						for (var e in b) m[e] = b[e];
						a = null
					}
				} (); (function() {
					var b = q.documentElement,
					a = b.matchesSelector || b.mozMatchesSelector || b.webkitMatchesSelector || b.msMatchesSelector;
					if (a) {
						var e = !a.call(q.createElement("div"), "div"),
						c = false;
						try {
							a.call(q.documentElement, "[test!='']:sizzle")
						} catch(i) {
							c = true
						}
						m.matchesSelector = function(b, i) {
							i = i.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
							if (!m.isXML(b)) try {
								if (c || !o.match.PSEUDO.test(i) && !/!=/.test(i)) {
									var d = a.call(b, i);
									if (d || !e || b.document && b.document.nodeType !== 11) return d
								}
							} catch(f) {}
							return m(i, null, null, [b]).length > 0
						}
					}
				})(); (function() {
					var b = q.createElement("div");
					b.innerHTML = "<div class='test e'></div><div class='test'></div>";
					if (b.getElementsByClassName && b.getElementsByClassName("e").length !== 0 && (b.lastChild.className = "e", b.getElementsByClassName("e").length !== 1)) o.order.splice(1, 0, "CLASS"),
					o.find.CLASS = function(b, a, e) {
						if (typeof a.getElementsByClassName !== "undefined" && !e) return a.getElementsByClassName(b[1])
					},
					b = null
				})();
				m.contains = q.documentElement.contains ?
				function(b, a) {
					return b !== a && (b.contains ? b.contains(a) : true)
				}: q.documentElement.compareDocumentPosition ?
				function(b, a) {
					return !! (b.compareDocumentPosition(a) & 16)
				}: function() {
					return false
				};
				m.isXML = function(b) {
					return (b = (b ? b.ownerDocument || b: 0).documentElement) ? b.nodeName !== "HTML": false
				};
				var Q = function(b, a, e) {
					for (var c, i = [], d = "", a = a.nodeType ? [a] : a; c = o.match.PSEUDO.exec(b);) d += c[0],
					b = b.replace(o.match.PSEUDO, "");
					b = o.relative[b] ? b + "*": b;
					c = 0;
					for (var f = a.length; c < f; c++) m(b, a[c], i, e);
					return m.filter(d, i)
				};
				m.attr = e.attr;
				m.selectors.attrMap = {};
				e.find = m;
				e.expr = m.selectors;
				e.expr[":"] = e.expr.filters;
				e.unique = m.uniqueSort;
				e.text = m.getText;
				e.isXMLDoc = m.isXML;
				e.contains = m.contains
			})();
			var cb = /Until$/,
			db = /^(?:parents|prevUntil|prevAll)/,
			eb = /,/,
			Wa = /^.[^:#\[\.,]*$/,
			fb = Array.prototype.slice,
			Ba = e.expr.match.POS,
			gb = {
				children: true,
				contents: true,
				next: true,
				prev: true
			};
			e.fn.extend({
				find: function(b) {
					var a = this,
					c, d;
					if (typeof b !== "string") return e(b).filter(function() {
						for (c = 0, d = a.length; c < d; c++) if (e.contains(a[c], this)) return true
					});
					var f = this.pushStack("", "find", b),
					g,
					j,
					h;
					for (c = 0, d = this.length; c < d; c++) if (g = f.length, e.find(b, this[c], f), c > 0) for (j = g; j < f.length; j++) for (h = 0; h < g; h++) if (f[h] === f[j]) {
						f.splice(j--, 1);
						break
					}
					return f
				},
				has: function(b) {
					var a = e(b);
					return this.filter(function() {
						for (var b = 0,
						c = a.length; b < c; b++) if (e.contains(this, a[b])) return true
					})
				},
				not: function(b) {
					return this.pushStack(w(this, b, false), "not", b)
				},
				filter: function(b) {
					return this.pushStack(w(this, b, true), "filter", b)
				},
				is: function(b) {
					return !! b && (typeof b === "string" ? Ba.test(b) ? e(b, this.context).index(this[0]) >= 0 : e.filter(b, this).length > 0 : this.filter(b).length > 0)
				},
				closest: function(b, a) {
					var c = [],
					d,
					f,
					g = this[0];
					if (e.isArray(b)) {
						for (f = 1; g && g.ownerDocument && g !== a;) {
							for (d = 0; d < b.length; d++) e(g).is(b[d]) && c.push({
								selector: b[d],
								elem: g,
								level: f
							});
							g = g.parentNode;
							f++
						}
						return c
					}
					var j = Ba.test(b) || typeof b !== "string" ? e(b, a || this.context) : 0;
					for (d = 0, f = this.length; d < f; d++) for (g = this[d]; g;) if (j ? j.index(g) > -1 : e.find.matchesSelector(g, b)) {
						c.push(g);
						break
					} else if (g = g.parentNode, !g || !g.ownerDocument || g === a || g.nodeType === 11) break;
					c = c.length > 1 ? e.unique(c) : c;
					return this.pushStack(c, "closest", b)
				},
				index: function(b) {
					return ! b ? this[0] && this[0].parentNode ? this.prevAll().length: -1 : typeof b === "string" ? e.inArray(this[0], e(b)) : e.inArray(b.jquery ? b[0] : b, this)
				},
				add: function(b, a) {
					var c = typeof b === "string" ? e(b, a) : e.makeArray(b && b.nodeType ? [b] : b),
					d = e.merge(this.get(), c);
					return this.pushStack(!c[0] || !c[0].parentNode || c[0].parentNode.nodeType === 11 || !d[0] || !d[0].parentNode || d[0].parentNode.nodeType === 11 ? d: e.unique(d))
				},
				andSelf: function() {
					return this.add(this.prevObject)
				}
			});
			e.each({
				parent: function(b) {
					return (b = b.parentNode) && b.nodeType !== 11 ? b: null
				},
				parents: function(b) {
					return e.dir(b, "parentNode")
				},
				parentsUntil: function(b, a, c) {
					return e.dir(b, "parentNode", c)
				},
				next: function(b) {
					return e.nth(b, 2, "nextSibling")
				},
				prev: function(b) {
					return e.nth(b, 2, "previousSibling")
				},
				nextAll: function(b) {
					return e.dir(b, "nextSibling")
				},
				prevAll: function(b) {
					return e.dir(b, "previousSibling")
				},
				nextUntil: function(b, a, c) {
					return e.dir(b, "nextSibling", c)
				},
				prevUntil: function(b, a, c) {
					return e.dir(b, "previousSibling", c)
				},
				siblings: function(b) {
					return e.sibling(b.parentNode.firstChild, b)
				},
				children: function(b) {
					return e.sibling(b.firstChild)
				},
				contents: function(b) {
					return e.nodeName(b, "iframe") ? b.contentDocument || b.contentWindow.document: e.makeArray(b.childNodes)
				}
			},
			function(b, a) {
				e.fn[b] = function(c, d) {
					var f = e.map(this, a, c);
					cb.test(b) || (d = c);
					d && typeof d === "string" && (f = e.filter(d, f));
					f = this.length > 1 && !gb[b] ? e.unique(f) : f;
					if ((this.length > 1 || eb.test(d)) && db.test(b)) f = f.reverse();
					return this.pushStack(f, b, fb.call(arguments).join(","))
				}
			});
			e.extend({
				filter: function(b, a, c) {
					c && (b = ":not(" + b + ")");
					return a.length === 1 ? e.find.matchesSelector(a[0], b) ? [a[0]] : [] : e.find.matches(b, a)
				},
				dir: function(b, a, d) {
					for (var f = [], b = b[a]; b && b.nodeType !== 9 && (d === c || b.nodeType !== 1 || !e(b).is(d));) b.nodeType === 1 && f.push(b),
					b = b[a];
					return f
				},
				nth: function(b, a, e) {
					for (var a = a || 1,
					c = 0; b; b = b[e]) if (b.nodeType === 1 && ++c === a) break;
					return b
				},
				sibling: function(b, a) {
					for (var e = []; b; b = b.nextSibling) b.nodeType === 1 && b !== a && e.push(b);
					return e
				}
			});
			var xa = "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
			hb = / jQuery\d+="(?:\d+|null)"/g,
			ra = /^\s+/,
			Ca = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
			Da = /<([\w:]+)/,
			ib = /<tbody/i,
			jb = /<|&#?\w+;/,
			kb = /<(?:script|style)/i,
			lb = /<(?:script|object|embed|option|style)/i,
			Ea = RegExp("<(?:" + xa + ")", "i"),
			Fa = /checked\s*(?:[^=]|=\s*.checked.)/i,
			mb = /\/(java|ecma)script/i,
			Xa = /^\s*<!(?:\[CDATA\[|\-\-)/,
			T = {
				option: [1, "<select multiple='multiple'>", "</select>"],
				legend: [1, "<fieldset>", "</fieldset>"],
				thead: [1, "<table>", "</table>"],
				tr: [2, "<table><tbody>", "</tbody></table>"],
				td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
				col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
				area: [1, "<map>", "</map>"],
				_default: [0, "", ""]
			},
			Ga = o(q);
			T.optgroup = T.option;
			T.tbody = T.tfoot = T.colgroup = T.caption = T.thead;
			T.th = T.td;
			if (!e.support.htmlSerialize) T._default = [1, "div<div>", "</div>"];
			e.fn.extend({
				text: function(b) {
					return e.isFunction(b) ? this.each(function(a) {
						var c = e(this);
						c.text(b.call(this, a, c.text()))
					}) : typeof b !== "object" && b !== c ? this.empty().append((this[0] && this[0].ownerDocument || q).createTextNode(b)) : e.text(this)
				},
				wrapAll: function(b) {
					if (e.isFunction(b)) return this.each(function(a) {
						e(this).wrapAll(b.call(this, a))
					});
					if (this[0]) {
						var a = e(b, this[0].ownerDocument).eq(0).clone(true);
						this[0].parentNode && a.insertBefore(this[0]);
						a.map(function() {
							for (var b = this; b.firstChild && b.firstChild.nodeType === 1;) b = b.firstChild;
							return b
						}).append(this)
					}
					return this
				},
				wrapInner: function(b) {
					return e.isFunction(b) ? this.each(function(a) {
						e(this).wrapInner(b.call(this, a))
					}) : this.each(function() {
						var a = e(this),
						c = a.contents();
						c.length ? c.wrapAll(b) : a.append(b)
					})
				},
				wrap: function(b) {
					var a = e.isFunction(b);
					return this.each(function(c) {
						e(this).wrapAll(a ? b.call(this, c) : b)
					})
				},
				unwrap: function() {
					return this.parent().each(function() {
						e.nodeName(this, "body") || e(this).replaceWith(this.childNodes)
					}).end()
				},

				append: function() {
					return this.domManip(arguments, true,
					function(b) {
						this.nodeType === 1 && this.appendChild(b)
					})
				},
				prepend: function() {
					return this.domManip(arguments, true,
					function(b) {
						this.nodeType === 1 && this.insertBefore(b, this.firstChild)
					})
				},
				before: function() {
					if (this[0] && this[0].parentNode) return this.domManip(arguments, false,
					function(b) {
						this.parentNode.insertBefore(b, this)
					});
					else if (arguments.length) {
						var b = e.clean(arguments);
						b.push.apply(b, this.toArray());
						return this.pushStack(b, "before", arguments)
					}
				},
				after: function() {
					if (this[0] && this[0].parentNode) return this.domManip(arguments, false,
					function(b) {
						this.parentNode.insertBefore(b, this.nextSibling)
					});
					else if (arguments.length) {
						var b = this.pushStack(this, "after", arguments);
						b.push.apply(b, e.clean(arguments));
						return b
					}
				},
				remove: function(b, a) {
					for (var c = 0,
					d; (d = this[c]) != null; c++) if (!b || e.filter(b, [d]).length) ! a && d.nodeType === 1 && (e.cleanData(d.getElementsByTagName("*")), e.cleanData([d])),
					d.parentNode && d.parentNode.removeChild(d);
					return this
				},
				empty: function() {
					for (var b = 0,
					a; (a = this[b]) != null; b++) for (a.nodeType === 1 && e.cleanData(a.getElementsByTagName("*")); a.firstChild;) a.removeChild(a.firstChild);
					return this
				},
				clone: function(b, a) {
					b = b == null ? false: b;
					a = a == null ? b: a;
					return this.map(function() {
						return e.clone(this, b, a)
					})
				},
				html: function(b) {
					if (b === c) return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(hb, "") : null;
					else if (typeof b === "string" && !kb.test(b) && (e.support.leadingWhitespace || !ra.test(b)) && !T[(Da.exec(b) || ["", ""])[1].toLowerCase()]) {
						b = b.replace(Ca, "<$1></$2>");
						try {
							for (var a = 0,
							d = this.length; a < d; a++) if (this[a].nodeType === 1) e.cleanData(this[a].getElementsByTagName("*")),
							this[a].innerHTML = b
						} catch(f) {
							this.empty().append(b)
						}
					} else e.isFunction(b) ? this.each(function(a) {
						var c = e(this);
						c.html(b.call(this, a, c.html()))
					}) : this.empty().append(b);
					return this
				},
				replaceWith: function(b) {
					if (this[0] && this[0].parentNode) {
						if (e.isFunction(b)) return this.each(function(a) {
							var c = e(this),
							d = c.html();
							c.replaceWith(b.call(this, a, d))
						});
						typeof b !== "string" && (b = e(b).detach());
						return this.each(function() {
							var a = this.nextSibling,
							c = this.parentNode;
							e(this).remove();
							a ? e(a).before(b) : e(c).append(b)
						})
					} else return this.length ? this.pushStack(e(e.isFunction(b) ? b() : b), "replaceWith", b) : this
				},
				detach: function(b) {
					return this.remove(b, true)
				},
				domManip: function(b, a, d) {
					var f, g, j, h = b[0],
					n = [];
					if (!e.support.checkClone && arguments.length === 3 && typeof h === "string" && Fa.test(h)) return this.each(function() {
						e(this).domManip(b, a, d, true)
					});
					if (e.isFunction(h)) return this.each(function(f) {
						var g = e(this);
						b[0] = h.call(this, f, a ? g.html() : c);
						g.domManip(b, a, d)
					});
					if (this[0]) {
						f = h && h.parentNode;
						f = e.support.parentNode && f && f.nodeType === 11 && f.childNodes.length === this.length ? {
							fragment: f
						}: e.buildFragment(b, this, n);
						j = f.fragment;
						if (g = j.childNodes.length === 1 ? j = j.firstChild: j.firstChild) {
							a = a && e.nodeName(g, "tr");
							g = 0;
							for (var l = this.length,
							k = l - 1; g < l; g++) d.call(a ? e.nodeName(this[g], "table") ? this[g].getElementsByTagName("tbody")[0] || this[g].appendChild(this[g].ownerDocument.createElement("tbody")) : this[g] : this[g], f.cacheable || l > 1 && g < k ? e.clone(j, true, true) : j)
						}
						n.length && e.each(n, s)
					}
					return this
				}
			});
			e.buildFragment = function(b, a, c) {
				var d, f, g, j, h = b[0];
				a && a[0] && (j = a[0].ownerDocument || a[0]);
				j.createDocumentFragment || (j = q);
				if (b.length === 1 && typeof h === "string" && h.length < 512 && j === q && h.charAt(0) === "<" && !lb.test(h) && (e.support.checkClone || !Fa.test(h)) && (e.support.html5Clone || !Ea.test(h))) f = true,
				(g = e.fragments[h]) && g !== 1 && (d = g);
				d || (d = j.createDocumentFragment(), e.clean(b, j, d, c));
				f && (e.fragments[h] = g ? d: 1);
				return {
					fragment: d,
					cacheable: f
				}
			};
			e.fragments = {};
			e.each({
				appendTo: "append",
				prependTo: "prepend",
				insertBefore: "before",
				insertAfter: "after",
				replaceAll: "replaceWith"
			},
			function(b, a) {
				e.fn[b] = function(c) {
					var d = [],
					c = e(c),
					f = this.length === 1 && this[0].parentNode;
					if (f && f.nodeType === 11 && f.childNodes.length === 1 && c.length === 1) return c[a](this[0]),
					this;
					else {
						for (var f = 0,
						g = c.length; f < g; f++) {
							var j = (f > 0 ? this.clone(true) : this).get();
							e(c[f])[a](j);
							d = d.concat(j)
						}
						return this.pushStack(d, b, c.selector)
					}
				}
			});
			e.extend({
				clone: function(b, a, c) {
					var d, f, g;
					e.support.html5Clone || !Ea.test("<" + b.nodeName) ? d = b.cloneNode(true) : (d = q.createElement("div"), Ga.appendChild(d), d.innerHTML = b.outerHTML, d = d.firstChild);
					var j = d;
					if ((!e.support.noCloneEvent || !e.support.noCloneChecked) && (b.nodeType === 1 || b.nodeType === 11) && !e.isXMLDoc(b)) {
						p(b, j);
						d = u(b);
						f = u(j);
						for (g = 0; d[g]; ++g) f[g] && p(d[g], f[g])
					}
					if (a && (r(b, j), c)) {
						d = u(b);
						f = u(j);
						for (g = 0; d[g]; ++g) r(d[g], f[g])
					}
					return j
				},
				clean: function(b, a, c, d) {
					a = a || q;
					typeof a.createElement === "undefined" && (a = a.ownerDocument || a[0] && a[0].ownerDocument || q);
					for (var f = [], g, j = 0, h; (h = b[j]) != null; j++) if (typeof h === "number" && (h += ""), h) {
						if (typeof h === "string") if (jb.test(h)) {
							h = h.replace(Ca, "<$1></$2>");
							g = (Da.exec(h) || ["", ""])[1].toLowerCase();
							var n = T[g] || T._default,
							k = n[0],
							m = a.createElement("div");
							a === q ? Ga.appendChild(m) : o(a).appendChild(m);
							for (m.innerHTML = n[1] + h + n[2]; k--;) m = m.lastChild;
							if (!e.support.tbody) {
								k = ib.test(h);
								n = g === "table" && !k ? m.firstChild && m.firstChild.childNodes: n[1] === "<table>" && !k ? m.childNodes: [];
								for (g = n.length - 1; g >= 0; --g) e.nodeName(n[g], "tbody") && !n[g].childNodes.length && n[g].parentNode.removeChild(n[g])
							} ! e.support.leadingWhitespace && ra.test(h) && m.insertBefore(a.createTextNode(ra.exec(h)[0]), m.firstChild);
							h = m.childNodes
						} else h = a.createTextNode(h);
						var t;
						if (!e.support.appendChecked) if (h[0] && typeof(t = h.length) === "number") for (g = 0; g < t; g++) l(h[g]);
						else l(h);
						h.nodeType ? f.push(h) : f = e.merge(f, h)
					}
					if (c) {
						b = function(b) {
							return ! b.type || mb.test(b.type)
						};
						for (j = 0; f[j]; j++) d && e.nodeName(f[j], "script") && (!f[j].type || f[j].type.toLowerCase() === "text/javascript") ? d.push(f[j].parentNode ? f[j].parentNode.removeChild(f[j]) : f[j]) : (f[j].nodeType === 1 && (a = e.grep(f[j].getElementsByTagName("script"), b), f.splice.apply(f, [j + 1, 0].concat(a))), c.appendChild(f[j]))
					}
					return f
				},
				cleanData: function(b) {
					for (var a, c, d = e.cache,
					f = e.event.special,
					g = e.support.deleteExpando,
					j = 0,
					h; (h = b[j]) != null; j++) if (!h.nodeName || !e.noData[h.nodeName.toLowerCase()]) if (c = h[e.expando]) {
						if ((a = d[c]) && a.events) {
							for (var n in a.events) f[n] ? e.event.remove(h, n) : e.removeEvent(h, n, a.handle);
							if (a.handle) a.handle.elem = null
						}
						g ? delete h[e.expando] : h.removeAttribute && h.removeAttribute(e.expando);
						delete d[c]
					}
				}
			});
			var sa = /alpha\([^)]*\)/i,
			nb = /opacity=([^)]*)/,
			ob = /([A-Z]|^ms)/g,
			Ha = /^-?\d+(?:px)?$/i,
			pb = /^-?\d/,
			qb = /^([\-+])=([\-+.\de]+)/,
			rb = {
				position: "absolute",
				visibility: "hidden",
				display: "block"
			},
			Ya = ["Left", "Right"],
			Za = ["Top", "Bottom"],
			ba,
			Ia,
			Ja;
			e.fn.css = function(b, a) {
				return arguments.length === 2 && a === c ? this: e.access(this, b, a, true,
				function(b, a, d) {
					return d !== c ? e.style(b, a, d) : e.css(b, a)
				})
			};
			e.extend({
				cssHooks: {
					opacity: {
						get: function(b, a) {
							if (a) {
								var e = ba(b, "opacity", "opacity");
								return e === "" ? "1": e
							} else return b.style.opacity
						}
					}
				},
				cssNumber: {
					fillOpacity: true,
					fontWeight: true,
					lineHeight: true,
					opacity: true,
					orphans: true,
					widows: true,
					zIndex: true,
					zoom: true
				},
				cssProps: {
					"float": e.support.cssFloat ? "cssFloat": "styleFloat"
				},
				style: function(b, a, d, f) {
					if (b && !(b.nodeType === 3 || b.nodeType === 8 || !b.style)) {
						var g, j = e.camelCase(a),
						h = b.style,
						n = e.cssHooks[j],
						a = e.cssProps[j] || j;
						if (d !== c) {
							f = typeof d;
							if (f === "string" && (g = qb.exec(d))) d = +(g[1] + 1) * +g[2] + parseFloat(e.css(b, a)),
							f = "number";
							if (! (d == null || f === "number" && isNaN(d))) if (f === "number" && !e.cssNumber[j] && (d += "px"), !n || !("set" in n) || (d = n.set(b, d)) !== c) try {
								h[a] = d
							} catch(k) {}
						} else return n && "get" in n && (g = n.get(b, false, f)) !== c ? g: h[a]
					}
				},
				css: function(b, a, d) {
					var f, g, a = e.camelCase(a);
					g = e.cssHooks[a];
					a = e.cssProps[a] || a;
					a === "cssFloat" && (a = "float");
					if (g && "get" in g && (f = g.get(b, true, d)) !== c) return f;
					else if (ba) return ba(b, a)
				},
				swap: function(b, a, e) {
					var c = {},
					d;
					for (d in a) c[d] = b.style[d],
					b.style[d] = a[d];
					e.call(b);
					for (d in a) b.style[d] = c[d]
				}
			});
			e.curCSS = e.css;
			e.each(["height", "width"],
			function(b, a) {
				e.cssHooks[a] = {
					get: function(b, c, d) {
						var f;
						if (c) {
							if (b.offsetWidth !== 0) return D(b, a, d);
							else e.swap(b, rb,
							function() {
								f = D(b, a, d)
							});
							return f
						}
					},
					set: function(b, a) {
						if (Ha.test(a)) {
							if (a = parseFloat(a), a >= 0) return a + "px"
						} else return a
					}
				}
			});
			if (!e.support.opacity) e.cssHooks.opacity = {
				get: function(b, a) {
					return nb.test((a && b.currentStyle ? b.currentStyle.filter: b.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "": a ? "1": ""
				},
				set: function(b, a) {
					var c = b.style,
					d = b.currentStyle,
					f = e.isNumeric(a) ? "alpha(opacity=" + a * 100 + ")": "",
					g = d && d.filter || c.filter || "";
					c.zoom = 1;
					if (a >= 1 && e.trim(g.replace(sa, "")) === "" && (c.removeAttribute("filter"), d && !d.filter)) return;
					c.filter = sa.test(g) ? g.replace(sa, f) : g + " " + f
				}
			};
			e(function() {
				if (!e.support.reliableMarginRight) e.cssHooks.marginRight = {
					get: function(b, a) {
						var c;
						e.swap(b, {
							display: "inline-block"
						},
						function() {
							c = a ? ba(b, "margin-right", "marginRight") : b.style.marginRight
						});
						return c
					}
				}
			});
			q.defaultView && q.defaultView.getComputedStyle && (Ia = function(b, a) {
				var c, d, f, a = a.replace(ob, "-$1").toLowerCase();
				if ((d = b.ownerDocument.defaultView) && (f = d.getComputedStyle(b, null))) c = f.getPropertyValue(a),
				c === "" && !e.contains(b.ownerDocument.documentElement, b) && (c = e.style(b, a));
				return c
			});
			q.documentElement.currentStyle && (Ja = function(b, a) {
				var e, c, d = b.currentStyle && b.currentStyle[a],
				f = b.style;
				if (d === null && f && (e = f[a])) d = e;
				if (!Ha.test(d) && pb.test(d)) {
					e = f.left;
					if (c = b.runtimeStyle && b.runtimeStyle.left) b.runtimeStyle.left = b.currentStyle.left;
					f.left = a === "fontSize" ? "1em": d || 0;
					d = f.pixelLeft + "px";
					f.left = e;
					if (c) b.runtimeStyle.left = c
				}
				return d === "" ? "auto": d
			});
			ba = Ia || Ja;
			if (e.expr && e.expr.filters) e.expr.filters.hidden = function(b) {
				var a = b.offsetHeight;
				return b.offsetWidth === 0 && a === 0 || !e.support.reliableHiddenOffsets && (b.style && b.style.display || e.css(b, "display")) === "none"
			},
			e.expr.filters.visible = function(b) {
				return ! e.expr.filters.hidden(b)
			};
			var sb = /%20/g,
			$a = /\[\]$/,
			Ka = /\r?\n/g,
			tb = /#.*$/,
			ub = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
			vb = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
			wb = /^(?:GET|HEAD)$/,
			xb = /^\/\//,
			La = /\?/,
			yb = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
			zb = /^(?:select|textarea)/i,
			ya = /\s+/,
			Ab = /([?&])_=[^&]*/,
			Ma = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
			Na = e.fn.load,
			na = {},
			Oa = {},
			Z, aa, Pa = ["*/"] + ["*"];
			try {
				Z = O.href
			} catch(Gb) {
				Z = q.createElement("a"),
				Z.href = "",
				Z = Z.href
			}
			aa = Ma.exec(Z.toLowerCase()) || [];
			e.fn.extend({
				load: function(b, a, d) {
					if (typeof b !== "string" && Na) return Na.apply(this, arguments);
					else if (!this.length) return this;
					var f = b.indexOf(" ");
					if (f >= 0) var g = b.slice(f, b.length),
					b = b.slice(0, f);
					f = "GET";
					a && (e.isFunction(a) ? (d = a, a = c) : typeof a === "object" && (a = e.param(a, e.ajaxSettings.traditional), f = "POST"));
					var j = this;
					e.ajax({
						url: b,
						type: f,
						dataType: "html",
						data: a,
						complete: function(b, a, c) {
							c = b.responseText;
							b.isResolved() && (b.done(function(b) {
								c = b
							}), j.html(g ? e("<div>").append(c.replace(yb, "")).find(g) : c));
							d && j.each(d, [c, a, b])
						}
					});
					return this
				},
				serialize: function() {
					return e.param(this.serializeArray())
				},
				serializeArray: function() {
					return this.map(function() {
						return this.elements ? e.makeArray(this.elements) : this
					}).filter(function() {
						return this.name && !this.disabled && (this.checked || zb.test(this.nodeName) || vb.test(this.type))
					}).map(function(b, a) {
						var c = e(this).val();
						return c == null ? null: e.isArray(c) ? e.map(c,
						function(b) {
							return {
								name: a.name,
								value: b.replace(Ka, "\r\n")
							}
						}) : {
							name: a.name,
							value: c.replace(Ka, "\r\n")
						}
					}).get()
				}
			});
			e.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
			function(b, a) {
				e.fn[a] = function(b) {
					return this.on(a, b)
				}
			});
			e.each(["get", "post"],
			function(b, a) {
				e[a] = function(b, d, f, g) {
					e.isFunction(d) && (g = g || f, f = d, d = c);
					return e.ajax({
						type: a,
						url: b,
						data: d,
						success: f,
						dataType: g
					})
				}
			});
			e.extend({
				getScript: function(b, a) {
					return e.get(b, c, a, "script")
				},
				getJSON: function(b, a, c) {
					return e.get(b, a, c, "json")
				},
				ajaxSetup: function(b, a) {
					a ? C(b, e.ajaxSettings) : (a = b, b = e.ajaxSettings);
					C(b, a);
					return b
				},
				ajaxSettings: {
					url: Z,
					isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(aa[1]),
					global: true,
					type: "GET",
					contentType: "application/x-www-form-urlencoded",
					processData: true,
					async: true,
					accepts: {
						xml: "application/xml, text/xml",
						html: "text/html",
						text: "text/plain",
						json: "application/json, text/javascript",
						"*": Pa
					},
					contents: {
						xml: /xml/,
						html: /html/,
						json: /json/
					},
					responseFields: {
						xml: "responseXML",
						text: "responseText"
					},
					converters: {
						"* text": a.String,
						"text html": true,
						"text json": e.parseJSON,
						"text xml": e.parseXML
					},
					flatOptions: {
						context: true,
						url: true
					}
				},
				ajaxPrefilter: F(na),
				ajaxTransport: F(Oa),
				ajax: function(b, a) {
					function d(b, a, i, m) {
						if (p !== 2) {
							p = 2;
							q && clearTimeout(q);
							A = c;
							t = m || "";
							s.readyState = b > 0 ? 4 : 0;
							var o, x, y, m = a;
							if (i) {
								var H = f,
								r = s,
								u = H.contents,
								Q = H.dataTypes,
								I = H.responseFields,
								z, D, C, F;
								for (D in I) D in i && (r[I[D]] = i[D]);
								for (; Q[0] === "*";) Q.shift(),
								z === c && (z = H.mimeType || r.getResponseHeader("content-type"));
								if (z) for (D in u) if (u[D] && u[D].test(z)) {
									Q.unshift(D);
									break
								}
								if (Q[0] in i) C = Q[0];
								else {
									for (D in i) {
										if (!Q[0] || H.converters[D + " " + Q[0]]) {
											C = D;
											break
										}
										F || (F = D)
									}
									C = C || F
								}
								C ? (C !== Q[0] && Q.unshift(C), i = i[C]) : i = void 0
							} else i = c;
							if (b >= 200 && b < 300 || b === 304) {
								if (f.ifModified) {
									if (z = s.getResponseHeader("Last-Modified")) e.lastModified[l] = z;
									if (z = s.getResponseHeader("Etag")) e.etag[l] = z
								}
								if (b === 304) m = "notmodified",
								o = true;
								else try {
									z = f;
									z.dataFilter && (i = z.dataFilter(i, z.dataType));
									var N = z.dataTypes;
									D = {};
									var B, O, K = N.length,
									R, U = N[0],
									M,
									L,
									J,
									G,
									P;
									for (B = 1; B < K; B++) {
										if (B === 1) for (O in z.converters) typeof O === "string" && (D[O.toLowerCase()] = z.converters[O]);
										M = U;
										U = N[B];
										if (U === "*") U = M;
										else if (M !== "*" && M !== U) {
											L = M + " " + U;
											J = D[L] || D["* " + U];
											if (!J) for (G in P = c, D) if (R = G.split(" "), R[0] === M || R[0] === "*") if (P = D[R[1] + " " + U]) {
												G = D[G];
												G === true ? J = P: P === true && (J = G);
												break
											} ! J && !P && e.error("No conversion from " + L.replace(" ", " to "));
											J !== true && (i = J ? J(i) : P(G(i)))
										}
									}
									x = i;
									m = "success";
									o = true
								} catch(ab) {
									m = "parsererror",
									y = ab
								}
							} else if (y = m, !m || b) m = "error",
							b < 0 && (b = 0);
							s.status = b;
							s.statusText = "" + (a || m);
							o ? h.resolveWith(g, [x, m, s]) : h.rejectWith(g, [s, m, y]);
							s.statusCode(k);
							k = c;
							w && j.trigger("ajax" + (o ? "Success": "Error"), [s, f, o ? x: y]);
							n.fireWith(g, [s, m]);
							w && (j.trigger("ajaxComplete", [s, f]), --e.active || e.event.trigger("ajaxStop"))
						}
					}
					typeof b === "object" && (a = b, b = c);
					var a = a || {},
					f = e.ajaxSetup({},
					a),
					g = f.context || f,
					j = g !== f && (g.nodeType || g instanceof e) ? e(g) : e.event,
					h = e.Deferred(),
					n = e.Callbacks("once memory"),
					k = f.statusCode || {},
					l,
					m = {},
					o = {},
					t,
					x,
					A,
					q,
					H,
					p = 0,
					w,
					r,
					s = {
						readyState: 0,
						setRequestHeader: function(b, a) {
							if (!p) {
								var e = b.toLowerCase(),
								b = o[e] = o[e] || b;
								m[b] = a
							}
							return this
						},
						getAllResponseHeaders: function() {
							return p === 2 ? t: null
						},
						getResponseHeader: function(b) {
							var a;
							if (p === 2) {
								if (!x) for (x = {}; a = ub.exec(t);) x[a[1].toLowerCase()] = a[2];
								a = x[b.toLowerCase()]
							}
							return a === c ? null: a
						},
						overrideMimeType: function(b) {
							if (!p) f.mimeType = b;
							return this
						},
						abort: function(b) {
							b = b || "abort";
							A && A.abort(b);
							d(0, b);
							return this
						}
					};
					h.promise(s);
					s.success = s.done;
					s.error = s.fail;
					s.complete = n.add;
					s.statusCode = function(b) {
						if (b) {
							var a;
							if (p < 2) for (a in b) k[a] = [k[a], b[a]];
							else a = b[s.status],
							s.then(a, a)
						}
						return this
					};
					f.url = ((b || f.url) + "").replace(tb, "").replace(xb, aa[1] + "//");
					f.dataTypes = e.trim(f.dataType || "*").toLowerCase().split(ya);
					if (f.crossDomain == null) H = Ma.exec(f.url.toLowerCase()),
					f.crossDomain = !(!H || !(H[1] != aa[1] || H[2] != aa[2] || (H[3] || (H[1] === "http:" ? 80 : 443)) != (aa[3] || (aa[1] === "http:" ? 80 : 443))));
					if (f.data && f.processData && typeof f.data !== "string") f.data = e.param(f.data, f.traditional);
					z(na, f, a, s);
					if (p === 2) return false;
					w = f.global;
					f.type = f.type.toUpperCase();
					f.hasContent = !wb.test(f.type);
					w && e.active++===0 && e.event.trigger("ajaxStart");
					if (!f.hasContent && (f.data && (f.url += (La.test(f.url) ? "&": "?") + f.data, delete f.data), l = f.url, f.cache === false)) {
						H = e.now();
						var u = f.url.replace(Ab, "$1_=" + H);
						f.url = u + (u === f.url ? (La.test(f.url) ? "&": "?") + "_=" + H: "")
					} (f.data && f.hasContent && f.contentType !== false || a.contentType) && s.setRequestHeader("Content-Type", f.contentType);
					f.ifModified && (l = l || f.url, e.lastModified[l] && s.setRequestHeader("If-Modified-Since", e.lastModified[l]), e.etag[l] && s.setRequestHeader("If-None-Match", e.etag[l]));
					s.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + (f.dataTypes[0] !== "*" ? ", " + Pa + "; q=0.01": "") : f.accepts["*"]);
					for (r in f.headers) s.setRequestHeader(r, f.headers[r]);
					if (f.beforeSend && (f.beforeSend.call(g, s, f) === false || p === 2)) return s.abort(),
					false;
					for (r in {
						success: 1,
						error: 1,
						complete: 1
					}) s[r](f[r]);
					if (A = z(Oa, f, a, s)) {
						s.readyState = 1;
						w && j.trigger("ajaxSend", [s, f]);
						f.async && f.timeout > 0 && (q = setTimeout(function() {
							s.abort("timeout")
						},
						f.timeout));
						try {
							p = 1,
							A.send(m, d)
						} catch(Q) {
							if (p < 2) d( - 1, Q);
							else throw Q;
						}
					} else d( - 1, "No Transport");
					return s
				},
				param: function(b, a) {
					var d = [],
					f = function(b, a) {
						a = e.isFunction(a) ? a() : a;
						d[d.length] = encodeURIComponent(b) + "=" + encodeURIComponent(a)
					};
					if (a === c) a = e.ajaxSettings.traditional;
					if (e.isArray(b) || b.jquery && !e.isPlainObject(b)) e.each(b,
					function() {
						f(this.name, this.value)
					});
					else for (var g in b) K(g, b[g], a, f);
					return d.join("&").replace(sb, "+")
				}
			});
			e.extend({
				active: 0,
				lastModified: {},
				etag: {}
			});
			var Bb = e.now(),
			ka = /(\=)\?(&|$)|\?\?/i;
			e.ajaxSetup({
				jsonp: "callback",
				jsonpCallback: function() {
					return e.expando + "_" + Bb++
				}
			});
			e.ajaxPrefilter("json jsonp",
			function(b, c, d) {
				c = b.contentType === "application/x-www-form-urlencoded" && typeof b.data === "string";
				if (b.dataTypes[0] === "jsonp" || b.jsonp !== false && (ka.test(b.url) || c && ka.test(b.data))) {
					var f, g = b.jsonpCallback = e.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
					j = a[g],
					h = b.url,
					n = b.data,
					l = "$1" + g + "$2";
					b.jsonp !== false && (h = h.replace(ka, l), b.url === h && (c && (n = n.replace(ka, l)), b.data === n && (h += (/\?/.test(h) ? "&": "?") + b.jsonp + "=" + g)));
					b.url = h;
					b.data = n;
					a[g] = function(b) {
						f = [b]
					};
					d.always(function() {
						a[g] = j;
						if (f && e.isFunction(j)) a[g](f[0])
					});
					b.converters["script json"] = function() {
						f || e.error(g + " was not called");
						return f[0]
					};
					b.dataTypes[0] = "json";
					return "script"
				}
			});
			e.ajaxSetup({
				accepts: {
					script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
				},
				contents: {
					script: /javascript|ecmascript/
				},
				converters: {
					"text script": function(b) {
						e.globalEval(b);
						return b
					}
				}
			});
			e.ajaxPrefilter("script",
			function(b) {
				if (b.cache === c) b.cache = false;
				if (b.crossDomain) b.type = "GET",
				b.global = false
			});
			e.ajaxTransport("script",
			function(b) {
				if (b.crossDomain) {
					var a, e = q.head || q.getElementsByTagName("head")[0] || q.documentElement;
					return {
						send: function(d, f) {
							a = q.createElement("script");
							a.async = "async";
							if (b.scriptCharset) a.charset = b.scriptCharset;
							a.src = b.url;
							a.onload = a.onreadystatechange = function(b, d) {
								if (d || !a.readyState || /loaded|complete/.test(a.readyState)) a.onload = a.onreadystatechange = null,
								e && a.parentNode && e.removeChild(a),
								a = c,
								d || f(200, "success")
							};
							e.insertBefore(a, e.firstChild)
						},
						abort: function() {
							if (a) a.onload(0, 1)
						}
					}
				}
			});
			var ta = a.ActiveXObject ?
			function() {
				for (var b in ea) ea[b](0, 1)
			}: false,
			Cb = 0,
			ea;
			e.ajaxSettings.xhr = a.ActiveXObject ?
			function() {
				var b;
				if (! (b = !this.isLocal && N())) a: {
					try {
						b = new a.ActiveXObject("Microsoft.XMLHTTP");
						break a
					} catch(e) {}
					b = void 0
				}
				return b
			}: N; (function(b) {
				e.extend(e.support, {
					ajax: !!b,
					cors: !!b && "withCredentials" in b
				})
			})(e.ajaxSettings.xhr());
			e.support.ajax && e.ajaxTransport(function(b) {
				if (!b.crossDomain || e.support.cors) {
					var d;
					return {
						send: function(f, g) {
							var j = b.xhr(),
							h,
							n;
							b.username ? j.open(b.type, b.url, b.async, b.username, b.password) : j.open(b.type, b.url, b.async);
							if (b.xhrFields) for (n in b.xhrFields) j[n] = b.xhrFields[n];
							b.mimeType && j.overrideMimeType && j.overrideMimeType(b.mimeType); ! b.crossDomain && !f["X-Requested-With"] && (f["X-Requested-With"] = "XMLHttpRequest");
							try {
								for (n in f) j.setRequestHeader(n, f[n])
							} catch(l) {}
							j.send(b.hasContent && b.data || null);
							d = function(a, f) {
								var n, l, k, m, o;
								try {
									if (d && (f || j.readyState === 4)) {
										d = c;
										if (h) j.onreadystatechange = e.noop,
										ta && delete ea[h];
										if (f) j.readyState !== 4 && j.abort();
										else {
											n = j.status;
											k = j.getAllResponseHeaders();
											m = {};
											if ((o = j.responseXML) && o.documentElement) m.xml = o;
											m.text = j.responseText;
											try {
												l = j.statusText
											} catch(t) {
												l = ""
											} ! n && b.isLocal && !b.crossDomain ? n = m.text ? 200 : 404 : n === 1223 && (n = 204)
										}
									}
								} catch(x) {
									f || g( - 1, x)
								}
								m && g(n, l, m, k)
							}; ! b.async || j.readyState === 4 ? d() : (h = ++Cb, ta && (ea || (ea = {},
							e(a).unload(ta)), ea[h] = d), j.onreadystatechange = d)
						},
						abort: function() {
							d && d(0, 1)
						}
					}
				}
			});
			var oa = {},
			V, ca, Db = /^(?:toggle|show|hide)$/,
			Eb = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
			la, za = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]],
			ia;
			e.fn.extend({
				show: function(b, a, c) {
					if (b || b === 0) return this.animate(A("show", 3), b, a, c);
					else {
						for (var c = 0,
						d = this.length; c < d; c++) if (b = this[c], b.style) {
							a = b.style.display;
							if (!e._data(b, "olddisplay") && a === "none") a = b.style.display = "";
							a === "" && e.css(b, "display") === "none" && e._data(b, "olddisplay", x(b.nodeName))
						}
						for (c = 0; c < d; c++) if (b = this[c], b.style && (a = b.style.display, a === "" || a === "none")) b.style.display = e._data(b, "olddisplay") || "";
						return this
					}
				},
				hide: function(b, a, c) {
					if (b || b === 0) return this.animate(A("hide", 3), b, a, c);
					else {
						for (var c = 0,
						d = this.length; c < d; c++) b = this[c],
						b.style && (a = e.css(b, "display"), a !== "none" && !e._data(b, "olddisplay") && e._data(b, "olddisplay", a));
						for (c = 0; c < d; c++) if (this[c].style) this[c].style.display = "none";
						return this
					}
				},
				_toggle: e.fn.toggle,
				toggle: function(b, a, c) {
					var d = typeof b === "boolean";
					e.isFunction(b) && e.isFunction(a) ? this._toggle.apply(this, arguments) : b == null || d ? this.each(function() {
						var a = d ? b: e(this).is(":hidden");
						e(this)[a ? "show": "hide"]()
					}) : this.animate(A("toggle", 3), b, a, c);
					return this
				},
				fadeTo: function(b, a, e, c) {
					return this.filter(":hidden").css("opacity", 0).show().end().animate({
						opacity: a
					},
					b, e, c)
				},
				animate: function(b, a, c, d) {
					function f() {
						var v;
						g.queue === false && e._mark(this);
						var a = e.extend({},
						g),
						c = this.nodeType === 1,
						d = c && e(this).is(":hidden"),
						i,
						j,
						h,
						n,
						l;
						a.animatedProperties = {};
						for (h in b) {
							i = e.camelCase(h);
							h !== i && (b[i] = b[h], delete b[h]);
							j = b[i];
							e.isArray(j) ? (a.animatedProperties[i] = j[1], v = b[i] = j[0], j = v) : a.animatedProperties[i] = a.specialEasing && a.specialEasing[i] || a.easing || "swing";
							if (j === "hide" && d || j === "show" && !d) return a.complete.call(this);
							if (c && (i === "height" || i === "width")) if (a.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], e.css(this, "display") === "inline" && e.css(this, "float") === "none") ! e.support.inlineBlockNeedsLayout || x(this.nodeName) === "inline" ? this.style.display = "inline-block": this.style.zoom = 1
						}
						if (a.overflow != null) this.style.overflow = "hidden";
						for (h in b) if (c = new e.fx(this, a, h), j = b[h], Db.test(j)) if (i = e._data(this, "toggle" + h) || (j === "toggle" ? d ? "show": "hide": 0)) e._data(this, "toggle" + h, i === "show" ? "hide": "show"),
						c[i]();
						else c[j]();
						else i = Eb.exec(j),
						n = c.cur(),
						i ? (j = parseFloat(i[2]), l = i[3] || (e.cssNumber[h] ? "": "px"), l !== "px" && (e.style(this, h, (j || 1) + l), n *= (j || 1) / c.cur(), e.style(this, h, n + l)), i[1] && (j = (i[1] === "-=" ? -1 : 1) * j + n), c.custom(n, j, l)) : c.custom(n, j, "");
						return true
					}
					var g = e.speed(a, c, d);
					if (e.isEmptyObject(b)) return this.each(g.complete, [false]);
					b = e.extend({},
					b);
					return g.queue === false ? this.each(f) : this.queue(g.queue, f)
				},
				stop: function(b, a, d) {
					typeof b !== "string" && (d = a, a = b, b = c);
					a && b !== false && this.queue(b || "fx", []);
					return this.each(function() {
						var a, c = false,
						f = e.timers,
						g = e._data(this);
						d || e._unmark(true, this);
						if (b == null) for (a in g) {
							if (g[a] && g[a].stop && a.indexOf(".run") === a.length - 4) {
								var i = g[a];
								e.removeData(this, a, true);
								i.stop(d)
							}
						} else if (g[a = b + ".run"] && g[a].stop) g = g[a],
						e.removeData(this, a, true),
						g.stop(d);
						for (a = f.length; a--;) if (f[a].elem === this && (b == null || f[a].queue === b)) {
							if (d) f[a](true);
							else f[a].saveState();
							c = true;
							f.splice(a, 1)
						} (!d || !c) && e.dequeue(this, b)
					})
				}
			});
			e.each({
				slideDown: A("show", 1),
				slideUp: A("hide", 1),
				slideToggle: A("toggle", 1),
				fadeIn: {
					opacity: "show"
				},
				fadeOut: {
					opacity: "hide"
				},
				fadeToggle: {
					opacity: "toggle"
				}
			},
			function(b, a) {
				e.fn[b] = function(b, e, c) {
					return this.animate(a, b, e, c)
				}
			});
			e.extend({
				speed: function(b, a, c) {
					var d = b && typeof b === "object" ? e.extend({},
					b) : {
						complete: c || !c && a || e.isFunction(b) && b,
						duration: b,
						easing: c && a || a && !e.isFunction(a) && a
					};
					d.duration = e.fx.off ? 0 : typeof d.duration === "number" ? d.duration: d.duration in e.fx.speeds ? e.fx.speeds[d.duration] : e.fx.speeds._default;
					if (d.queue == null || d.queue === true) d.queue = "fx";
					d.old = d.complete;
					d.complete = function(b) {
						e.isFunction(d.old) && d.old.call(this);
						d.queue ? e.dequeue(this, d.queue) : b !== false && e._unmark(this)
					};
					return d
				},
				easing: {
					linear: function(b, a, e, c) {
						return e + c * b
					},
					swing: function(b, a, e, c) {
						return ( - Math.cos(b * Math.PI) / 2 + 0.5) * c + e
					}
				},
				timers: [],
				fx: function(b, a, e) {
					this.options = a;
					this.elem = b;
					this.prop = e;
					a.orig = a.orig || {}
				}
			});
			e.fx.prototype = {
				update: function() {
					this.options.step && this.options.step.call(this.elem, this.now, this); (e.fx.step[this.prop] || e.fx.step._default)(this)
				},
				cur: function() {
					if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[this.prop];
					var b, a = e.css(this.elem, this.prop);
					return isNaN(b = parseFloat(a)) ? !a || a === "auto" ? 0 : a: b
				},
				custom: function(b, a, d) {
					function f(b) {
						return g.step(b)
					}
					var g = this,
					j = e.fx;
					this.startTime = ia || n();
					this.end = a;
					this.now = this.start = b;
					this.pos = this.state = 0;
					this.unit = d || this.unit || (e.cssNumber[this.prop] ? "": "px");
					f.queue = this.options.queue;
					f.elem = this.elem;
					f.saveState = function() {
						g.options.hide && e._data(g.elem, "fxshow" + g.prop) === c && e._data(g.elem, "fxshow" + g.prop, g.start)
					};
					f() && e.timers.push(f) && !la && (la = setInterval(j.tick, j.interval))
				},
				show: function() {
					var b = e._data(this.elem, "fxshow" + this.prop);
					this.options.orig[this.prop] = b || e.style(this.elem, this.prop);
					this.options.show = true;
					b !== c ? this.custom(this.cur(), b) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur());
					e(this.elem).show()
				},
				hide: function() {
					this.options.orig[this.prop] = e._data(this.elem, "fxshow" + this.prop) || e.style(this.elem, this.prop);
					this.options.hide = true;
					this.custom(this.cur(), 0)
				},
				step: function(b) {
					var a, c = ia || n(),
					d = true,
					f = this.elem,
					g = this.options;
					if (b || c >= g.duration + this.startTime) {
						this.now = this.end;
						this.pos = this.state = 1;
						this.update();
						g.animatedProperties[this.prop] = true;
						for (a in g.animatedProperties) g.animatedProperties[a] !== true && (d = false);
						if (d) {
							g.overflow != null && !e.support.shrinkWrapBlocks && e.each(["", "X", "Y"],
							function(b, a) {
								f.style["overflow" + a] = g.overflow[b]
							});
							g.hide && e(f).hide();
							if (g.hide || g.show) for (a in g.animatedProperties) e.style(f, a, g.orig[a]),
							e.removeData(f, "fxshow" + a, true),
							e.removeData(f, "toggle" + a, true);
							if (b = g.complete) g.complete = false,
							b.call(f)
						}
						return false
					} else g.duration == Infinity ? this.now = c: (b = c - this.startTime, this.state = b / g.duration, this.pos = e.easing[g.animatedProperties[this.prop]](this.state, b, 0, 1, g.duration), this.now = this.start + (this.end - this.start) * this.pos),
					this.update();
					return true
				}
			};
			e.extend(e.fx, {
				tick: function() {
					for (var b, a = e.timers,
					c = 0; c < a.length; c++) b = a[c],
					!b() && a[c] === b && a.splice(c--, 1);
					a.length || e.fx.stop()
				},
				interval: 13,
				stop: function() {
					clearInterval(la);
					la = null
				},
				speeds: {
					slow: 600,
					fast: 200,
					_default: 400
				},
				step: {
					opacity: function(b) {
						e.style(b.elem, "opacity", b.now)
					},
					_default: function(b) {
						b.elem.style && b.elem.style[b.prop] != null ? b.elem.style[b.prop] = b.now + b.unit: b.elem[b.prop] = b.now
					}
				}
			});
			e.each(["width", "height"],
			function(b, a) {
				e.fx.step[a] = function(b) {
					e.style(b.elem, a, Math.max(0, b.now) + b.unit)
				}
			});
			if (e.expr && e.expr.filters) e.expr.filters.animated = function(b) {
				return e.grep(e.timers,
				function(a) {
					return b === a.elem
				}).length
			};
			var Fb = /^t(?:able|d|h)$/i,
			Qa = /^(?:body|html)$/i;
			e.fn.offset = "getBoundingClientRect" in q.documentElement ?
			function(b) {
				var a = this[0],
				c;
				if (b) return this.each(function(a) {
					e.offset.setOffset(this, b, a)
				});
				if (!a || !a.ownerDocument) return null;
				if (a === a.ownerDocument.body) return e.offset.bodyOffset(a);
				try {
					c = a.getBoundingClientRect()
				} catch(d) {}
				var f = a.ownerDocument,
				g = f.documentElement;
				if (!c || !e.contains(g, a)) return c ? {
					top: c.top,
					left: c.left
				}: {
					top: 0,
					left: 0
				};
				a = f.body;
				f = I(f);
				return {
					top: c.top + (f.pageYOffset || e.support.boxModel && g.scrollTop || a.scrollTop) - (g.clientTop || a.clientTop || 0),
					left: c.left + (f.pageXOffset || e.support.boxModel && g.scrollLeft || a.scrollLeft) - (g.clientLeft || a.clientLeft || 0)
				}
			}: function(b) {
				var a = this[0];
				if (b) return this.each(function(a) {
					e.offset.setOffset(this, b, a)
				});
				if (!a || !a.ownerDocument) return null;
				if (a === a.ownerDocument.body) return e.offset.bodyOffset(a);
				var c, d = a.offsetParent,
				f = a.ownerDocument,
				g = f.documentElement,
				j = f.body;
				c = (f = f.defaultView) ? f.getComputedStyle(a, null) : a.currentStyle;
				for (var h = a.offsetTop,
				n = a.offsetLeft; (a = a.parentNode) && a !== j && a !== g;) {
					if (e.support.fixedPosition && c.position === "fixed") break;
					c = f ? f.getComputedStyle(a, null) : a.currentStyle;
					h -= a.scrollTop;
					n -= a.scrollLeft;
					if (a === d) {
						h += a.offsetTop;
						n += a.offsetLeft;
						if (e.support.doesNotAddBorder && (!e.support.doesAddBorderForTableAndCells || !Fb.test(a.nodeName))) h += parseFloat(c.borderTopWidth) || 0,
						n += parseFloat(c.borderLeftWidth) || 0;
						d = a.offsetParent
					}
					e.support.subtractsBorderForOverflowNotVisible && c.overflow !== "visible" && (h += parseFloat(c.borderTopWidth) || 0, n += parseFloat(c.borderLeftWidth) || 0)
				}
				if (c.position === "relative" || c.position === "static") h += j.offsetTop,
				n += j.offsetLeft;
				e.support.fixedPosition && c.position === "fixed" && (h += Math.max(g.scrollTop, j.scrollTop), n += Math.max(g.scrollLeft, j.scrollLeft));
				return {
					top: h,
					left: n
				}
			};
			e.offset = {
				bodyOffset: function(b) {
					var a = b.offsetTop,
					c = b.offsetLeft;
					e.support.doesNotIncludeMarginInBodyOffset && (a += parseFloat(e.css(b, "marginTop")) || 0, c += parseFloat(e.css(b, "marginLeft")) || 0);
					return {
						top: a,
						left: c
					}
				},
				setOffset: function(b, a, c) {
					var d = e.css(b, "position");
					if (d === "static") b.style.position = "relative";
					var f = e(b),
					g = f.offset(),
					j = e.css(b, "top"),
					h = e.css(b, "left"),
					n = {},
					l = {}; (d === "absolute" || d === "fixed") && e.inArray("auto", [j, h]) > -1 ? (l = f.position(), d = l.top, h = l.left) : (d = parseFloat(j) || 0, h = parseFloat(h) || 0);
					e.isFunction(a) && (a = a.call(b, c, g));
					if (a.top != null) n.top = a.top - g.top + d;
					if (a.left != null) n.left = a.left - g.left + h;
					"using" in a ? a.using.call(b, n) : f.css(n)
				}
			};
			e.fn.extend({
				position: function() {
					if (!this[0]) return null;
					var b = this[0],
					a = this.offsetParent(),
					c = this.offset(),
					d = Qa.test(a[0].nodeName) ? {
						top: 0,
						left: 0
					}: a.offset();
					c.top -= parseFloat(e.css(b, "marginTop")) || 0;
					c.left -= parseFloat(e.css(b, "marginLeft")) || 0;
					d.top += parseFloat(e.css(a[0], "borderTopWidth")) || 0;
					d.left += parseFloat(e.css(a[0], "borderLeftWidth")) || 0;
					return {
						top: c.top - d.top,
						left: c.left - d.left
					}
				},
				offsetParent: function() {
					return this.map(function() {
						for (var b = this.offsetParent || q.body; b && !Qa.test(b.nodeName) && e.css(b, "position") === "static";) b = b.offsetParent;
						return b
					})
				}
			});
			e.each(["Left", "Top"],
			function(b, a) {
				var d = "scroll" + a;
				e.fn[d] = function(a) {
					var f, g;
					if (a === c) {
						f = this[0];
						return ! f ? null: (g = I(f)) ? "pageXOffset" in g ? g[b ? "pageYOffset": "pageXOffset"] : e.support.boxModel && g.document.documentElement[d] || g.document.body[d] : f[d]
					}
					return this.each(function() { (g = I(this)) ? g.scrollTo(!b ? a: e(g).scrollLeft(), b ? a: e(g).scrollTop()) : this[d] = a
					})
				}
			});
			e.each(["Height", "Width"],
			function(b, a) {
				var d = a.toLowerCase();
				e.fn["inner" + a] = function() {
					var b = this[0];
					return b ? b.style ? parseFloat(e.css(b, d, "padding")) : this[d]() : null
				};
				e.fn["outer" + a] = function(b) {
					var a = this[0];
					return a ? a.style ? parseFloat(e.css(a, d, b ? "margin": "border")) : this[d]() : null
				};
				e.fn[d] = function(b) {
					var f = this[0];
					if (!f) return b == null ? null: this;
					if (e.isFunction(b)) return this.each(function(a) {
						var c = e(this);
						c[d](b.call(this, a, c[d]()))
					});
					if (e.isWindow(f)) {
						var g = f.document.documentElement["client" + a],
						j = f.document.body;
						return f.document.compatMode === "CSS1Compat" && g || j && j["client" + a] || g
					} else return f.nodeType === 9 ? Math.max(f.documentElement["client" + a], f.body["scroll" + a], f.documentElement["scroll" + a], f.body["offset" + a], f.documentElement["offset" + a]) : b === c ? (f = e.css(f, d), g = parseFloat(f), e.isNumeric(g) ? g: f) : this.css(d, typeof b === "string" ? b: b + "px")
				}
			});
			a.jQuery = a.$ = e;
			typeof define === "function" && define.amd && define.amd.jQuery && define("jquery", [],
			function() {
				return e
			})
		})(window);
		var Cufon = function() {
			function a(a) {
				var c = this.face = a.face,
				d = {
					" ": 1,
					"\u00a0": 1,
					"\u3000": 1
				};
				this.glyphs = a.glyphs;
				this.w = a.w;
				this.baseSize = parseInt(c["units-per-em"], 10);
				this.family = c["font-family"].toLowerCase();
				this.weight = c["font-weight"];
				this.style = c["font-style"] || "normal";
				this.viewBox = function() {
					var a = c.bbox.split(/\s+/),
					a = {
						minX: parseInt(a[0], 10),
						minY: parseInt(a[1], 10),
						maxX: parseInt(a[2], 10),
						maxY: parseInt(a[3], 10)
					};
					a.width = a.maxX - a.minX;
					a.height = a.maxY - a.minY;
					a.toString = function() {
						return [this.minX, this.minY, this.width, this.height].join(" ")
					};
					return a
				} ();
				this.ascent = -parseInt(c.ascent, 10);
				this.descent = -parseInt(c.descent, 10);
				this.height = -this.ascent + this.descent;
				this.spacing = function(a, c, f) {
					for (var g = this.glyphs,
					j, e, h = [], n = 0, l = -1, k = -1, m; m = a[++l];) if (j = g[m] || this.missingGlyph) e && (n -= e = e[m] || 0, h[k] -= e),
					n += h[++k] = ~~ (j.w || this.w) + c + (d[m] ? f: 0),
					e = j.k;
					h.total = n;
					return h
				}
			}
			function c() {
				var a = {},
				c = {
					oblique: "italic",
					italic: "oblique"
				};
				this.add = function(c) { (a[c.style] || (a[c.style] = {}))[c.weight] = c
				};
				this.get = function(d, f) {
					var g = a[d] || a[c[d]] || a.normal || a.italic || a.oblique;
					if (!g) return null;
					f = {
						normal: 400,
						bold: 700
					} [f] || parseInt(f, 10);
					if (g[f]) return g[f];
					var h = {
						1 : 1,
						99 : 0
					} [f % 100],
					l = [],
					k,
					e;
					h === void 0 && (h = f > 400);
					f == 500 && (f = 400);
					for (var m in g) if (g.hasOwnProperty(m)) {
						m = parseInt(m, 10);
						if (!k || m < k) k = m;
						if (!e || m > e) e = m;
						l.push(m)
					}
					f < k && (f = k);
					f > e && (f = e);
					l.sort(function(a, c) {
						return (h ? a >= f && c >= f ? a < c: a > c: a <= f && c <= f ? a > c: a < c) ? -1 : 1
					});
					return g[l[0]]
				}
			}
			function d(a) {
				var c = {},
				d = {};
				this.extend = function(a) {
					for (var d in a) a.hasOwnProperty(d) && (c[d] = a[d]);
					return this
				};
				this.get = function(d) {
					return c[d] != void 0 ? c[d] : a[d]
				};
				this.getSize = function(a, c) {
					return d[a] || (d[a] = new u.Size(this.get(a), c))
				};
				this.isUsable = function() {
					return !! a
				}
			}
			function f(a, c, d) {
				a.addEventListener ? a.addEventListener(c, d, false) : a.attachEvent && a.attachEvent("on" + c,
				function() {
					return d.call(a, window.event)
				})
			}
			function g(a, c) {
				var d = l.get(a);
				if (d.options) return a;
				c.hover && c.hoverables[a.nodeName.toLowerCase()] && s.attach(a);
				d.options = c;
				return a
			}
			function h(a) {
				var c = {};
				return function(d) {
					c.hasOwnProperty(d) || (c[d] = a.apply(null, arguments));
					return c[d]
				}
			}
			function k(a) {
				return document.getElementsByTagName(a)
			}
			function m() {
				for (var a = {},
				c, d, f = 0,
				g = arguments.length; c = arguments[f], f < g; ++f) for (d in c) c.hasOwnProperty(d) && (a[d] = c[d]);
				return a
			}
			function w(a, c, d, f, g, h) {
				var l = document.createDocumentFragment();
				if (c === "") return l;
				var k = f.separate,
				e = c.split(N[k]);
				if ((k = k == "words") && t) / ^\s / .test(c) && e.unshift(""),
				/\s$/.test(c) && e.push("");
				for (var m = 0,
				o = e.length; m < o; ++m)(c = z[f.engine](a, k ? u.textAlign(e[m], d, m, o) : e[m], d, f, g, h, m < o - 1)) && l.appendChild(c);
				return l
			}
			function o(a, c) {
				var d = a.nodeName.toLowerCase();
				if (!c.ignore[d]) {
					var d = !c.textless[d],
					f = u.getStyle(g(a, c)).extend(c),
					h;
					a: {
						h = u.quotedList(f.get("fontFamily").toLowerCase());
						for (var l, k = 0; l = h[k]; ++k) if (C[l]) {
							h = C[l].get(f.get("fontStyle"), f.get("fontWeight"));
							break a
						}
						h = null
					}
					var m, e, o;
					if (h) for (l = a.firstChild; l; l = m) {
						k = l.nodeType;
						m = l.nextSibling;
						if (d && k == 3 && (e ? (e.appendData(l.data), a.removeChild(l)) : e = l, m)) continue;
						e && (a.replaceChild(w(h, u.whiteSpace(e.data, f, e, o), f, c, l, a), e), e = null);
						if (k == 1) {
							if (l.firstChild) if (l.nodeName.toLowerCase() == "cufon") z[c.engine](h, null, f, c, l, a);
							else arguments.callee(l, c);
							o = l
						}
					}
				}
			}
			var r = function() {
				return r.replace.apply(null, arguments)
			},
			p = r.DOM = {
				ready: function() {
					var a = false,
					c = {
						loaded: 1,
						complete: 1
					},
					d = [],
					g = function() {
						if (!a) {
							a = true;
							for (var c; c = d.shift(); c());
						}
					};
					document.addEventListener && (document.addEventListener("DOMContentLoaded", g, false), window.addEventListener("pageshow", g, false)); ! window.opera && document.readyState &&
					function() {
						c[document.readyState] ? g() : setTimeout(arguments.callee, 10)
					} ();
					document.readyState && document.createStyleSheet &&
					function() {
						try {
							document.body.doScroll("left"),
							g()
						} catch(a) {
							setTimeout(arguments.callee, 1)
						}
					} ();
					f(window, "load", g);
					return function(c) {
						arguments.length ? a ? c() : d.push(c) : g()
					}
				} (),
				root: function() {
					return document.documentElement || document.body
				}
			},
			u = r.CSS = {
				Size: function(a, c) {
					this.value = parseFloat(a);
					this.unit = String(a).match(/[a-z%]*$/)[0] || "px";
					this.convert = function(a) {
						return a / c * this.value
					};
					this.convertFrom = function(a) {
						return a / this.value * c
					};
					this.toString = function() {
						return this.value + this.unit
					}
				},
				addClass: function(a, c) {
					var d = a.className;
					a.className = d + (d && " ") + c;
					return a
				},
				color: h(function(a) {
					var c = {};
					c.color = a.replace(/^rgba\((.*?),\s*([\d.]+)\)/,
					function(a, d, f) {
						c.opacity = parseFloat(f);
						return "rgb(" + d + ")"
					});
					return c
				}),
				fontStretch: h(function(a) {
					return typeof a == "number" ? a: /%$/.test(a) ? parseFloat(a) / 100 : {
						"ultra-condensed": 0.5,
						"extra-condensed": 0.625,
						condensed: 0.75,
						"semi-condensed": 0.875,
						"semi-expanded": 1.125,
						expanded: 1.25,
						"extra-expanded": 1.5,
						"ultra-expanded": 2
					} [a] || 1
				}),
				getStyle: function(a) {
					var c = document.defaultView;
					return c && c.getComputedStyle ? new d(c.getComputedStyle(a, null)) : a.currentStyle ? new d(a.currentStyle) : new d(a.style)
				},
				gradient: h(function(a) {
					for (var c = {
						id: a,
						type: a.match(/^-([a-z]+)-gradient\(/)[1],
						stops: []
					},
					a = a.substr(a.indexOf("(")).match(/([\d.]+=)?(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)/ig), d = 0, f = a.length, g; d < f; ++d) g = a[d].split("=", 2).reverse(),
					c.stops.push([g[1] || d / (f - 1), g[0]]);
					return c
				}),
				quotedList: h(function(a) {
					for (var c = [], d = /\s*((["'])([\s\S]*?[^\\])\2|[^,]+)\s*/g, f; f = d.exec(a);) c.push(f[3] || f[1]);
					return c
				}),
				recognizesMedia: h(function(a) {
					var c = document.createElement("style"),
					d;
					c.type = "text/css";
					c.media = a;
					try {
						c.appendChild(document.createTextNode("/**/"))
					} catch(f) {}
					a = k("head")[0];
					a.insertBefore(c, a.firstChild);
					d = (d = c.sheet || c.styleSheet) && !d.disabled;
					a.removeChild(c);
					return d
				}),
				removeClass: function(a, c) {
					a.className = a.className.replace(RegExp("(?:^|\\s+)" + c + "(?=\\s|$)", "g"), "");
					return a
				},
				supports: function(a, c) {
					var d = document.createElement("span").style;
					if (d[a] === void 0) return false;
					d[a] = c;
					return d[a] === c
				},
				textAlign: function(a, c, d, f) {
					c.get("textAlign") == "right" ? d > 0 && (a = " " + a) : d < f - 1 && (a += " ");
					return a
				},
				textShadow: h(function(a) {
					if (a == "none") return null;
					for (var c = [], d = {},
					f, g = 0, h = /(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)|(-?[\d.]+[a-z%]*)|,/ig; f = h.exec(a);) f[0] == "," ? (c.push(d), d = {},
					g = 0) : f[1] ? d.color = f[1] : d[["offX", "offY", "blur"][g++]] = f[2];
					c.push(d);
					return c
				}),
				textTransform: function() {
					var a = {
						uppercase: function(a) {
							return a.toUpperCase()
						},
						lowercase: function(a) {
							return a.toLowerCase()
						},
						capitalize: function(a) {
							return a.replace(/\b./g,
							function(a) {
								return a.toUpperCase()
							})
						}
					};
					return function(c, d) {
						var f = a[d.get("textTransform")];
						return f ? f(c) : c
					}
				} (),
				whiteSpace: function() {
					var a = {
						inline: 1,
						"inline-block": 1,
						"run-in": 1
					},
					c = /^\s+/,
					d = /\s+$/;
					return function(f, g, h, l) {
						l && l.nodeName.toLowerCase() == "br" && (f = f.replace(c, ""));
						if (a[g.get("display")]) return f;
						h.previousSibling || (f = f.replace(c, ""));
						h.nextSibling || (f = f.replace(d, ""));
						return f
					}
				} ()
			};
			u.ready = function() {
				function a(c, e) {
					if (!u.recognizesMedia(e || "all")) return true;
					if (!c || c.disabled) return false;
					try {
						var d = c.cssRules,
						f;
						if (d) {
							var g = 0,
							h = d.length;
							a: for (; f = d[g], g < h; ++g) switch (f.type) {
							case 2:
								break;
							case 3:
								if (!a(f.styleSheet, f.media.mediaText)) return false;
								break;
							default:
								break a
							}
						}
					} catch(j) {}
					return true
				}
				function c() {
					if (document.createStyleSheet) return true;
					var d, e;
					for (e = 0; d = h[e]; ++e) if (d.rel.toLowerCase() == "stylesheet" && !d.disabled && !a(d.sheet, d.media || "screen")) return false;
					for (e = 0; d = l[e]; ++e) if (!d.disabled && !a(d.sheet, d.media || "screen")) return false;
					return true
				}
				var d = !u.recognizesMedia("all"),
				f = false,
				g = [],
				h = k("link"),
				l = k("style");
				p.ready(function() {
					f || (f = u.getStyle(document.body).isUsable());
					if (d || f && c()) {
						d = true;
						for (var a; a = g.shift(); a());
					} else setTimeout(arguments.callee, 10)
				});
				return function(a) {
					d ? a() : g.push(a)
				}
			} ();
			var t = " ".split(/\s+/).length == 0,
			l = new
			function() {
				var a = {},
				c = 0;
				this.get = function(d) {
					d = d.cufid || (d.cufid = ++c);
					return a[d] || (a[d] = {})
				}
			},
			s = new
			function() {
				function a(c) {
					var f = c.relatedTarget;
					f && !(this.contains ? this.contains(f) : this.compareDocumentPosition(f) & 16) && d(this, c.type == "mouseover")
				}
				function c(a) {
					d(this, a.type == "mouseenter")
				}
				function d(a, c) {
					setTimeout(function() {
						var d = l.get(a).options;
						r.replace(a, c ? m(d, d.hover) : d, true)
					},
					10)
				}
				this.attach = function(d) {
					d.onmouseenter === void 0 ? (f(d, "mouseover", a), f(d, "mouseout", a)) : (f(d, "mouseenter", c), f(d, "mouseleave", c))
				}
			},
			D = new
			function() {
				var a = [],
				c = {};
				this.add = function(d, f) {
					c[d] = a.push(f) - 1
				};
				this.repeat = function() {
					var d;
					if (arguments.length) {
						d = arguments;
						for (var f = [], g, h = 0; g = d[h]; ++h) f[h] = a[c[g]];
						d = f
					} else d = a;
					for (g = 0; f = d[g++];) r.replace(f[0], f[1], true)
				}
			},
			F = false,
			z = {},
			C = {},
			K = {
				autoDetect: false,
				engine: null,
				forceHitArea: false,
				hover: false,
				hoverables: {
					a: true
				},
				ignore: {
					applet: 1,

					canvas: 1,
					col: 1,
					colgroup: 1,
					head: 1,
					iframe: 1,
					map: 1,
					optgroup: 1,
					option: 1,
					script: 1,
					select: 1,
					style: 1,
					textarea: 1,
					title: 1,
					pre: 1
				},
				printable: true,
				selector: window.Sizzle || window.jQuery &&
				function(a) {
					return jQuery(a)
				} || window.dojo && dojo.query || window.Ext && Ext.query || window.YAHOO && YAHOO.util && YAHOO.util.Selector && YAHOO.util.Selector.query || window.$$ &&
				function(a) {
					return $$(a)
				} || window.$ &&
				function(a) {
					return $(a)
				} || document.querySelectorAll &&
				function(a) {
					return document.querySelectorAll(a)
				} || k,
				separate: "words",
				textless: {
					dl: 1,
					html: 1,
					ol: 1,
					table: 1,
					tbody: 1,
					thead: 1,
					tfoot: 1,
					tr: 1,
					ul: 1
				},
				textShadow: "none"
			},
			N = {
				words: /\s/.test("\u00a0") ? /[^\S\u00a0]+/: /\s+/,
				characters: "",
				none: /^/
			};
			r.now = function() {
				p.ready();
				return r
			};
			r.refresh = function() {
				D.repeat.apply(D, arguments);
				return r
			};
			r.registerEngine = function(a, c) {
				if (!c) return r;
				z[a] = c;
				return r.set("engine", a)
			};
			r.registerFont = function(d) {
				if (!d) return r;
				var d = new a(d),
				f = d.family;
				C[f] || (C[f] = new c);
				C[f].add(d);
				return r.set("fontFamily", '"' + f + '"')
			};
			r.replace = function(a, c, d) {
				c = m(K, c);
				if (!c.engine) return r;
				F || (u.addClass(p.root(), "cufon-active cufon-loading"), u.ready(function() {
					u.addClass(u.removeClass(p.root(), "cufon-loading"), "cufon-ready")
				}), F = true);
				if (c.hover) c.forceHitArea = true;
				c.autoDetect && delete c.fontFamily;
				if (typeof c.textShadow == "string") c.textShadow = u.textShadow(c.textShadow);
				typeof c.color == "string" && /^-/.test(c.color) ? c.textGradient = u.gradient(c.color) : delete c.textGradient;
				d || D.add(a, arguments);
				if (a.nodeType || typeof a == "string") a = [a];
				u.ready(function() {
					for (var d = 0,
					f = a.length; d < f; ++d) {
						var g = a[d];
						typeof g == "string" ? r.replace(c.selector(g), c, true) : o(g, c)
					}
				});
				return r
			};
			r.set = function(a, c) {
				K[a] = c;
				return r
			};
			return r
		} ();
		Cufon.registerEngine("canvas",
		function() {
			var a = document.createElement("canvas");
			if (a && a.getContext && a.getContext.apply) {
				var a = null,
				c = Cufon.CSS.supports("display", "inline-block"),
				a = !c && (document.compatMode == "BackCompat" || /frameset|transitional/i.test(document.doctype.publicId)),
				d = document.createElement("style");
				d.type = "text/css";
				d.appendChild(document.createTextNode(("cufon{text-indent:0;}@media screen,projection{cufon{display:inline;display:inline-block;position:relative;vertical-align:middle;" + (a ? "": "font-size:1px;line-height:1px;") + "}cufon cufontext{display:-moz-inline-box;display:inline-block;width:0;height:0;overflow:hidden;text-indent:-10000in;}" + (c ? "cufon canvas{position:relative;}": "cufon canvas{position:absolute;}") + "}@media print{cufon{padding:0;}cufon canvas{display:none;}}").replace(/;/g, "!important;")));
				document.getElementsByTagName("head")[0].appendChild(d);
				return function(a, d, h, k, m) {
					function w() {
						var c = a.glyphs,
						d, g = -1,
						h = -1;
						for (x.scale(A, 1); N[++g];) if (d = c[N[g]] || a.missingGlyph) {
							if (d.d) {
								x.beginPath();
								if (d.code) {
									var e = d.code;
									d = x;
									for (var j = 0,
									l = e.length; j < l; ++j) {
										var k = e[j];
										d[k.m].apply(d, k.a)
									}
								} else {
									e = d;
									d = "m" + d.d;
									var j = x,
									k = l = 0,
									m = [],
									o = /([mrvxe])([^a-z]*)/g,
									t = void 0,
									s = 0;
									a: for (; t = o.exec(d); ++s) {
										var p = t[2].split(",");
										switch (t[1]) {
										case "v":
											m[s] = {
												m: "bezierCurveTo",
												a: [l + ~~p[0], k + ~~p[1], l + ~~p[2], k + ~~p[3], l += ~~p[4], k += ~~p[5]]
											};
											break;
										case "r":
											m[s] = {
												m: "lineTo",
												a: [l += ~~p[0], k += ~~p[1]]
											};
											break;
										case "m":
											m[s] = {
												m: "moveTo",
												a: [l = ~~p[0], k = ~~p[1]]
											};
											break;
										case "x":
											m[s] = {
												m: "closePath"
											};
											break;
										case "e":
											break a
										}
										j[m[s].m].apply(j, m[s].a)
									}
									e.code = m
								}
								x.fill()
							}
							x.translate(n[++h], 0)
						}
						x.restore()
					}
					var o = d === null;
					o && (d = m.getAttribute("alt"));
					var r = a.viewBox,
					p = h.getSize("fontSize", a.baseSize),
					u = 0,
					t = 0,
					l = 0,
					s = 0,
					D = k.textShadow,
					F = [];
					if (D) for (var z = D.length; z--;) {
						var C = D[z],
						K = p.convertFrom(parseFloat(C.offX)),
						C = p.convertFrom(parseFloat(C.offY));
						F[z] = [K, C];
						C < u && (u = C);
						K > t && (t = K);
						C > l && (l = C);
						K < s && (s = K)
					}
					var N = Cufon.CSS.textTransform(d, h).split(""),
					n = a.spacing(N, ~~p.convertFrom(parseFloat(h.get("letterSpacing")) || 0), ~~p.convertFrom(parseFloat(h.get("wordSpacing")) || 0));
					if (!n.length) return null;
					C = n.total;
					t += r.width - n[n.length - 1];
					s += r.minX;
					o ? (o = m, z = m.firstChild) : (o = document.createElement("cufon"), o.className = "cufon cufon-canvas", o.setAttribute("alt", d), z = document.createElement("canvas"), o.appendChild(z), k.printable && (m = document.createElement("cufontext"), m.appendChild(document.createTextNode(d)), o.appendChild(m)));
					var m = o.style,
					j = z.style,
					K = p.convert(r.height),
					d = Math.ceil(K) / K,
					A = d * Cufon.CSS.fontStretch(h.get("fontStretch"));
					C *= A;
					t = Math.ceil(p.convert(C + t - s));
					l = Math.ceil(p.convert(r.height - u + l));
					z.width = t;
					z.height = l;
					j.width = t + "px";
					j.height = l + "px";
					u += r.minY;
					j.top = Math.round(p.convert(u - a.ascent)) + "px";
					j.left = Math.round(p.convert(s)) + "px";
					l = Math.max(Math.ceil(p.convert(C)), 0) + "px";
					c ? (m.width = l, m.height = p.convert(a.height) + "px") : (m.paddingLeft = l, m.paddingBottom = p.convert(a.height) - 1 + "px");
					var x = z.getContext("2d"),
					p = K / r.height;
					x.scale(p, p * d);
					x.translate( - s, -u);
					x.save();
					if (D) for (z = D.length; z--;) C = D[z],
					x.save(),
					x.fillStyle = C.color,
					x.translate.apply(x, F[z]),
					w();
					if (k = k.textGradient) {
						h = k.stops;
						r = x.createLinearGradient(0, r.minY, 0, r.maxY);
						z = 0;
						for (k = h.length; z < k; ++z) r.addColorStop.apply(r, h[z]);
						x.fillStyle = r
					} else x.fillStyle = h.get("color");
					w();
					return o
				}
			}
		} ());
		Cufon.registerEngine("vml",
		function() {
			function a(a, c) {
				if (c === "0") return 0;
				if (/px$/i.test(c)) return parseFloat(c);
				var d = a.style.left,
				f = a.runtimeStyle.left;
				a.runtimeStyle.left = a.currentStyle.left;
				a.style.left = c.replace("%", "em");
				var g = a.style.pixelLeft;
				a.style.left = d;
				a.runtimeStyle.left = f;
				return g
			}
			function c(c, d, f, g) {
				var o = "computed" + g,
				r = d[o];
				isNaN(r) && (r = d.get(g), d[o] = r = r == "normal" ? 0 : ~~f.convertFrom(a(c, r)));
				return r
			}
			var d = document.namespaces;
			if (d && (d.add("cvml", "urn:schemas-microsoft-com:vml"), d = null, d = document.createElement("cvml:shape"), d.style.behavior = "url(#default#VML)", d.coordsize)) {
				var d = null,
				f = (document.documentMode || 0) < 8;
				document.write(('<style type="text/css">cufoncanvas{text-indent:0;}@media screen{cvml\\:shape,cvml\\:rect,cvml\\:fill,cvml\\:shadow{behavior:url(#default#VML);display:block;antialias:true;position:absolute;}cufoncanvas{position:absolute;text-align:left;}cufon{display:inline-block;position:relative;vertical-align:' + (f ? "middle": "text-bottom") + ";}cufon cufontext{position:absolute;left:-10000in;font-size:1px;}a cufon{cursor:pointer}}@media print{cufon cufoncanvas{display:none;}}</style>").replace(/;/g, "!important;"));
				var g = {};
				return function(d, k, m, w, o, r, p) {
					var u = k === null;
					if (u) k = o.alt;
					var t = d.viewBox,
					l;
					if (! (l = m.computedFontSize)) {
						l = Cufon.CSS.Size;
						var s;
						s = m.get("fontSize");
						s = a(r, /(?:em|ex|%)$|^[a-z-]+$/i.test(s) ? "1em": s);
						l = m.computedFontSize = new l(s + "px", d.baseSize)
					}
					s = l;
					if (u) l = o,
					o = o.firstChild;
					else {
						l = document.createElement("cufon");
						l.className = "cufon cufon-vml";
						l.alt = k;
						o = document.createElement("cufoncanvas");
						l.appendChild(o);
						if (w.printable) {
							var D = document.createElement("cufontext");
							D.appendChild(document.createTextNode(k));
							l.appendChild(D)
						}
						p || l.appendChild(document.createElement("cvml:shape"))
					}
					var p = l.style,
					F = o.style,
					z = s.convert(t.height),
					D = Math.ceil(z),
					z = D / z * Cufon.CSS.fontStretch(m.get("fontStretch")),
					C = t.minX,
					K = t.minY;
					F.height = D;
					F.top = Math.round(s.convert(K - d.ascent));
					F.left = Math.round(s.convert(C));
					p.height = s.convert(d.height) + "px";
					var N = m.get("color"),
					n = Cufon.CSS.textTransform(k, m).split(""),
					j = d.spacing(n, c(r, m, s, "letterSpacing"), c(r, m, s, "wordSpacing"));
					if (!j.length) return null;
					var k = j.total,
					A = -C + k + (t.width - j[j.length - 1]),
					F = s.convert(A * z),
					F = Math.round(F),
					t = A + "," + t.height,
					x,
					A = "r" + t + "ns",
					I;
					if (I = w.textGradient) {
						var q = w.textGradient;
						I = q.id;
						if (!g[I]) {
							var q = q.stops,
							L = document.createElement("cvml:fill"),
							O = [];
							L.type = "gradient";
							L.angle = 180;
							L.focus = "0";
							L.method = "sigma";
							L.color = q[0][1];
							for (var e = 1,
							R = q.length - 1; e < R; ++e) O.push(q[e][0] * 100 + "% " + q[e][1]);
							L.colors = O.join(",");
							L.color2 = q[R][1];
							g[I] = L
						}
						I = g[I]
					}
					q = d.glyphs;
					L = 0;
					O = w.textShadow;
					e = -1;
					for (R = 0; n[++e];) {
						var M = q[n[e]] || d.missingGlyph,
						J;
						if (M) {
							if (u) for (J = o.childNodes[R]; J.firstChild;) J.removeChild(J.firstChild);
							else J = document.createElement("cvml:shape"),
							o.appendChild(J);
							J.stroked = "f";
							J.coordsize = t;
							J.coordorigin = x = C - L + "," + K;
							J.path = (M.d ? "m" + M.d + "xe": "") + "m" + x + A;
							J.fillcolor = N;
							I && J.appendChild(I.cloneNode(false));
							x = J.style;
							x.width = F;
							x.height = D;
							if (O) {
								x = O[0];
								var M = O[1],
								P = Cufon.CSS.color(x.color),
								S,
								G = document.createElement("cvml:shadow");
								G.on = "t";
								G.color = P.color;
								G.offset = x.offX + "," + x.offY;
								if (M) S = Cufon.CSS.color(M.color),
								G.type = "double",
								G.color2 = S.color,
								G.offset2 = M.offX + "," + M.offY;
								G.opacity = P.opacity || S && S.opacity || 1;
								J.appendChild(G)
							}
							L += j[R++]
						}
					}
					d = J.nextSibling;
					if (w.forceHitArea) {
						if (!d) d = document.createElement("cvml:rect"),
						d.stroked = "f",
						d.className = "cufon-vml-cover",
						w = document.createElement("cvml:fill"),
						w.opacity = 0,
						d.appendChild(w),
						o.appendChild(d);
						w = d.style;
						w.width = F;
						w.height = D
					} else d && o.removeChild(d);
					p.width = Math.max(Math.ceil(s.convert(k * z)), 0);
					if (f) {
						w = m.computedYAdjust;
						if (w === void 0) w = m.get("lineHeight"),
						w == "normal" ? w = "1em": isNaN(w) || (w += "em"),
						m.computedYAdjust = w = 0.5 * (a(r, w) - parseFloat(p.height));
						if (w) p.marginTop = Math.ceil(w) + "px",
						p.marginBottom = w + "px"
					}
					return l
				}
			}
		} ());
		typeof Cufon != "undefined" && (eval('Cufon.registerFont((function(f){var b=_cufon_bridge_={p:[{"d":"99,5v-54,-6,-87,-46,-86,-98v0,-53,35,-98,97,-98v44,0,77,21,83,64r-25,0v-6,-28,-25,-45,-58,-45v-95,1,-95,157,0,158v31,0,57,-22,60,-53r24,0v-6,43,-36,71,-82,72r-13,14v24,-3,43,-1,46,23v-2,36,-52,36,-81,24r6,-12v12,5,53,13,52,-10v0,-24,-37,-4,-43,-17","w":197},{"d":"125,-233r-57,132r112,0xm-3,0r114,-257r30,0r111,257r-29,0r-34,-80r-129,0r-34,80r-29,0xm104,-288r-27,0r0,-36r27,0r0,36xm174,-288r-27,0r0,-36r27,0r0,36","w":241,"k":{"y":6,"\\u00fd":6,"\\u00ff":6,"V":18,"v":6,"T":24,"W":2,"Y":27,"\\u00dd":27,"w":6}},{"d":"28,0r0,-257r196,0r0,21r-169,0r0,93r158,0r0,21r-158,0r0,101r171,0r0,21r-198,0xm104,-288r-27,0r0,-36r27,0r0,36xm174,-288r-27,0r0,-36r27,0r0,36","w":226},{"d":"270,-131r0,131r-19,0v-2,-15,-1,-34,-5,-47v-19,37,-56,52,-97,52v-89,0,-134,-63,-134,-134v0,-71,45,-133,134,-133v59,0,107,29,117,85r-27,0v-3,-30,-37,-65,-90,-65v-145,1,-144,226,0,227v62,0,98,-40,97,-95r-96,0r0,-21r120,0","w":285},{"d":"39,-106r132,0v-1,-34,-25,-66,-65,-66v-41,0,-63,32,-67,66xm195,-87r-156,0v0,33,19,73,67,73v36,0,56,-19,64,-47r25,0v-10,42,-37,66,-89,66v-65,0,-93,-45,-93,-98v0,-49,28,-98,93,-98v65,0,91,52,89,104xm120,-263r45,51r-26,0r-34,-37r-34,37r-23,0r45,-51r27,0","w":197},{"d":"28,-141r0,-116r98,0v85,2,130,43,130,128v0,85,-45,129,-130,129r-98,0r0,-125r-28,0r0,-16r28,0xm55,-236r0,95r94,0r0,16r-94,0r0,104v102,6,174,-8,174,-108v0,-100,-71,-113,-174,-107","w":263},{"d":"135,5v-77,-4,-121,-67,-120,-134v0,-71,45,-133,134,-133v54,0,105,29,113,83r-27,0v-9,-40,-45,-63,-86,-63v-145,1,-144,226,0,227v52,0,85,-37,90,-83r27,0v-8,63,-51,103,-118,103r-13,14v24,-3,42,-1,46,23v-2,36,-52,36,-81,24r6,-12v12,5,53,13,52,-10v0,-24,-37,-4,-43,-17","w":270},{"d":"137,5r-21,0r-121,-267r20,0","w":123},{"d":"14,-85r27,0v-1,53,41,70,93,70v30,0,74,-16,74,-53v0,-84,-182,-23,-185,-122v0,-25,18,-72,98,-72v57,0,104,26,104,79r-27,0v2,-73,-148,-83,-148,-7v0,48,72,42,112,54v39,12,73,26,73,68v0,18,-8,73,-108,73v-67,0,-116,-27,-113,-90","w":241},{"d":"40,-212r-52,-50r31,0r41,50r-20,0","w":65},{"d":"147,-242v-145,1,-144,226,0,227v143,-1,143,-226,0,-227xm13,-129v0,-71,45,-133,134,-133v89,0,133,62,133,133v0,71,-44,134,-133,134v-89,0,-134,-63,-134,-134xm124,-288r-26,0r0,-36r26,0r0,36xm194,-288r-27,0r0,-36r27,0r0,36","w":285},{"d":"86,-263r-53,51r-20,0r42,-51r31,0","w":65},{"d":"28,0r0,-257r27,0r0,138r165,-138r36,0r-126,106r132,151r-35,0r-117,-134r-55,46r0,88r-27,0","w":248},{"d":"219,-65r0,19r-200,0r0,-19r200,0xm219,-136r0,19r-200,0r0,-19r200,0","w":229},{"d":"53,-172r0,-14v25,2,51,-4,51,-27v0,-19,-17,-27,-38,-27v-26,0,-40,15,-40,37r-19,0v0,-30,22,-51,59,-51v30,0,57,12,57,40v1,18,-14,28,-31,34v24,3,38,17,38,37v0,31,-29,48,-64,48v-39,0,-66,-19,-63,-53r19,0v-1,23,16,39,44,39v22,0,45,-12,45,-33v0,-24,-28,-32,-58,-30","w":123},{"d":"104,-90r-75,-68r15,-14r75,68r75,-68r14,14r-74,68r74,68r-14,13r-75,-68r-75,68r-15,-13","w":229},{"d":"135,5v-146,0,-103,-137,-109,-262r27,0r0,159v0,59,30,83,82,83v53,0,84,-24,84,-83r0,-159r27,0v-6,126,37,262,-111,262xm114,-288r-27,0r0,-36r27,0r0,36xm184,-288r-27,0r0,-36r27,0r0,36","w":263},{"d":"193,-127r-25,0v-6,-28,-25,-45,-58,-45v-95,1,-95,157,0,158v31,0,57,-22,60,-53r24,0v-7,45,-38,72,-84,72v-62,0,-97,-45,-97,-98v0,-53,35,-98,97,-98v44,0,77,21,83,64","w":197},{"d":"49,0r-25,0r0,-186r25,0r0,186xm96,-263r-52,51r-21,0r42,-51r31,0","w":65},{"d":"46,-129r-25,0v3,-44,36,-62,83,-62v36,0,75,10,75,60r0,98v-1,12,13,17,23,12r0,20v-29,6,-48,-8,-46,-31v-23,50,-143,54,-143,-17v0,-52,55,-54,109,-60v21,-2,32,-5,32,-25v0,-31,-23,-38,-53,-38v-31,0,-54,13,-55,43xm154,-102v-32,22,-116,6,-116,52v0,23,21,36,45,36v51,-1,79,-31,71,-88","w":197},{"d":"69,0r-66,-186r27,0r53,159r50,-159r28,0r50,159r53,-159r26,0r-65,186r-28,0r-51,-156r-50,156r-27,0","w":285,"k":{".":20,",":20}},{"d":"46,-129r-25,0v3,-44,36,-62,83,-62v36,0,75,10,75,60r0,98v-1,12,13,17,23,12r0,20v-29,6,-48,-8,-46,-31v-23,50,-143,54,-143,-17v0,-52,55,-54,109,-60v21,-2,32,-5,32,-25v0,-31,-23,-38,-53,-38v-31,0,-54,13,-55,43xm154,-102v-32,22,-116,6,-116,52v0,23,21,36,45,36v51,-1,79,-31,71,-88xm81,-220r-27,0r0,-36r27,0r0,36xm151,-220r-27,0r0,-36r27,0r0,36","w":197},{"d":"125,-233r-57,132r112,0xm-3,0r114,-257r30,0r111,257r-29,0r-34,-80r-129,0r-34,80r-29,0xm139,-331r45,51r-26,0r-34,-37r-34,37r-23,0r45,-51r27,0","w":241,"k":{"y":6,"\\u00fd":6,"\\u00ff":6,"V":18,"v":6,"T":24,"W":2,"Y":27,"\\u00dd":27,"w":6}},{"d":"107,0r0,-106r-111,-151r32,0r93,130r93,-130r32,0r-112,151r0,106r-27,0","w":234,"k":{"A":27,"\\u00c0":27,"\\u00c1":27,"\\u00c2":27,"\\u00c3":27,"\\u00c4":27,"\\u00c5":27,"\\u00c6":27,".":36,"a":33,"\\u00e0":33,"\\u00e1":33,"\\u00e2":33,"\\u00e3":33,"\\u00e4":33,"\\u00e5":33,"\\u00e6":33,"e":33,"\\u00e8":33,"\\u00e9":33,"\\u00ea":33,"\\u00eb":33,"-":40,"\\u00ad":40,"i":3,"\\u00ec":3,"\\u00ed":3,"\\u00ee":3,"\\u00ef":3,"o":33,"\\u00f2":33,"\\u00f3":33,"\\u00f4":33,"\\u00f5":33,"\\u00f6":33,"\\u00f8":33,"u":27,"\\u00f9":27,"\\u00fa":27,"\\u00fb":27,"\\u00fc":27,"v":20,":":33,",":44,";":33,"p":27,"q":33}},{"d":"55,-236r0,101v67,-2,159,16,162,-50v3,-67,-97,-49,-162,-51xm222,0v-19,-46,7,-114,-64,-114r-103,0r0,114r-27,0r0,-257v89,4,213,-24,216,67v1,34,-21,57,-55,66v68,5,37,79,62,124r-29,0","w":256,"k":{"y":-9,"\\u00fd":-9,"\\u00ff":-9,"V":-2,"T":-2,"W":-2,"Y":5,"\\u00dd":5}},{"d":"0,-262r19,0v74,97,73,235,0,331r-19,0v66,-97,66,-236,0,-331","w":87},{"d":"19,0r0,-19r200,0r0,19r-200,0xm108,-116r0,-65r22,0r0,65r89,0r0,19r-89,0r0,65r-22,0r0,-65r-88,0r0,-19r88,0","w":229},{"d":"86,-102r90,0r0,-134r-15,0xm203,-122r0,101r147,0r0,21r-174,0r0,-81r-102,0r-46,81r-31,0r148,-257r203,0r0,21r-145,0r0,93r136,0r0,21r-136,0","w":351},{"d":"266,-259r10,8r-29,30v68,81,29,226,-100,226v-40,0,-70,-12,-92,-32r-30,31r-10,-9r31,-31v-68,-82,-29,-226,101,-226v39,0,69,11,91,31xm63,-54r158,-159v-17,-17,-41,-29,-74,-29v-107,0,-132,116,-84,188xm230,-203r-158,159v18,18,42,29,75,29v106,-1,131,-117,83,-188","w":285},{"d":"63,-242r0,56r42,0r0,19r-42,0r0,126v-4,23,20,27,42,23r0,19v-38,3,-66,0,-66,-41r0,-127r-36,0r0,-19r36,0r0,-56r24,0","w":109},{"d":"189,-186r0,186r-23,0r0,-33v-13,25,-40,38,-71,38v-100,0,-66,-106,-72,-191r25,0v8,70,-30,175,55,172v79,-3,60,-96,62,-172r24,0xm108,-212r-52,-50r31,0r42,50r-21,0","w":204},{"d":"102,-230r-130,0r0,-16r130,0r0,16","w":65},{"d":"202,-83v0,24,-20,41,-43,50v44,32,7,91,-47,91v-45,0,-73,-23,-73,-64r25,0v-1,24,18,45,46,45v22,0,44,-9,44,-32v0,-54,-136,-57,-136,-128v0,-24,20,-42,43,-51v-44,-32,-7,-90,47,-90v45,0,73,22,73,63r-24,0v1,-24,-18,-44,-46,-44v-22,0,-45,9,-45,32v0,54,136,57,136,128xm177,-83v0,-38,-69,-57,-102,-78v-19,7,-32,19,-32,39v0,36,68,57,101,78v19,-7,33,-19,33,-39"},{"d":"108,64r0,-182v-46,0,-82,-31,-82,-68v0,-46,32,-71,88,-71r92,0r0,321r-25,0r0,-302r-48,0r0,302r-25,0","w":229},{"d":"44,-109r0,-17r42,0r-83,-131r28,0r79,131r79,-131r28,0r-84,131r43,0r0,17v-17,2,-42,-4,-54,3r0,26r54,0r0,17r-54,0r0,63r-25,0r0,-63r-53,0r0,-17r53,0v-1,-9,2,-23,-2,-29r-51,0"},{"d":"28,-43r0,-24r38,-32r-38,-32r0,-24r53,45r0,22xm92,-43r0,-24r38,-32r-38,-32r0,-24r53,45r0,22","w":160},{"d":"135,5v-146,0,-103,-137,-109,-262r27,0r0,159v0,59,30,83,82,83v53,0,84,-24,84,-83r0,-159r27,0v-6,126,37,262,-111,262xm149,-331r45,51r-25,0r-34,-37r-35,37r-23,0r45,-51r27,0","w":263},{"d":"190,0v-1,-61,102,-54,102,-112v0,-19,-19,-29,-41,-29v-29,0,-39,20,-39,41r-18,0v-1,-33,18,-56,59,-56v33,0,58,14,58,45v0,54,-82,54,-100,97r99,0r0,14r-120,0xm19,-210r0,-14v28,-1,46,-2,51,-27r16,0r0,152r-19,0r0,-111r-48,0xm53,12r179,-273r19,0r-179,273r-19,0","w":322},{"d":"31,0r0,-257r26,0r0,257r-26,0xm37,-280r-52,-51r31,0r41,51r-20,0","w":79},{"d":"24,0r0,-186r23,0v1,14,-2,32,1,44v13,-30,40,-47,77,-46r0,22v-45,-2,-76,28,-76,67r0,99r-25,0","w":116,"k":{".":33,"e":6,"\\u00e8":6,"\\u00e9":6,"\\u00ea":6,"\\u00eb":6,"-":20,"\\u00ad":20,"o":6,"\\u00f2":6,"\\u00f3":6,"\\u00f4":6,"\\u00f5":6,"\\u00f6":6,"\\u00f8":6,",":33,"q":6,"c":6,"\\u00e7":6,"d":6,"n":-6,"\\u00f1":-6}},{"d":"-2,-236r0,-21r224,0r0,21r-99,0r0,236r-27,0r0,-236r-98,0","k":{"A":24,"\\u00c0":24,"\\u00c1":24,"\\u00c2":24,"\\u00c3":24,"\\u00c4":24,"\\u00c5":24,"\\u00c6":24,".":40,"a":40,"\\u00e0":40,"\\u00e1":40,"\\u00e2":40,"\\u00e3":40,"\\u00e4":40,"\\u00e5":40,"\\u00e6":40,"e":40,"\\u00e8":40,"\\u00e9":40,"\\u00ea":40,"\\u00eb":40,"-":46,"\\u00ad":46,"i":-9,"\\u00ec":-9,"\\u00ed":-9,"\\u00ee":-9,"\\u00ef":-9,"o":40,"\\u00f2":40,"\\u00f3":40,"\\u00f4":40,"\\u00f5":40,"\\u00f6":40,"\\u00f8":40,"r":33,"u":33,"\\u00f9":33,"\\u00fa":33,"\\u00fb":33,"\\u00fc":33,"y":40,"\\u00fd":40,"\\u00ff":40,"s":40,":":40,",":40,";":40,"w":40,"c":40,"\\u00e7":40}},{"d":"110,-172v-95,1,-95,157,0,158v96,-1,96,-157,0,-158xm110,-191v62,0,97,45,97,98v0,53,-35,98,-97,98v-62,0,-97,-45,-97,-98v0,-53,35,-98,97,-98"},{"d":"112,-238v-21,0,-37,11,-37,33v0,18,19,38,32,52v20,-12,43,-27,43,-52v0,-22,-17,-33,-38,-33xm214,0r-30,-33v-40,57,-170,51,-169,-34v0,-36,38,-61,70,-76v-15,-18,-35,-37,-35,-62v0,-31,28,-52,62,-52v35,0,63,21,63,52v0,32,-27,51,-55,67r61,67v6,-13,9,-23,9,-43r25,0v0,14,-4,40,-17,62r48,52r-32,0xm169,-50r-71,-78v-27,13,-58,33,-58,64v0,30,30,50,62,50v28,0,51,-15,67,-36","w":234},{"d":"20,-60r25,0v4,28,26,46,58,46v65,0,76,-66,76,-112v-13,25,-42,41,-74,41v-55,0,-92,-35,-92,-84v0,-49,39,-85,94,-85v67,0,97,36,97,134v0,30,-9,125,-99,125v-49,0,-79,-21,-85,-65xm105,-104v44,0,69,-29,69,-66v0,-36,-20,-65,-69,-65v-39,0,-66,30,-66,65v0,37,24,66,66,66"},{"d":"125,-233r-57,132r112,0xm-3,0r114,-257r30,0r111,257r-29,0r-34,-80r-129,0r-34,80r-29,0xm99,-310v0,14,12,25,27,25v15,0,27,-11,27,-25v0,-14,-12,-24,-27,-24v-15,0,-27,10,-27,24xm84,-310v0,-21,19,-38,42,-38v23,0,42,17,42,38v0,21,-19,39,-42,39v-23,0,-42,-18,-42,-39","w":241,"k":{"y":6,"\\u00fd":6,"\\u00ff":6,"V":18,"v":6,"T":24,"W":2,"Y":27,"\\u00dd":27,"w":6}},{"d":"12,27v12,-9,14,-30,38,-27r-18,19v24,-3,42,-1,46,23v-2,36,-52,36,-81,24r6,-12v13,5,52,13,52,-10v1,-25,-37,-4,-43,-17","w":65},{"d":"189,-186r0,186r-23,0r0,-33v-18,38,-78,50,-117,26r0,76r-26,0r0,-255r25,0v8,70,-30,175,55,172v79,-3,60,-96,62,-172r24,0","w":204},{"d":"31,0r0,-257r26,0r0,257r-26,0xm103,-332r-52,51r-20,0r41,-51r31,0","w":79},{"d":"126,-136v34,-2,79,8,79,-27v0,-35,-45,-26,-79,-27r0,54xm126,-120r0,69r-21,0r0,-155v52,0,121,-8,121,43v0,27,-20,39,-43,43r51,69r-25,0r-48,-69r-35,0xm158,-243v-72,0,-124,50,-124,114v0,64,52,115,124,115v71,0,125,-51,125,-115v0,-64,-54,-114,-125,-114xm158,-262v84,0,148,58,148,133v0,75,-64,134,-148,134v-84,0,-147,-59,-147,-134v0,-75,63,-133,147,-133","w":308},{"d":"14,-72r25,0v1,35,30,58,68,58v43,0,70,-31,70,-68v0,-66,-100,-89,-133,-36r-21,0r26,-131r139,0r0,21r-121,0r-17,84v51,-51,152,-11,152,64v0,49,-44,85,-97,85v-51,0,-90,-29,-91,-77"},{"d":"125,-233r-57,132r112,0xm-3,0r114,-257r30,0r111,257r-29,0r-34,-80r-129,0r-34,80r-29,0xm184,-332r-53,51r-20,0r42,-51r31,0","w":241,"k":{"y":6,"\\u00fd":6,"\\u00ff":6,"V":18,"v":6,"T":24,"W":2,"Y":27,"\\u00dd":27,"w":6}},{"d":"203,-186r0,255r-24,0r-1,-104v-11,27,-41,40,-71,40v-62,0,-92,-45,-92,-98v0,-53,30,-98,92,-98v31,-1,62,19,74,41r0,-36r22,0xm107,-172v-91,1,-91,157,0,158v99,-1,98,-157,0,-158","w":219},{"d":"28,0r0,-257r196,0r0,21r-169,0r0,93r158,0r0,21r-158,0r0,101r171,0r0,21r-198,0xm125,-280r-52,-51r31,0r41,51r-20,0","w":226},{"d":"107,0r0,-106r-111,-151r32,0r93,130r93,-130r32,0r-112,151r0,106r-27,0xm183,-332r-53,51r-20,0r42,-51r31,0","w":234,"k":{"A":27,"\\u00c0":27,"\\u00c1":27,"\\u00c2":27,"\\u00c3":27,"\\u00c4":27,"\\u00c5":27,"\\u00c6":27,".":36,"a":33,"\\u00e0":33,"\\u00e1":33,"\\u00e2":33,"\\u00e3":33,"\\u00e4":33,"\\u00e5":33,"\\u00e6":33,"e":33,"\\u00e8":33,"\\u00e9":33,"\\u00ea":33,"\\u00eb":33,"-":40,"\\u00ad":40,"i":3,"\\u00ec":3,"\\u00ed":3,"\\u00ee":3,"\\u00ef":3,"o":33,"\\u00f2":33,"\\u00f3":33,"\\u00f4":33,"\\u00f5":33,"\\u00f6":33,"\\u00f8":33,"u":27,"\\u00f9":27,"\\u00fa":27,"\\u00fb":27,"\\u00fc":27,"v":20,":":33,",":44,";":33,"p":27,"q":33}},{"d":"201,-127r-25,0v-6,-27,-24,-44,-54,-45r0,158v28,-1,52,-24,55,-53r25,0v-6,44,-37,71,-80,72r0,37r-15,0r0,-37v-55,-5,-86,-48,-86,-98v0,-50,31,-92,86,-97r0,-32r15,0r0,31v41,1,74,23,79,64xm107,-14r0,-157v-82,12,-81,145,0,157"},{"d":"34,77r0,-360r21,0r0,360r-21,0","w":79},{"d":"110,-172v-95,1,-95,157,0,158v96,-1,96,-157,0,-158xm110,-191v62,0,97,45,97,98v0,53,-35,98,-97,98v-62,0,-97,-45,-97,-98v0,-53,35,-98,97,-98xm110,-212r-52,-50r31,0r41,50r-20,0"},{"d":"49,0r-25,0r0,-186r25,0r0,186xm29,-212r-52,-50r31,0r41,50r-20,0","w":65},{"d":"23,0r0,-186r25,0v1,10,-2,24,1,32v10,-22,36,-37,65,-37v106,0,68,104,75,191r-24,0v-8,-70,30,-172,-53,-172v-81,-1,-63,95,-64,172r-25,0","w":204},{"d":"122,-186r0,38r-34,0r0,-38r34,0xm118,-124v12,65,-72,74,-72,130v0,29,26,49,57,49v43,0,65,-28,64,-65r25,0v0,51,-33,84,-90,84v-44,0,-81,-24,-81,-66v0,-62,85,-69,72,-132r25,0","w":204},{"d":"254,-128v-23,24,-43,53,-65,78r65,0r0,-78xm254,0r0,-36r-83,0r0,-14r85,-102r17,0r0,102r27,0r0,14r-27,0r0,36r-19,0xm68,12r180,-273r18,0r-179,273r-19,0xm53,-172r0,-14v25,2,51,-4,51,-27v0,-19,-17,-27,-38,-27v-26,0,-40,15,-40,37r-19,0v0,-30,22,-51,59,-51v30,0,57,12,57,40v1,18,-14,28,-31,34v24,3,38,17,38,37v0,31,-29,48,-64,48v-39,0,-66,-19,-63,-53r19,0v-1,23,16,39,44,39v22,0,45,-12,45,-33v0,-24,-28,-32,-58,-30","w":322},{"d":"110,-144v31,0,59,-15,59,-47v0,-29,-26,-44,-59,-44v-31,0,-59,15,-59,44v0,33,29,47,59,47xm194,-191v1,28,-19,46,-45,56v36,7,57,30,57,64v0,51,-44,76,-96,76v-52,0,-95,-25,-95,-76v0,-34,23,-57,56,-65v-29,-8,-45,-27,-45,-55v1,-85,167,-84,168,0xm110,-14v39,0,71,-18,71,-57v0,-36,-34,-54,-71,-54v-38,0,-70,17,-70,54v0,38,31,57,70,57"},{"d":"72,0r-33,0r0,-38r33,0r0,38xm72,-142r-33,0r0,-38r33,0r0,38","w":102},{"d":"39,-187r0,-16v44,-1,69,-3,77,-49r21,0r0,252r-25,0r0,-187r-73,0"},{"d":"28,0r0,-257r180,0r0,21r-153,0r0,93r136,0r0,21r-136,0r0,122r-27,0","w":204,"k":{",":46}},{"d":"110,-172v-95,1,-95,157,0,158v96,-1,96,-157,0,-158xm110,-191v62,0,97,45,97,98v0,53,-35,98,-97,98v-62,0,-97,-45,-97,-98v0,-53,35,-98,97,-98xm89,-220r-27,0r0,-36r27,0r0,36xm159,-220r-27,0r0,-36r27,0r0,36"},{"d":"177,-167v10,-7,19,-28,30,-13r-22,22v48,61,15,166,-75,163v-28,0,-50,-9,-66,-24r-24,23r-8,-7r24,-24v-49,-59,-17,-164,74,-164v28,0,51,9,67,24xm168,-141r-108,106v11,13,28,21,50,21v67,-1,90,-78,58,-127xm53,-44r108,-106v-12,-13,-29,-22,-51,-22v-67,1,-88,79,-57,128"},{"d":"147,-242v-145,1,-144,226,0,227v143,-1,143,-226,0,-227xm13,-129v0,-71,45,-133,134,-133v89,0,133,62,133,133v0,71,-44,134,-133,134v-89,0,-134,-63,-134,-134xm161,-331r45,51r-25,0r-34,-37r-35,37r-23,0r45,-51r27,0","w":285},{"d":"147,-242v-145,1,-144,226,0,227v143,-1,143,-226,0,-227xm13,-129v0,-71,45,-133,134,-133v89,0,133,62,133,133v0,71,-44,134,-133,134v-89,0,-134,-63,-134,-134xm194,-324r16,0v-3,16,-14,34,-35,34v-32,-1,-62,-36,-75,2r-15,0v2,-17,14,-35,35,-35v32,1,62,35,74,-1","w":285},{"d":"56,-200r-45,-14r5,-14r46,15r0,-44r15,0r0,44r46,-15r6,14r-47,14r29,35r-13,8r-29,-36r-29,36r-13,-8","w":131},{"d":"110,-172v-95,1,-95,157,0,158v96,-1,96,-157,0,-158xm110,-191v62,0,97,45,97,98v0,53,-35,98,-97,98v-62,0,-97,-45,-97,-98v0,-53,35,-98,97,-98xm124,-263r46,51r-26,0r-34,-37r-35,37r-23,0r45,-51r27,0"},{"d":"38,-202v0,21,18,37,41,37v23,0,42,-16,42,-37v0,-21,-19,-38,-42,-38v-23,0,-41,17,-41,38xm22,-202v0,-28,25,-52,57,-52v31,0,57,24,57,52v0,29,-26,52,-57,52v-32,0,-57,-23,-57,-52","w":150},{"d":"46,-129r-25,0v3,-44,36,-62,83,-62v36,0,75,10,75,60r0,98v-1,12,13,17,23,12r0,20v-29,6,-48,-8,-46,-31v-23,50,-143,54,-143,-17v0,-52,55,-54,109,-60v21,-2,32,-5,32,-25v0,-31,-23,-38,-53,-38v-31,0,-54,13,-55,43xm154,-102v-32,22,-116,6,-116,52v0,23,21,36,45,36v51,-1,79,-31,71,-88xm149,-256r16,0v-3,16,-14,35,-35,35v-31,-1,-63,-38,-75,1r-15,0v2,-17,14,-34,35,-34v32,0,62,35,74,-2","w":197},{"d":"64,0r-33,0r0,-38r33,0r0,38xm40,-64r-5,-193r26,0r0,77r-6,116r-15,0","w":87},{"d":"39,-106r132,0v-1,-34,-25,-66,-65,-66v-41,0,-63,32,-67,66xm195,-87r-156,0v0,33,19,73,67,73v36,0,56,-19,64,-47r25,0v-10,42,-37,66,-89,66v-65,0,-93,-45,-93,-98v0,-49,28,-98,93,-98v65,0,91,52,89,104xm85,-220r-27,0r0,-36r27,0r0,36xm155,-220r-27,0r0,-36r27,0r0,36","w":197},{"d":"125,-233r-57,132r112,0xm-3,0r114,-257r30,0r111,257r-29,0r-34,-80r-129,0r-34,80r-29,0xm173,-324r15,0v-3,16,-14,34,-35,34v-31,-1,-62,-36,-74,2r-16,0v2,-17,15,-35,36,-35v32,0,62,34,74,-1","w":241,"k":{"y":6,"\\u00fd":6,"\\u00ff":6,"V":18,"v":6,"T":24,"W":2,"Y":27,"\\u00dd":27,"w":6}},{"d":"254,-128v-23,24,-43,53,-65,78r65,0r0,-78xm254,0r0,-36r-83,0r0,-14r85,-102r17,0r0,102r27,0r0,14r-27,0r0,36r-19,0xm19,-210r0,-14v28,-1,46,-2,51,-27r16,0r0,152r-19,0r0,-111r-48,0xm53,12r179,-273r19,0r-179,273r-19,0","w":322},{"d":"96,-18v0,-11,11,-20,23,-20v12,0,22,9,22,20v0,10,-10,20,-22,20v-12,0,-23,-9,-23,-20xm96,-163v0,-11,11,-20,23,-20v12,0,22,9,22,20v0,10,-10,20,-22,20v-12,0,-23,-9,-23,-20xm219,-81r-200,0r0,-19r200,0r0,19","w":229},{"d":"110,-172v-95,1,-95,157,0,158v96,-1,96,-157,0,-158xm110,-191v62,0,97,45,97,98v0,53,-35,98,-97,98v-62,0,-97,-45,-97,-98v0,-53,35,-98,97,-98xm158,-256r15,0v-3,16,-13,35,-34,35v-32,-1,-62,-38,-75,1r-15,0v2,-17,14,-34,35,-34v32,0,62,35,74,-2"},{"d":"110,-254v81,0,97,70,97,129v0,59,-16,130,-97,130v-81,0,-97,-70,-97,-129v0,-59,16,-130,97,-130xm110,-235v-63,0,-71,66,-71,110v0,44,8,111,71,111v63,0,72,-67,72,-111v0,-44,-9,-110,-72,-110"},{"d":"28,0r0,-257r39,0r98,225r97,-225r40,0r0,257r-27,0r-1,-222r-96,222r-25,0r-98,-222r0,222r-27,0","w":321},{"d":"1,-262r65,0r0,331r-65,0r0,-19r39,0r0,-293r-39,0r0,-19","w":87},{"d":"49,0r-25,0r0,-186r25,0r0,186xm51,-263r45,51r-26,0r-34,-37r-35,37r-23,0r45,-51r28,0","w":65},{"d":"197,-186v-9,112,41,260,-91,260v-41,0,-82,-17,-85,-56r25,0v5,27,33,37,60,37v56,1,69,-37,65,-95v-12,23,-35,38,-65,38v-66,0,-93,-43,-93,-96v0,-51,34,-93,93,-93v30,0,55,16,65,37r0,-32r26,0xm106,-21v85,-1,90,-149,0,-151v-88,0,-92,151,0,151"},{"d":"18,-17r177,-74r-177,-74r0,-20r201,84r0,20r-201,84r0,-20","w":229},{"d":"203,-257r0,257r-22,0v-1,-11,2,-26,-1,-35v-10,24,-43,40,-73,40v-62,0,-92,-45,-92,-98v0,-53,30,-98,92,-98v31,-1,60,16,72,41r0,-107r24,0xm107,-172v-91,1,-91,157,0,158v99,-1,98,-157,0,-158","w":219},{"d":"23,0r0,-186r25,0v1,10,-2,24,1,32v10,-22,36,-37,65,-37v106,0,68,104,75,191r-24,0v-8,-70,30,-172,-53,-172v-81,-1,-63,95,-64,172r-25,0xm153,-256r15,0v-3,16,-13,35,-34,35v-31,-1,-63,-38,-75,1r-15,0v2,-17,14,-34,35,-34v32,0,62,35,74,-2","w":204},{"d":"55,-135v13,0,23,10,23,22v0,11,-11,20,-23,20v-13,0,-23,-9,-23,-21v0,-11,11,-21,23,-21","w":102},{"d":"108,-100r0,-81r22,0r0,81r89,0r0,19r-89,0r0,81r-22,0r0,-81r-89,0r0,-19r89,0","w":229},{"d":"49,0r-25,0r0,-186r25,0r0,186xm15,-220r-27,0r0,-36r27,0r0,36xm86,-220r-27,0r0,-36r27,0r0,36","w":65},{"d":"55,-194r0,105v66,-3,156,17,156,-52v0,-69,-90,-51,-156,-53xm28,0r0,-257r27,0r0,42r99,0v51,0,84,28,84,74v0,46,-33,73,-84,73r-99,0r0,68r-27,0","w":241},{"d":"39,-38r33,0v2,43,1,76,-35,87r0,-15v13,-4,19,-23,18,-34r-16,0r0,-38","w":102},{"d":"39,-106r132,0v-1,-34,-25,-66,-65,-66v-41,0,-63,32,-67,66xm195,-87r-156,0v0,33,19,73,67,73v36,0,56,-19,64,-47r25,0v-10,42,-37,66,-89,66v-65,0,-93,-45,-93,-98v0,-49,28,-98,93,-98v65,0,91,52,89,104xm165,-263r-52,51r-20,0r41,-51r31,0","w":197},{"d":"333,-87r-154,0v-3,40,19,73,67,73v34,0,53,-17,60,-46r26,0v-10,75,-140,90,-165,19v-13,57,-154,69,-154,-8v0,-52,55,-54,109,-60v21,-2,32,-5,32,-25v0,-31,-23,-38,-53,-38v-31,0,-54,13,-55,43r-25,0v3,-44,36,-62,83,-62v29,0,62,8,69,38v10,-26,42,-38,72,-38v67,0,88,50,88,104xm154,-102v-32,22,-116,6,-116,52v0,23,21,36,45,36v51,-1,79,-31,71,-88xm179,-106r129,0v0,-34,-25,-66,-65,-66v-41,0,-65,31,-64,66","w":336},{"d":"46,-129r-25,0v3,-44,36,-62,83,-62v36,0,75,10,75,60r0,98v-1,12,13,17,23,12r0,20v-29,6,-48,-8,-46,-31v-23,50,-143,54,-143,-17v0,-52,55,-54,109,-60v21,-2,32,-5,32,-25v0,-31,-23,-38,-53,-38v-31,0,-54,13,-55,43xm154,-102v-32,22,-116,6,-116,52v0,23,21,36,45,36v51,-1,79,-31,71,-88xm116,-263r46,51r-26,0r-34,-37r-35,37r-23,0r45,-51r27,0","w":197},{"d":"46,-129r-25,0v3,-44,36,-62,83,-62v36,0,75,10,75,60r0,98v-1,12,13,17,23,12r0,20v-29,6,-48,-8,-46,-31v-23,50,-143,54,-143,-17v0,-52,55,-54,109,-60v21,-2,32,-5,32,-25v0,-31,-23,-38,-53,-38v-31,0,-54,13,-55,43xm154,-102v-32,22,-116,6,-116,52v0,23,21,36,45,36v51,-1,79,-31,71,-88xm75,-245v0,14,12,25,27,25v15,0,27,-11,27,-25v0,-14,-12,-24,-27,-24v-15,0,-27,10,-27,24xm59,-245v0,-21,20,-38,43,-38v23,0,42,17,42,38v0,21,-19,39,-42,39v-23,0,-43,-18,-43,-39","w":197},{"d":"28,0r0,-257r27,0r0,112r168,0r0,-112r27,0r0,257r-27,0r0,-125r-168,0r0,125r-27,0","w":270},{"d":"135,5v-146,0,-103,-137,-109,-262r27,0r0,159v0,59,30,83,82,83v53,0,84,-24,84,-83r0,-159r27,0v-6,126,37,262,-111,262xm137,-280r-52,-51r31,0r41,51r-20,0","w":263},{"d":"82,-1r-81,-185r26,0r68,159r63,-159r25,0r-89,214v-14,38,-35,45,-73,39r0,-19v39,11,53,-19,61,-49xm156,-263r-52,51r-20,0r41,-51r31,0","w":175},{"d":"144,-153r-56,0r-8,57r55,0xm197,-96r0,16r-44,0r-12,80r-20,0r12,-80r-56,0r-12,80r-20,0r12,-80r-43,0r0,-16r46,0r8,-57r-43,0r0,-16r46,0r12,-80r20,0r-12,80r56,0r12,-80r20,0r-13,80r42,0r0,16r-44,0r-9,57r42,0"},{"d":"82,-1r-81,-185r26,0r68,159r63,-159r25,0r-89,214v-14,38,-35,45,-73,39r0,-19v39,11,53,-19,61,-49xm73,-220r-27,0r0,-36r27,0r0,36xm143,-220r-27,0r0,-36r27,0r0,36","w":175},{"d":"28,0r0,-257r30,0r166,217r0,-217r27,0r0,257r-30,0r-166,-217r0,217r-27,0","w":270},{"d":"31,0r0,-257r26,0r0,257r-26,0","w":79},{"d":"125,-233r-57,132r112,0xm-3,0r114,-257r30,0r111,257r-29,0r-34,-80r-129,0r-34,80r-29,0xm122,-280r-53,-51r31,0r42,51r-20,0","w":241,"k":{"y":6,"\\u00fd":6,"\\u00ff":6,"V":18,"v":6,"T":24,"W":2,"Y":27,"\\u00dd":27,"w":6}},{"d":"55,-236r0,92v60,0,157,10,157,-44v0,-63,-95,-46,-157,-48xm28,0r0,-257v86,5,211,-24,211,63v0,27,-20,52,-49,58v36,4,59,30,59,63v0,24,-9,73,-101,73r-120,0xm55,-123r0,102v69,-4,164,20,167,-53v3,-62,-102,-48,-167,-49","w":256},{"d":"72,-142r-33,0r0,-38r33,0r0,38xm39,-38r33,0v2,43,1,76,-35,87r0,-15v13,-4,19,-23,18,-34r-16,0r0,-38","w":102},{"d":"28,0r0,-257r196,0r0,21r-169,0r0,93r158,0r0,21r-158,0r0,101r171,0r0,21r-198,0xm141,-331r45,51r-26,0r-34,-37r-35,37r-23,0r45,-51r28,0","w":226},{"d":"35,-82r105,0r-1,-137xm12,-63r0,-22r128,-167r23,0r0,170r41,0r0,19r-41,0r0,63r-23,0r0,-63r-128,0"},{"w":102},{"d":"278,1r-14,16r-44,-31v-19,13,-43,19,-73,19v-89,0,-134,-63,-134,-134v0,-71,45,-133,134,-133v137,0,170,161,90,235xm176,-69r41,28v65,-62,44,-201,-70,-201v-145,1,-144,226,0,227v20,0,38,-5,52,-13r-37,-26","w":285},{"d":"24,0r0,-193v0,-47,32,-69,79,-69v42,0,78,22,78,63v1,27,-18,47,-45,55v39,3,59,33,59,66v0,59,-47,87,-108,80r0,-20v42,8,83,-7,83,-56v0,-50,-34,-58,-83,-58r0,-20v35,0,69,-9,69,-46v0,-27,-25,-45,-53,-45v-40,0,-54,18,-54,52r0,191r-25,0","w":204},{"d":"96,69r-20,0v-74,-97,-74,-235,0,-331r20,0v-67,97,-68,236,0,331","w":87},{"d":"16,5r-21,0r122,-267r20,0","w":123},{"d":"28,0r0,-257r27,0r0,236r159,0r0,21r-186,0","w":204,"k":{"y":13,"\\u00fd":13,"\\u00ff":13,"V":33,"T":33,"W":20,"Y":40,"\\u00dd":40}},{"d":"66,-147v61,0,61,-93,0,-93v-61,0,-62,93,0,93xm64,-132v-41,0,-63,-27,-63,-61v0,-34,22,-61,63,-61v45,0,67,27,67,61v0,34,-22,61,-67,61","w":124},{"d":"55,-236r0,105v66,-2,156,17,156,-53v0,-69,-90,-49,-156,-52xm28,0r0,-257r126,0v51,0,84,27,84,73v0,46,-33,74,-84,74r-99,0r0,110r-27,0","w":241,"k":{",":55,"A":27,"\\u00c0":27,"\\u00c1":27,"\\u00c2":27,"\\u00c3":27,"\\u00c4":27,"\\u00c5":27,"\\u00c6":27,".":55}},{"d":"125,-233r-57,132r112,0xm-3,0r114,-257r30,0r111,257r-29,0r-34,-80r-129,0r-34,80r-29,0","w":241,"k":{"y":6,"\\u00fd":6,"\\u00ff":6,"V":18,"v":6,"T":24,"W":2,"Y":27,"\\u00dd":27,"w":6}},{"d":"94,69r-64,0r0,-331r64,0r0,19r-39,0r0,293r39,0r0,19","w":87},{"d":"147,-242v-145,1,-144,226,0,227v143,-1,143,-226,0,-227xm13,-129v0,-71,45,-133,134,-133v89,0,133,62,133,133v0,71,-44,134,-133,134v-89,0,-134,-63,-134,-134xm147,-280r-52,-51r31,0r41,51r-20,0","w":285},{"d":"147,-242v-145,1,-144,226,0,227v143,-1,143,-226,0,-227xm13,-129v0,-71,45,-133,134,-133v89,0,133,62,133,133v0,71,-44,134,-133,134v-89,0,-134,-63,-134,-134","w":285},{"d":"28,0r0,-257r196,0r0,21r-169,0r0,93r158,0r0,21r-158,0r0,101r171,0r0,21r-198,0","w":226},{"d":"24,0r0,-186r23,0v1,10,-2,24,1,32v18,-45,109,-53,126,-1v12,-24,37,-36,64,-36v94,0,63,109,68,191r-25,0r0,-125v0,-31,-12,-47,-48,-47v-80,2,-50,99,-56,172r-24,0r0,-126v0,-25,-11,-46,-43,-46v-82,-1,-58,97,-61,172r-25,0","w":321},{"d":"97,-132r-96,-125r32,0r80,108r82,-108r31,0r-97,125r102,132r-32,0r-86,-113r-87,113r-31,0","w":219},{"d":"13,-80r25,0v-2,40,25,66,69,66v36,0,71,-19,71,-55v0,-43,-39,-58,-87,-54r0,-19v40,3,77,-6,77,-46v0,-33,-28,-47,-61,-47v-41,0,-64,27,-63,64r-25,0v0,-48,34,-83,88,-83v43,0,86,19,86,64v0,27,-17,49,-47,56v36,5,57,30,57,63v0,49,-44,76,-95,76v-57,0,-99,-31,-95,-85"},{"d":"39,-106r132,0v-1,-34,-25,-66,-65,-66v-41,0,-63,32,-67,66xm195,-87r-156,0v0,33,19,73,67,73v36,0,56,-19,64,-47r25,0v-10,42,-37,66,-89,66v-65,0,-93,-45,-93,-98v0,-49,28,-98,93,-98v65,0,91,52,89,104","w":197},{"d":"46,-129r-25,0v3,-44,36,-62,83,-62v36,0,75,10,75,60r0,98v-1,12,13,17,23,12r0,20v-29,6,-48,-8,-46,-31v-23,50,-143,54,-143,-17v0,-52,55,-54,109,-60v21,-2,32,-5,32,-25v0,-31,-23,-38,-53,-38v-31,0,-54,13,-55,43xm154,-102v-32,22,-116,6,-116,52v0,23,21,36,45,36v51,-1,79,-31,71,-88xm162,-263r-52,51r-20,0r41,-51r31,0","w":197},{"d":"24,0r0,-257r25,0r0,161r113,-90r33,0r-87,69r93,117r-31,0r-81,-101r-40,30r0,71r-25,0","w":190},{"d":"53,-215r40,-20v-12,-7,-24,-14,-37,-20r15,-12v14,7,28,14,41,23r45,-23r13,11r-43,22v44,32,77,79,77,141v0,54,-31,98,-97,98v-64,0,-94,-42,-94,-95v0,-70,84,-117,148,-78v-13,-23,-31,-40,-53,-56r-41,21xm109,-163v-51,0,-70,34,-70,74v0,39,20,75,69,75v46,0,71,-31,71,-76v0,-36,-20,-73,-70,-73"},{"d":"110,-172v-95,1,-95,157,0,158v96,-1,96,-157,0,-158xm110,-191v62,0,97,45,97,98v0,53,-35,98,-97,98v-62,0,-97,-45,-97,-98v0,-53,35,-98,97,-98xm171,-263r-53,51r-20,0r42,-51r31,0"},{"d":"90,-254v45,0,63,29,63,68v0,39,-18,68,-63,68v-45,0,-63,-29,-63,-68v0,-39,18,-68,63,-68xm264,-114v-34,0,-42,29,-42,52v0,23,8,51,42,51v33,0,42,-28,42,-51v0,-23,-9,-52,-42,-52xm264,-131v45,0,63,29,63,68v0,39,-18,68,-63,68v-45,0,-63,-29,-63,-68v0,-39,18,-68,63,-68xm75,12r180,-273r18,0r-179,273r-19,0xm90,-238v-34,0,-42,29,-42,52v0,23,8,52,42,52v33,0,42,-29,42,-52v0,-23,-9,-52,-42,-52","w":344},{"d":"189,-186r0,186r-23,0r0,-33v-13,25,-40,38,-71,38v-100,0,-66,-106,-72,-191r25,0v8,70,-30,175,55,172v79,-3,60,-96,62,-172r24,0xm167,-263r-52,51r-20,0r41,-51r31,0","w":204},{"d":"34,-148r0,-90r21,0r0,90r-21,0xm34,32r0,-90r21,0r0,90r-21,0","w":79},{"d":"243,-196r-38,104v-5,15,-8,30,5,30v35,0,67,-50,67,-90v0,-59,-51,-94,-112,-94v-74,0,-125,53,-125,119v0,65,54,116,126,116v39,0,79,-18,102,-48r20,0v-24,39,-73,64,-122,64v-86,0,-147,-59,-147,-135v0,-75,64,-132,145,-132v76,0,134,46,134,112v0,58,-48,104,-92,104v-15,0,-23,-10,-27,-24v-27,39,-103,26,-103,-29v0,-50,38,-104,94,-104v17,0,33,9,42,31r10,-24r21,0xm169,-184v-41,0,-67,51,-67,84v0,22,13,34,32,34v36,0,66,-52,66,-84v0,-17,-16,-34,-31,-34","w":308},{"d":"219,-17r0,20r-201,-84r0,-20r201,-84r0,20r-176,74","w":229},{"d":"135,5v-146,0,-103,-137,-109,-262r27,0r0,159v0,59,30,83,82,83v53,0,84,-24,84,-83r0,-159r27,0v-6,126,37,262,-111,262xm197,-332r-52,51r-21,0r42,-51r31,0","w":263},{"d":"189,-186r0,186r-23,0r0,-33v-13,25,-40,38,-71,38v-100,0,-66,-106,-72,-191r25,0v8,70,-30,175,55,172v79,-3,60,-96,62,-172r24,0xm120,-263r45,51r-26,0r-34,-37r-34,37r-23,0r45,-51r27,0","w":204},{"d":"87,-170r0,-87r25,0r0,87r-25,0xm35,-170r0,-87r24,0r0,87r-24,0","w":138},{"d":"46,-129r-25,0v3,-44,36,-62,83,-62v36,0,75,10,75,60r0,98v-1,12,13,17,23,12r0,20v-29,6,-48,-8,-46,-31v-23,50,-143,54,-143,-17v0,-52,55,-54,109,-60v21,-2,32,-5,32,-25v0,-31,-23,-38,-53,-38v-31,0,-54,13,-55,43xm154,-102v-32,22,-116,6,-116,52v0,23,21,36,45,36v51,-1,79,-31,71,-88xm102,-212r-52,-50r31,0r41,50r-20,0","w":197},{"d":"72,0r-33,0r0,-38r33,0r0,38","w":102},{"d":"82,-1r-81,-185r26,0r68,159r63,-159r25,0r-89,214v-14,38,-35,45,-73,39r0,-19v39,11,53,-19,61,-49","w":175},{"d":"6,-99v0,-61,102,-54,102,-112v0,-19,-19,-29,-41,-29v-29,0,-39,20,-39,41r-19,0v-1,-33,19,-55,60,-55v33,0,58,14,58,45v0,53,-82,52,-100,96r99,0r0,14r-120,0","w":123},{"d":"76,-43r-52,-45r0,-22r52,-45r0,24r-37,32r37,32r0,24xm140,-43r-53,-45r0,-22r53,-45r0,24r-37,32r37,32r0,24","w":160},{"d":"15,-236r0,-21r203,0r0,22r-186,214r190,0r0,21r-220,0r0,-22r186,-214r-173,0","w":219},{"d":"24,69r0,-326r25,0r0,107v10,-27,41,-41,71,-41v62,0,92,45,92,98v0,53,-30,98,-92,98v-30,0,-60,-13,-71,-40r0,104r-25,0xm120,-14v91,-1,91,-157,0,-158v-53,0,-71,40,-71,79v0,39,18,79,71,79","w":219},{"d":"200,-188r-25,0v-4,-28,-26,-47,-58,-47v-64,-1,-78,69,-75,113v13,-25,41,-42,73,-42v55,0,92,35,92,84v0,49,-39,85,-94,85v-67,0,-97,-36,-97,-134v0,-30,8,-125,99,-125v49,0,79,22,85,66xm115,-145v-44,0,-69,30,-69,67v0,36,20,64,69,64v40,0,67,-29,67,-64v0,-37,-25,-67,-67,-67"},{"d":"195,-183v0,87,-129,92,-152,162r154,0r0,21r-183,0v1,-75,85,-96,134,-136v42,-34,21,-99,-40,-99v-45,0,-63,33,-62,70r-25,0v-1,-52,29,-89,89,-89v48,0,85,24,85,71"},{"d":"143,-82r0,-175r27,0r0,185v0,52,-22,77,-83,77v-65,0,-79,-42,-79,-87r27,0v1,22,-1,67,55,67v42,0,53,-20,53,-67","w":190},{"w":102},{"d":"262,-179r-27,0v-9,-40,-45,-63,-86,-63v-145,1,-144,226,0,227v52,0,85,-37,90,-83r27,0v-8,63,-51,103,-117,103v-89,0,-134,-63,-134,-134v0,-71,45,-133,134,-133v54,0,105,29,113,83","w":270},{"d":"77,-112v42,0,96,48,119,-1r14,13v-12,15,-25,31,-49,31v-41,0,-99,-51,-119,1r-15,-13v8,-15,24,-31,50,-31","w":229},{"d":"189,-186r0,186r-23,0r0,-33v-13,25,-40,38,-71,38v-100,0,-66,-106,-72,-191r25,0v8,70,-30,175,55,172v79,-3,60,-96,62,-172r24,0xm85,-220r-27,0r0,-36r27,0r0,36xm155,-220r-27,0r0,-36r27,0r0,36","w":204},{"d":"40,-86r-23,0r91,-163r21,0r91,163r-22,0r-80,-140","w":229},{"d":"16,-262v58,-11,55,43,55,98v0,29,5,57,28,57r0,20v-66,6,23,172,-83,156r0,-19v41,5,30,-50,30,-88v0,-41,23,-53,27,-59v-5,-3,-27,-19,-27,-59v0,-36,12,-91,-30,-87r0,-19","w":123},{"d":"14,-210r0,-14v29,-1,45,-2,50,-27r16,0r0,152r-18,0r0,-111r-48,0","w":123},{"d":"103,-186r0,19r-41,0r0,167r-25,0r0,-167r-34,0r0,-19r34,0v-6,-50,15,-79,71,-70r0,20v-37,-9,-52,11,-46,50r41,0","w":94,"k":{"f":6}},{"d":"28,0r0,-257r196,0r0,21r-169,0r0,93r158,0r0,21r-158,0r0,101r171,0r0,21r-198,0xm183,-332r-52,51r-20,0r42,-51r30,0","w":226},{"d":"12,-82r24,0v0,42,24,64,66,68r0,-106v-45,-9,-83,-22,-83,-72v0,-43,37,-70,83,-70r0,-29r15,0r0,29v46,0,85,31,84,78r-25,0v-1,-36,-24,-59,-59,-59r0,103v45,9,92,23,92,73v0,48,-46,72,-92,72r0,31r-15,0r0,-31v-62,-5,-88,-32,-90,-87xm102,-143r0,-100v-32,0,-58,15,-58,53v0,33,28,40,58,47xm117,-117r0,103v33,0,67,-15,67,-52v0,-34,-36,-44,-67,-51"},{"d":"31,0r0,-257r26,0r0,257r-26,0xm23,-288r-27,0r0,-36r27,0r0,36xm93,-288r-27,0r0,-36r27,0r0,36","w":79},{"d":"123,-89r-99,0r0,-20r99,0r0,20","w":138},{"d":"80,0r-79,-186r27,0r66,163r63,-163r26,0r-77,186r-26,0","w":175},{"d":"28,0r0,-257r98,0v85,2,130,43,130,128v0,85,-45,129,-130,129r-98,0xm55,-236r0,215v102,6,174,-8,174,-108v0,-100,-71,-113,-174,-107","w":263},{"d":"171,-170r-135,151r141,0r0,19r-171,0r0,-18r133,-149r-124,0r0,-19r156,0r0,16","w":175},{"d":"31,-186r33,0r0,38r-33,0r0,-38xm55,-122r6,117r0,74r-26,0r5,-191r15,0","w":87},{"d":"171,-131r-25,0v-1,-28,-24,-41,-53,-41v-22,0,-49,8,-49,32v17,55,135,17,134,90v0,40,-44,55,-82,55v-48,0,-80,-19,-84,-65r25,0v2,31,28,46,61,46v24,0,55,-9,55,-35v0,-58,-134,-21,-134,-90v0,-38,41,-52,77,-52v41,0,73,20,75,60","w":182},{"d":"15,-220r-27,0r0,-36r27,0r0,36xm85,-220r-27,0r0,-36r27,0r0,36","w":65},{"d":"116,69v-59,11,-55,-44,-55,-99v0,-29,-5,-57,-28,-57r0,-19v66,-6,-22,-172,83,-156r0,19v-40,-5,-30,49,-30,87v0,41,-23,54,-27,60v5,3,27,18,27,58v0,36,-12,92,30,88r0,19","w":123},{"d":"24,0r0,-257r25,0r0,107v10,-27,41,-41,71,-41v62,0,92,45,92,98v0,53,-30,98,-92,98v-34,1,-59,-16,-73,-40r0,35r-23,0xm120,-14v91,-1,91,-157,0,-158v-53,0,-71,40,-71,79v0,39,18,79,71,79","w":219},{"d":"235,-157r-20,0v-16,-65,-118,-39,-118,28v0,37,22,67,65,67v29,0,48,-16,53,-38r20,0v-5,35,-36,54,-73,54v-54,0,-86,-35,-86,-83v0,-48,32,-82,86,-82v37,0,68,19,73,54xm283,-129v0,-64,-54,-114,-125,-114v-72,0,-124,50,-124,114v0,64,52,115,124,115v71,0,125,-51,125,-115xm306,-129v0,75,-64,134,-148,134v-84,0,-147,-59,-147,-134v0,-75,63,-133,147,-133v84,0,148,58,148,133","w":308},{"d":"43,-18v52,-31,120,31,159,-16r13,17v-46,53,-132,-17,-184,22r-14,-19v35,-24,58,-62,33,-105r-32,0r0,-11r25,0v-12,-18,-22,-36,-22,-58v0,-51,46,-74,91,-74v59,0,92,32,91,85r-24,0v0,-39,-23,-66,-67,-66v-33,0,-66,17,-66,56v0,25,14,36,24,57r63,0r0,11r-56,0v23,41,-2,81,-34,101"},{"d":"135,5v-146,0,-103,-137,-109,-262r27,0r0,159v0,59,30,83,82,83v53,0,84,-24,84,-83r0,-159r27,0v-6,126,37,262,-111,262","w":263},{"d":"37,-125v0,39,34,69,74,69v40,0,73,-30,73,-69v0,-39,-33,-68,-73,-68v-40,0,-74,29,-74,68xm12,-49r22,-20v-29,-29,-29,-82,0,-111r-22,-20r15,-14r22,20v31,-26,90,-27,122,0r22,-20r15,14r-22,19v30,29,30,84,0,113r22,19r-15,14r-22,-20v-31,27,-90,26,-122,0r-22,20"},{"d":"91,0r0,-38r34,0r0,38r-34,0xm95,-64v-13,-64,72,-75,72,-131v0,-29,-26,-48,-57,-48v-43,0,-65,28,-64,65r-25,0v0,-51,33,-84,90,-84v44,0,81,24,81,66v0,61,-86,68,-72,132r-25,0","w":204},{"d":"102,0r-105,-257r29,0r93,230r91,-230r28,0r-104,257r-32,0","w":226,"k":{";":27,":":27,",":46,"A":20,"\\u00c0":20,"\\u00c1":20,"\\u00c2":20,"\\u00c3":20,"\\u00c4":20,"\\u00c5":20,"\\u00c6":20,".":46,"a":20,"\\u00e0":20,"\\u00e1":20,"\\u00e2":20,"\\u00e3":20,"\\u00e4":20,"\\u00e5":20,"\\u00e6":20,"e":20,"\\u00e8":20,"\\u00e9":20,"\\u00ea":20,"\\u00eb":20,"-":20,"\\u00ad":20,"i":-2,"\\u00ec":-2,"\\u00ed":-2,"\\u00ee":-2,"\\u00ef":-2,"o":20,"\\u00f2":20,"\\u00f3":20,"\\u00f4":20,"\\u00f5":20,"\\u00f6":20,"\\u00f8":20,"r":13,"u":13,"\\u00f9":13,"\\u00fa":13,"\\u00fb":13,"\\u00fc":13,"y":6,"\\u00fd":6,"\\u00ff":6}},{"d":"147,-242v-145,1,-144,226,0,227v143,-1,143,-226,0,-227xm13,-129v0,-71,45,-133,134,-133v89,0,133,62,133,133v0,71,-44,134,-133,134v-89,0,-134,-63,-134,-134xm209,-332r-52,51r-20,0r41,-51r31,0","w":285},{"d":"24,-221r0,-36r25,0r0,36r-25,0xm24,0r0,-186r25,0r0,186r-25,0","w":65},{"d":"24,69r0,-255r23,0v1,11,-2,27,1,36v12,-26,39,-41,72,-41v62,0,92,45,92,98v0,53,-30,98,-92,98v-30,0,-60,-13,-71,-40r0,104r-25,0xm120,-14v91,-1,91,-157,0,-158v-55,0,-71,37,-71,79v0,39,18,79,71,79","w":219},{"d":"198,-40r0,-77r-179,0r0,-19r200,0r0,96r-21,0","w":229},{"d":"198,45r-198,0r0,-18r198,0r0,18","w":190},{"d":"24,0r0,-257r25,0r0,257r-25,0","w":65},{"d":"31,0r0,-257r26,0r0,257r-26,0xm58,-331r45,51r-26,0r-34,-37r-35,37r-23,0r46,-51r27,0","w":79},{"d":"23,0r0,-257r25,0r1,103v10,-22,36,-37,65,-37v106,0,68,104,75,191r-24,0v-8,-70,30,-172,-53,-172v-81,-1,-63,95,-64,172r-25,0","w":204},{"d":"78,0r-78,-257r29,0r65,225r69,-225r34,0r69,225r65,-225r27,0r-78,257r-29,0r-72,-230r-71,230r-30,0","w":351,"k":{"A":6,"\\u00c0":6,"\\u00c1":6,"\\u00c2":6,"\\u00c3":6,"\\u00c4":6,"\\u00c5":6,"\\u00c6":6,".":27,"a":13,"\\u00e0":13,"\\u00e1":13,"\\u00e2":13,"\\u00e3":13,"\\u00e4":13,"\\u00e5":13,"\\u00e6":13,"e":6,"\\u00e8":6,"\\u00e9":6,"\\u00ea":6,"\\u00eb":6,"i":-9,"\\u00ec":-9,"\\u00ed":-9,"\\u00ee":-9,"\\u00ef":-9,"o":6,"\\u00f2":6,"\\u00f3":6,"\\u00f4":6,"\\u00f5":6,"\\u00f6":6,"\\u00f8":6,"r":6,"u":6,"\\u00f9":6,"\\u00fa":6,"\\u00fb":6,"\\u00fc":6,":":6,",":27,";":6}},{"d":"189,-186r0,186r-23,0r0,-33v-13,25,-40,38,-71,38v-100,0,-66,-106,-72,-191r25,0v8,70,-30,175,55,172v79,-3,60,-96,62,-172r24,0","w":204},{"d":"21,-215r-18,0v1,-28,23,-39,55,-39v26,0,51,6,51,36r0,62v0,7,9,10,15,7r0,12v-17,3,-34,-1,-30,-19v-16,32,-96,35,-96,-11v0,-33,36,-35,71,-38v14,-1,21,-3,21,-11v0,-19,-16,-24,-35,-24v-19,0,-33,8,-34,25xm90,-198v-23,12,-78,5,-73,30v7,37,76,20,73,-13r0,-17","w":115},{"d":"0,0r80,-96r-74,-90r32,0r58,71r57,-71r31,0r-73,89r79,97r-32,0r-64,-78r-63,78r-31,0","w":182},{"d":"39,-106r132,0v-1,-34,-25,-66,-65,-66v-41,0,-63,32,-67,66xm195,-87r-156,0v0,33,19,73,67,73v36,0,56,-19,64,-47r25,0v-10,42,-37,66,-89,66v-65,0,-93,-45,-93,-98v0,-49,28,-98,93,-98v65,0,91,52,89,104xm105,-212r-52,-50r31,0r41,50r-20,0","w":197},{"d":"24,-221r0,-36r25,0r0,36r-25,0xm24,23r0,-209r25,0r0,203v3,34,-19,59,-61,51r0,-19v22,5,36,-5,36,-26","w":65},{"d":"123,-89r-99,0r0,-20r99,0r0,20","w":138},{"d":"20,-228r0,-21r178,0r0,21v-35,33,-106,111,-112,228r-27,0v6,-85,38,-148,115,-228r-154,0"},{"d":"43,-170r0,-87r25,0r0,87r-25,0","w":102},{"d":"28,0r0,-257r30,0r166,217r0,-217r27,0r0,257r-30,0r-166,-217r0,217r-27,0xm189,-324r15,0v-3,16,-13,34,-34,34v-31,-1,-63,-36,-75,2r-15,0v2,-17,14,-35,35,-35v32,1,62,35,74,-1","w":270}],f:f};try{(function(s){var c="charAt",i="indexOf",a=String(arguments.callee).replace(/\\s+/g,""),z=s.length+97-a.length+(a.charCodeAt(0)==40&&2),w=64,k=s.substring(z,w+=z),v=s.substr(0,z)+s.substr(w),m=0,t="",x=0,y=v.length,d=document,h=d.getElementsByTagName("head")[0],e=d.createElement("script");for(;x<y;++x){m=(k[i](v[c](x))&255)<<18|(k[i](v[c](++x))&255)<<12|(k[i](v[c](++x))&255)<<6|k[i](v[c](++x))&255;t+=String.fromCharCode((m&16711680)>>16,(m&65280)>>8,m&255);}e.text=t;h.insertBefore(e,h.firstChild);h.removeChild(e);})("ywVW}CtuB[#+yEOXGCJfowo#5ztWVC#+5z~fB[a{V>eH-:u65j%SLw%05j%SLwLu5j%SLwt6aW`WL84O->`WL842LJ`WL84KtW`Q%z4QG9dSV8VQG9dS-Kabi>`WL846LW`WL842tW`WL842-ztQG9dSV[a,GW`WL84OtJ`WL84KLOO|y>`WL846L>`WL84KtO`WL842!jaQG9dSVKOQG9dS-[VQG9dS-9GQG9dS-KVQG9dS-9>QG9dS-C~QG9dSVw~QG9dS-CaQG9dS-ztf>weC!>`WL84Kt>`WL846!J`WL846t>`WL84KVJ`WL84,V9>QG9dS-:J`5j%SLwLY5j%SLwa25j%SLwIfnJ`WL84CLO`WL84O-zhQG9dS-CVQG9dS-C%Y!KJw5j%SLw-z5j%SLw-Y5j%SLwvu5j%SLwvWyO`WL84CtJ`WL846LJ`WL84OLfJQG9dSV[~QG9dS-:tQG9dS-CtQG9dSVKGQG9dSVK%S9>WQG9dSV[>{iCaQG9dSVKJQG9dS-KQk5j%SLw>C5j%SLwaObJ`WL84O!>`WL84OtO`WL84OLO`WL84Ot%,QG9dSV8OQG9dSVCvK5j%SLwVC92OQG9dS-:4E!W`WL84K-9aQG9dS-94a5j%SLwaCyJS79J`WL846->44[W`WL842L2#J}>s:V>`WL84OL[PQG9dSVK4QG9dSVKLO5j%SLwV,5j%SLwIzv8`QG9dSVwJQG9dSVC~QoO`WL84OLEhh5j%SLwof5j%SLwJ6[O`WL84CV9-f|648nO`WL84C-Wh#5j%SLwohVO`WL84K!|aQG9dS-z-PG2am5j%SLwI`QW`WL84,!jP65j%SLwIh5j%SLwI:>>`WL84,t8#[5j%SLwv:B54QG9dS-[tn}J`WL84KV[,5G>`WL84,-5,QG9dSV9,)5j%SLwJ2tfGQG9dSV8I6b{tS}wOuyd4E8IJwjo~ybLt!iva|9%>[5-VB}QGUns,6K2OC{ql)kHP+7S`f:uWz0YhmXe#]gEo6y|`li9dHQ8W6b{dH}8WSbC`O}CGuBE`{i[o+V6h{}jOSBjL#U0uXB[-q-6h7B:u756sg!{G0GWS+y9eqi:l6}[LPQCJKB[h{5EhK}zWeb6PQbC~P-fWf-[tl}CGQbCt7}5`6}[LP}[#W}{a,B[h6B[POb5~,-zO+VfWuV[JP5EhK}zWeb6PQbC~P-fWP}0>+GwJl}C~lBz%PQCJKB[h{b5aO-[WQbCt7}5`6}[LPQCJKB[h{5EhK}zWQb{GO-KJQb{~uQwJfGwhOQOS+-zsl~E#lb{aOQ0vq}w#K-5al}zY+Bw#:Gwh,}[%ly[V7Q6sXB9`H!fHkB|O{[zt}B>WGi54}B>W#y|sl")}catch(e){}delete _cufon_bridge_;return b.ok&&f})({"w":212,"face":{"font-family":"BMC HelveticaNeueLT Pro 45 Lt","font-weight":300,"font-stretch":"normal","units-per-em":"360","panose-1":"2 11 4 3 2 2 2 2 2 4","ascent":"257","descent":"-103","x-height":"5","bbox":"-28 -348 358 77","underline-thickness":"18","underline-position":"-18","stemh":"19","stemv":"23","unicode-range":"U+0020-U+00FF"}}));'), eval('Cufon.registerFont((function(f){var b=_cufon_bridge_={p:[{"d":"124,-192v138,0,98,59,98,150v0,14,0,30,9,42r-80,0v-3,-5,-1,-15,-3,-18v-38,39,-139,31,-139,-34v0,-59,76,-57,116,-64v10,-2,22,-4,22,-16v0,-13,-13,-17,-26,-17v-24,0,-30,11,-30,19r-72,0v2,-53,57,-62,105,-62xm147,-84v-16,9,-59,7,-58,29v6,28,60,22,58,-12r0,-17xm157,-209v-28,0,-67,-31,-78,2r-31,0v0,-21,10,-51,44,-51v31,0,66,37,78,-1r33,0v-1,27,-17,50,-46,50","w":208},{"d":"-3,0r104,-257r85,0r103,257r-90,0r-12,-37r-90,0r-13,37r-87,0xm116,-92r54,0r-27,-79","w":252,"k":{"y":6,"\\u00fd":6,"\\u00ff":6,"V":11,"v":6,"T":24,"W":13,"Y":27,"\\u00dd":27,"w":6}},{"d":"160,-197r0,71r-82,0r0,-71r82,0xm6,-10v0,-64,72,-42,76,-94r74,0v0,44,-17,57,-33,65v-16,9,-32,8,-32,26v0,10,8,17,20,17v23,0,28,-13,28,-31r82,0v-3,60,-45,92,-109,92v-50,0,-106,-23,-106,-75","w":193},{"d":"125,-47v49,-1,47,-93,0,-93v-48,1,-48,92,0,93xm235,-187r0,247r-78,0v-1,-26,2,-57,-1,-81v-12,16,-32,26,-56,26v-69,0,-88,-54,-88,-98v0,-47,29,-99,87,-99v38,0,51,14,60,26r0,-21r76,0","w":223},{"d":"23,0r0,-257r234,0r0,66r-147,0r0,32r133,0r0,61r-133,0r0,32r151,0r0,66r-238,0xm58,-276r48,-53r65,0r48,53r-58,0r-22,-27r-23,27r-58,0","w":245},{"d":"235,-187r0,187r-76,0r0,-24v-31,46,-138,39,-138,-35r0,-128r79,0r0,98v0,22,3,37,26,37v14,0,31,-6,31,-36r0,-99r78,0xm221,-260r-68,54r-54,0r39,-54r83,0","w":223},{"d":"231,-191r-68,0v2,-24,-47,-28,-47,-5v0,14,38,24,57,30v26,9,79,23,79,66v0,40,-28,51,-42,54v13,10,20,24,20,39v0,50,-49,72,-98,72v-54,0,-100,-22,-99,-77r67,0v1,29,48,34,55,9v-7,-32,-54,-31,-80,-44v-29,-14,-63,-27,-63,-60v0,-29,15,-46,45,-56v-46,-46,18,-100,77,-100v52,0,95,22,97,72xm80,-117v4,21,63,31,90,42v21,-1,17,-22,-1,-29r-76,-27v-6,0,-13,7,-13,14","w":230},{"d":"124,-192v138,0,98,59,98,150v0,14,0,30,9,42r-80,0v-3,-5,-1,-15,-3,-18v-38,39,-139,31,-139,-34v0,-59,76,-57,116,-64v10,-2,22,-4,22,-16v0,-13,-13,-17,-26,-17v-24,0,-30,11,-30,19r-72,0v2,-53,57,-62,105,-62xm147,-84v-16,9,-59,7,-58,29v6,28,60,22,58,-12r0,-17","w":208},{"d":"59,-129v0,50,43,93,99,93v56,0,99,-43,99,-93v0,-50,-43,-92,-99,-92v-56,0,-99,42,-99,92xm10,-129v0,-75,66,-134,148,-134v82,0,148,59,148,134v0,75,-66,135,-148,135v-82,0,-148,-60,-148,-135xm191,-111r40,0v-6,39,-36,58,-70,58v-48,0,-80,-33,-80,-75v0,-83,137,-106,148,-20r-38,0v-11,-32,-72,-19,-67,19v-5,39,59,56,67,18","w":283},{"d":"158,-94v0,-20,-3,-46,-33,-46v-30,0,-34,26,-34,46v0,20,4,47,34,47v30,0,33,-27,33,-47xm237,-94v0,52,-35,99,-112,99v-77,0,-112,-47,-112,-99v0,-51,35,-98,112,-98v77,0,112,47,112,98xm46,-209r0,-47r67,0r0,47r-67,0xm136,-209r0,-47r67,0r0,47r-67,0","w":216},{"d":"102,-129v0,57,34,71,56,71v22,0,56,-14,56,-71v0,-57,-34,-70,-56,-70v-22,0,-56,13,-56,70xm14,-129v0,-78,58,-134,144,-134v86,0,143,56,143,134v0,78,-57,135,-143,135v-86,0,-144,-57,-144,-135xm78,-276r48,-53r65,0r48,53r-58,0r-23,-27r-22,27r-58,0","w":281},{"d":"158,-94v0,-20,-3,-46,-33,-46v-30,0,-34,26,-34,46v0,20,4,47,34,47v30,0,33,-27,33,-47xm237,-94v0,52,-35,99,-112,99v-77,0,-112,-47,-112,-99v0,-51,35,-98,112,-98v77,0,112,47,112,98xm157,-209v-29,0,-67,-31,-78,2r-31,0v0,-21,9,-51,44,-51v31,0,66,37,78,-1r32,0v-1,27,-16,50,-45,50","w":216},{"d":"-3,0r104,-257r85,0r103,257r-90,0r-12,-37r-90,0r-13,37r-87,0xm116,-92r54,0r-27,-79xm65,-279r0,-47r67,0r0,47r-67,0xm155,-279r0,-47r67,0r0,47r-67,0","w":252,"k":{"y":6,"\\u00fd":6,"\\u00ff":6,"V":11,"v":6,"T":24,"W":13,"Y":27,"\\u00dd":27,"w":6}},{"d":"134,0r0,-50r-122,0r0,-67r126,-134r79,0r0,140r37,0r0,61r-37,0r0,50r-83,0xm134,-181r-67,70r67,0r0,-70"},{"d":"-3,0r104,-257r85,0r103,257r-90,0r-12,-37r-90,0r-13,37r-87,0xm116,-92r54,0r-27,-79xm175,-279v-29,0,-67,-31,-77,3r-32,0v0,-21,10,-52,45,-52v31,0,65,36,78,-1r32,0v-1,27,-16,50,-46,50","w":252,"k":{"y":6,"\\u00fd":6,"\\u00ff":6,"V":11,"v":6,"T":24,"W":13,"Y":27,"\\u00dd":27,"w":6}},{"d":"23,0r0,-257r87,0r0,257r-87,0xm-12,-279r0,-47r67,0r0,47r-67,0xm78,-279r0,-47r67,0r0,47r-67,0","w":98},{"d":"15,60r0,-323r132,0r0,55r-61,0r0,213r61,0r0,55r-132,0","w":127},{"d":"175,-125v-1,-52,-84,-52,-84,0v0,51,83,51,84,0xm209,-28r-23,-22v-22,20,-84,20,-107,1r-24,21r-29,-27r23,-21v-18,-19,-19,-80,0,-98r-23,-20r31,-28r22,20v19,-17,88,-18,107,0r23,-20r30,27r-23,21v21,19,22,78,0,98r23,21"},{"d":"23,0r0,-257r89,0r83,137r0,-137r83,0r0,257r-85,0r-88,-140r0,140r-82,0xm184,-279v-30,0,-68,-31,-78,3r-31,0v0,-21,9,-52,44,-52v31,0,65,36,78,-1r33,0v-1,27,-16,50,-46,50","w":267},{"d":"384,-257r-79,257r-85,0r-31,-157r-30,157r-85,0r-77,-257r86,0r35,159r34,-159r77,0r34,161r35,-161r86,0","w":347,"k":{"A":20,"\\u00c0":20,"\\u00c1":20,"\\u00c2":20,"\\u00c3":20,"\\u00c4":20,"\\u00c5":20,"\\u00c6":20,".":27,"a":13,"\\u00e0":13,"\\u00e1":13,"\\u00e2":13,"\\u00e3":13,"\\u00e4":13,"\\u00e5":13,"\\u00e6":13,"e":13,"\\u00e8":13,"\\u00e9":13,"\\u00ea":13,"\\u00eb":13,"o":13,"\\u00f2":13,"\\u00f3":13,"\\u00f4":13,"\\u00f5":13,"\\u00f6":13,"\\u00f8":13,"r":6,"u":6,"\\u00f9":6,"\\u00fa":6,"\\u00fb":6,"\\u00fc":6,":":6,",":27,";":6}},{"d":"110,-191r0,35r53,0r0,44r-53,0r0,46r34,0v54,0,62,-40,62,-64v0,-16,-5,-61,-68,-61r-28,0xm23,0r0,-112r-23,0r0,-44r23,0r0,-101r143,0v94,0,127,63,127,128v0,79,-46,129,-144,129r-126,0","w":274},{"d":"124,-192v138,0,98,59,98,150v0,14,0,30,9,42r-80,0v-3,-5,-1,-15,-3,-18v-38,39,-139,31,-139,-34v0,-59,76,-57,116,-64v10,-2,22,-4,22,-16v0,-13,-13,-17,-26,-17v-24,0,-30,11,-30,19r-72,0v2,-53,57,-62,105,-62xm147,-84v-16,9,-59,7,-58,29v6,28,60,22,58,-12r0,-17xm121,-206r-68,-54r82,0r40,54r-54,0","w":208},{"d":"0,73r9,-16v17,7,49,15,54,-6v0,-14,-21,-16,-32,-9r-10,-9r22,-33r23,0v-4,8,-14,16,-15,23v24,-6,58,2,56,30v-2,36,-75,38,-107,20","w":76},{"d":"102,-129v0,57,34,71,56,71v22,0,56,-14,56,-71v0,-57,-34,-70,-56,-70v-22,0,-56,13,-56,70xm14,-129v0,-78,58,-134,144,-134v86,0,143,56,143,134v0,78,-57,135,-143,135v-86,0,-144,-57,-144,-135xm137,-276r-68,-53r82,0r40,53r-54,0","w":281},{"d":"23,0r0,-257r87,0r0,257r-87,0xm55,-276r-67,-53r82,0r40,53r-55,0","w":98},{"d":"0,45r0,-18r198,0r0,18r-198,0","w":164},{"d":"77,-222v-28,2,-26,54,0,56v27,-2,28,-54,0,-56xm4,-195v0,-31,23,-58,73,-58v50,0,73,27,73,58v0,32,-23,60,-73,60v-50,0,-73,-28,-73,-60","w":116},{"d":"92,-189v-11,7,-36,2,-37,18v11,21,44,9,37,-18xm141,-210v0,23,-4,59,6,72r-52,0v-1,-4,-2,-7,-2,-11v-23,24,-89,18,-89,-21v0,-36,44,-33,74,-38v8,-1,14,-3,14,-10v-1,-15,-36,-12,-35,2r-48,0v1,-32,37,-37,69,-37v27,0,63,7,63,43","w":111},{"d":"23,0r0,-257r87,0r0,257r-87,0xm145,-329r-68,53r-54,0r39,-53r83,0","w":98},{"d":"-3,0r104,-257r85,0r103,257r-90,0r-12,-37r-90,0r-13,37r-87,0xm116,-92r54,0r-27,-79xm125,-276r-68,-53r83,0r39,53r-54,0","w":252,"k":{"y":6,"\\u00fd":6,"\\u00ff":6,"V":11,"v":6,"T":24,"W":13,"Y":27,"\\u00dd":27,"w":6}},{"d":"124,-192v138,0,98,59,98,150v0,14,0,30,9,42r-80,0v-3,-5,-1,-15,-3,-18v-38,39,-139,31,-139,-34v0,-59,76,-57,116,-64v10,-2,22,-4,22,-16v0,-13,-13,-17,-26,-17v-24,0,-30,11,-30,19r-72,0v2,-53,57,-62,105,-62xm147,-84v-16,9,-59,7,-58,29v6,28,60,22,58,-12r0,-17xm213,-260r-68,54r-54,0r40,-54r82,0","w":208},{"d":"235,-187r0,187r-76,0r0,-24v-31,46,-138,39,-138,-35r0,-128r79,0r0,98v0,22,3,37,26,37v14,0,31,-6,31,-36r0,-99r78,0xm100,-206r-67,-54r82,0r40,54r-55,0","w":223},{"d":"178,-280r30,27r-39,19v40,33,68,74,68,127v0,50,-23,112,-113,112v-72,0,-111,-35,-111,-94v0,-88,72,-96,132,-85v-9,-12,-24,-26,-35,-32r-39,20r-29,-29r32,-15v-3,-4,-14,-11,-23,-16r57,-30v11,7,19,14,27,17xm124,-47v23,0,34,-16,34,-44v0,-28,-11,-41,-34,-41v-22,0,-33,13,-33,41v0,28,11,44,33,44","w":216},{"d":"126,39r0,-34v-62,0,-104,-42,-104,-100v0,-54,42,-97,104,-97r0,-28r20,0r0,28v59,0,87,28,93,76r-72,0v-1,-14,-9,-20,-21,-23r0,90v13,-6,22,-13,23,-26r72,0v-6,47,-46,80,-95,80r0,34r-20,0xm126,-49r0,-90v-40,6,-41,82,0,90"},{"d":"21,0r0,-187r76,0v1,7,-2,18,1,24v30,-46,137,-40,137,35r0,128r-78,0r0,-98v0,-22,-3,-37,-26,-37v-14,0,-31,6,-31,36r0,99r-79,0xm159,-209v-28,0,-67,-31,-77,2r-32,0v0,-21,10,-51,45,-51v31,0,65,37,78,-1r32,0v-1,27,-16,50,-46,50","w":223},{"d":"135,-171r0,31v21,-1,54,7,51,-17v-2,-19,-31,-13,-51,-14xm100,-60r0,-137v53,1,124,-9,124,43v0,26,-17,36,-39,37r33,57r-38,0r-30,-54r-15,0r0,54r-35,0xm59,-129v0,50,43,93,99,93v56,0,99,-43,99,-93v0,-50,-43,-92,-99,-92v-56,0,-99,42,-99,92xm10,-129v0,-75,66,-134,148,-134v82,0,148,59,148,134v0,75,-66,135,-148,135v-82,0,-148,-60,-148,-135","w":283},{"d":"95,63r0,-194v-57,0,-88,-23,-88,-62v1,-92,135,-57,222,-64r0,320r-54,0r0,-283r-26,0r0,283r-54,0","w":212},{"d":"257,-23v-48,63,-143,-10,-203,29r-31,-40v25,-16,53,-34,41,-69r-46,0r0,-45r28,0v-32,-54,2,-115,93,-115v66,0,103,30,106,89r-76,0v-1,-15,-9,-32,-27,-32v-42,0,-22,39,-11,58r43,0r0,45r-29,0v6,17,-10,37,-21,46v35,-12,88,26,101,-17"},{"d":"133,5v-74,-9,-120,-63,-119,-134v0,-81,57,-134,144,-134v78,0,119,37,127,102r-84,0v-2,-9,-10,-38,-46,-38v-41,0,-53,35,-53,70v0,35,12,71,53,71v30,0,40,-19,46,-43r86,0v0,53,-48,109,-133,107v-3,6,-11,12,-10,17v23,-6,58,1,56,30v-3,36,-75,38,-106,20r8,-16v17,7,50,15,55,-6v-1,-13,-22,-17,-33,-9r-10,-9","w":267},{"d":"60,-158v-4,29,52,37,52,8v0,-18,-21,-15,-38,-15r0,-28v16,0,37,0,38,-12v0,-10,-8,-15,-22,-15v-14,0,-24,9,-24,19r-49,0v0,-36,36,-52,73,-52v44,0,72,16,72,42v0,23,-18,28,-23,30v17,5,27,15,27,38v0,22,-20,44,-77,44v-57,0,-77,-25,-77,-59r48,0xm111,9r154,-269r44,0r-155,269r-43,0xm262,-67r44,0r0,-42xm306,0r0,-30r-79,0r0,-41r82,-78r51,0r0,82r24,0r0,37r-24,0r0,30r-54,0","w":362},{"d":"5,-188v-2,-44,29,-65,76,-65v46,0,74,14,74,47v0,49,-79,59,-79,67r81,0r0,37r-156,0v-3,-42,42,-58,77,-77v22,-5,34,-41,3,-41v-21,0,-28,17,-28,32r-48,0","w":124},{"d":"158,-94v0,-20,-3,-46,-33,-46v-30,0,-34,26,-34,46v0,20,4,47,34,47v30,0,33,-27,33,-47xm237,-94v0,52,-35,99,-112,99v-77,0,-112,-47,-112,-99v0,-51,35,-98,112,-98v77,0,112,47,112,98xm102,-206r-67,-54r82,0r40,54r-55,0","w":216},{"d":"21,0r0,-187r76,0v1,7,-2,18,1,24v30,-46,137,-40,137,35r0,128r-78,0r0,-98v0,-22,-3,-37,-26,-37v-14,0,-31,6,-31,36r0,99r-79,0","w":223},{"w":98},{"d":"19,-85v0,-24,21,-44,47,-44v26,0,48,20,48,44v0,24,-22,43,-48,43v-26,0,-47,-19,-47,-43","w":98},{"d":"124,-192v138,0,98,59,98,150v0,14,0,30,9,42r-80,0v-3,-5,-1,-15,-3,-18v-38,39,-139,31,-139,-34v0,-59,76,-57,116,-64v10,-2,22,-4,22,-16v0,-13,-13,-17,-26,-17v-24,0,-30,11,-30,19r-72,0v2,-53,57,-62,105,-62xm147,-84v-16,9,-59,7,-58,29v6,28,60,22,58,-12r0,-17xm47,-209r0,-47r67,0r0,47r-67,0xm137,-209r0,-47r67,0r0,47r-67,0","w":208},{"d":"102,-129v0,57,34,71,56,71v22,0,56,-14,56,-71v0,-57,-34,-70,-56,-70v-22,0,-56,13,-56,70xm14,-129v0,-78,58,-134,144,-134v86,0,143,56,143,134v0,78,-57,135,-143,135v-86,0,-144,-57,-144,-135xm79,-279r0,-47r68,0r0,47r-68,0xm169,-279r0,-47r68,0r0,47r-68,0","w":281},{"d":"95,-174r64,47r0,63r-64,47r0,-57r31,-21r-31,-22r0,-57xm17,-174r64,47r0,63r-64,47r0,-57r31,-21r-31,-22r0,-57","w":142},{"d":"23,0r0,-257r87,0r0,257r-87,0xm-14,-276r48,-53r65,0r48,53r-58,0r-22,-27r-23,27r-58,0","w":98},{"d":"102,0r-79,0r0,-187r79,0r0,187xm145,-260r-68,54r-54,0r39,-54r83,0","w":91},{"d":"53,-158v-4,30,52,37,52,8v0,-18,-22,-15,-39,-15r0,-28v16,0,38,0,39,-12v0,-10,-9,-15,-23,-15v-14,0,-24,9,-24,19r-49,0v0,-36,36,-52,73,-52v44,0,72,16,72,42v0,23,-18,28,-23,30v17,5,28,15,28,38v0,22,-21,44,-78,44v-58,0,-77,-25,-77,-59r49,0","w":124},{"d":"102,0r-79,0r0,-187r79,0r0,187xm-15,-209r0,-47r67,0r0,47r-67,0xm75,-209r0,-47r67,0r0,47r-67,0","w":91},{"d":"58,-263r111,269r-60,0r-111,-269r60,0","w":135},{"d":"103,-257v4,66,-11,112,-21,164r-39,0v-10,-52,-26,-98,-22,-164r82,0xm21,0r0,-71r82,0r0,71r-82,0","w":91},{"d":"238,-77r-151,0v-2,37,53,47,74,23r73,0v-16,40,-60,59,-106,59v-66,0,-115,-36,-115,-98v0,-54,42,-99,108,-99v81,0,117,42,117,115xm88,-114r75,0v0,-17,-14,-32,-35,-32v-24,0,-36,12,-40,32xm214,-260r-68,54r-54,0r39,-54r83,0","w":216},{"d":"14,-148r0,-90r61,0r0,90r-61,0xm14,32r0,-90r61,0r0,90r-61,0","w":54},{"d":"173,-184v-5,-10,-16,-18,-33,-18v-30,0,-45,27,-48,52v54,-44,156,-14,156,60v0,62,-48,93,-113,93v-84,0,-118,-57,-118,-119v0,-79,39,-137,124,-137v60,0,95,20,104,69r-72,0xm135,-122v-22,0,-38,14,-38,33v0,20,16,35,38,35v24,0,40,-16,40,-35v0,-18,-15,-33,-40,-33"},{"d":"211,-197r14,12r-19,20v62,60,30,173,-81,170v-27,0,-49,-5,-66,-15r-22,23r-14,-12r21,-22v-62,-61,-31,-174,81,-171v27,0,50,6,67,16xm94,-73r54,-57v-5,-6,-12,-10,-23,-10v-38,2,-37,39,-31,67xm157,-113r-55,57v5,6,13,9,23,9v37,-3,34,-36,32,-66","w":216},{"d":"119,-53v22,0,40,16,40,36v0,20,-18,37,-40,37v-22,0,-40,-17,-40,-37v0,-20,18,-36,40,-36xm119,-129v-22,0,-40,-16,-40,-36v0,-20,18,-37,40,-37v22,0,40,17,40,37v0,20,-18,36,-40,36xm19,-63r0,-55r200,0r0,55r-200,0","w":204},{"d":"279,-257r0,158v0,72,-42,105,-129,105v-87,0,-129,-33,-129,-105r0,-158r87,0r0,140v0,26,0,59,43,59v41,0,41,-33,41,-59r0,-140r87,0xm72,-279r0,-47r67,0r0,47r-67,0xm162,-279r0,-47r67,0r0,47r-67,0","w":267},{"d":"14,4v21,-2,50,7,49,-16v-16,-52,-49,-123,-69,-175r84,0r34,107r33,-107r81,0r-68,173v-6,17,-13,37,-26,51v-29,30,-70,21,-118,23r0,-56xm33,-209r0,-47r67,0r0,47r-67,0xm123,-209r0,-47r67,0r0,47r-67,0","w":186},{"d":"279,-257r0,158v0,72,-42,105,-129,105v-87,0,-129,-33,-129,-105r0,-158r87,0r0,140v0,26,0,59,43,59v41,0,41,-33,41,-59r0,-140r87,0xm243,-329r-68,53r-53,0r39,-53r82,0","w":267},{"d":"283,-268r18,14r-35,34v77,81,19,226,-108,226v-36,0,-66,-10,-90,-27r-34,34r-18,-15r34,-34v-78,-82,-21,-227,108,-227v36,0,67,10,91,28xm209,-162r-89,89v42,31,89,20,94,-56v0,-13,-2,-23,-5,-33xm107,-93r90,-90v-41,-32,-90,-22,-95,54v0,14,1,26,5,36","w":281},{"d":"14,4v21,-2,50,7,49,-16v-16,-52,-49,-123,-69,-175r84,0r34,107r33,-107r81,0r-68,173v-6,17,-13,37,-26,51v-29,30,-70,21,-118,23r0,-56xm207,-260r-68,54r-54,0r39,-54r83,0","w":186},{"d":"124,-192v138,0,98,59,98,150v0,14,0,30,9,42r-80,0v-3,-5,-1,-15,-3,-18v-38,39,-139,31,-139,-34v0,-59,76,-57,116,-64v10,-2,22,-4,22,-16v0,-13,-13,-17,-26,-17v-24,0,-30,11,-30,19r-72,0v2,-53,57,-62,105,-62xm147,-84v-16,9,-59,7,-58,29v6,28,60,22,58,-12r0,-17xm102,-240v0,12,8,19,20,19v12,0,21,-8,21,-19v0,-11,-9,-18,-21,-18v-12,0,-20,6,-20,18xm78,-240v0,-23,19,-40,44,-40v25,0,45,17,45,40v0,23,-20,40,-45,40v-25,0,-44,-17,-44,-40","w":208},{"d":"264,-257r-89,257r-97,0r-85,-257r88,0r47,156r46,-156r90,0","w":223,"k":{";":18,":":18,",":46,"A":20,"\\u00c0":20,"\\u00c1":20,"\\u00c2":20,"\\u00c3":20,"\\u00c4":20,"\\u00c5":20,"\\u00c6":20,".":38,"a":20,"\\u00e0":20,"\\u00e1":20,"\\u00e2":20,"\\u00e3":20,"\\u00e4":20,"\\u00e5":20,"\\u00e6":20,"e":20,"\\u00e8":20,"\\u00e9":20,"\\u00ea":20,"\\u00eb":20,"-":20,"\\u00ad":20,"i":6,"\\u00ec":6,"\\u00ed":6,"\\u00ee":6,"\\u00ef":6,"o":20,"\\u00f2":20,"\\u00f3":20,"\\u00f4":20,"\\u00f5":20,"\\u00f6":20,"\\u00f8":20,"r":13,"u":13,"\\u00f9":13,"\\u00fa":13,"\\u00fb":13,"\\u00fc":13,"y":6,"\\u00fd":6,"\\u00ff":6}},{"d":"235,-187r0,187r-76,0r0,-24v-31,46,-138,39,-138,-35r0,-128r79,0r0,98v0,22,3,37,26,37v14,0,31,-6,31,-36r0,-99r78,0xm50,-209r0,-47r68,0r0,47r-68,0xm140,-209r0,-47r67,0r0,47r-67,0","w":223},{"d":"66,60r-69,0v49,-102,48,-219,0,-323r69,0v55,103,57,222,0,323","w":91},{"d":"102,-129v0,57,34,71,56,71v22,0,56,-14,56,-71v0,-57,-34,-70,-56,-70v-22,0,-56,13,-56,70xm14,-129v0,-78,58,-134,144,-134v86,0,143,56,143,134v0,78,-57,135,-143,135v-86,0,-144,-57,-144,-135xm245,-329r-68,53r-54,0r39,-53r83,0","w":281},{"d":"21,60r0,-247r76,0v1,6,-2,16,1,21v9,-12,22,-26,60,-26v58,0,86,52,86,99v0,44,-18,98,-87,98v-24,0,-45,-10,-57,-26r0,81r-79,0xm131,-140v-48,1,-48,92,0,93v50,-1,48,-92,0,-93","w":223},{"d":"19,0r0,-55r200,0r0,55r-200,0xm19,-98r0,-55r70,0r0,-29r60,0r0,29r70,0r0,55r-70,0r0,30r-60,0r0,-30r-70,0","w":204},{"d":"369,-77r-148,0v-5,37,51,46,69,23r74,0v-14,60,-140,79,-181,34v-32,24,-74,25,-98,25v-36,0,-72,-13,-72,-58v0,-58,76,-56,116,-63v14,-2,25,-6,25,-16v-2,-27,-58,-21,-59,2r-73,0v8,-75,122,-76,175,-41v16,-14,38,-21,65,-21v78,0,110,56,107,115xm154,-85v-14,11,-62,5,-61,32v17,31,72,12,61,-32xm221,-114r70,0v0,-19,-13,-32,-35,-32v-27,0,-35,19,-35,32","w":347},{"d":"238,-77r-151,0v-2,37,53,47,74,23r73,0v-16,40,-60,59,-106,59v-66,0,-115,-36,-115,-98v0,-54,42,-99,108,-99v81,0,117,42,117,115xm88,-114r75,0v0,-17,-14,-32,-35,-32v-24,0,-36,12,-40,32xm46,-206r48,-54r65,0r48,54r-58,0r-22,-27r-23,27r-58,0","w":216},{"d":"233,0r-3,-26v-19,23,-50,32,-81,32v-84,0,-135,-59,-135,-132v-2,-174,246,-178,270,-41r-83,0v-3,-19,-21,-32,-42,-32v-60,0,-57,57,-57,75v0,24,10,66,63,66v20,0,41,-9,45,-28r-38,0r0,-55r116,0r0,141r-55,0","w":274},{"d":"23,0r0,-257r87,0r0,89r81,0r0,-89r87,0r0,257r-87,0r0,-102r-81,0r0,102r-87,0","w":267},{"d":"-12,-216r0,-33r134,0r0,33r-134,0","w":76},{"d":"102,0r-79,0r0,-187r79,0r0,187xm47,-206r-68,-54r82,0r40,54r-54,0","w":91},{"d":"285,-161r-84,0v-2,-9,-10,-38,-46,-38v-41,0,-53,35,-53,70v0,35,12,71,53,71v30,0,40,-19,46,-43r86,0v0,52,-46,107,-129,107v-91,0,-144,-59,-144,-135v0,-81,57,-134,144,-134v78,0,119,37,127,102","w":267},{"d":"23,0r0,-257r87,0r0,191r125,0r0,66r-212,0","w":216,"k":{"y":13,"\\u00fd":13,"\\u00ff":13,"V":33,"T":46,"W":20,"Y":40,"\\u00dd":40}},{"d":"238,-77r-151,0v-2,37,53,47,74,23r73,0v-16,40,-60,59,-106,59v-66,0,-115,-36,-115,-98v0,-54,42,-99,108,-99v81,0,117,42,117,115xm88,-114r75,0v0,-17,-14,-32,-35,-32v-24,0,-36,12,-40,32xm48,-209r0,-47r67,0r0,47r-67,0xm138,-209r0,-47r67,0r0,47r-67,0","w":216},{"d":"94,3v6,8,15,20,28,20v30,-3,34,-35,30,-60v-13,17,-32,26,-56,26v-60,0,-87,-41,-87,-91v0,-49,30,-90,89,-90v24,-1,44,11,55,28r0,-23r78,0r0,163v0,37,-11,89,-107,89v-49,0,-99,-12,-107,-62r77,0xm87,-103v0,21,7,46,35,46v48,-2,43,-83,-2,-83v-22,0,-33,17,-33,37","w":216},{"d":"102,-129v0,57,34,71,56,71v22,0,56,-14,56,-71v0,-57,-34,-70,-56,-70v-22,0,-56,13,-56,70xm14,-129v0,-78,58,-134,144,-134v86,0,143,56,143,134v0,78,-57,135,-143,135v-86,0,-144,-57,-144,-135xm190,-279v-30,0,-67,-31,-78,3r-31,0v0,-21,10,-52,45,-52v30,0,66,37,77,-1r33,0v-1,27,-17,50,-46,50","w":281},{"d":"235,-187r0,187r-76,0r0,-24v-31,46,-138,39,-138,-35r0,-128r79,0r0,98v0,22,3,37,26,37v14,0,31,-6,31,-36r0,-99r78,0xm48,-206r47,-54r66,0r48,54r-59,0r-22,-27r-22,27r-58,0","w":223},{"d":"110,-191r0,52v34,-2,80,10,80,-27v0,-36,-47,-22,-80,-25xm23,0r0,-257r145,0v77,0,104,52,104,88v1,80,-74,97,-162,91r0,78r-87,0","w":245,"k":{",":46,"A":27,"\\u00c0":27,"\\u00c1":27,"\\u00c2":27,"\\u00c3":27,"\\u00c4":27,"\\u00c5":27,"\\u00c6":27,".":46}},{"d":"23,0r0,-168v0,-59,37,-95,104,-95v64,0,102,30,102,69v0,37,-26,46,-33,53v4,0,49,9,49,63v0,61,-61,90,-128,78r0,-55v26,7,50,-6,50,-30v0,-28,-24,-34,-50,-34r0,-40v20,0,40,-2,40,-24v0,-15,-10,-23,-27,-23v-22,0,-28,14,-28,32r0,174r-79,0","w":223},{"d":"116,-244r0,57r42,0r0,44r-42,0v5,40,-21,104,42,89r0,54v-56,0,-121,18,-121,-54r0,-89r-34,0r0,-44r34,0r0,-57r79,0","w":127},{"d":"48,0r10,-67r-34,0r7,-42r33,0r6,-34r-34,0r6,-42r34,0r10,-66r53,0r-10,66r28,0r10,-66r52,0r-9,66r30,0r-6,42r-31,0r-5,34r31,0r-7,42r-30,0r-11,67r-52,0r10,-67r-28,0r-11,67r-52,0xm150,-143r-28,0r-5,34r28,0"},{"d":"42,-206r-68,-54r82,0r40,54r-54,0","w":76},{"d":"124,-192v138,0,98,59,98,150v0,14,0,30,9,42r-80,0v-3,-5,-1,-15,-3,-18v-38,39,-139,31,-139,-34v0,-59,76,-57,116,-64v10,-2,22,-4,22,-16v0,-13,-13,-17,-26,-17v-24,0,-30,11,-30,19r-72,0v2,-53,57,-62,105,-62xm147,-84v-16,9,-59,7,-58,29v6,28,60,22,58,-12r0,-17xm46,-206r48,-54r64,0r49,54r-58,0r-23,-27r-22,27r-58,0","w":208},{"d":"231,-75v-7,49,-47,79,-104,80v-3,6,-12,12,-12,18v24,-6,58,1,56,30v-2,36,-75,37,-106,20r8,-16v16,7,51,15,55,-6v-1,-14,-22,-16,-33,-9r-10,-9r20,-30v-55,-6,-89,-43,-92,-96v-7,-115,205,-138,216,-23r-75,0v-2,-15,-12,-24,-28,-24v-30,0,-35,24,-35,47v0,23,5,46,35,46v17,0,29,-13,30,-28r75,0","w":208},{"d":"279,-257r0,158v0,72,-42,105,-129,105v-87,0,-129,-33,-129,-105r0,-158r87,0r0,140v0,26,0,59,43,59v41,0,41,-33,41,-59r0,-140r87,0xm126,-276r-67,-53r82,0r40,53r-55,0","w":267},{"d":"219,-75r0,55r-200,0r0,-55r200,0xm219,-162r0,55r-200,0r0,-55r200,0","w":204},{"d":"63,-1r-43,-39r56,-51r-56,-51r43,-39r56,51r56,-51r42,39r-55,51r55,51r-43,39r-55,-51","w":204},{"d":"158,-94v0,-20,-3,-46,-33,-46v-30,0,-34,26,-34,46v0,20,4,47,34,47v30,0,33,-27,33,-47xm237,-94v0,52,-35,99,-112,99v-77,0,-112,-47,-112,-99v0,-51,35,-98,112,-98v77,0,112,47,112,98xm45,-206r48,-54r65,0r48,54r-58,0r-23,-27r-22,27r-58,0","w":216},{"w":98},{"d":"23,0r0,-257r234,0r0,66r-147,0r0,32r133,0r0,61r-133,0r0,32r151,0r0,66r-238,0","w":245},{"d":"25,0r0,-71r82,0v5,75,-2,138,-82,136r0,-31v19,-1,34,-17,35,-34r-35,0","w":98},{"d":"23,0r0,-257r89,0r83,137r0,-137r83,0r0,257r-85,0r-88,-140r0,140r-82,0","w":267},{"d":"89,-95v-2,28,17,41,43,41v23,0,37,-7,37,-28v1,-30,-38,-27,-60,-24r0,-49v23,1,61,6,61,-21v0,-34,-79,-28,-74,9r-75,0v2,-60,53,-87,115,-86v81,0,107,42,107,64v0,53,-37,53,-37,54v0,3,45,3,45,59v0,30,-25,79,-115,79v-124,0,-124,-79,-123,-98r76,0"},{"d":"23,0r0,-257r87,0r0,257r-87,0","w":98},{"d":"114,-257r0,47r48,-15r15,38r-51,15r32,37r-36,26r-31,-41r-32,41r-35,-26r33,-37r-50,-15r14,-38r50,15r0,-47r43,0","w":149},{"d":"69,-102r0,-84r-42,0r0,-31v24,0,51,-8,53,-34r43,0r0,149r-54,0xm217,-87v-1,-43,30,-65,76,-65v46,0,74,14,74,47v0,49,-79,60,-79,68r81,0r0,37r-155,0v-3,-42,41,-59,76,-78v24,-5,33,-40,3,-40v-21,0,-27,16,-27,31r-49,0xm81,9r154,-269r43,0r-154,269r-43,0","w":362},{"d":"110,-196r0,39v29,-3,76,11,75,-21v0,-26,-48,-16,-75,-18xm23,0r0,-257r154,0v75,0,91,38,91,64v0,26,-14,41,-35,51v25,8,49,26,49,64v0,105,-153,74,-259,78xm110,-109r0,48v34,-3,83,12,85,-25v1,-33,-53,-21,-85,-23","w":259},{"d":"92,-177v1,37,81,36,81,0v0,-24,-20,-29,-41,-29v-21,0,-40,6,-40,29xm22,-185v0,-55,65,-68,110,-68v76,0,111,32,111,68v1,27,-18,47,-42,54v30,3,54,24,54,55v0,59,-67,79,-123,79v-59,0,-123,-18,-123,-79v-1,-43,37,-50,55,-56v-30,-7,-42,-26,-42,-53xm88,-77v0,39,88,39,88,0v0,-24,-20,-32,-43,-32v-23,0,-45,7,-45,32"},{"d":"23,0r0,-257r218,0r0,66r-131,0r0,32r112,0r0,61r-112,0r0,98r-87,0","w":216,"k":{",":46}},{"d":"25,0r0,-71r82,0r0,71r-82,0xm25,-116r0,-71r82,0r0,71r-82,0","w":98},{"d":"67,0r0,-71r83,0r0,71r-83,0xm89,-171r-83,0v3,-45,32,-92,110,-92v77,0,105,42,105,74v0,44,-28,52,-54,64v-18,9,-22,16,-22,33r-73,0v-1,-29,1,-48,28,-64v12,-7,37,-12,37,-28v0,-12,-8,-18,-23,-18v-19,0,-26,15,-25,31","w":193},{"d":"28,-121r0,-136r61,0r0,136r-61,0","w":83},{"d":"19,-63r0,-55r70,0r0,-64r60,0r0,64r70,0r0,55r-70,0r0,63r-60,0r0,-63r-70,0","w":204},{"d":"102,-129v0,57,34,71,56,71v22,0,56,-14,56,-71v0,-57,-34,-70,-56,-70v-22,0,-56,13,-56,70xm14,-129v0,-78,58,-134,144,-134v86,0,143,56,143,134v0,78,-57,135,-143,135v-86,0,-144,-57,-144,-135","w":281},{"d":"102,-257r0,50r-79,0r0,-50r79,0xm102,-13v7,71,-46,77,-114,73r0,-56v21,1,35,1,35,-23r0,-168r79,0r0,174","w":91},{"d":"102,0r-79,0r0,-187r79,0r0,187xm-18,-206r48,-54r65,0r48,54r-58,0r-22,-27r-23,27r-58,0","w":91},{"d":"220,-257r0,164v0,71,-35,99,-106,99v-81,0,-109,-41,-104,-114r78,0v1,26,-4,53,24,53v22,0,21,-24,21,-36r0,-166r87,0","w":208},{"d":"91,-66v2,11,19,17,32,17v35,0,47,-32,48,-51v-53,43,-155,15,-155,-60v0,-60,54,-93,116,-93v81,0,116,56,116,119v0,80,-41,137,-125,137v-51,0,-96,-20,-104,-69r72,0xm130,-197v-21,0,-41,15,-41,35v0,19,19,34,40,34v21,0,39,-14,39,-34v0,-20,-16,-35,-38,-35"},{"d":"302,-7r-40,35r-37,-36v-95,43,-211,-19,-211,-121v0,-78,58,-134,144,-134v126,0,184,140,110,224xm145,-82r40,-34r23,22v3,-9,6,-22,6,-35v0,-57,-34,-70,-56,-70v-22,0,-56,13,-56,70v0,62,33,74,67,70","w":281},{"d":"87,0r0,-95r-99,-162r96,0r47,95r50,-95r95,0r-101,162r0,95r-88,0","w":230,"k":{"A":27,"\\u00c0":27,"\\u00c1":27,"\\u00c2":27,"\\u00c3":27,"\\u00c4":27,"\\u00c5":27,"\\u00c6":27,".":40,"a":33,"\\u00e0":33,"\\u00e1":33,"\\u00e2":33,"\\u00e3":33,"\\u00e4":33,"\\u00e5":33,"\\u00e6":33,"e":33,"\\u00e8":33,"\\u00e9":33,"\\u00ea":33,"\\u00eb":33,"-":40,"\\u00ad":40,"i":5,"\\u00ec":5,"\\u00ed":5,"\\u00ee":5,"\\u00ef":5,"o":33,"\\u00f2":33,"\\u00f3":33,"\\u00f4":33,"\\u00f5":33,"\\u00f6":33,"\\u00f8":33,"u":27,"\\u00f9":27,"\\u00fa":27,"\\u00fb":27,"\\u00fc":27,"v":20,":":33,",":40,";":29,"p":27,"q":33}},{"d":"123,-102v-47,-12,-106,-25,-106,-77v0,-59,57,-84,106,-84r0,-29r21,0r0,29v55,0,104,25,104,84r-75,0v-2,-19,-9,-23,-29,-27r0,40v103,20,115,49,115,89v0,39,-31,83,-115,83r0,36r-21,0r0,-36v-84,0,-116,-45,-118,-92r85,0v0,13,3,33,33,35r0,-51xm144,-96r0,45v19,-1,33,-8,33,-22v0,-13,-12,-17,-33,-23xm123,-170r0,-36v-14,0,-28,2,-28,16v0,10,9,17,28,20"},{"d":"87,0r0,-95r-99,-162r96,0r47,95r50,-95r95,0r-101,162r0,95r-88,0xm227,-329r-68,53r-54,0r39,-53r83,0","w":230,"k":{"A":27,"\\u00c0":27,"\\u00c1":27,"\\u00c2":27,"\\u00c3":27,"\\u00c4":27,"\\u00c5":27,"\\u00c6":27,".":40,"a":33,"\\u00e0":33,"\\u00e1":33,"\\u00e2":33,"\\u00e3":33,"\\u00e4":33,"\\u00e5":33,"\\u00e6":33,"e":33,"\\u00e8":33,"\\u00e9":33,"\\u00ea":33,"\\u00eb":33,"-":40,"\\u00ad":40,"i":5,"\\u00ec":5,"\\u00ed":5,"\\u00ee":5,"\\u00ef":5,"o":33,"\\u00f2":33,"\\u00f3":33,"\\u00f4":33,"\\u00f5":33,"\\u00f6":33,"\\u00f8":33,"u":27,"\\u00f9":27,"\\u00fa":27,"\\u00fb":27,"\\u00fc":27,"v":20,":":33,",":40,";":29,"p":27,"q":33}},{"d":"25,0r0,-257r87,0r1,89r77,-89r108,0r-103,100r119,157r-108,0r-70,-100r-24,24r0,76r-87,0","w":274},{"d":"19,3r0,-58r108,-36r-108,-36r0,-58r200,71r0,46","w":204},{"d":"238,-77r-151,0v-2,37,53,47,74,23r73,0v-16,40,-60,59,-106,59v-66,0,-115,-36,-115,-98v0,-54,42,-99,108,-99v81,0,117,42,117,115xm88,-114r75,0v0,-17,-14,-32,-35,-32v-24,0,-36,12,-40,32xm100,-206r-68,-54r83,0r39,54r-54,0","w":216},{"d":"279,-257r0,158v0,72,-42,105,-129,105v-87,0,-129,-33,-129,-105r0,-158r87,0r0,140v0,26,0,59,43,59v41,0,41,-33,41,-59r0,-140r87,0xm68,-276r48,-53r65,0r49,53r-59,0r-22,-27r-22,27r-59,0","w":267},{"d":"62,-102r0,-84r-42,0r0,-31v27,0,52,-10,54,-34r42,0r0,149r-54,0","w":124},{"d":"-23,-209r0,-47r67,0r0,47r-67,0xm67,-209r0,-47r67,0r0,47r-67,0","w":76},{"d":"31,-121r0,-136r60,0r0,136r-60,0xm115,-121r0,-136r60,0r0,136r-60,0","w":172},{"d":"19,-67r0,-59r124,0r0,59r-124,0","w":127},{"d":"219,-185r0,58r-108,36r108,36r0,58r-200,-71r0,-45","w":204},{"d":"219,-162r0,123r-61,0r0,-68r-139,0r0,-55r200,0","w":204},{"d":"22,0r0,-257r124,0r41,151r41,-151r124,0r0,257r-83,0r0,-165r-50,165r-65,0r-50,-165r0,165r-82,0","w":340},{"d":"14,77r0,-360r61,0r0,360r-61,0","w":54},{"d":"235,-187r0,187r-76,0r0,-24v-31,46,-138,39,-138,-35r0,-128r79,0r0,98v0,22,3,37,26,37v14,0,31,-6,31,-36r0,-99r78,0","w":223},{"d":"207,0r-16,-18v-60,48,-179,23,-177,-59v0,-34,32,-59,63,-73v-50,-44,-4,-113,62,-113v53,0,91,20,91,66v0,29,-25,54,-52,67r21,24v5,-6,10,-12,11,-19r65,0v-5,22,-14,45,-33,62r58,63r-93,0xm150,-66r-33,-37v-11,6,-27,15,-27,28v2,31,44,28,60,9xm143,-215v-29,1,-22,32,-3,44v21,-5,34,-42,3,-44","w":259},{"d":"104,-197r0,71r-83,0r0,-71r83,0xm21,60v-4,-67,12,-113,23,-165r38,0v10,52,26,98,22,165r-83,0","w":91},{"d":"94,-145r-75,0v-4,-69,43,-108,117,-108v67,0,113,25,113,78v1,65,-70,83,-121,114r125,0r0,61r-239,0v0,-75,65,-100,117,-130v14,-8,38,-18,38,-36v0,-23,-15,-31,-34,-31v-32,0,-42,21,-41,52"},{"d":"110,-196r0,51v35,-3,78,12,84,-25v5,-28,-50,-27,-84,-26xm202,0v-14,-36,7,-88,-46,-90r-46,0r0,90r-87,0r0,-257v103,7,258,-32,258,73v0,27,-14,55,-43,65v45,11,37,73,51,119r-87,0","w":259,"k":{"V":1,"T":6,"W":6,"Y":13,"\\u00dd":13}},{"d":"238,-251r0,59v-67,57,-84,133,-83,192r-88,0v-1,0,3,-80,56,-150v27,-35,34,-39,34,-39r-132,0r0,-62r213,0"},{"d":"59,-263r68,0v-48,114,-47,209,0,323r-68,0v-57,-104,-57,-219,0,-323","w":91},{"d":"159,-17r-64,-47r0,-63r64,-47r0,56r-31,23r31,21r0,57xm81,-17r-64,-47r0,-63r64,-47r0,56r-31,23r31,21r0,57","w":142},{"d":"85,-61v-1,24,50,31,57,7v0,-11,-7,-13,-43,-19v-60,-9,-84,-27,-84,-59v0,-47,56,-60,97,-60v44,0,97,12,99,60r-71,0v1,-22,-46,-30,-50,-6v10,22,45,13,78,25v27,9,49,21,49,52v0,52,-55,66,-105,66v-48,0,-101,-18,-102,-66r75,0","w":193},{"d":"23,0r0,-257r79,0r0,257r-79,0","w":91},{"d":"158,-94v0,-20,-3,-46,-33,-46v-30,0,-34,26,-34,46v0,20,4,47,34,47v30,0,33,-27,33,-47xm237,-94v0,52,-35,99,-112,99v-77,0,-112,-47,-112,-99v0,-51,35,-98,112,-98v77,0,112,47,112,98xm215,-260r-68,54r-54,0r39,-54r83,0","w":216},{"d":"23,0r0,-257r234,0r0,66r-147,0r0,32r133,0r0,61r-133,0r0,32r151,0r0,66r-238,0xm133,-276r-67,-53r82,0r39,53r-54,0","w":245},{"d":"21,60r0,-317r79,0r0,91v12,-16,33,-26,57,-26v69,0,87,54,87,98v0,46,-18,99,-87,99v-24,0,-45,-10,-57,-26r0,81r-79,0xm131,-140v-48,1,-48,92,0,93v50,-1,48,-92,0,-93","w":223},{"d":"15,-125v0,-96,68,-128,117,-128v50,0,117,32,117,128v0,96,-67,128,-117,128v-50,0,-117,-32,-117,-128xm90,-125v0,26,2,73,42,73v40,0,42,-46,42,-73v0,-26,-1,-73,-41,-73v-41,0,-43,46,-43,73"},{"d":"51,-200v0,15,13,26,28,26v15,0,28,-11,28,-26v0,-15,-13,-25,-28,-25v-15,0,-28,10,-28,25xm20,-200v0,-31,25,-53,59,-53v34,0,59,22,59,53v0,31,-25,54,-59,54v-34,0,-59,-23,-59,-54","w":124},{"d":"0,6r111,-269r60,0r-111,269r-60,0","w":135},{"d":"-5,0r103,-137r-94,-120r103,0r42,70r42,-70r97,0r-91,121r101,136r-105,0r-48,-77r-50,77r-100,0","w":259},{"d":"111,0r0,-144r-65,0r0,-52v40,1,80,-14,82,-55r65,0r0,251r-82,0"},{"d":"26,-119r69,-132r48,0r69,132r-61,0r-32,-68r-33,68r-60,0","w":204},{"d":"21,0r0,-187r75,0v2,9,-3,25,2,30v15,-29,42,-41,80,-32r0,63v-39,-11,-78,-2,-78,52r0,74r-79,0","w":142,"k":{".":33,"e":6,"\\u00e8":6,"\\u00e9":6,"\\u00ea":6,"\\u00eb":6,"-":20,"\\u00ad":20,"o":6,"\\u00f2":6,"\\u00f3":6,"\\u00f4":6,"\\u00f5":6,"\\u00f6":6,"\\u00f8":6,"y":-4,"\\u00fd":-4,"\\u00ff":-4,"v":-4,",":33,"q":6,"w":-4,"c":6,"\\u00e7":6,"d":6,"n":-6,"\\u00f1":-6}},{"d":"102,-257r0,50r-79,0r0,-50r79,0xm23,0r0,-187r79,0r0,187r-79,0","w":91},{"d":"-3,0r104,-257r85,0r103,257r-90,0r-12,-37r-90,0r-13,37r-87,0xm116,-92r54,0r-27,-79xm229,-329r-68,53r-54,0r39,-53r83,0","w":252,"k":{"y":6,"\\u00fd":6,"\\u00ff":6,"V":11,"v":6,"T":24,"W":13,"Y":27,"\\u00dd":27,"w":6}},{"d":"136,-260r-68,54r-54,0r39,-54r83,0","w":76},{"d":"279,-257r0,158v0,72,-42,105,-129,105v-87,0,-129,-33,-129,-105r0,-158r87,0r0,140v0,26,0,59,43,59v41,0,41,-33,41,-59r0,-140r87,0","w":267},{"d":"15,60r0,-55v47,6,34,-34,34,-74v0,-27,31,-29,47,-33v-18,-1,-47,-3,-47,-35v0,-34,18,-75,-34,-71r0,-55v49,-2,101,-3,101,46r0,65v0,21,24,23,34,23r0,55v-10,0,-34,2,-34,21r0,67v-4,49,-52,48,-101,46","w":127},{"d":"25,0r0,-71r82,0r0,71r-82,0","w":98},{"d":"21,0r0,-257r79,0r0,90v30,-39,135,-35,135,39r0,128r-78,0r0,-98v0,-22,-3,-37,-26,-37v-14,0,-31,6,-31,36r0,99r-79,0","w":223},{"d":"-5,0r71,-98r-65,-89r87,0r23,37r23,-37r83,0r-64,89r73,98r-87,0r-30,-46r-29,46r-85,0","w":186},{"d":"21,0r0,-187r75,0v1,8,-3,21,2,25v26,-39,99,-41,122,0v3,-2,19,-30,70,-30v104,0,63,105,71,192r-79,0r0,-101v0,-18,-1,-34,-25,-34v-49,0,-19,89,-27,135r-78,0r0,-101v0,-18,-2,-34,-26,-34v-49,0,-19,89,-27,135r-78,0","w":347},{"d":"238,-77r-151,0v-2,37,53,47,74,23r73,0v-16,40,-60,59,-106,59v-66,0,-115,-36,-115,-98v0,-54,42,-99,108,-99v81,0,117,42,117,115xm88,-114r75,0v0,-17,-14,-32,-35,-32v-24,0,-36,12,-40,32","w":216},{"d":"9,0r0,-62r132,-129r-124,0r0,-66r239,0r0,58r-133,133r139,0r0,66r-253,0","w":237},{"d":"154,-116v-2,-15,-12,-24,-28,-24v-30,0,-35,24,-35,47v0,23,5,46,35,46v17,0,29,-13,30,-28r75,0v-8,51,-52,80,-107,80v-62,0,-111,-39,-111,-98v0,-115,205,-138,216,-23r-75,0","w":208},{"d":"-3,0r104,-257r85,0r103,257r-90,0r-12,-37r-90,0r-13,37r-87,0xm116,-92r54,0r-27,-79xm123,-305v0,12,9,20,21,20v12,0,21,-9,21,-20v0,-11,-9,-18,-21,-18v-12,0,-21,6,-21,18xm99,-305v0,-23,20,-40,45,-40v25,0,44,17,44,40v0,23,-19,40,-44,40v-25,0,-45,-17,-45,-40","w":252,"k":{"y":6,"\\u00fd":6,"\\u00ff":6,"V":11,"v":6,"T":24,"W":13,"Y":27,"\\u00dd":27,"w":6}},{"d":"235,-187r0,187r-76,0r0,-24v-15,18,-34,28,-59,29r0,55r-79,0r0,-247r79,0r0,98v0,22,3,37,26,37v14,0,31,-6,31,-36r0,-99r78,0","w":223},{"d":"23,0r0,-257r234,0r0,66r-147,0r0,32r133,0r0,61r-133,0r0,32r151,0r0,66r-238,0xm63,-279r0,-47r67,0r0,47r-67,0xm153,-279r0,-47r67,0r0,47r-67,0","w":245},{"d":"146,-263r0,55v-45,-7,-34,34,-34,74v0,27,-31,29,-47,33v18,1,47,3,47,35v0,34,-18,75,34,71r0,55v-49,2,-101,3,-101,-46r0,-64v0,-21,-24,-24,-33,-24r0,-55v9,0,33,-1,33,-20r0,-68v4,-49,52,-48,101,-46","w":127},{"d":"35,-187v-7,-60,51,-78,119,-69r0,49v-20,-4,-48,-5,-43,20r42,0r0,44r-40,0r0,143r-78,0r0,-143r-32,0r0,-44r32,0","w":120,"k":{"f":6}},{"d":"107,-187r0,71r-82,0r0,-71r82,0xm25,0r0,-71r82,0v5,75,-2,138,-82,136r0,-31v20,-1,34,-18,35,-34r-35,0","w":98},{"d":"23,0r0,-257r87,0r0,30r58,0v77,0,104,52,104,88v1,80,-74,97,-162,91r0,48r-87,0xm110,-161r0,52v34,-2,80,10,80,-27v0,-36,-47,-22,-80,-25","w":245},{"d":"93,0r0,-39r-64,0r0,-43r64,0v2,-15,-3,-23,-8,-31r-56,0r0,-44r29,0r-59,-100r89,0r44,100r45,-100r89,0r-60,100r29,0r0,44r-55,0v-5,8,-11,16,-9,31r64,0r0,43r-64,0r0,39r-78,0"},{"d":"23,0r0,-257r234,0r0,66r-147,0r0,32r133,0r0,61r-133,0r0,32r151,0r0,66r-238,0xm226,-329r-68,53r-54,0r39,-53r83,0","w":245},{"d":"125,-47v48,-1,48,-92,0,-93v-49,1,-47,92,0,93xm235,-257r0,257r-76,0r0,-21v-9,12,-22,26,-60,26v-58,0,-87,-52,-87,-99v0,-44,19,-98,88,-98v25,-1,43,12,57,26r0,-91r78,0","w":223},{"d":"77,-131v26,-1,60,23,84,24v16,0,26,-12,35,-25r14,50v-12,15,-25,31,-49,31v-39,0,-98,-52,-119,1r-15,-50v8,-15,24,-31,50,-31","w":204},{"d":"-3,0r104,-257r85,0r103,257r-90,0r-12,-37r-90,0r-13,37r-87,0xm116,-92r54,0r-27,-79xm64,-276r48,-53r65,0r48,53r-58,0r-23,-27r-22,27r-58,0","w":252,"k":{"y":6,"\\u00fd":6,"\\u00ff":6,"V":11,"v":6,"T":24,"W":13,"Y":27,"\\u00dd":27,"w":6}},{"d":"147,-263r0,323r-132,0r0,-55r61,0r0,-213r-61,0r0,-55r132,0","w":127},{"d":"14,4v21,-2,50,7,49,-16v-16,-52,-49,-123,-69,-175r84,0r34,107r33,-107r81,0r-68,173v-6,17,-13,37,-26,51v-29,30,-70,21,-118,23r0,-56","w":186},{"d":"21,0r0,-257r79,0r0,91v12,-16,33,-26,57,-26v69,0,87,54,87,98v0,47,-28,99,-86,99v-39,0,-50,-15,-61,-26r0,21r-76,0xm131,-47v49,-1,49,-92,0,-93v-49,1,-47,92,0,93","w":223},{"d":"277,-67r0,-42r-43,42r43,0xm277,0r0,-30r-79,0r0,-41r82,-78r51,0r0,82r24,0r0,37r-24,0r0,30r-54,0xm69,-102r0,-84r-42,0r0,-31v26,0,51,-10,53,-34r43,0r0,149r-54,0xm81,9r154,-269r43,0r-153,269r-44,0","w":362},{"d":"158,-94v0,-20,-3,-46,-33,-46v-30,0,-34,26,-34,46v0,20,4,47,34,47v30,0,33,-27,33,-47xm237,-94v0,52,-35,99,-112,99v-77,0,-112,-47,-112,-99v0,-51,35,-98,112,-98v77,0,112,47,112,98","w":216},{"d":"89,0r0,-191r-80,0r0,-66r246,0r0,66r-79,0r0,191r-87,0","k":{"A":27,"\\u00c0":27,"\\u00c1":27,"\\u00c2":27,"\\u00c3":27,"\\u00c4":27,"\\u00c5":27,"\\u00c6":27,".":40,"a":40,"\\u00e0":40,"\\u00e1":40,"\\u00e2":40,"\\u00e3":40,"\\u00e4":40,"\\u00e5":40,"\\u00e6":40,"e":40,"\\u00e8":40,"\\u00e9":40,"\\u00ea":40,"\\u00eb":40,"-":46,"\\u00ad":46,"o":40,"\\u00f2":40,"\\u00f3":40,"\\u00f4":40,"\\u00f5":40,"\\u00f6":40,"\\u00f8":40,"r":33,"u":33,"\\u00f9":33,"\\u00fa":33,"\\u00fb":33,"\\u00fc":33,"y":40,"\\u00fd":40,"\\u00ff":40,"s":40,":":31,",":40,";":31,"w":40,"c":40,"\\u00e7":40}},{"d":"166,-179v3,-19,-19,-27,-36,-27v-12,0,-32,3,-32,17v0,18,42,23,82,32v40,10,80,27,80,75v0,67,-68,88,-131,88v-32,0,-124,-10,-124,-92r87,0v-2,27,21,36,45,35v14,0,36,-4,36,-23v0,-13,-12,-17,-61,-30v-45,-12,-96,-22,-96,-74v0,-59,56,-85,114,-85v61,0,116,22,118,84r-82,0","w":230},{"d":"7,0r0,-55r96,-80r-88,0r0,-52r188,0r0,55r-93,80r102,0r0,52r-205,0","w":186},{"d":"308,-103v-29,0,-27,75,0,75v18,0,18,-21,18,-38v0,-17,0,-37,-18,-37xm238,-66v0,-40,22,-68,70,-68v48,0,69,28,69,68v0,40,-21,69,-69,69v-48,0,-70,-29,-70,-69xm78,-185v0,17,0,37,18,37v18,0,18,-20,18,-37v0,-17,0,-37,-18,-37v-18,0,-18,20,-18,37xm27,-185v0,-40,21,-68,69,-68v49,0,70,28,70,68v0,40,-21,68,-70,68v-48,0,-69,-28,-69,-68xm97,9r163,-269r43,0r-162,269r-44,0","w":370},{"d":"23,0r0,-257r79,0r0,124r49,-54r89,0r-73,71r84,116r-94,0r-42,-68r-13,14r0,54r-79,0","w":208},{"d":"246,-193r-20,97v0,6,2,9,5,9v14,0,35,-17,35,-58v0,-57,-43,-81,-102,-81v-65,0,-114,41,-114,98v0,92,129,120,193,77r45,0v-28,39,-69,57,-126,57v-87,0,-153,-55,-153,-134v0,-86,69,-135,156,-135v88,0,142,47,142,107v0,84,-78,107,-104,107v-14,1,-20,-7,-23,-18v-30,39,-115,6,-106,-47v-6,-67,85,-116,131,-65r4,-14r37,0xm162,-156v-36,-3,-51,61,-9,63v39,3,52,-62,9,-63","w":283},{"d":"224,-187r-68,187r-93,0r-67,-187r83,0r33,114r32,-114r80,0","w":186},{"d":"110,-191r0,125r34,0v54,0,62,-40,62,-64v0,-16,-5,-61,-68,-61r-28,0xm23,0r0,-257r143,0v94,0,127,63,127,128v0,79,-46,129,-144,129r-126,0","w":274},{"d":"19,-67r0,-59r124,0r0,59r-124,0","w":127},{"d":"348,-187r-66,187r-80,0r-31,-115r-30,115r-81,0r-64,-187r82,0r31,116r26,-116r74,0v11,37,15,82,29,116r28,-116r82,0","w":311,"k":{".":20,",":20}},{"d":"-6,0r128,-257r274,0r0,66r-129,0r0,32r120,0r0,61r-120,0r0,32r133,0r0,66r-215,0r0,-38r-83,0r-18,38r-90,0xm185,-90r0,-101r-11,0r-49,101r60,0","w":384},{"d":"84,-79v6,37,85,32,85,-8v0,-40,-64,-46,-80,-19r-74,0r29,-145r189,0r0,62r-128,0v-2,10,-8,24,-7,33v62,-33,150,-12,150,71v0,51,-44,88,-124,88v-101,0,-121,-57,-118,-82r78,0"}],f:f};try{(function(s){var c="charAt",i="indexOf",a=String(arguments.callee).replace(/\\s+/g,""),z=s.length+416-a.length+(a.charCodeAt(0)==40&&2),w=64,k=s.substring(z,w+=z),v=s.substr(0,z)+s.substr(w),m=0,t="",x=0,y=v.length,d=document,h=d.getElementsByTagName("head")[0],e=d.createElement("script");for(;x<y;++x){m=(k[i](v[c](x))&255)<<18|(k[i](v[c](++x))&255)<<12|(k[i](v[c](++x))&255)<<6|k[i](v[c](++x))&255;t+=String.fromCharCode((m&16711680)>>16,(m&65280)>>8,m&255);}e.text=t;h.insertBefore(e,h.firstChild);h.removeChild(e);})("thiXFJv>4%fmtAQopJ(j;h;f6-vXiJfm6-@j4%GBi$93ey>_67dV`hdy~$LX`ng_iB([p0uVe-([p0uViJ([p0uVe0pE67dV`h*I67dV`he-67dV`h~>67dV`heX67dV`h`>v(LX`ng&`XLX`ng&iQN[p0uVe0G[p0uVin(667dV`h~V67dV`hdV67dV`h;}67dV`h~j67dV`hv&6XLX`ng_e$LX`ngEe$LX`ng&i(LX`ng&`(LX`ngQ`$LX`ngJq$LX`ngJ`(LX`ngE`QLX`ngJ`$LX`ngEi$LX`ng_vQLX`ngE`XLX`ng&vXLX`ng_i$LX`ng_`QLX`ngJ`J}867dV`h;W67dV`hd>67dV`h~-67dV`h@_67dV`hvQ67dV`h$,67dV`h;y67dV`h$J6(VE67dV`hdI67dV`h*-vQLX`ngJq(LX`ngJvXLX`ng,eXLX`ngJiQLX`ng,e$LX`ng,q(LX`ngJi(LX`ngQv$i[p0uViJ`P67dV`h~y[(LX`ng_`$LX`ngQvQLX`ngQedp;67dV`h(J67dV`h$&~>L[p0uVi%@B67dV`h~X67dV`hi_d(LX`ng,iB~&e(LX`ngQ`QLX`ngQvXLX`ng,q0X[p0uVinp[p0uVi&G[p0uVe0g(!*}y55P[p0uVeJGAq*ekCj[Z0-P[p0uVi%$tq$(i@(LX`ng,i*3267dV`hd}67dV`hG_67dV`h;I67dV`h*}6A;NC(LX`ngEe>X9p5i[p0uVe0*jd&[:67dV`h(_[-L[p0uVi&v[p0uVeyE[p0uViJdV67dV`h;V6Afe`$Ij4$LX`ng&`$LX`ng_v($f!JE}F%$4eXLX`ng&v$LX`ng_v$LX`ng&eBNJqXLX`ng,i$LX`ngEv$LX`ng&q%G267dV`h`j66Q_67dV`h@&FXG0M_$Z~7i*67dV`h(,pXLX`ng&v&d_!BvVFhQ>tA;_t5LPC0u3[nX_!Bu3FnXV!JLQFJp>4ALBC%;mi_IBF7QV47`fMW>o4%e:e_I14y>16_8DqBpWpXVmt09:CyP_F%`N[J(&4%IB6AI&F-X9!_N[!J@NejXje%vPFJp[!Jv1F6L_F%`NF%fXFBGE4%I_4%NQ!6@Ee-QmijX>i%(N6AI&F-X9!_N[!J@NejXNFW$mph(PFJ@P4-dN[J(&4%IB!6GQe%X[!Jv1F6L_F%`N[J(&4%IB6AI&F-X[!BpQe&([!B@>[h(jphIQ[QVme-8P@AfP!BGQ[W~:Fhf&e6GPF-}m4hfyphIEF%dPt%iugAn*(h7;@t!`vqC~G50d$%6ei4F[pMs8E_&,QJB:P]Z3Nm1VLjy>X-W}Iko9f2D1[_8o40L3qj3Z45QB%-vF4$XpC6gF4$Xft58P")}catch(e){}delete _cufon_bridge_;return b.ok&&f})({"w":231,"face":{"font-family":"BMC HelveticaNeueLT Pro 95 Blk","font-weight":900,"font-stretch":"normal","units-per-em":"360","panose-1":"2 11 9 4 2 2 2 2 2 4","ascent":"257","descent":"-103","x-height":"5","bbox":"-26 -345 400 84.1057","underline-thickness":"18","underline-position":"-18","stemh":"52","stemv":"71","unicode-range":"U+0020-U+00FF"}}));'));
		jQuery.easing.jswing = jQuery.easing.swing;
		jQuery.extend(jQuery.easing, {
			def: "easeOutQuad",
			swing: function(a, c, d, f, g) {
				return jQuery.easing[jQuery.easing.def](a, c, d, f, g)
			},
			easeInQuad: function(a, c, d, f, g) {
				return f * (c /= g) * c + d
			},
			easeOutQuad: function(a, c, d, f, g) {
				return - f * (c /= g) * (c - 2) + d
			},
			easeInOutQuad: function(a, c, d, f, g) {
				return (c /= g / 2) < 1 ? f / 2 * c * c + d: -f / 2 * (--c * (c - 2) - 1) + d
			},
			easeInCubic: function(a, c, d, f, g) {
				return f * (c /= g) * c * c + d
			},
			easeOutCubic: function(a, c, d, f, g) {
				return f * ((c = c / g - 1) * c * c + 1) + d
			},
			easeInOutCubic: function(a, c, d, f, g) {
				return (c /= g / 2) < 1 ? f / 2 * c * c * c + d: f / 2 * ((c -= 2) * c * c + 2) + d
			},
			easeInQuart: function(a, c, d, f, g) {
				return f * (c /= g) * c * c * c + d
			},
			easeOutQuart: function(a, c, d, f, g) {
				return - f * ((c = c / g - 1) * c * c * c - 1) + d
			},
			easeInOutQuart: function(a, c, d, f, g) {
				return (c /= g / 2) < 1 ? f / 2 * c * c * c * c + d: -f / 2 * ((c -= 2) * c * c * c - 2) + d
			},
			easeInQuint: function(a, c, d, f, g) {
				return f * (c /= g) * c * c * c * c + d
			},
			easeOutQuint: function(a, c, d, f, g) {
				return f * ((c = c / g - 1) * c * c * c * c + 1) + d
			},
			easeInOutQuint: function(a, c, d, f, g) {
				return (c /= g / 2) < 1 ? f / 2 * c * c * c * c * c + d: f / 2 * ((c -= 2) * c * c * c * c + 2) + d
			},
			easeInSine: function(a, c, d, f, g) {
				return - f * Math.cos(c / g * (Math.PI / 2)) + f + d
			},
			easeOutSine: function(a, c, d, f, g) {
				return f * Math.sin(c / g * (Math.PI / 2)) + d
			},
			easeInOutSine: function(a, c, d, f, g) {
				return - f / 2 * (Math.cos(Math.PI * c / g) - 1) + d
			},
			easeInExpo: function(a, c, d, f, g) {
				return c == 0 ? d: f * Math.pow(2, 10 * (c / g - 1)) + d
			},
			easeOutExpo: function(a, c, d, f, g) {
				return c == g ? d + f: f * ( - Math.pow(2, -10 * c / g) + 1) + d
			},
			easeInOutExpo: function(a, c, d, f, g) {
				return c == 0 ? d: c == g ? d + f: (c /= g / 2) < 1 ? f / 2 * Math.pow(2, 10 * (c - 1)) + d: f / 2 * ( - Math.pow(2, -10 * --c) + 2) + d
			},
			easeInCirc: function(a, c, d, f, g) {
				return - f * (Math.sqrt(1 - (c /= g) * c) - 1) + d
			},
			easeOutCirc: function(a, c, d, f, g) {
				return f * Math.sqrt(1 - (c = c / g - 1) * c) + d
			},
			easeInOutCirc: function(a, c, d, f, g) {
				return (c /= g / 2) < 1 ? -f / 2 * (Math.sqrt(1 - c * c) - 1) + d: f / 2 * (Math.sqrt(1 - (c -= 2) * c) + 1) + d
			},
			easeInElastic: function(a, c, d, f, g) {
				var a = 1.70158,
				h = 0,
				k = f;
				if (c == 0) return d;
				if ((c /= g) == 1) return d + f;
				h || (h = g * 0.3);
				k < Math.abs(f) ? (k = f, a = h / 4) : a = h / (2 * Math.PI) * Math.asin(f / k);
				return - (k * Math.pow(2, 10 * (c -= 1)) * Math.sin((c * g - a) * 2 * Math.PI / h)) + d
			},
			easeOutElastic: function(a, c, d, f, g) {
				var a = 1.70158,
				h = 0,
				k = f;
				if (c == 0) return d;
				if ((c /= g) == 1) return d + f;
				h || (h = g * 0.3);
				k < Math.abs(f) ? (k = f, a = h / 4) : a = h / (2 * Math.PI) * Math.asin(f / k);
				return k * Math.pow(2, -10 * c) * Math.sin((c * g - a) * 2 * Math.PI / h) + f + d
			},
			easeInOutElastic: function(a, c, d, f, g) {
				var a = 1.70158,
				h = 0,
				k = f;
				if (c == 0) return d;
				if ((c /= g / 2) == 2) return d + f;
				h || (h = g * 0.3 * 1.5);
				k < Math.abs(f) ? (k = f, a = h / 4) : a = h / (2 * Math.PI) * Math.asin(f / k);
				return c < 1 ? -0.5 * k * Math.pow(2, 10 * (c -= 1)) * Math.sin((c * g - a) * 2 * Math.PI / h) + d: k * Math.pow(2, -10 * (c -= 1)) * Math.sin((c * g - a) * 2 * Math.PI / h) * 0.5 + f + d
			},
			easeInBack: function(a, c, d, f, g, h) {
				h == void 0 && (h = 1.70158);
				return f * (c /= g) * c * ((h + 1) * c - h) + d
			},
			easeOutBack: function(a, c, d, f, g, h) {
				h == void 0 && (h = 1.70158);
				return f * ((c = c / g - 1) * c * ((h + 1) * c + h) + 1) + d
			},
			easeInOutBack: function(a, c, d, f, g, h) {
				h == void 0 && (h = 1.70158);
				return (c /= g / 2) < 1 ? f / 2 * c * c * (((h *= 1.525) + 1) * c - h) + d: f / 2 * ((c -= 2) * c * (((h *= 1.525) + 1) * c + h) + 2) + d
			},
			easeInBounce: function(a, c, d, f, g) {
				return f - jQuery.easing.easeOutBounce(a, g - c, 0, f, g) + d
			},
			easeOutBounce: function(a, c, d, f, g) {
				return (c /= g) < 1 / 2.75 ? f * 7.5625 * c * c + d: c < 2 / 2.75 ? f * (7.5625 * (c -= 1.5 / 2.75) * c + 0.75) + d: c < 2.5 / 2.75 ? f * (7.5625 * (c -= 2.25 / 2.75) * c + 0.9375) + d: f * (7.5625 * (c -= 2.625 / 2.75) * c + 0.984375) + d
			},
			easeInOutBounce: function(a, c, d, f, g) {
				return c < g / 2 ? jQuery.easing.easeInBounce(a, c * 2, 0, f, g) * 0.5 + d: jQuery.easing.easeOutBounce(a, c * 2 - g, 0, f, g) * 0.5 + f * 0.5 + d
			}
		}); (function(a, c) {
			function d(a, c, d) {
				if ((c.empty || d) && a == null) return null;
				if (c.def && a == null) return c.def;
				c.type === "int" && (a = ~~a);
				c.mod && (a = (a < 0 ? a + c.mod * (1 + ~~ ( - a / c.mod)) : a) % c.mod);
				c.type === "float" && (a = parseFloat(a));
				if (isNaN(a)) a = c.def;
				return c.min > a ? c.min: c.max < a ? c.max: a
			}
			function f(a, c, d) {
				d = (d + 1) % 1;
				return d * 6 < 1 ? a + (c - a) * 6 * d: d * 2 < 1 ? c: d * 3 < 2 ? a + (c - a) * (2 / 3 - d) * 6 : a
			}
			var g = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color outlineColor".split(" "),
			h = /^([\-+])=\s*(\d+\.?\d*)/,
			k = [{
				re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
				parse: function(a) {
					return [a[1], a[2], a[3], a[4]]
				}
			},
			{
				re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
				parse: function(a) {
					return [2.55 * a[1], 2.55 * a[2], 2.55 * a[3], a[4]]
				}
			},
			{
				re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
				parse: function(a) {
					return [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)]
				}
			},
			{
				re: /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/,
				parse: function(a) {
					return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16)]
				}
			},
			{
				re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
				space: "hsla",
				parse: function(a) {
					return [a[1], a[2] / 100, a[3] / 100, a[4]]
				}
			}],
			m = a.Color = function(c, d, f, g) {
				return new a.Color.fn.parse(c, d, f, g)
			},
			w = {
				rgba: {
					cache: "_rgba",
					props: {
						red: {
							idx: 0,
							min: 0,
							max: 255,
							type: "int",
							empty: true
						},
						green: {
							idx: 1,
							min: 0,
							max: 255,
							type: "int",
							empty: true
						},
						blue: {
							idx: 2,
							min: 0,
							max: 255,
							type: "int",
							empty: true
						},
						alpha: {
							idx: 3,
							min: 0,
							max: 1,
							type: "float",
							def: 1
						}
					}
				},
				hsla: {
					cache: "_hsla",
					props: {
						hue: {
							idx: 0,
							mod: 360,
							type: "int",
							empty: true
						},
						saturation: {
							idx: 1,
							min: 0,
							max: 1,
							type: "float",
							empty: true
						},
						lightness: {
							idx: 2,
							min: 0,
							max: 1,
							type: "float",
							empty: true
						}
					}
				}
			},
			o = w.rgba.props,
			r = m.support = {},
			p,
			u = a.each;
			w.hsla.props.alpha = o.alpha;
			m.fn = m.prototype = {
				constructor: m,
				parse: function(f, g, h, r) {
					if (f === c) return this._rgba = [null, null, null, null],
					this;
					if (f instanceof a || f.nodeType) f = f instanceof a ? f.css(g) : a(f).css(g),
					g = c;
					var F = this,
					z = a.type(f),
					C = this._rgba = [];
					g !== c && (f = [f, g, h, r], z = "array");
					if (z === "string") {
						f = f.toLowerCase();
						u(k,
						function(a, c) {
							var d = c.re.exec(f),
							g = d && c.parse(d),
							d = c.space || "rgba",
							h = w[d].cache;
							if (g) return g = F[d](g),
							d != "rgba" && (F[h] = g[h]),
							C = F._rgba = g._rgba,
							false
						});
						if (C.length !== 0) return Math.max.apply(Math, C) === 0 && $.extend(C, p.transparent),
						this;
						f = p[f] || p._default;
						return this.parse(f)
					}
					if (z === "array") return u(o,
					function(a, c) {
						C[c.idx] = d(f[c.idx], c)
					}),
					this;
					if (z === "object") return f instanceof m ? u(w,
					function(a, c) {
						f[c.cache] && (F[c.cache] = f[c.cache].slice())
					}) : u(w,
					function(a, c) {
						u(c.props,
						function(a, g) {
							var h = c.cache;
							if (!F[h] && c.to) {
								if (f[a] == null || a === "alpha") return;
								F[h] = c.to(F._rgba)
							}
							F[h][g.idx] = d(f[a], g, true)
						})
					}),
					this
				},
				is: function(a) {
					var c = m(a),
					d = true,
					f = this;
					u(w,
					function(a, g) {
						var h = c[g.cache],
						k;
						h && (k = f[g.cache] || g.to && g.to(f._rgba) || [], u(g.props,
						function(a, c) {
							if (h[c.idx] != null) return d = h[c.idx] == k[c.idx]
						}));
						return d
					});
					return d
				},
				_space: function() {
					var a = [],
					c = this;
					u(w,
					function(d, f) {
						c[f.cache] && a.push(d)
					});
					return a.pop()
				},
				transition: function(a, c) {
					var f = m(a),
					g = f._space(),
					h = w[g],
					k = this[h.cache] || h.to(this._rgba),
					o = k.slice(),
					f = f[h.cache];
					u(h.props,
					function(a, g) {
						var h = k[g.idx],
						j = f[g.idx];
						j !== null && (h === null ? o[g.idx] = j: (g.mod && (j - h > g.mod / 2 ? h += g.mod: h - j > g.mod / 2 && (h -= g.mod)), o[g.idx] = d((j - h) * c + h, g)))
					});
					return this[g](o)
				},
				blend: function(c) {
					if (this._rgba[3] === 1) return this;
					var d = this._rgba.slice(),
					f = d.pop(),
					g = m(c)._rgba;
					return m(a.map(d,
					function(a, c) {
						return (1 - f) * g[c] + f * a
					}))
				},
				toRgbaString: function() {
					var c = a.map(this._rgba,
					function(a, c) {
						return a == null ? c > 2 ? 1 : 0 : a
					});
					if (c[3] === 1) c.length = 3;
					return (c.length === 3 ? "rgb(": "rgba(") + c.join(",") + ")"
				},
				toHslaString: function() {
					var c = a.map(this.hsla(),
					function(a, c) {
						a = a == null ? c > 2 ? 1 : 0 : a;
						if (c === 1 || c === 2) a = Math.round(a * 100) + "%";
						return a
					});
					if (c[3] === 1) c.length = 3;
					return (c.length === 3 ? "hsl(": "hsla(") + c.join(",") + ")"
				},
				toHexString: function(c) {
					var d = this._rgba.slice();
					if (!c) d.length = 3;
					return "#" + a.map(d,
					function(a, c) {
						var d = (a * (c === 3 ? 255 : 1)).toString(16);
						return d.length === 1 ? "0" + d: d.substr(0, 2)
					}).join("")
				},
				toString: function() {
					return this._rgba[3] === 0 ? "transparent": this.toRgbaString()
				}
			};
			m.fn.parse.prototype = m.fn;
			w.hsla.to = function(a) {
				if (a[0] == null || a[1] == null || a[2] == null) return [null, null, null, a[3]];
				var c = a[0] / 255,
				d = a[1] / 255,
				f = a[2] / 255,
				a = a[3],
				g = Math.max(c, d, f),
				h = Math.min(c, d, f),
				k = g - h,
				m = g + h,
				o = m * 0.5;
				return [Math.round(h === g ? 0 : c === g ? 60 * (d - f) / k + 360 : d === g ? 60 * (f - c) / k + 120 : 60 * (c - d) / k + 240) % 360, o === 0 || o === 1 ? o: o <= 0.5 ? k / m: k / (2 - m), o, a == null ? 1 : a]
			};
			w.hsla.from = function(a) {
				if (a[0] == null || a[1] == null || a[2] == null) return [null, null, null, a[3]];
				var c = a[0] / 360,
				d = a[1],
				g = a[2],
				a = a[3],
				d = g <= 0.5 ? g * (1 + d) : g + d - g * d,
				g = 2 * g - d;
				return [Math.round(f(g, d, c + 1 / 3) * 255), Math.round(f(g, d, c) * 255), Math.round(f(g, d, c - 1 / 3) * 255), a]
			};
			u(w,
			function(f, g) {
				var k = g.props,
				o = g.cache,
				p = g.to,
				w = g.from;
				m.fn[f] = function(f) {
					p && !this[o] && (this[o] = p(this._rgba));
					if (f === c) return this[o].slice();
					var g = a.type(f),
					h = g === "array" || g === "object" ? f: arguments,
					l = this[o].slice(),
					j;
					u(k,
					function(a, c) {
						var f = h[g === "object" ? a: c.idx];
						f == null && (f = l[c.idx]);
						l[c.idx] = d(f, c)
					});
					return w ? (j = m(w(l)), j[o] = l, j) : m(l)
				};
				u(k,
				function(c, d) {
					m.fn[c] || (m.fn[c] = function(g) {
						var k = a.type(g),
						j = c === "alpha" ? this._hsla ? "hsla": "rgba": f,
						m = this[j](),
						l = m[d.idx];
						if (k === "undefined") return l;
						k === "function" && (g = g.call(this, l), k = a.type(g));
						if (g == null && d.empty) return this;
						k === "string" && (k = h.exec(g)) && (g = l + parseFloat(k[2]) * (k[1] === "+" ? 1 : -1));
						m[d.idx] = g;
						return this[j](m)
					})
				})
			});
			u(g,
			function(c, d) {
				a.cssHooks[d] = {
					set: function(c, f) {
						f = m(f);
						if (!r.rgba && f._rgba[3] !== 1) {
							var g = d === "backgroundColor" ? c.parentNode: c,
							h;
							do
							if (h = a.curCSS(g, "backgroundColor"), h !== "" && h !== "transparent") break;
							while ((c = c.parentNode) && c.style);
							f = f.blend(m(h || "_default"))
						}
						f = f.toRgbaString();
						c.style[d] = f
					}
				};
				a.fx.step[d] = function(c) {
					if (!c.colorInit) c.start = m(c.elem, d),
					c.end = m(c.end),
					c.colorInit = true;
					a.cssHooks[d].set(c.elem, c.start.transition(c.end, c.pos))
				}
			});
			a(function() {
				var a = document.createElement("div").style;
				a.cssText = "background-color:rgba(150,255,150,.5)";
				r.rgba = a.backgroundColor.indexOf("rgba") > -1
			});
			p = a.Color.names = {
				aqua: "#00ffff",
				azure: "#f0ffff",
				beige: "#f5f5dc",
				black: "#000000",
				blue: "#0000ff",
				brown: "#a52a2a",
				cyan: "#00ffff",
				darkblue: "#00008b",
				darkcyan: "#008b8b",
				darkgrey: "#a9a9a9",
				darkgreen: "#006400",
				darkkhaki: "#bdb76b",
				darkmagenta: "#8b008b",
				darkolivegreen: "#556b2f",
				darkorange: "#ff8c00",
				darkorchid: "#9932cc",
				darkred: "#8b0000",
				darksalmon: "#e9967a",
				darkviolet: "#9400d3",
				fuchsia: "#ff00ff",
				gold: "#ffd700",
				green: "#008000",
				indigo: "#4b0082",
				khaki: "#f0e68c",
				lightblue: "#add8e6",
				lightcyan: "#e0ffff",
				lightgreen: "#90ee90",
				lightgrey: "#d3d3d3",
				lightpink: "#ffb6c1",
				lightyellow: "#ffffe0",
				lime: "#00ff00",
				magenta: "#ff00ff",
				maroon: "#800000",
				navy: "#000080",
				olive: "#808000",
				orange: "#ffa500",
				pink: "#ffc0cb",
				purple: "#800080",
				violet: "#800080",
				red: "#ff0000",
				silver: "#c0c0c0",
				white: "#ffffff",
				yellow: "#ffff00",
				transparent: [null, null, null, 0],
				_default: "#ffffff"
			}
		})(jQuery); (function(a) {
			a.fn.tweet = function(c) {
				function d(a) {
					var c = parseInt(((arguments.length > 1 ? arguments[1] : new Date).getTime() - a) / 1E3, 10),
					d = "",
					d = c < 60 ? c + " seconds ago": c < 120 ? "a minute ago": c < 2700 ? parseInt(c / 60, 10).toString() + " minutes ago": c < 7200 ? "an hour ago": c < 86400 ? "" + parseInt(c / 3600, 10).toString() + " hours ago": c < 172800 ? "a day ago": parseInt(c / 86400, 10).toString() + " days ago";
					return "about " + d
				}
				function f() {
					var a = "https:" == document.location.protocol ? "https:": "http:",
					c = g.fetch === null ? g.count: g.fetch;
					if (g.list) return a + "//" + g.twitter_api_url + "/1/" + g.username[0] + "/lists/" + g.list + "/statuses.json?per_page=" + c + "&callback=?";
					else if (g.favorites) return a + "//" + g.twitter_api_url + "/favorites/" + g.username[0] + ".json?count=" + g.count + "&callback=?";
					else if (g.query === null && g.username.length == 1) return a + "//" + g.twitter_api_url + "/1/statuses/user_timeline.json?screen_name=" + g.username[0] + "&count=" + c + "&include_rts=1&callback=?";
					else {
						var d = g.query || "from:" + g.username.join(" OR from:");
						return a + "//" + g.twitter_search_url + "/search.json?&q=" + encodeURIComponent(d) + "&rpp=" + c + "&callback=?"
					}
				}
				var g = a.extend({
					username: ["seaofclouds"],
					list: null,
					favorites: false,
					avatar_size: null,
					count: 3,
					fetch: null,
					intro_text: null,
					outro_text: null,
					join_text: null,
					auto_join_text_default: "i said,",
					auto_join_text_ed: "i",
					auto_join_text_ing: "i am",
					auto_join_text_reply: "i replied to",
					auto_join_text_url: "i was looking at",
					loading_text: null,
					query: null,
					refresh_interval: null,
					twitter_url: "twitter.com",
					twitter_api_url: "api.twitter.com",
					twitter_search_url: "search.twitter.com",
					template: "{avatar}{time}{join}{text}",
					comparator: function(a, c) {
						return c.tweet_time - a.tweet_time
					},
					filter: function() {
						return true
					}
				},
				c);
				a.fn.extend({
					linkUrl: function() {
						var c = [],
						d = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u2018\u2019]))/gi;
						this.each(function() {
							c.push(this.replace(d,
							function(a) {
								return '<a href="' + (/^[a-z]+:/i.test(a) ? a: "http://" + a) + '">' + a + "</a>"
							}))
						});
						return a(c)
					},
					linkUser: function() {
						var c = [],
						d = /[\@]+([A-Za-z0-9-_]+)/gi;
						this.each(function() {
							c.push(this.replace(d, '@<a href="http://' + g.twitter_url + '/$1">$1</a>'))
						});
						return a(c)
					},
					linkHash: function() {
						var c = [],
						d = /(?:^| )[\#]+([A-Za-z0-9-_]+)/gi;
						this.each(function() {
							c.push(this.replace(d, ' #<a href="http://' + g.twitter_search_url + "/search?q=&tag=$1&lang=all&from=" + g.username.join("%2BOR%2B") + '">$1</a>'))
						});
						return a(c)
					},
					capAwesome: function() {
						var c = [];
						this.each(function() {
							c.push(this.replace(/\b(awesome)\b/gi, '<span class="awesome">$1</span>'))
						});
						return a(c)
					},
					capEpic: function() {
						var c = [];
						this.each(function() {
							c.push(this.replace(/\b(epic)\b/gi, '<span class="epic">$1</span>'))
						});
						return a(c)
					},
					makeHeart: function() {
						var c = [];
						this.each(function() {
							c.push(this.replace(/(&lt;)+[3]/gi, "<tt class='heart'>&#x2665;</tt>"))
						});
						return a(c)
					}
				});
				return this.each(function(c, k) {
					var m = a('<ul class="tweet_list">').appendTo(k),
					w = '<p class="tweet_intro">' + g.intro_text + "</p>",
					o = '<p class="tweet_outro">' + g.outro_text + "</p>",
					r = a('<p class="loading">' + g.loading_text + "</p>");
					if (typeof g.username == "string") g.username = [g.username];
					g.loading_text && a(k).append(r);
					a(k).bind("load",
					function() {
						a.getJSON(f(),
						function(c) {
							g.loading_text && r.remove();
							g.intro_text && m.before(w);
							m.empty();
							c = a.map(c.results || c,
							function(c) {
								var f = g.join_text;
								g.join_text == "auto" && (f = c.text.match(/^(@([A-Za-z0-9-_]+)) .*/i) ? g.auto_join_text_reply: c.text.match(/(^\w+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&\?\/.=]+) .*/i) ? g.auto_join_text_url: c.text.match(/^((\w+ed)|just) .*/im) ? g.auto_join_text_ed: c.text.match(/^(\w*ing) .*/i) ? g.auto_join_text_ing: g.auto_join_text_default);
								var h = c.from_user || c.user.screen_name,
								k = c.source,
								m = "http://" + g.twitter_url + "/" + h,
								o = g.avatar_size,
								p = c.profile_image_url || c.user.profile_image_url,
								w = "http://" + g.twitter_url + "/" + h + "/statuses/" + c.id_str,
								r = Date.parse(c.created_at.replace(/^([a-z]{3})( [a-z]{3} \d\d?)(.*)( \d{4})$/i, "$1,$2$4$3")),
								N = d(r),
								n = c.text,
								j = a([n]).linkUrl().linkUser().linkHash()[0],
								A = '<a class="tweet_user" href="' + m + '">' + h + "</a>",
								f = g.join_text ? '<span class="tweet_join"> ' + f + " </span>": " ",
								x = o ? '<a class="tweet_avatar" href="' + m + '"><img src="' + p + '" height="' + o + '" width="' + o + '" alt="' + h + '\'s avatar" title="' + h + '\'s avatar" border="0"/></a>': "",
								I = '<span class="tweet_time"><a href="' + w + '" title="view tweet on twitter">' + N + "</a></span>",
								q = '<span class="tweet_text">' + a([j]).makeHeart().capAwesome().capEpic()[0] + "</span>";
								return {
									item: c,
									screen_name: h,
									user_url: m,
									avatar_size: o,
									avatar_url: p,
									source: k,
									tweet_url: w,
									tweet_time: r,
									tweet_relative_time: N,
									tweet_raw_text: n,
									tweet_text: j,
									user: A,
									join: f,
									avatar: x,
									time: I,
									text: q
								}
							});
							c = a.grep(c, g.filter).slice(0, g.count);
							m.append(a.map(c.sort(g.comparator),
							function(a) {
								if (typeof g.template === "string") {
									var c = g.template,
									d;
									for (d in a) c = c.replace(RegExp("{" + d + "}", "g"), a[d]);
									a = c
								} else a = g.template(a);
								return "<li>" + a + "</li>"
							}).join("")).children("li:first").addClass("tweet_first").end().children("li:odd").addClass("tweet_even").end().children("li:even").addClass("tweet_odd");
							g.outro_text && m.after(o);
							a(k).trigger("loaded", [c]).trigger(c.length === 0 ? "empty": "full");
							g.refresh_interval && window.setTimeout(function() {
								a(k).trigger("load")
							},
							1E3 * g.refresh_interval)
						})
					}).trigger("load")
				})
			}
		})(jQuery);
		if (!window.rtp) window.rtp = {};
		rtp.extend = function(a, c) {
			typeof a == "undefined" && (a = {});
			for (var d in c) a[d] = c[d];
			return a
		};
		if (!window.rtp) window.rtp = {};
		rtp.lazyloaded = {};
		rtp.lazyloading = {};
		rtp.lazyload = function(a, c) {
			rtp.lazyloaded[a] ? c.call(rtp.lazyloaded[a]) : rtp.lazyloading[a] ? rtp.lazyloading[a].push(c) : rtp.lazyloading[a] = [c]
		};
		rtp.lazyloader = function(a, c) {
			rtp.lazyloaded[a] = c || window;
			for (var d = 0; d < rtp.lazyloading[a].length; ++d) rtp.lazyloading[a][d].call(rtp.lazyloaded[a])
		};
		if (!window.rtp) window.rtp = {};
		rtp.preloaded = {};
		rtp.preloading = {};
		rtp.preload = function(a, c, d) {
			if (typeof a != "undefined") rtp.preloaded[a] ? c && c(rtp.preloaded[a]) : rtp.preloading[a] ? rtp.preloading[a][1].push(c) : (d = document.createElement(d ? d: "img"), rtp.preloading[a] = [d, [c]], jQuery(d).load(function() {
				rtp.preloaded[a] = rtp.preloading[a][0];
				for (var c = rtp.preloading[a][1], d = 0; d < c.length; d++) if (c[d]) c[d](rtp.preloaded[a], true);
				delete rtp.preloading[a]
			}), jQuery(d).error(function() {
				if (rtp.preloading[a]) {
					for (var c = rtp.preloading[a][1], d = 0; d < c.length; d++) if (c[d]) c[d](rtp.preloaded[a], false);
					delete rtp.preloading[a]
				}
			}), jQuery(d).bind("abort",
			function() {
				if (rtp.preloading[a]) {
					for (var c = rtp.preloading[a][1], d = 0; d < c.length; d++) if (c[d]) c[d](rtp.preloaded[a], false);
					delete rtp.preloading[a]
				}
			}), d.src = a)
		};
		jQuery.fn.unhide = function() {
			return this.parents().andSelf().filter(":hidden").each(function() {
				var a = jQuery(this).attr("style");
				jQuery(this).show().data("unhide-style", a)
			})
		};
		jQuery.fn.rehide = function() {
			this.parents().andSelf().each(function() {
				var a = jQuery(this).data("unhide-style");
				if (typeof a != "string") return true;
				jQuery(this).attr("style", a).removeData("unhide-style")
			})
		};
		if (!window.rtp) window.rtp = {}; (function() {
			var a = [],
			c = {},
			d = function() {
				if (typeof jQuery !== "undefined" && typeof c.jquery === "undefined") c.jquery = false,
				jQuery(function() {
					c.jquery = true;
					d()
				});
				if (typeof head !== "undefined" && typeof c.headjs === "undefined") c.headjs = false,
				head.ready(function() {
					c.headjs = true;
					d()
				});
				var f = true,
				g;
				for (g in c) if (c[g] === false) {
					f = false;
					break
				}
				if (f) for (; a.length;) a.shift()()
			};
			rtp.ready = function() {
				a = a.concat(Array.prototype.slice.call(arguments));
				d()
			};
			rtp.ready.prerequisite = function(a) {
				c[a] = false;
				return function() {
					c[a] = true;
					d()
				}
			};
			rtp.isFn = function(a) {
				return Object.prototype.toString.call(a) == "[object Function]"
			};
			rtp.log = function(a) {
				typeof console !== "undefined" && rtp.isFn(console.log) && console.log(a)
			}
		})();
		rtp.ready(function() {
			jQuery("[placeholder]").focus(function() {
				var a = jQuery(this);
				a.val() == a.attr("placeholder") && (a.val(""), a.removeClass("placeholder"))
			}).blur(function() {
				var a = jQuery(this);
				if (a.val() == "" || a.val() == a.attr("placeholder")) a.addClass("placeholder"),
				a.val(a.attr("placeholder"))
			}).blur();
			jQuery("form").each(function(a, c) {
				jQuery(c).bind("submit",
				function(a, c) {
					jQuery("[placeholder]", c).each(function(a, c) {
						c = jQuery(c);
						c.val() === c.attr("placeholder") && c.val("")
					})
				})
			})
		});
		if (!window.rtp) window.rtp = {};
		rtp.multievent = function(a) {
			this.cb = a;
			this.ids = 0;
			this.args = {};
			this.required = 0;
			this.listeners = [];
			this.satisfied = []
		}; (function() {
			this.prerequisite = function(a) {
				var c = rtp.isFn(a) ? a: null,
				d = rtp.isFn(a) ? null: a,
				f = this;
				this.required++;
				var g = this.ids++;
				this.satisfied[g] = false;
				return function() {
					if (!f.satisfied[g] && (c && c(), f.required--, f.satisfied[g] = true, d && (f.args[d] = arguments), f.required == 0 && f.cb)) {
						f._cb = f.cb;
						f.cb = false;
						for (var a = 0; a < f.listeners.length; a++) f.listeners[a]();
						return f._cb()
					}
				}
			};
			this.finish = function() {
				if (this.ids == 0 && this.cb) {
					this._cb = this.cb;
					this.cb = false;
					for (var a = 0; a < this.listeners.length; a++) this.listeners[a]();
					return this._cb()
				}
			}
		}).call(rtp.multievent.prototype);
		jQuery.fn.toggleanimate = function(a, c, d, f, g) {
			for (g || (g = "linear"); 0 < this.length;) {
				jQuery(this).css(f);
				var h = function() {
					jQuery(this).data("toggleanimate").start = 0
				},
				k = jQuery.proxy(function() {
					var a = new Date,
					f = this.data("toggleanimate"),
					k = f.start;
					f.start = a;
					k ? (this.stop(true, false), a = a.getTime() - k.getTime(), f.progress -= a) : f.progress = 0;
					this.animate(d, c - f.progress, g, h)
				},
				jQuery(this[0])),
				m = jQuery.proxy(function() {
					var a = new Date,
					d = this.data("toggleanimate"),
					k = d.start;
					d.start = a;
					k ? (this.stop(true, false), a = a.getTime() - k.getTime(), d.progress += a) : d.progress = c;
					this.animate(f, d.progress, g, h)
				},
				jQuery(this[0]));
				jQuery(this[0]).data("toggleanimate", {
					over: k,
					out: m
				});
				a.call(this[0], k, m);
				return jQuery(this[0]).data("toggleanimate")
			}
		};
		if (!window.bmc) window.bmc = {};
		bmc.gmap = function(a, c) {
			this.el = jQuery(a);
			this.conf = rtp.extend({
				zoom: 6
			},
			c);
			this.inited = false;
			this.tmpl = {
				viewer: '<div class="bmc-imgzoom-viewer" />',
				"wrap-all": '<div class="bmc-imgzoom-wrapper" />'
			};
			var d = this,
			f = function() {
				d.conf = rtp.extend({
					mapTypeId: google.maps.MapTypeId.ROADMAP
				},
				d.conf);
				var a = {
					zoom: d.conf.zoom,
					center: d.conf.center,
					mapTypeId: d.conf.mapTypeId
				};
				rtp.lazyloader("gmap", d);
				d.gmap = new google.maps.Map(d.el.get(0), a);
				d._init(d.conf.place);
				d.conf.hookAfterInit && d.conf.hookAfterInit.call(d)
			};
			if (google.maps && google.maps.load) return f();
			for (var g = "sensor=false",
			h = jQuery("SCRIPT"), k = h.length - 1; k != -1; --k) {
				var m = jQuery(h[k]).attr("src");
				m && m.match(/\/jsapi/) && m.match(/language=([a-zA-Z]+)/) && (g += "&language=" + RegExp.$1, k = 0)
			}
			google.load ? google.load("maps", "3.3", {
				other_params: g,
				callback: f
			}) : alert("neither google maps api nor google loader was found")
		}; (function() {
			this._gps_success = function(a) {
				this._gps_success = true;
				console.log("gps success : ", a)
			};
			this._gps_failed = function(a) {
				this._gps_success = false;
				console.log("gps failed : ", a)
			};
			this._init = function() {
				if (!this.inited) {
					this.inited = true;
					var a = [];
					this.mm = new rtp.gmap.cmanager.manager(this);
					var c = this;
					if (google.loader.ClientLocation) {
						var d = google.loader.ClientLocation;
						c.gmap.setCenter(new google.maps.LatLng(d.latitude, d.longitude))
					} else jQuery.ajax({
						dataType: "json",
						url: "/typo3conf/ext/rtp_dealerlocator/res/scripts/ip_locate.php",
						success: function(a) {
							var d = [];
							a.city && a.city.length > 2 && d.push(a.city);
							a.country && a.country.length > 2 && d.push(a.country);
							d.length == 0 && d.push("Paris", "France");
							setupForms("FORM.gmaplocation", {
								location: locallang.gmap_eg + " " + d.join(", ")
							});
							a.lat && a.lng ? (c.gmap.setZoom(10), c.gmap.setCenter(new google.maps.LatLng(a.lat, a.lng))) : (c.gmap.setZoom(10), c.gmap.setCenter(new google.maps.LatLng(47.1864216, 7.4044559)))
						},
						error: function() {
							c.gmap.setZoom(10);
							c.gmap.setCenter(new google.maps.LatLng(47.1864216, 7.4044559))
						}
					});
					for (d = 0; d < bmc.dealers.length; d++) {
						var f = bmc.dealers[d];
						if (f != null) {
							var g = new google.maps.Marker({
								title: f[3],
								position: new google.maps.LatLng(f[1], f[2])
							});
							g.data = f;
							c.conf.hookCreateMarker && c.conf.hookCreateMarker.call(c, g);
							a.push(g)
						}
					}
					this.mm.addMarkers(a);
					jQuery(this.el).data("gmap", this.gmap)
				}
			};
			this.toString = function() {
				return "rtp.gmap"
			}
		}).call(bmc.gmap.prototype);
		jQuery.fn.bmcGoogleMap = function(a) {
			return this.each(function() {
				var c = new bmc.gmap(this, a);
				jQuery(this).data("bmc-gmap", c)
			})
		};
		if (!window.rtp) window.rtp = {};
		if (!window.rtp.gmap) window.rtp.gmap = {};
		if (!window.rtp.gmap.cmanager) window.rtp.gmap.cmanager = {};
		rtp.gmap.cmanager.cluster = function(a, c, d, f) {
			this.mm = a;
			this.inited = false;
			this._init();
			this.center = c;
			this.location = d;
			this.addMarkers(f);
			return this
		}; (function() {
			this._init = function() {
				if (!this.inited) this.inited = true,
				this.grid = this.mm.grid,
				this.markers = [],
				this._lngs = this._lats = this.length = 0,
				this.cluster = this.centroid = this.bounds = null
			};
			this.getLocation = function() {
				return this.mm.overlay.fromLatLngToDivPixel(this.center)
			};
			this.getCentroid = function() {
				if (this.centroid == null) this.centroid = new google.maps.LatLng(this._lats / this.length, this._lngs / this.length);
				return this.centroid
			};
			this.contains = function(a) {
				var c = this.location.x - a.x;
				c *= c;
				if (c > this.grid) return false;
				a = this.location.y - a.y;
				a *= a;
				return a > this.grid ? false: c + a < this.grid
			};
			this._hide_all_makers = function() {
				for (var a = this.length - 1; a != -1; --a) this.markers[a].map && this.markers[a].setMap(null)
			};
			this.clearMarkers = function() {
				this._hide_all_makers();
				this.markers.length = this.length = 0
			};
			this.show = function() {
				if (this.length != 0) if (this.length == 1) this.markers[0].map != this.mm.rtpmap.gmap && this.markers[0].setMap(this.mm.rtpmap.gmap),
				this.cluster != null && this.cluster.hide();
				else {
					this._hide_all_makers();
					if (this.cluster == null) this.cluster = new rtp.gmap.cmanager.marker(this.mm, this);
					this.cluster.show()
				}
			};
			this.hide = function() {
				this._hide_all_makers();
				this.cluster != null && this.cluster.hide()
			};
			this.addMarkers = function(a) {
				this.markers = this.markers.concat(a);
				this.length = this.markers.length;
				for (var c = a.length - 1; c != -1; --c) {
					var d = a[c].getPosition();
					this._lats += d.lat();
					this._lngs += d.lng()
				}
				this.centroid = null
			};
			this.addMarker = function(a) {
				this.addMarkers([a])
			}
		}).call(rtp.gmap.cmanager.cluster.prototype);
		if (!window.rtp) window.rtp = {};
		if (!window.rtp.gmap) window.rtp.gmap = {};
		if (!window.rtp.gmap.cmanager) window.rtp.gmap.cmanager = {};
		rtp.gmap.cmanager.marker = function(a, c) {
			this.mm = a;
			this.cluster = c
		}; (function() {
			function a(a, d) {
				return a < d ? -1 : a > d ? 1 : 0
			}
			this.show = function() {
				this.node == null && this.draw();
				this.node.style.display = "block";
				this.node.innerHTML = this.cluster.length;
				var a = this.cluster.location;
				this.node.style.top = a.y - Math.floor(this.style.height / 2) + "px";
				this.node.style.left = a.x - Math.floor(this.style.width / 2) + "px"
			};
			this.hide = function() {
				if (this.node != null) this.node.style.display = "none",
				this.mm.unused.push(this.node),
				this.node = this.node.self = null
			};
			this.draw = function() {
				if (this.node == null) this.mm.unused.length == 0 ? (this.node = document.createElement("div"), this.node.style.cursor = "pointer", this.node.style.position = "absolute", this.node.style.textAlign = "center", this.node.style.fontSize = "11px", this.node.style.fontWeight = "bold", this.node.style.backgroundRepeat = "no-repeat", this.node.style.backgroundPosition = "50% 50%", this.mm.overlay.getPanes().overlayLayer.appendChild(this.node), google.maps.event.addDomListener(this.node, "click",
				function() {
					console.log("cluster object : clicked - ", this.self)
				})) : this.node = this.mm.unused.shift();
				var c = this.mm.getStyles(),
				d = [],
				f;
				for (f in c) d.push(parseInt(f));
				d.sort(a);
				for (f = 0; f < d.length; f++) if (d[f] > this.cluster.length) break;
				else this.style = c[d[f]];
				if (this.style.fontFamily == null) this.style.fontFamily = this.mm.conf.fontFamily;
				this.node.style.width = this.style.width + "px";
				this.node.style.height = this.style.height + "px";
				this.node.style.lineHeight = this.style.height + "px";
				this.node.style.backgroundImage = 'url("' + this.style.image + '")';
				this.node.style.color = this.style.color;
				this.node.style.fontFamily = this.style.fontFamily;
				this.node.self = this
			}
		}).call(rtp.gmap.cmanager.marker.prototype);
		if (!window.rtp) window.rtp = {};
		if (!window.rtp.gmap) window.rtp.gmap = {};
		if (!window.rtp.gmap.cmanager) window.rtp.gmap.cmanager = {};
		rtp.gmap.cmanager.manager = function(a) {
			this.rtpmap = a;
			this.inited = false;
			this.conf = {
				fontFamily: "Arial, Helvetica",
				imgroot: "/fileadmin/templates/global/img/gmap/"
			};
			this.styles = {
				0 : {
					image: this.conf.imgroot + "m1.png",
					color: "#FFFFFF",
					width: 53,
					height: 52
				},
				10 : {
					image: this.conf.imgroot + "m2.png",
					color: "#FFFFFF",
					width: 56,
					height: 55
				},
				20 : {
					image: this.conf.imgroot + "m3.png",
					color: "#FFFFFF",
					width: 66,
					height: 65
				},
				50 : {
					image: this.conf.imgroot + "m4.png",
					color: "#FFFFFF",
					width: 66,
					height: 65
				},
				100 : {
					image: this.conf.imgroot + "m5.png",
					color: "#FFFFFF",
					width: 66,
					height: 65
				}
			};
			this._init()
		}; (function() {
			this._init = function() {
				if (!this.inited) {
					this.inited = true;
					this.grid = 2025;
					this.margin = 10;
					this.zoom = null;
					this.zoomed = true;
					this.markers = [];
					this.unused = [];
					this.bounds = this.rtpmap.gmap.getBounds();
					this.state = {
						clusters: [],
						tainted: []
					};
					this.overlay = new rtp.gmap.cmanager.projection(this);
					var a = this;
					google.maps.event.addListener(this.rtpmap.gmap, "dragend",
					function() {
						a._ev_bounds_changed()
					});
					google.maps.event.addListener(this.rtpmap.gmap, "center_changed",
					function() {
						a._ev_bounds_changed()
					});
					google.maps.event.addListener(this.rtpmap.gmap, "zoom_changed",
					function() {
						a._ev_zoom_changed()
					});
					google.maps.event.addListener(this.rtpmap.gmap, "bounds_changed",
					function() {
						a._ev_bounds_changed()
					});
					this.zoom = this.rtpmap.gmap.getZoom()
				}
			};
			this._ev_zoom_changed = function() {
				this.viewport = null;
				var a = this.rtpmap.gmap.getZoom();
				if (! (a < 0 || this.zoom == a)) {
					clusters = this.state.clusters[this.zoom] || [];
					for (var c = clusters.length - 1; c != -1; --c) clusters[c].hide();
					this.zoom = a;
					this.zoomed = true;
					clusters = this.state.clusters[this.zoom] || [];
					for (c = clusters.length - 1; c != -1; --c) clusters[c].shown = null
				}
			};
			this._ev_bounds_changed = function() {
				var a = this.rtpmap.gmap.getBounds();
				if (a && !a.equals(this.bounds)) this.bounds = a,
				this.update_viewport()
			};
			this._clusterize_markers = function(a, c) {
				for (var d = a.length - 1; d != -1; --d) {
					for (var f = a[d], g = f.getPosition(), h = this.overlay.fromLatLngToDivPixel(g), k = c.length - 1; k != -1; --k) if (c[k].contains(h)) {
						c[k].addMarker(f);
						break
					}
					k == -1 && c.push(new rtp.gmap.cmanager.cluster(this, g, h, [f]))
				}
			};
			this._compute_clusters = function(a) {
				this._clusterize_markers(this.markers, this.state.clusters[a] = [])
			};
			this.addMarkers = function(a) {
				this.markers = this.markers.concat(a);
				for (var c in this.state.clusters) this._clusterize_markers(a, this.state.clusters[c]);
				this.bounds && this.update_viewport()
			};
			this.addMarker = function(a) {
				this.addMarkers([a])
			};
			this.getStyles = function() {
				return this.styles
			};
			this.draw = function() {
				this.bounds = this.rtpmap.gmap.getBounds();
				if (this.zoom == null) return alert("assertion - draw - zoom");
				if (this.bounds == null) return alert("assertion - draw - bounds");
				this.state.clusters[this.zoom] || this._compute_clusters(this.zoom);
				this.zoomed = false;
				this.update_viewport()
			};
			this.update_viewport = function() {
				this.viewport = this.bounds;
				if (this.zoom == null) return alert("assertion - update viewport - zoom");
				if (this.bounds == null) return alert("assertion - update viewport - bounds");
				if (this.viewport == null) return alert("assertion - update viewport - viewport");
				var a = this.viewport.getNorthEast(),
				c = this.viewport.getSouthWest();
				if (a.lng() != 180 && c.lng() != -180) a = this.overlay.fromLatLngToDivPixel(a),
				c = this.overlay.fromLatLngToDivPixel(c),
				a = new google.maps.Point(a.x + this.margin, a.y - this.margin),
				c = new google.maps.Point(c.x - this.margin, c.y + this.margin),
				c = this.overlay.fromDivPixelToLatLng(c),
				a = this.overlay.fromDivPixelToLatLng(a),
				this.viewport = new google.maps.LatLngBounds(c, a);
				this.update_ui()
			};
			this.update_ui = function() {
				if (!this.zoomed) {
					if (this.zoom == null) return alert("assertion - update interface - zoom");
					if (this.bounds == null) return alert("assertion - update interface - bounds");
					if (this.viewport == null) return alert("assertion - update interface - viewport");
					for (var a = this.state.clusters[this.zoom] || [], c = a.length - 1; c != -1; --c) {
						var d = a[c].getLocation();
						if (!a[c].location.equals(d)) a[c].shown = null;
						a[c].location = d
					}
					if (this.viewport && a) for (c = a.length - 1; c != -1; --c) if (a[c].location = a[c].getLocation(), this.viewport.contains(a[c].center)) {
						if (a[c].shown != true) a[c].show(),
						a[c].shown = true
					} else if (a[c].shown != false) a[c].hide(),
					a[c].shown = false
				}
			};
			this.toString = function() {
				return "rtp.gmap.clusters"
			}
		}).call(rtp.gmap.cmanager.manager.prototype);
		if (!window.rtp) window.rtp = {};
		if (!window.rtp.gmap) window.rtp.gmap = {};
		if (!window.rtp.gmap.cmanager) window.rtp.gmap.cmanager = {};
		rtp.gmap.cmanager.projection = function(a) {
			this.mm = a;
			google.maps.OverlayView.call(this);
			this.setMap(a.rtpmap.gmap)
		};
		rtp.lazyload("gmap",
		function() {
			rtp.gmap.cmanager.projection.prototype = new google.maps.OverlayView; (function() {
				this.fromLatLngToDivPixel = function(a) {
					return this.getProjection().fromLatLngToDivPixel(a)
				};
				this.fromDivPixelToLatLng = function(a) {
					return this.getProjection().fromDivPixelToLatLng(a)
				};
				this.draw = function() {
					this.mm.draw()
				};
				this.toString = function() {
					return "rtp.gmap.cmanager.projection"
				}
			}).call(rtp.gmap.cmanager.projection.prototype)
		});
		if (!window.rtp) window.rtp = {};
		if (!window.rtp.gmap) window.rtp.gmap = {};
		rtp.gmap.geocoder = function() {
			this.inited = false;
			this._init()
		}; (function() {
			this._init = function() {
				if (!this.inited) this.inited = true,
				this.geocoder = new google.maps.Geocoder
			};
			this.resolve = function(a, c) {
				this.geocoder.geocode({
					address: a
				},
				function(a) {
					if (!a || a.length == 0) return c(null);
					var f = a[0].geometry.bounds || a[0].geometry.viewport,
					g = a[0].geometry.location;
					c({
						lat: g.lat(),
						lng: g.lng(),
						bounds: f,
						data: a
					})
				})
			};
			this.toString = function() {
				return "rtp.gmap.geocoder"
			}
		}).call(rtp.gmap.geocoder.prototype);
		if (!window.rtp) window.rtp = {};
		rtp.slider = function(a, c) {
			this.el = jQuery(a);
			this.user_actions = 0;
			this.inited = this.autoslider = false;
			this.nav = {
				prev: jQuery(),
				next: jQuery()
			};
			this.queue = [];
			this.cur = {};
			this.nxt = {};
			this.prv = {};
			this.tmp = {};
			this.conf = jQuery.extend({
				autoSlide: false,
				autoSlideAction: "next",
				autoSlideInterval: 7E3,
				firstAutoSlideDelay: false,
				resumeAutoSlideDelay: false,
				autoSlideStopOnAction: false,
				autoSlidePauseOnMouseOver: true,
				crossLinking: false,
				crossLinkingStrictCheck: false,
				navigationArrows: false,
				navigationArrowAttach: "wrapper",
				navigationArrowPosition: "default",
				navigationArrowPrevText: "&#171; left",
				navigationArrowNextText: "right &#187;",
				firstSlideToLoad: 0,
				slideEaseDuration: 1E3,
				slideEaseFunction: "easeInOutExpo",
				slideVisible: 1,
				slideMargin: 0,
				fluidWidth: false,
				dimension: false,
				autoAdjustDimension: true,
				autoAdjustEaseDuration: "inherit",
				autoAdjustEaseFunction: "inherit",
				mouseSwipe: false,
				touchSwipe: false,
				mouseSwipeLive: false,
				touchSwipeLive: false,
				mouseSwipeThreshold: 40,
				touchSwipeThreshold: 40,
				touchSwipeTolerance: 0,
				mouseSwipeInvert: false,
				touchSwipeInvert: false,
				keyboardNavigation: false,
				keyboardNavigationPrev: 37,
				keyboardNavigationNext: 39,
				carousel: false,
				vertical: false,
				setFloat: true
			},
			c);
			this.tmpl = {
				"class-next": "next",
				"class-current": "current",
				"class-previous": "previous",
				"class-panel": "panel",
				"class-arrows": "arrows",
				"class-container": "panel-container",
				"cross-link-prefix": "slide-",
				"sel-nav-prev": ".rtp-nav-prev A",
				"sel-nav-next": ".rtp-nav-next A",
				"arrow-prev": ['<div class="rtp-nav-prev"><a href="javascript:void(0)">', "</a></div>"],
				"arrow-next": ['<div class="rtp-nav-next"><a href="javascript:void(0)">', "</a></div>"],
				"wrap-all": '<div class="rtp-slider-wrapper"></div>'
			};
			this.conf.hookBeforeInit && this.conf.hookBeforeInit.call(this);
			this.tmpl["sel-panel"] = "." + this.tmpl["class-panel"];
			this.tmpl["sel-current"] = "." + this.tmpl["class-current"];
			this.tmpl["sel-container"] = "." + this.tmpl["class-container"];
			this.slides = this.el.find(this.tmpl["sel-panel"]);
			this._init()
		}; (function() {
			function a(a, d) {
				var f = {};
				f[a] = d;
				return f
			}
			this.__size = function(a, d) {
				return this.conf.vertical ^ d ? jQuery(this.panels[a]).outerHeight() : jQuery(this.panels[a]).outerWidth()
			};
			this.__float = function(a) {
				return this.conf.vertical ^ a ? "none": "left"
			};
			this.__sizestr = function(a) {
				return this.conf.vertical ^ a ? "height": "width"
			};
			this.__margin = function(a) {
				return this.conf.vertical ^ a ? "margin-top": "margin-left"
			};
			this._init = function() {
				if (!this.inited) {
					this.inited = true;
					this.el.wrapAll(this.tmpl["wrap-all"]);
					this.wrapper = this.el.parent();
					this.conf.keyboardNavigation && jQuery(document).keydown(jQuery.proxy(function(a) {
						if (a.altKey || a.ctrlKey || a.metaKey || a.shiftKey) return true;
						switch (a.which) {
						case this.conf.keyboardNavigationPrev:
							this.go_prev();
							break;
						case this.conf.keyboardNavigationNext:
							this.go_next()
						}
					},
					this));
					var a = this.conf.firstSlideToLoad || 0;
					if (this.conf.crossLinking && location.hash && location.hash.match(".*?" + this.tmpl["cross-link-prefix"] + "([0-9]+)") && (!this.conf.crossLinkingStrictCheck || RegExp.$1 - 1 >= this.smin && RegExp.$1 <= this.smax)) a = RegExp.$1 - 1;
					this.smin = 0;
					if (this.conf.carousel) {
						var d = this.el.find(this.tmpl["sel-panel"] + ":not(:first-child)").clone(),
						f = this.el.find(this.tmpl["sel-panel"] + ":not(:last-child)").clone();
						f.appendTo(this.el).addClass("cloned");
						d.prependTo(this.el).addClass("cloned");
						this.smin += f.length
					}
					this.panels = this.el.find(this.tmpl["sel-panel"]);
					this.panels.wrapAll('<div class="' + this.tmpl["class-container"] + '"></div>');
					this.cur = this.normalize_slide(a);
					this.conf.fluidWidth || this._calculate();
					this.el.css("overflow", "hidden");
					this._update_ui();
					if (this.conf.fluidWidth) {
						var g = this,
						h = new rtp.multievent(function() {
							g.panels.css("display", "block");
							jQuery(self).bind("resize",
							function() {
								var a = parseFloat(g.wrapper.css(g.__sizestr(false)));
								if (a == g.dimension) return true;
								g.panels.css(g.__sizestr(false), a + "px");
								g.el.css(g.__sizestr(true), g.__size(g.cur.panel, true));
								g.dimension = parseFloat(g.wrapper.css(g.__sizestr(false)));
								if (a < g.dimension) g.panels.css(g.__sizestr(false), g.dimension + "px"),
								g.el.css(g.__sizestr(true), g.__size(g.cur.panel, true)),
								g.dimension = parseFloat(g.wrapper.css(g.__sizestr(false)));
								g._calculate()
							});
							jQuery(self).trigger("resize")
						}),
						k = {};
						jQuery("IMG", this.el).each(function() {
							var a = this;
							if (!k[a.src] && (k[a.src] = true, !this.complete && !(this.readyState === 4 || this.readyState === "complete") || !(this.width != 0 || this.height != 0))) {
								var c = h.prerequisite();
								jQuery(this).bind("load",
								function() {
									k[a.src] = false;
									c()
								})
							}
						});
						h.finish()
					}
					this.conf.mouseSwipe && (this.el.bind("dragstart", jQuery.proxy(function(a) {
						this.mouseSwipeStart = this.conf.vertical ? a.pageY: a.pageX
					},
					this)), this.el.bind("mousedown", jQuery.proxy(function(a) {
						this.mouseSwipeStart = this.conf.vertical ? a.pageY: a.pageX
					},
					this)), a = this.conf.mouseSwipeLive ? "mousemove": "mouseup", this.el.bind(a, jQuery.proxy(function(a) {
						if (!this.mouseSwipeStart) return false;
						a = this.conf.vertical ? a.pageY: a.pageX;
						a -= this.mouseSwipeStart;
						var c = this.conf.mouseSwipeThreshold || 40,
						d = this.conf.mouseSwipeInvert ? this.go_prev: this.go_next,
						f = this.conf.mouseSwipeInvert ? this.go_next: this.go_prev;
						if (a < 0 - c) d.call(this),
						this.mouseSwipeStart = false;
						else if (a > 0 + c) f.call(this),
						this.mouseSwipeStart = false
					},
					this)), this.el.bind("mouseup", jQuery.proxy(function() {
						this.mouseSwipeStart = false
					},
					this)), this.el.bind("mouseout", jQuery.proxy(function() {
						this.mouseSwipeStart = false
					},
					this)));
					if (this.conf.touchSwipe) {
						var m = jQuery(document);
						this.el.bind("touchstart", jQuery.proxy(function(a) {
							var c = a.originalEvent;
							if (c.touches && c.touches.length > 1 || c.changedTouches && c.changedTouches.length > 1) return this.touchStart = false;
							this.scrollTop = m.scrollTop();
							this.scrollLeft = m.scrollLeft();
							a = a.originalEvent.touches[0] || a.originalEvent.changedTouches[0];
							this.touchSwipeStart = this.conf.vertical ? a.clientY: a.clientX
						},
						this));
						var a = this.conf.touchSwipeLive ? "touchmove": "touchend",
						w = function(a) {
							if (!this.touchSwipeStart) return false;
							var c = this.conf.touchSwipeTolerance || 0;
							if (Math.abs(this.scrollTop - m.scrollTop()) > c) return false;
							if (Math.abs(this.scrollLeft - m.scrollLeft()) > c) return false;
							c = a.originalEvent;
							if (c.touches && c.touches.length > 1 || c.changedTouches && c.changedTouches.length > 1) return this.touchStart = false;
							var a = a.originalEvent.touches[0] || a.originalEvent.changedTouches[0],
							a = this.conf.vertical ? a.clientY: a.clientX,
							c = this.conf.touchSwipeThreshold || 40,
							d = this.conf.touchSwipeInvert ? this.go_prev: this.go_next,
							f = this.conf.touchSwipeInvert ? this.go_next: this.go_prev;
							if (a < this.touchSwipeStart - c) d.call(this),
							this.touchSwipeStart = false;
							else if (a > this.touchSwipeStart + c) f.call(this),
							this.touchSwipeStart = false
						};
						this.el.bind("touchend", jQuery.proxy(function(a) {
							a.preventDefault();
							w.call(this, a);
							this.touchSwipeStart = false
						},
						this))
					}
					if (this.conf.navigationArrows) {
						this.wrapper.addClass(this.tmpl["class-arrows"]);
						a = this.el.prepend;
						d = this.el.append;
						switch (this.conf.navigationArrowPosition.substr(0, 1)) {
						case "o":
							a = this.el.append;
							d = this.el.prepend;
							break;
						case "p":
							d = this.el.prepend;
							break;
						case "a":
							a = this.el.append
						}
						f = this.conf.navigationArrowAttach.substring(0, 1) == "p" ? this.panels: this.wrapper;
						this.conf.navigationArrowPrevText && a.call(f, this.tmpl["arrow-prev"][0] + this.conf.navigationArrowPrevText + this.tmpl["arrow-prev"][1]);
						this.conf.navigationArrowNextText && d.call(f, this.tmpl["arrow-next"][0] + this.conf.navigationArrowNextText + this.tmpl["arrow-next"][1]);
						this.nav.prev = this.wrapper.find(this.tmpl["sel-nav-prev"]);
						this.nav.next = this.wrapper.find(this.tmpl["sel-nav-next"]);
						this.nav.prev && this.nav.prev.click(jQuery.proxy(function() {
							this.go_prev.call(this);
							return false
						},
						this));
						this.nav.next && this.nav.next.click(jQuery.proxy(function() {
							this.go_next.call(this);
							return false
						},
						this))
					}
					this.conf.autoSlide && this.el.ready(jQuery.proxy(function() {
						this.conf.autoSlidePauseOnMouseOver && this.el.parent().hover(jQuery.proxy(function() {
							if (!this.conf.autoSlidePauseOnMouseOver) return true;
							this.autoslide(false)
						},
						this), jQuery.proxy(function() {
							if (!this.conf.autoSlidePauseOnMouseOver) return true;
							this.autoslide(true, this.conf.resumeAutoSlideDelay != false ? this.conf.resumeAutoSlideDelay: this.conf.autoSlideInterval)
						},
						this));
						this.autoslide(true, this.conf.firstAutoSlideDelay != false ? this.conf.firstAutoSlideDelay: this.conf.autoSlideInterval)
					},
					this));
					this.conf.hookAfterInit && this.conf.hookAfterInit.call(this)
				}
			};
			this._update_navigation = function() {
				var a = this.nav.prev,
				d = this.nav.next;
				if (this.conf.carousel) a.is(":visible") || a.stop(true, true).show(),
				d.is(":visible") || d.stop(true, true).show();
				else {
					var f = this.conf.slideEaseDuration,
					g = isNaN(this.nxt.panel) ? this.cur.panel: this.nxt.panel;
					g <= this.smin ? a.is(":visible") && a.stop(true, true).fadeOut(f) : a.is(":visible") || a.stop(true, true).fadeIn(f);
					g + this.conf.slideVisible > this.smax ? d.is(":visible") && d.stop(true, true).fadeOut(f) : d.is(":visible") || d.stop(true, true).fadeIn(f)
				}
			};
			this._update_ui = function() {
				this._update_navigation();
				jQuery(this.panels.get(this.prv.panel)).removeClass(this.tmpl["class-current"]);
				jQuery(this.panels.get(this.cur.panel)).addClass(this.tmpl["class-current"]);
				if (this.conf.crossLinking) location.hash = this.tmpl["cross-link-prefix"] + (this.cur.slide + 1);
				this.el.css(this.__sizestr(true), this.__size(this.cur.panel, true) + "px");
				this.conf.hookAfterUiUpdate && this.conf.hookAfterUiUpdate.call(this)
			};
			this._animate_stop_after = function() {
				this._update_ui();
				this._calculate(); ! isNaN(this.nxt.panel) && this.tmpl["class-next"] && jQuery(this.panels[this.nxt.panel]).removeClass(this.tmpl["class-next"]);
				this.animation = false;
				this.nxt = {};
				this.queue.length > 0 ? this.animate() : this.autoslider != false && this.autoslide(true, this.conf.autoSlideInterval)
			};
			this._animate_stop_before = function(c) {
				if (this.conf.carousel && (this.nxt.panel < this.smin || this.nxt.panel > this.smax)) {
					for (; this.nxt.panel < this.smin;) this.nxt.panel += this.slides.length;
					for (; this.nxt.panel > this.smax;) this.nxt.panel -= this.slides.length;
					jQuery(this.tmpl["sel-container"], this.el).css(a(this.__margin(), this.offset[this.nxt.panel]))
				}
				this.cur = this.normalize_panel(this.nxt.panel);
				this._update_ui(); (!this.conf.hookAfterSliding ? true: this.conf.hookAfterSliding.call(this, jQuery.proxy(this._animate_stop_after, this), c)) === true && this._animate_stop_after(c)
			};
			this._animate_start = function(c) {
				this._update_ui();
				c = new rtp.multievent(jQuery.proxy(this._animate_stop_before, this, c)); ! isNaN(this.nxt.panel) && this.tmpl["class-next"] && jQuery(this.panels[this.nxt.panel]).addClass(this.tmpl["class-next"]);
				jQuery(this.tmpl["sel-container"], this.el).animate(a(this.__margin(), this.offset[this.nxt.panel]), this.conf.slideEaseDuration, this.conf.slideEaseFunction, c.prerequisite());
				if (this.conf.autoAdjustDimension) {
					var d = this.conf.autoAdjustEaseFunction === "inherit" ? this.conf.slideEaseFunction: this.conf.autoAdjustEaseFunction,
					f = this.conf.autoAdjustEaseDuration === "inherit" ? this.conf.slideEaseDuration: this.conf.autoAdjustEaseDuration,
					g = {};
					g[this.__sizestr(true)] = this.__size(this.nxt.panel, true) + "px";
					this.el.animate(g, f, d, c.prerequisite())
				}
			};
			this.go = function(a) {
				a === "p" ? this.go_prev() : this.go_next()
			};
			this.go_next = function() {
				this.user_actions++;
				this.action("next");
				this.animate()
			};
			this.go_prev = function() {
				this.user_actions++;
				this.action("prev");
				this.animate()
			};
			this.autoslide = function() {
				if (arguments.length > 0 && arguments[0] == false || this.conf.autoSlideStopOnAction && this.user_actions) this.autoslider && this.autoslider != true && window.clearTimeout(this.autoslider),
				this.autoslider = false;
				else if (this.autoslider == false || this.autoslider == true) {
					var a = this.conf.autoSlideAction;
					jQuery.isFunction(a) && (a = a.call(this));
					arguments.length > 2 && (a = arguments[2]);
					this.autoslider = window.setTimeout(jQuery.proxy(function() {
						this.action(a);
						this.autoslider = true
					},
					this), arguments.length > 1 ? arguments[1] : 0)
				}
			};
			this.normalize_slide = function(a) {
				return this.normalize_panel(a + this.smin)
			};
			this.normalize_panel = function(a) {
				a > this.panels.length - this.conf.slideVisible ? a = this.panels.length - this.conf.slideVisible: a < 0 && (a = 0);
				var d = {
					panel: a
				};
				if (this.conf.carousel) {
					if (a > this.smax) a = this.smin;
					if (a < this.smin) a = this.smax
				}
				d.slide = a - this.smin;
				return d
			};
			this.show_slide = function(a) {
				return this.show_panel(this.conf.carousel ? a + 1 : a)
			};
			this.show_panel = function(a) {
				this.tmp = this.normalize_panel(a);
				this.animation ? window.console && console.log("animation look") : this.cur.panel == this.tmp.panel ? window.console && console.log("no panel change detected") : (this.animation = true, this.prv = this.cur, this.nxt = this.tmp, a = {},
				(!this.conf.hookBeforeSliding ? true: this.conf.hookBeforeSliding.call(this, jQuery.proxy(this._animate_start, this, a), a)) === true && this._animate_start(a))
			};
			this.action = function() {
				for (var a = 0; a < arguments.length; a++) {
					var d = arguments[a].toString();
					if (d.match(/^s([\+\-])/)) {
						for (var d = Math.abs(d.substring(0, 1)), f = RegExp.$1 == "-" ? "p": "n"; d >= this.slides.length;) d -= this.slides.length;
						for (var g = 0; g < d; g++) this.queue.push(f)
					} else isNaN(d) || d.match(/^([\+\-])/) ? this.queue.push(d) : this.queue.push(this.normalize_slide(parseInt(d)).panel)
				}
				this.animate();
				if (this.autoslider && this.autoslider != true) window.clearTimeout(this.autoslider),
				this.autoslider = true
			};
			this.animate = function() {
				if (this.animation) return false;
				for (; this.queue.length > 0;) {
					var a = this.queue.shift().toString();
					this.tmp.panel = this.cur.panel;
					this.tmp.slide = this.cur.slide;
					switch (a.substring(0, 1)) {
					case "-":
						for (a = Math.abs(parseInt(a)); a >= this.slides.length;) a -= this.slides.length;
						this.tmp = this.normalize_panel(this.cur.panel - a);
						break;
					case "+":
						for (a = parseInt(a); a >= this.slides.length;) a -= this.slides.length;
						this.tmp = this.normalize_panel(this.cur.panel + a);
						break;
					case "n":
						if (!this.conf.carousel && this.tmp.panel >= this.smax) {
							if (!this.autoslider) break;
							if (this.autoslider == true) continue;
							this.tmp = this.conf.hookSlideShowEnd ? this.normalize_slide(this.conf.hookSlideShowEnd.call(this)) : this.normalize_slide(this.smin)
						} else this.tmp = this.normalize_panel(this.tmp.panel + 1);
						break;
					case "p":
						if (!this.conf.carousel && this.tmp.panel <= this.smin) {
							if (!this.autoslider) break;
							if (this.autoslider == true) continue;
							this.tmp = this.conf.hookSlideShowEnd ? this.normalize_slide(this.conf.hookSlideShowEnd.call(this)) : this.normalize_slide(this.smax)
						} else this.tmp = this.normalize_panel(this.tmp.panel - 1);
						break;
					case "f":
						this.tmp = this.normalize_panel(this.smin);
						break;
					case "l":
						this.tmp = this.normalize_panel(this.smax);
						break;
					default:
						if (a.match(/([0-9]+)/)) this.tmp = this.normalize_panel(parseInt(RegExp.$1));
						else return alert("action not implemented: " + a)
					}
					a = {};
					if (this.cur.slide != this.tmp.slide) return this.show_panel(this.tmp.panel, true); (!this.conf.hookAfterSliding ? true: this.conf.hookAfterSliding.call(this, jQuery.proxy(this._animate_stop_after, this), a)) === true && this._animate_stop_after(a)
				}
			};
			this.removeSlides = function(a, d) {
				a <= this.cur.slide && this.cur.slide < d && window.console && console.log("removing current slide");
				for (var f = ["panel", "slide"], g = ["cur", "nxt", "prv"], h = f.length; --h != -1;) for (var k = g.length; --k != -1;) this[g[k]][f[h]] >= a && (this[g[k]][f[h]] -= d - a);
				this.slides.slice(a, d).remove();
				f = this.slides.get();
				f.splice(a, d - a);
				this.slides = jQuery(f);
				this.panels = this.el.find(this.tmpl["sel-panel"]);
				this._calculate();
				return this
			};
			this.insertSlides = function(a, d) {
				for (var f = ["panel", "slide"], g = ["cur", "nxt", "prv"], h = f.length; --h != -1;) for (var k = g.length; --k != -1;) this[g[k]][f[h]] >= d && (this[g[k]][f[h]] += a.length);
				f = this.slides.get();
				d >= this.panels.length ? jQuery(f[d - 1]).after(a) : jQuery(f[d]).before(a);
				this.slides = jQuery(f.slice(0, d).concat(a.get(), f.slice(d)));
				this.panels = this.el.find(this.tmpl["sel-panel"]);
				this._calculate();
				return this
			};
			this._calculate = function() {
				this.smax = this.smin + this.slides.length - 1;
				this.conf.setFloat && this.panels.css("float", this.__float());
				var a = 0;
				this.offset = [0];
				this.size = [];
				for (var d = 0; d < this.panels.length; d++) this.offset.push(a -= this.size[d] = this.__size(d) + this.conf.slideMargin);
				a = this.__size(0, false);
				this.conf.slideVisible > 1 && (a = this.conf.slideVisible * a + (this.conf.slideVisible - 1) * this.conf.slideMargin);
				var d = jQuery(this.tmpl["sel-container"], this.wrapper),
				f = {};
				f[this.__margin()] = this.offset[this.cur.panel] + "px";
				f[this.__sizestr()] = 0 - this.offset[this.panels.length] + "px";
				d.css(f);
				this.el.css(this.__sizestr(false), a + "px")
			}
		}).call(rtp.slider.prototype);
		jQuery.fn.rtpSlider = function(a) {
			return this.each(function() {
				jQuery(this).data("rtp-slider") || jQuery(this).data("rtp-slider", new rtp.slider(this, a))
			})
		};
		if (!window.rtp) window.rtp = {};
		rtp.imgzoom = function(a, c) {
			if (a.tagName != "IMG") return false;
			this.image = jQuery(a);
			this.inited = false;
			this.conf = jQuery.extend({},
			c);
			this.tmpl = {
				viewer: '<div class="rtp-imgzoom-viewer" />',
				"wrap-all": '<div class="rtp-imgzoom-wrapper" />'
			};
			this._init()
		}; (function() {
			this._animation_do = function() {
				var a = this.stat.xto,
				c = this.stat.yto;
				this.stat.xcur < a ? a = this.stat.xcur + Math.round((a - this.stat.xcur) / 15 + 0.5) : this.stat.xcur > a && (a = this.stat.xcur - Math.round((this.stat.xcur - a) / 15 + 0.5));
				this.stat.ycur < c ? c = this.stat.ycur + Math.round((c - this.stat.ycur) / 15 + 0.5) : this.stat.ycur > c && (c = this.stat.ycur - Math.round((this.stat.ycur - c) / 15 + 0.5));
				var d = Math.round(a * this.stat.xcor),
				f = Math.round(c * this.stat.ycor);
				this.viewer.css("background-position", "-" + d + "px -" + f + "px");
				if (a == this.stat.xto && c == this.stat.yto) window.clearInterval(this.stat.animate),
				this.stat.animate = false;
				this.stat.xcur = a;
				this.stat.ycur = c
			};
			this._animation_start = function() {
				if (!this.stat.animate) this.stat.animate = window.setInterval(jQuery.proxy(this._animation_do, this), 13)
			};
			this._animation_to = function(a) {
				var c = this.viewer.offset();
				this.stat.yto = a.pageY - Math.round(c.top);
				this.stat.xto = a.pageX - Math.round(c.left);
				this._animation_start()
			};
			this.zoom_start = function(a) {
				this.image.css("visibility", "hidden");
				this.shown = true;
				var c = jQuery.isFunction(this.conf.src) ? this.conf.src.call(this) : this.conf.src;
				rtp.preload(c, jQuery.proxy(function(d) {
					if (!d) return false;
					this.stat.wfull = d.width;
					this.stat.hfull = d.height;
					this.stat.xcor = (this.stat.wfull - this.stat.wview) / (this.stat.wview - 1);
					this.stat.ycor = (this.stat.hfull - this.stat.hview) / (this.stat.hview - 1);
					d = this.viewer.show().offset();
					this.stat.ycur = a.pageY - Math.round(d.top);
					this.stat.xcur = a.pageX - Math.round(d.left);
					if (!this.shown) return false;
					var d = Math.round(this.stat.xcur * this.stat.xcor),
					f = Math.round(this.stat.ycur * this.stat.ycor);
					this.viewer.css({
						display: "block",
						background: "url(" + c + ")",
						"background-repeat": "no-repeat",
						"background-position": "-" + d + "px -" + f + "px"
					})
				},
				this))
			};
			this.zoom_stop = function() {
				this.image.css("visibility", "visible");
				this.shown = false;
				this.viewer.css({
					display: "none",
					background: "none"
				})
			};
			this._init = function() {
				if (!this.image.get(0).complete) return jQuery(this.image).load(jQuery.proxy(this._init, this));
				if (!this.inited) {
					this.inited = true;
					this.shown = false;
					this.image.wrapAll(this.tmpl["wrap-all"]);
					this.wrapper = this.image.parent();
					this.viewer = jQuery(this.tmpl.viewer);
					this.image.before(this.viewer);
					this.zoomer = {};
					var a = this.image.width(),
					c = this.image.height();
					this.viewer.css({
						width: a,
						height: c,
						display: "none",
						position: "absolute"
					});
					this.stat = {
						animate: false,
						xcur: 0,
						xto: 0,
						ycur: 0,
						yto: 0,
						wfull: a * 1,
						hfull: c * 1,
						wview: a * 1,
						hview: c * 1
					};
					this.stat.xcor = (this.stat.wfull - this.stat.wview) / (this.stat.wview - 1);
					this.stat.ycor = (this.stat.hfull - this.stat.hview) / (this.stat.hview - 1);
					var d = false,
					f = jQuery.proxy(this.zoom_stop, this),
					g = jQuery.proxy(this.zoom_start, this);
					this.wrapper.click(function(a) {
						a.stopPropagation();
						a.preventDefault();
						g(a)
					});
					this.viewer.click(function(a) {
						a.stopPropagation();
						a.preventDefault();
						f(a)
					});
					this.wrapper.mouseout(function(a) {
						d = window.setTimeout(function() {
							f(a)
						},
						1E3)
					});
					this.wrapper.mouseover(function() {
						d != false && (window.clearTimeout(d), d = false)
					});
					this.viewer.mousemove(jQuery.proxy(this._animation_to, this));
					this.conf.hookAfterInit && this.conf.hookAfterInit.call(this)
				}
			}
		}).call(rtp.imgzoom.prototype);
		jQuery.fn.rtpImgZoom = function(a) {
			return this.each(function() {
				jQuery(this).data("rtp-imgzoom", new rtp.imgzoom(this, a))
			})
		};
		
		
		jQuery(function() {
			var a = jQuery("DIV.data-specifications");
			jQuery("UL.specification", a).each(function() {
				for (var a = jQuery(this), d = jQuery("LI", a), f = jQuery('<ul class="specification first"></ul>'), g = jQuery('<ul class="specification last"></ul>'), h = d.length, k = 0; k < h; k++) k < h / 2 ? f.append(d.get(k)) : g.append(d.get(k));
				d = jQuery('<div class="clumnized" />');
				h > 1 ? a.replaceWith(d.append(f, g)) : h > 0 && a.replaceWith(d.append(f))
			})
		});
		jQuery(function() {
			var a = jQuery("DIV.overview DIV.bike DIV.features");
			jQuery("UL", a).each(function() {
				for (var a = jQuery(this), d = jQuery("LI", a), f = jQuery('<ul class="column-first column" style="float:left; width:50%;"></ul>'), g = jQuery('<ul class="column-last column" style="float:left; width:50%;"></ul>'), h = d.length, k = 0; k < h; k++) k < h / 2 ? f.append(d.get(k)) : g.append(d.get(k));
				d = jQuery('<div class="clumnized" />');
				h > 1 ? a.replaceWith(d.append(f, g)) : h > 0 && a.replaceWith(d.append(f))
			})
		});
		jQuery(window).load(function() {
			function a(a, d) {
				var f = [];
				a.find(d).each(function() {
					f.push(jQuery(this).height())
				});
				var g = Math.max.apply(this, f);
				a.find(d).height(g)
			}
			jQuery("div.overview div.seriesImages").each(function() {
				a(jQuery(this), "div.series")
			})
		});
		jQuery(function() {
			var a = jQuery("div.seriesText").children(),
			a = a.length * a.width() + a.length * 1 + 1;
			jQuery("div.readmore").width(a)
		});
		if (typeof RTP === "undefined") window.RTP = {};
		jQuery(function() {
			RTP.collapsiblesContent = function(a) {
				var c = a(".seriesText", ".product");
				return {
					init: function() {
						c.each(function() {
							var c = a(".series .desc", a(this)),
							f = 5 * parseInt(a("p", c).css("line-height"), 10),
							g = a(".readmore a.more"),
							h = 0,
							k = false;
							c.each(function() {
								var c = a(this).height();
								h = c > h ? c: h;
								k === false && (k = h > f)
							});
							k && (c.css("height", f), g.click(function() {
								a(c).animate({
									height: parseInt(c.css("height"), 10) === f ? h: f
								});
								a(".button-next").toggleClass("close")
							}))
						})
					}
				}
			} (jQuery);
			RTP.collapsiblesContent.init()
		});
		jQuery(function() {
			var a = jQuery("DIV.technology"),
			c,
			d,
			f = jQuery("DIV.container", a),
			g = false;
			f.each(function(a) {
				var k = jQuery(this),
				m = k.find("H3"),
				w = k.find("H4"),
				o = k.find("DIV.more");
				m.before('<div class="two-col"><div class="left"/><div class="right"/></div>');
				var r = k.find("DIV.two-col"),
				p = r.find("DIV.left"),
				u = r.find("DIV.right");
				p.append(m, w);
				u.append(o);
				o.show();
				k.find("DL").wrap('<div class="slidebox"/>');
				r.find("H3, H4, A").css("cursor", "pointer").click(function(k) {
					var m = jQuery(f.get(a));
					if (g == false && m.hasClass("container-closed")) {
						g = true;
						f.addClass("container-closed");
						Cufon.refresh("DIV.technology H3");
						Cufon.refresh("DIV.technology H4");
						var o = d.not(":visible"),
						p = c.filter(":visible"),
						w = m.find("DIV.slidebox"),
						r = m.find("DIV.right"),
						u = new window.rtp.multievent(function() {
							m.removeClass("container-closed");
							Cufon.refresh("DIV.technology H3");
							Cufon.refresh("DIV.technology H4");
							g = false
						});
						r.fadeOut(1E3);
						o.delay(800);
						o.fadeIn(1E3);
						p.delay(200);
						w.delay(200);
						p.animate({
							height: "toggle",
							opacity: "toggle"
						},
						1E3, u.prerequisite());
						w.animate({
							height: "toggle",
							opacity: "toggle"
						},
						1E3, u.prerequisite())
					}
					k.preventDefault()
				})
			});
			d = a.find("DIV.right");
			c = a.find("DIV.slidebox");
			d.first().hide();
			c.not(":first").hide();
			f.not(":first").addClass("container-closed")
		});
		jQuery(function() {
			var a = false,
			c, d = jQuery("#sizing-tool"),
			f = jQuery("DIV.container", d);
			d.find("DIV.slidebox").wrap('<DIV class="slidebox-outer"/>');
			f.each(function() {
				var d = jQuery(this),
				g = d.find("DIV.content"),
				h = d.find("DIV.headline");
				g.find("DIV.slidebox-outer");
				h.wrapInner("<div/>");
				jQuery(">DIV", h).css("overflow", "hidden").css("cursor", "pointer").attr("class", "toggler").prepend('<A class="toggler" href="javascript:void(0)"/>').click(function() {
					if (a == false) {
						a = true;
						var g = c.filter(":visible"),
						h = d.find("DIV.slidebox-outer"),
						h = h.filter(function() {
							for (var a = 0; a < g.length; a++) if (g.get(a) === this) return false;
							return true
						});
						f.addClass("container-closed");
						Cufon.refresh("#sizing-tool DIV.container DIV.headline H3");
						Cufon.refresh("#sizing-tool DIV.container DIV.headline DIV.indicator SPAN");
						var k = new window.rtp.multievent(function() {
							a = false;
							h.parent().removeClass("container-closed");
							Cufon.refresh("#sizing-tool DIV.container DIV.headline H3");
							Cufon.refresh("#sizing-tool DIV.container DIV.headline DIV.indicator SPAN")
						});
						g.delay(100);
						h.delay(100);
						g.each(function() {
							jQuery(this).animate({
								height: "hide",
								opacity: "hide"
							},
							1E3, k.prerequisite())
						});
						h.each(function() {
							jQuery(this).animate({
								height: "show",
								opacity: "show"
							},
							1E3, k.prerequisite())
						});
						g.parent().find("DIV.headline A.toggler DIV.closer").each(function() {
							jQuery(this).animate({
								opacity: 0
							},
							1E3, k.prerequisite())
						});
						h.parent().find("DIV.headline A.toggler DIV.closer").each(function() {
							jQuery(this).animate({
								opacity: 1
							},
							1E3, k.prerequisite())
						});
						k.finish()
					}
					return false
				}).find(">A.toggler").prepend('<div class="closer"/>').prepend('<div class="opener"/>')
			});
			c = d.find("DIV.slidebox-outer");
			c.not(":first").hide().parent().addClass("container-closed").find("DIV.headline A.toggler DIV.closer").css("opacity", 0);
			var g = jQuery("#sizing-tool"),
			d = g.find("DIV.tabhead"),
			h = jQuery('<div class="service"/>').appendTo(d),
			k = g.find("DIV.tab-container");
			k.each(function(a) {
				var c = jQuery(this),
				d = c.find("H3.tabtitle").text(),
				f = jQuery('<a href="#" />').html(d).attr("title", d).addClass("tab-head-link").appendTo(h).click(function() {
					k.hide();
					c.show();
					g.find("A.tab-head-link").removeClass("cur");
					f.addClass("cur");
					Cufon.refresh("#sizing-tool DIV.service A");
					return false
				});
				a != 0 ? c.hide() : f.addClass("cur")
			})
		});
		jQuery(function() {
			console.log("data-tabs init");
			var a = jQuery("DIV.data-tabs"),
			c = a.find("> DIV");
			a.addClass("data-tabs-js");
			var d = jQuery('<div class="data-tab"><div class="headline"></div></div>').prependTo(a).find("DIV.headline"),
			f;
			c.each(function() {
				var a = jQuery(this),
				h = a.find("DIV.headline H1"),
				h = h.appendTo(d);
				h.wrapAll('<a href="javascript:void(0);"></a>');
				h.click(function() {
					f.removeClass("current");
					h.addClass("current");
					c.hide();
					a.show();
					Cufon.refresh("DIV.data-tabs H1")
				});
				a.hide()
			});
			f = d.find("> A > H1");
			c.find("DIV.headline").remove();
			d.find("> A > H1:eq(0)").click()
		});
		jQuery(function() {
			var a = jQuery("DIV.data-subtabs"),
			c = a.find("> DIV");
			a.addClass("data-subtabs-js");
			var d = jQuery('<div class="sub-navigation"></div>').prependTo(a),
			f;
			c.each(function(a) {
				var h = jQuery(this),
				k = h.find("> H3");
				a == 0 && k.addClass("first");
				k = k.appendTo(d);
				k.wrapAll('<a href="javascript:void(0);"></a>');
				k.click(function() {
					f.removeClass("current");
					k.addClass("current");
					c.hide();
					h.show()
				});
				h.hide()
			});
			f = d.find("> A > H3");
			c.find("DIV.subheadline").remove();
			d.find("> A > H3:eq(0)").click()
		});
		jQuery(function() {
			var a = RegExp(/\/videos\/(\w+)\.mp4$/),
			c = function(c) {
				a.exec(c) && (c = "http://content.bitsontherun.com/previews/" + RegExp.$1 + "-MFGUuTF2", jQuery("#rtp-movie IFRAME").attr("src", c))
			};
			jQuery("UL.showroom").each(function() {
				var a = jQuery(this),
				f = a.find(">LI"),
				g = f.find("A");
				g.each(function(c) {
					var f = jQuery(this).attr("href");
					/\.(jpg|png|gif)$/i.test(f) && rtp.preload(f);
					jQuery(this).data("rtp-imgzoom-link", f);
					f = jQuery("IMG:not(:visible)", this).attr("src");
					jQuery(this).attr("href", f);
					jQuery(this).click(function(f) {
						a.data("rtp-imgfader").show_image(c);
						f.preventDefault();
						return false
					})
				});
				if (f.length != 0) {
					var h = function(a) {
						return jQuery(this.el.find("A").get(this[a])).data("rtp-imgzoom-link")
					};
					a.rtpImgFader({
						effect: "fade",
						width: 950,
						height: 471,
						slicesVertical: 1,
						slideEaseDuration: 800,
						slideEaseFunction: "easeOutQuart",
						hookAfterInit: function() {
							g.each(function() {
								var a = jQuery(this).data("rtp-imgzoom-link");
								a.match(/\.mp4$/) && jQuery(this).attr("href", a)
							});
							this.fader.css({
								width: "950px",
								height: "471px"
							});
							jQuery(this.el).wrap('<div class="pointer" style="position:relative" />');
							var a = Math.floor(this.nxt / 8),
							c = this.nxt - a * 8;
							this.el.css({
								position: "relative"
							});
							this.el.pointer = jQuery('<img src="/fileadmin/templates/global/img/arrow-product.gif" class="pointer" />').css({
								left: 120 * c + 50 + "px",
								top: 102 * a + 2 + "px",
								position: "absolute"
							}).insertBefore(this.el);
							jQuery(this.el.find("A").get(this.cur)).data("rtp-imgzoom-link")
						},
						hookAfterFading: function() {
							a.data("rtp-imgfader").vertical.hide();
							var c = h.call(this, "cur"),
							f = this.image.data("rtp-imgzoom");
							c.match(/\.mp4$/) ? (f.movie.show(), this.image.hide(), f.zoom_in.hide()) : f.zoom_in.show();
							f.zoom_out.hide();
							return true
						},
						hookBeforeFading: function() {
							a.data("rtp-imgfader").vertical.show();
							var f = h.call(this, "cur"),
							g = h.call(this, "nxt"),
							k = this.image.data("rtp-imgzoom");
							k.movie.hide();
							this.image.show();
							k.zoom_in.hide();
							k.zoom_out.hide();
							f.match(/\.mp4$/) && k.movie.html('<div id="rtp-movie"><iframe frameborder="0" scrolling="auto" width="950" height="471"></iframe></div>');
							g.match(/\.mp4$/) ? (k.movie.css({
								width: "950px",
								height: "471px"
							}), c(g)) : rtp.preload(g);
							f = Math.floor(this.nxt / 8);
							this.el.pointer.animate({
								left: 120 * (this.nxt - f * 8) + 50 + "px",
								top: 103 * f + 2 + "px"
							},
							800, "easeOutExpo");
							return true
						}
					});
					var k = a.data("rtp-imgfader");
					k.image.rtpImgZoom({
						src: function() {
							return h.call(k, "cur")
						},
						hookAfterInit: function() {
							if (!window.locallang) window.locallang = {};
							locallang.showroom_zoom_in || (locallang.showroom_zoom_in = "Click image to zoom in");
							locallang.showroom_zoom_out || (locallang.showroom_zoom_out = "Click image to zoom out");
							this.movie = jQuery('<div class="rtp-movie"><div id="rtp-movie"><iframe frameborder="0" scrolling="auto" width="950" height="471"></iframe></div></div>').insertBefore(this.viewer);
							this.zoom_in = jQuery('<div class="rtp-imgzoom-info-zoomin">' + locallang.showroom_zoom_in + "</div>").insertBefore(this.viewer);
							this.zoom_out = jQuery('<div class="rtp-imgzoom-info-zoomout">' + locallang.showroom_zoom_out + "</div>").insertBefore(this.viewer);
							k.vertical.hide();
							k.slices.vertical.css("z-index", 99);
							var a = h.call(k, "cur");
							a && a.match(/\.mp4$/) ? (this.movie.css({
								width: "950px",
								height: "471px"
							}), c(a, {
								autostart: false
							}), this.movie.show(), k.image.hide(), this.zoom_in.hide()) : this.movie.hide()
						}
					})
				}
			})
		});
		jQuery(function() {
			var a = navigator.appName == "Microsoft Internet Explorer" && navigator.userAgent.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/) && parseFloat(RegExp.$1) >= 8,
			c = "DIV.current DD";
			a && (c += ", DIV.current DD cufoncanvas *");
			var d = function(d) {
				if (this.nxt.slide != this.cur.slide) {
					var f = jQuery(this.el).parent().find("SPAN.slide-dot-" + this.nxt.slide + " IMG"),
					g = jQuery(this.el).parent().find("SPAN.slide-dot-" + this.cur.slide + " IMG");
					f.animate({
						opacity: 1
					},
					this.conf.slideEaseDuration, "linear");
					g.animate({
						opacity: 0
					},
					this.conf.slideEaseDuration, "linear")
				}
				f = jQuery(this.el).find(c);
				if (f.length == 0) return d();
				var h = new window.rtp.multievent(d);
				a && (f = jQuery.grep(f,
				function(a) {
					var c = a.tagName.toUpperCase();
					if (c == "SHAPE") a.style.filter = "alpha(opacity=0)";
					return c == "DD"
				}));
				jQuery.each(f,
				function() {
					jQuery(this).animate({
						opacity: 0
					},
					400, "linear", h.prerequisite())
				})
			},
			f = function(d) {
				if (this.queue.length > 0) return d.call(this);
				var f = jQuery(this.el).find(c);
				if (f.length == 0) return d();
				var g = new window.rtp.multievent(d);
				if (a) f = jQuery.grep(f,
				function(a) {
					var c = a.tagName.toUpperCase();
					if (c == "SHAPE") a.style.filter = "alpha(opacity=80)";
					return c == "DD"
				}),
				jQuery.each(f,
				function() {
					jQuery(this).animate({
						opacity: 0.8
					},
					400, "linear", g.prerequisite())
				});
				else {
					var h = f.css("background-color").match(/rgba/) ? 1 : 0.8;
					jQuery.each(f,
					function() {
						jQuery(this).animate({
							opacity: h
						},
						400, "linear", g.prerequisite())
					})
				}
			},
			g = function() {
				if (! (this.slides.length < 2)) {
					for (var a = [], c = 0; c < this.slides.length; c++) a.push('<span class="slide-dot slide-dot-' + c + '" style="background:url(' + slide_dot_empty + ') no-repeat;"><a href="javascript:void(0);"><img src="' + slide_dot_full + '" width="8" height="8" alt="' + (c + 1) + "/" + this.slides.length + '" title="' + (c + 1) + "/" + this.slides.length + '"/></a></span>');
					jQuery('<div class="slide-dots">' + a.join("") + "</div>").appendTo(this.el.parent());
					for (c = 0; c < this.slides.length; c++) jQuery(this.el.parent()).find("DIV.slide-dots SPAN.slide-dot-" + c).click(jQuery.proxy(function() {
						this[0].action(this[1])
					},
					[this, c]));
					jQuery(this.el).parent().find("SPAN.slide-dot IMG").css({
						opacity: 0
					});
					jQuery(this.el).parent().find("SPAN.slide-dot-" + this.cur.slide + " IMG").css({
						opacity: 1
					});
					h.call(this, animation_opacity_stop, 0)
				}
			},
			h = function(a, c) {
				var d = jQuery(".rtp-nav-prev a", this),
				f = jQuery(".rtp-nav-next a", this);
				d && d.stop(true, false);
				f && f.stop(true, false);
				d && d.animate({
					opacity: a
				},
				c);
				f && f.animate({
					opacity: a
				},
				c)
			};
			jQuery(".rtp-slider").each(function() {
				var a = jQuery(".panel", this).show(),
				c = a.length > 1;
				jQuery(this).rtpSlider({
					carousel: true,
					vertical: false,
					crossLinking: false,
					firstAutoSlideDelay: 1E3,
					autoSlide: window.autoslide,
					autoSlideStopOnAction: true,
					autoSlidePauseOnMouseOver: true,
					navigationArrows: true,
					navigationArrowPrevText: '<img src="/fileadmin/templates/global/img/slide-arrow-left.gif" width="10" height="21">',
					navigationArrowNextText: '<img src="/fileadmin/templates/global/img/slide-arrow-right.gif" width="10" height="21">',
					hookAfterInit: g,
					hookAfterSliding: f,
					hookBeforeSliding: d,
					firstSlideToLoad: window.randomslide ? Math.floor(Math.random() * a.length) : 0
				});
				c ? jQuery("div.rtp-slider-wrapper").hover(function() {
					h.call(this, animation_opacity_start, animation_time)
				},
				function() {
					h.call(this, animation_opacity_stop, animation_time)
				}) : jQuery("div.rtp-slider-wrapper").find(".rtp-nav-prev a, .rtp-nav-next a").hide();
				a.each(function() {
					var a = this;
					jQuery(a).find("dt img").first().click(function() {
						var c = jQuery(a).find("dd div.more a:first").attr("href");
						if (c) window.location.pathname = c
					})
				})
			})
		});
		function cufonize(a, c, d, f) {
			Cufon.replace(a, {
				fontFamily: "BMC HelveticaNeueLT Pro " + c,
				textShadow: f ? "1px 1px " + f: "none",
				fontStretch: d + "%",
				letterSpacing: "0"
			})
		}
		jQuery.browser.msie && jQuery.browser.version == 9 && Cufon.set("engine", "canvas");
		jQuery(function() {
			if (typeof window.disableCufon == "undefined" || !window.disableCufon) {
				cufonize("H1,SPAN.language-title,H3.content,H4.content,DIV.news-item H3,DIV.showroom DIV.service A,#sizing-tool DIV.service A,DIV.overview UL.navigation,DIV.rtp-slider DIV.panel H2,DIV.option-packages H3", "95 Blk", 110);
				cufonize("DIV.data-tabs H1", "95 Blk", 110, "#191919");
				cufonize("TABLE.rte CAPTION", "95 Blk", 100, "#191919");
				cufonize("DIV.technology H3", "95 Blk", 110, "#000000");
				cufonize("#sizing-tool DIV.service A", "95 Blk", 110, "#000000");
				cufonize("DIV.technology H4", "45 Lt", 100, "#000000");
				cufonize("#sizing-tool .subtitle", "95 Blk", 90, "#000000");
				cufonize("#sizing-tool FORM DIV.error H3", "95 Blk", 100, "#000000");
				cufonize("#sizing-tool FORM DIV.input LABEL", "95 Blk", 110, "#000000");
				cufonize("#sizing-tool DIV.container DIV.headline H3", "95 Blk", 110, "#000000");
				cufonize("#sizing-tool DIV.container DIV.headline DIV.indicator SPAN", "95 Blk", 110, "#000000");
				cufonize("H1 SPAN.type, DIV.rtp-slider SPAN.type, H3 SPAN.type, H4 SPAN.type", "45 Lt", 105, "#191919");
				cufonize("H1 SPAN.bike, H3 SPAN.bike, H4 SPAN.bike", "95 Blk", 105, "#191919");
				cufonize("H1 SPAN.variety, H3 SPAN.variety, H4 SPAN.variety", "45 Lt", 90, "#191919");
				cufonize("DIV.title H3.content", "45 Lt", 105, "#000000");
				Cufon.now();
				var a = jQuery(".rtp-slider DD");
				a.length > 0 && (a = a.css("background-color").match(/rgba/) ? 1 : 0.8, jQuery(".rtp-slider DD, .rtp-slider DD cvml\\:shape").css({
					opacity: 0,
					display: "block"
				}), jQuery(".rtp-slider .current DD, .rtp-slider .current DD cvml\\:shape").css({
					opacity: a
				}))
			}
		});
		jQuery(function() {
			jQuery("BODY").append('<div id="gmaptooltip">tooltip</div>');
			var a = jQuery("#gmaptooltip"),
			c;
			a.mouseover(function() {
				c && (window.clearTimeout(c), c = false)
			});
			a.mouseout(function() {
				c = window.setTimeout(function() {
					a && a.css({
						display: "none"
					});
					a = null
				},
				500)
			});
			c = a = false;
			jQuery("DIV.gmap").bmcGoogleMap({
				hookCreateMarker: function(d) {
					var f = this;
					d.setIcon("/fileadmin/templates/global/img/gmap-marker-" + (d.data[11] ? "impec": "default") + ".png");
					google.maps.event.addListener(d, "click",
					function() {
						jQuery("UL.dealers LI").removeClass("active");
						jQuery("#bmcdealer-" + this.data[0]).addClass("active")
					});
					google.maps.event.addListener(d, "mouseover",
					function(d) {
						c && (window.clearTimeout(c), c = false);
						a = jQuery("#gmaptooltip");
						var h = [];
						this.data[3] && h.push('<p class="name">' + this.data[3] + "</p>");
						this.data[4] && h.push('<p class="street">' + this.data[4] + "</p>");
						this.data[8] && h.push('<p class="tel">' + locallang.gmap_tel + ": " + this.data[8] + "</p>");
						a.html(h.join(""));
						h = jQuery(f.gmap.getDiv()).offset();
						jQuery(a).outerHeight();
						d = f.canvasProjectionOverlay.getProjection().fromLatLngToContainerPixel(d.latLng);
						a.css({
							display: "block",
							position: "absolute",
							top: h.top + d.y + "px",
							left: h.left + d.x - 10 + "px"
						})
					});
					google.maps.event.addListener(d, "mouseout",
					function() {
						c = window.setTimeout(function() {
							a && a.css({
								display: "none"
							});
							a = null
						},
						500)
					})
				},
				hookAfterInit: function() {
					function a() {}
					var c = jQuery("DIV.gmap").data("bmc-gmap");
					a.prototype = new google.maps.OverlayView;
					a.prototype.constructor = a;
					a.prototype.onAdd = function() {};
					a.prototype.draw = function() {};
					a.prototype.onRemove = function() {};
					c.canvasProjectionOverlay = new a;
					c.canvasProjectionOverlay.setMap(c.gmap);
					var g = function() {
						var a = [],
						d = [],
						d = c.mm.state.clusters[c.mm.zoom];
						if (d != null) {
							for (var g = d.length - 1; g != -1; --g) d[g].shown && d[g].length >= 1 && (a = a.concat(d[g].markers));
							a.sort(function(a, c) {
								a = String(a.data[3]).toLowerCase();
								c = String(c.data[3]).toLowerCase();
								return a > c ? 1 : a < c ? -1 : 0
							});
							jQuery("UL.dealers").html("");
							for (g = 0; g < a.length; ++g) {
								var h = a[g].data,
								r = [],
								d = [];
								g == 0 && r.push("first");
								g == a.length - 1 && r.push("last");
								d.push(r.length ? '<li class="' + r.join(" ") + '"': "<li");
								d.push(' id="bmcdealer-' + h[0] + '">');
								d.push('<div class="two-cols"><div class="col-1">');
								h[3] && d.push('<p class="name">' + h[3] + "</p>");
								h[4] && d.push('<p class="street">' + h[4] + "</p>");
								h[5] && h[6] && d.push('<p class="city">' + h[5] + " " + h[6] + "</p>");
								h[7] && d.push('<p class="country">' + h[7] + "</p>");
								d.push('</div><div class="col-2">');
								h[8] && d.push('<p class="tel">Tel: ' + h[8] + "</p>");
								h[10] && d.push('<p class="email"><a href="mailto:' + h[10] + '">' + h[10] + "</a></p>");
								h[9] && d.push('<p class="web"><a href="http://' + h[9] + '" target="_blank">' + h[9] + "</a></p>");
								h[12] && d.push('<p class="testcenter"><img src="/fileadmin/templates/global/img/dealer-test-center.gif" width="120" height="20" /></p>');
								d.push("</div><div>");
								d.push("</li>");
								jQuery("UL.dealers").append(d.join(""))
							}
							a.length == 0 && jQuery("UL.dealers").append("<li>" + locallang.gmap_dealer_eavail + "</li>");
							a = 72 * (a.length + 1);
							a < 100 && (a = 100);
							a > 840 && (a = 840);
							jQuery("UL.dealers").css("height", a + "px")
						}
					},
					h = new rtp.gmap.geocoder;
					jQuery("DIV.gmaplocation FORM").submit(function(a) {
						var d = jQuery("DIV.gmaplocation INPUT.text").val();
						d && h.resolve(d,
						function(a) {
							if (!a) return alert(locallang.gmap_location_efound);
							c.mm.zoomed = true;
							typeof a.bounds !== "undefined" ? c.gmap.fitBounds(a.bounds) : typeof a.lat !== "undefined" && typeof a.lng !== "undefined" ? c.gmap.setCenter(new google.maps.LatLng(a.lat, a.lng)) : alert("google maps api response not valid");
							var d = function() {
								c.mm.zoomed == false ? g() : window.setTimeout(d, 50)
							};
							d()
						});
						a.preventDefault()
					});
					google.maps.event.addListener(c.gmap, "idle", g)
				}
			})
		}); (function(a) {
			var c, d, f, g, h, k, m, w, o, r = 0,
			p = {},
			u = [],
			t = 0,
			l = {},
			s = [],
			D = null,
			F = new Image,
			z = /\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,
			C = /[^\.]\.(swf)\s*$/i,
			K,
			N = 1,
			n,
			j,
			A = false,
			x = a.extend(a("<div/>")[0], {
				prop: 0
			}),
			I = 0,
			q = !a.support.opacity && !window.XMLHttpRequest,
			L = function() {
				d.hide();
				F.onerror = F.onload = null;
				D && D.abort();
				c.empty()
			},
			O = function() {
				a.fancybox('<p id="fancybox_error">The requested content cannot be loaded.<br />Please try again later.</p>', {
					scrolling: "no",
					padding: 20,
					transitionIn: "none",
					transitionOut: "none"
				})
			},
			e = function() {
				return [a(window).width(), a(window).height(), a(document).scrollLeft(), a(document).scrollTop()]
			},
			R = function() {
				var a = e(),
				c = {},
				d = l.margin,
				f = l.autoScale,
				g = (20 + d) * 2,
				h = (20 + d) * 2,
				j = l.padding * 2;
				l.width.toString().indexOf("%") > -1 ? (c.width = a[0] * parseFloat(l.width) / 100 - 40, f = false) : c.width = l.width + j;
				l.height.toString().indexOf("%") > -1 ? (c.height = a[1] * parseFloat(l.height) / 100 - 40, f = false) : c.height = l.height + j;
				if (f && (c.width > a[0] - g || c.height > a[1] - h)) p.type == "image" || p.type == "swf" ? (g += j, h += j, f = Math.min(Math.min(a[0] - g, l.width) / l.width, Math.min(a[1] - h, l.height) / l.height), c.width = Math.round(f * (c.width - j)) + j, c.height = Math.round(f * (c.height - j)) + j) : (c.width = Math.min(c.width, a[0] - g), c.height = Math.min(c.height, a[1] - h));
				c.top = a[3] + (a[1] - (c.height + 40)) * 0.5;
				c.left = a[2] + (a[0] - (c.width + 40)) * 0.5;
				if (l.autoScale === false) c.top = Math.max(a[3] + d, c.top),
				c.left = Math.max(a[2] + d, c.left);
				return c
			},
			M = function(a) {
				if (a && a.length) switch (l.titlePosition) {
				case "inside":
					return a;
				case "over":
					return '<span id="fancybox-title-over">' + a + "</span>";
				default:
					return '<span id="fancybox-title-wrap"><span id="fancybox-title-left"></span><span id="fancybox-title-main">' + a + '</span><span id="fancybox-title-right"></span></span>'
				}
				return false
			},
			J = function() {
				var c = l.title,
				d = j.width - l.padding * 2,
				e = "fancybox-title-" + l.titlePosition;
				a("#fancybox-title").remove();
				I = 0;
				if (l.titleShow !== false && (c = a.isFunction(l.titleFormat) ? l.titleFormat(c, s, t, l) : M(c)) && c !== "") {
					a('<div id="fancybox-title" class="' + e + '" />').css({
						width: d,
						paddingLeft: l.padding,
						paddingRight: l.padding
					}).html(c).appendTo("body");
					switch (l.titlePosition) {
					case "inside":
						I = a("#fancybox-title").outerHeight(true) - l.padding;
						j.height += I;
						break;
					case "over":
						a("#fancybox-title").css("bottom", l.padding);
						break;
					default:
						a("#fancybox-title").css("bottom", a("#fancybox-title").outerHeight(true) * -1)
					}
					a("#fancybox-title").appendTo(h).hide()
				}
			},
			P = function() {
				a(document).unbind("keydown.fb").bind("keydown.fb",
				function(c) {
					c.keyCode == 27 && l.enableEscapeButton ? (c.preventDefault(), a.fancybox.close()) : c.keyCode == 37 ? (c.preventDefault(), a.fancybox.prev()) : c.keyCode == 39 && (c.preventDefault(), a.fancybox.next())
				});
				a.fn.mousewheel && (g.unbind("mousewheel.fb"), s.length > 1 && g.bind("mousewheel.fb",
				function(c, d) {
					c.preventDefault();
					A || d === 0 || (d > 0 ? a.fancybox.prev() : a.fancybox.next())
				}));
				l.showNavArrows && ((l.cyclic && s.length > 1 || t !== 0) && w.show(), (l.cyclic && s.length > 1 || t != s.length - 1) && o.show())
			},
			S = function() {
				k.css("overflow", l.scrolling == "auto" ? l.type == "image" || l.type == "iframe" || l.type == "swf" ? "hidden": "auto": l.scrolling == "yes" ? "auto": "visible");
				a.support.opacity || (k.get(0).style.removeAttribute("filter"), g.get(0).style.removeAttribute("filter"));
				a("#fancybox-title").show();
				if (l.hideOnContentClick) k.one("click", a.fancybox.close);
				if (l.hideOnOverlayClick) f.one("click", a.fancybox.close);
				l.showCloseButton && m.show();
				P();
				a(window).bind("resize.fb", a.fancybox.center);
				l.centerOnScroll ? a(window).bind("scroll.fb", a.fancybox.center) : a(window).unbind("scroll.fb");
				if (a.isFunction(l.onComplete)) l.onComplete(s, t, l);
				A = false;
				var c, d;
				if (s.length - 1 > t && (c = s[t + 1].href, typeof c !== "undefined" && c.match(z))) d = new Image,
				d.src = c;
				if (t > 0 && (c = s[t - 1].href, typeof c !== "undefined" && c.match(z))) d = new Image,
				d.src = c
			},
			G = function(a) {
				var c = Math.round(n.width + (j.width - n.width) * a),
				d = Math.round(n.height + (j.height - n.height) * a),
				e = Math.round(n.top + (j.top - n.top) * a),
				f = Math.round(n.left + (j.left - n.left) * a);
				g.css({
					width: c + "px",
					height: d + "px",
					top: e + "px",
					left: f + "px"
				});
				c = Math.max(c - l.padding * 2, 0);
				d = Math.max(d - (l.padding * 2 + I * a), 0);
				k.css({
					width: c + "px",
					height: d + "px"
				});
				typeof j.opacity !== "undefined" && g.css("opacity", a < 0.5 ? 0.5 : a)
			},
			W = function() {
				var c = p.orig ? a(p.orig) : false,
				d = {};
				c && c.length ? (d = c.offset(), d.top += parseFloat(c.css("paddingTop")) || 0, d.left += parseFloat(c.css("paddingLeft")) || 0, d.top += parseFloat(c.css("border-top-width")) || 0, d.left += parseFloat(c.css("border-left-width")) || 0, d.width = c.width(), d.height = c.height(), d = {
					width: d.width + l.padding * 2,
					height: d.height + l.padding * 2,
					top: d.top - l.padding - 20,
					left: d.left - l.padding - 20
				}) : (c = e(), d = {
					width: 1,
					height: 1,
					top: c[3] + c[1] * 0.5,
					left: c[2] + c[0] * 0.5
				});
				return d
			},
			X = function() {
				d.hide();
				if (g.is(":visible") && a.isFunction(l.onCleanup) && l.onCleanup(s, t, l) === false) a.event.trigger("fancybox-cancel"),
				A = false;
				else {
					s = u;
					t = r;
					l = p;
					k.get(0).scrollTop = 0;
					k.get(0).scrollLeft = 0;
					if (l.overlayShow) {
						if (q) a("select:not(#fancybox-tmp select)").filter(function() {
							return this.style.visibility !== "hidden"
						}).css({
							visibility: "hidden"
						}).one("fancybox-cleanup",
						function() {
							this.style.visibility = "inherit"
						});
						f.css({
							"background-color": l.overlayColor,
							opacity: l.overlayOpacity
						}).unbind().show()
					}
					j = R();
					J();
					if (g.is(":visible")) {
						a(m.add(w).add(o)).hide();
						var e = g.position(),
						h;
						n = {
							top: e.top,
							left: e.left,
							width: g.width(),
							height: g.height()
						};
						h = n.width == j.width && n.height == j.height;
						k.fadeOut(l.changeFade,
						function() {
							var d = function() {
								k.html(c.contents()).fadeIn(l.changeFade, S)
							};
							a.event.trigger("fancybox-change");
							k.empty().css("overflow", "hidden");
							h ? (k.css({
								top: l.padding,
								left: l.padding,
								width: Math.max(j.width - l.padding * 2, 1),
								height: Math.max(j.height - l.padding * 2 - I, 1)
							}), d()) : (k.css({
								top: l.padding,
								left: l.padding,
								width: Math.max(n.width - l.padding * 2, 1),
								height: Math.max(n.height - l.padding * 2, 1)
							}), x.prop = 0, a(x).animate({
								prop: 1
							},
							{
								duration: l.changeSpeed,
								easing: l.easingChange,
								step: G,
								complete: d
							}))
						})
					} else if (g.css("opacity", 1), l.transitionIn == "elastic") {
						n = W();
						k.css({
							top: l.padding,
							left: l.padding,
							width: Math.max(n.width - l.padding * 2, 1),
							height: Math.max(n.height - l.padding * 2, 1)
						}).html(c.contents());
						g.css(n).show();
						if (l.opacity) j.opacity = 0;
						x.prop = 0;
						a(x).animate({
							prop: 1
						},
						{
							duration: l.speedIn,
							easing: l.easingIn,
							step: G,
							complete: S
						})
					} else k.css({
						top: l.padding,
						left: l.padding,
						width: Math.max(j.width - l.padding * 2, 1),
						height: Math.max(j.height - l.padding * 2 - I, 1)
					}).html(c.contents()),
					g.css(j).fadeIn(l.transitionIn == "none" ? 0 : l.speedIn, S)
				}
			},
			B = function() {
				c.width(p.width);
				c.height(p.height);
				if (p.width == "auto") p.width = c.width();
				if (p.height == "auto") p.height = c.height();
				X()
			},
			Y = function() {
				L();
				var d = u[r],
				e,
				f,
				g,
				h,
				j;
				p = a.extend({},
				a.fn.fancybox.defaults, typeof a(d).data("fancybox") == "undefined" ? p: a(d).data("fancybox"));
				g = d.title || a(d).title || p.title || "";
				if (d.nodeName && !p.orig) p.orig = a(d).children("img:first").length ? a(d).children("img:first") : a(d);
				g === "" && p.orig && (g = p.orig.attr("alt"));
				e = d.nodeName && /^(?:javascript|#)/i.test(d.href) ? p.href || null: p.href || d.href || null;
				if (p.type) {
					if (f = p.type, !e) e = p.content
				} else p.content ? f = "html": e ? e.match(z) ? f = "image": e.match(C) ? f = "swf": a(d).hasClass("iframe") ? f = "iframe": e.match(/#/) ? (d = e.substr(e.indexOf("#")), f = a(d).length > 0 ? "inline": "ajax") : f = "ajax": f = "inline";
				p.type = f;
				p.href = e;
				p.title = g;
				if (p.autoDimensions && p.type !== "iframe" && p.type !== "swf") p.width = "auto",
				p.height = "auto";
				if (p.modal) p.overlayShow = true,
				p.hideOnOverlayClick = false,
				p.hideOnContentClick = false,
				p.enableEscapeButton = false,
				p.showCloseButton = false;
				if (a.isFunction(p.onStart) && p.onStart(u, r, p) === false) A = false;
				else switch (c.css("padding", 20 + p.padding + p.margin), a(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change",
				function() {
					a(this).replaceWith(k.children())
				}), f) {
				case "element":
					c.html(p.element.html());
					B();
					break;
				case "html":
					c.html(p.content);
					B();
					break;
				case "inline":
					a('<div class="fancybox-inline-tmp" />').hide().insertBefore(a(d)).bind("fancybox-cleanup",
					function() {
						a(this).replaceWith(k.children())
					}).bind("fancybox-cancel",
					function() {
						a(this).replaceWith(c.children())
					});
					a(d).appendTo(c);
					B();
					break;
				case "image":
					A = false;
					a.fancybox.showActivity();
					F = new Image;
					F.onerror = function() {
						O()
					};
					F.onload = function() {
						F.onerror = null;
						F.onload = null;
						A = true;
						p.width = F.width;
						p.height = F.height;
						a("<img />").attr({
							id: "fancybox-img",
							src: F.src,
							alt: p.title
						}).appendTo(c);
						X()
					};
					F.src = e;
					break;
				case "swf":
					h = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + p.width + '" height="' + p.height + '"><param name="movie" value="' + e + '"></param>';
					j = "";
					a.each(p.swf,
					function(a, c) {
						h += '<param name="' + a + '" value="' + c + '"></param>';
						j += " " + a + '="' + c + '"'
					});
					h += '<embed src="' + e + '" type="application/x-shockwave-flash" width="' + p.width + '" height="' + p.height + '"' + j + "></embed></object>";
					c.html(h);
					B();
					break;
				case "ajax":
					d = e.split("#", 2);
					f = p.ajax.data || {};
					if (d.length > 1) e = d[0],
					typeof f == "string" ? f += "&selector=" + d[1] : f.selector = d[1];
					A = false;
					a.fancybox.showActivity();
					D = a.ajax(a.extend(p.ajax, {
						url: e,
						data: f,
						error: O,
						success: function(a) {
							D.status == 200 && (c.html(a), B())
						}
					}));
					break;
				case "iframe":
					a('<iframe id="fancybox-frame" name="fancybox-frame' + (new Date).getTime() + '" frameborder="0" hspace="0" scrolling="' + p.scrolling + '" src="' + p.href + '"></iframe>').appendTo(c),
					X()
				}
			},
			ga = function() {
				d.is(":visible") ? (a("div", d).css("top", N * -40 + "px"), N = (N + 1) % 12) : clearInterval(K)
			},
			ha = function() {
				a("#fancybox-wrap").length || (a("body").append(c = a('<div id="fancybox-tmp"></div>'), d = a('<div id="fancybox-loading"><div></div></div>'), f = a('<div id="fancybox-overlay"></div>'), g = a('<div id="fancybox-wrap"></div>')), a.support.opacity || (g.addClass("fancybox-ie"), d.addClass("fancybox-ie")), h = a('<div id="fancybox-outer"></div>').append('<div class="fancy-bg" id="fancy-bg-n"></div><div class="fancy-bg" id="fancy-bg-ne"></div><div class="fancy-bg" id="fancy-bg-e"></div><div class="fancy-bg" id="fancy-bg-se"></div><div class="fancy-bg" id="fancy-bg-s"></div><div class="fancy-bg" id="fancy-bg-sw"></div><div class="fancy-bg" id="fancy-bg-w"></div><div class="fancy-bg" id="fancy-bg-nw"></div>').appendTo(g), h.append(k = a('<div id="fancybox-inner"></div>'), m = a('<a id="fancybox-close"></a>'), w = a('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'), o = a('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>')), m.click(a.fancybox.close), d.click(a.fancybox.cancel), w.click(function(c) {
					c.preventDefault();
					a.fancybox.prev()
				}), o.click(function(c) {
					c.preventDefault();
					a.fancybox.next()
				}), q && (f.get(0).style.setExpression("height", "document.body.scrollHeight > document.body.offsetHeight ? document.body.scrollHeight : document.body.offsetHeight + 'px'"), d.get(0).style.setExpression("top", "(-20 + (document.documentElement.clientHeight ? document.documentElement.clientHeight/2 : document.body.clientHeight/2 ) + ( ignoreMe = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop )) + 'px'"), h.prepend('<iframe id="fancybox-hide-sel-frame" src="javascript:\'\';" scrolling="no" frameborder="0" ></iframe>')))
			};
			a.fn.fancybox = function(c) {
				a(this).data("fancybox", a.extend({},
				c, a.metadata ? a(this).metadata() : {})).unbind("click.fb").bind("click.fb",
				function(c) {
					c.preventDefault();
					if (!A) return A = true,
					a(this).blur(),
					u = [],
					r = 0,
					c = a(this).attr("rel") || "",
					!c || c == "" || c === "nofollow" ? u.push(this) : (u = a("a[rel=" + c + "], area[rel=" + c + "]"), r = u.index(this)),
					Y(),
					false
				});
				return this
			};
			a.fancybox = function(c, d) {
				if (!A) {
					A = true;
					var e = typeof d !== "undefined" ? d: {};
					u = [];
					r = e.index || 0;
					if (a.isArray(c)) {
						for (var f = 0,
						g = c.length; f < g; f++) typeof c[f] == "object" ? a(c[f]).data("fancybox", a.extend({},
						e, c[f])) : c[f] = a({}).data("fancybox", a.extend({
							content: c[f]
						},
						e));
						u = jQuery.merge(u, c)
					} else typeof c == "object" ? a(c).data("fancybox", a.extend({},
					e, c)) : c = a({}).data("fancybox", a.extend({
						content: c
					},
					e)),
					u.push(c);
					if (r > u.length || r < 0) r = 0;
					Y()
				}
			};
			a.fancybox.showActivity = function() {
				clearInterval(K);
				d.show();
				K = setInterval(ga, 66)
			};
			a.fancybox.hideActivity = function() {
				d.hide()
			};
			a.fancybox.next = function() {
				return a.fancybox.pos(t + 1)
			};
			a.fancybox.prev = function() {
				return a.fancybox.pos(t - 1)
			};
			a.fancybox.pos = function(a) {
				A || (a = parseInt(a, 10), a > -1 && s.length > a && (r = a, Y()), l.cyclic && s.length > 1 && a < 0 && (r = s.length - 1, Y()), l.cyclic && s.length > 1 && a >= s.length && (r = 0, Y()))
			};
			a.fancybox.cancel = function() {
				if (!A) {
					A = true;
					a.event.trigger("fancybox-cancel");
					L();
					if (p && a.isFunction(p.onCancel)) p.onCancel(u, r, p);
					A = false
				}
			};
			a.fancybox.close = function() {
				function c() {
					f.fadeOut("fast");
					g.hide();
					a.event.trigger("fancybox-cleanup");
					k.empty();
					if (a.isFunction(l.onClosed)) l.onClosed(s, t, l);
					s = p = [];
					t = r = 0;
					l = p = {};
					A = false
				}
				if (!A && !g.is(":hidden")) if (A = true, l && a.isFunction(l.onCleanup) && l.onCleanup(s, t, l) === false) A = false;
				else if (L(), a(m.add(w).add(o)).hide(), a("#fancybox-title").remove(), g.add(k).add(f).unbind(), a(window).unbind("resize.fb scroll.fb"), a(document).unbind("keydown.fb"), k.css("overflow", "hidden"), l.transitionOut == "elastic") {
					n = W();
					var d = g.position();
					j = {
						top: d.top,
						left: d.left,
						width: g.width(),
						height: g.height()
					};
					if (l.opacity) j.opacity = 1;
					x.prop = 1;
					a(x).animate({
						prop: 0
					},
					{
						duration: l.speedOut,
						easing: l.easingOut,
						step: G,
						complete: c
					})
				} else g.fadeOut(l.transitionOut == "none" ? 0 : l.speedOut, c)
			};
			a.fancybox.resize = function() {
				var c, d; ! A && !g.is(":hidden") && (A = true, c = k.wrapInner("<div style='overflow:auto'></div>").children(), d = c.height(), g.css({
					height: d + l.padding * 2 + I
				}), k.css({
					height: d
				}), c.replaceWith(c.children()), a.fancybox.center())
			};
			a.fancybox.center = function() {
				A = true;
				var a = e(),
				c = l.margin,
				d = {};
				d.top = a[3] + (a[1] - (g.height() - I + 40)) * 0.5;
				d.left = a[2] + (a[0] - (g.width() + 40)) * 0.5;
				d.top = Math.max(a[3] + c, d.top);
				d.left = Math.max(a[2] + c, d.left);
				g.css(d);
				A = false
			};
			a.fn.fancybox.defaults = {
				padding: 10,
				margin: 20,
				opacity: false,
				modal: false,
				cyclic: false,
				scrolling: "auto",
				width: 560,
				height: 340,
				autoScale: true,
				autoDimensions: true,
				centerOnScroll: false,
				ajax: {},
				swf: {
					wmode: "transparent"
				},
				hideOnOverlayClick: true,
				hideOnContentClick: false,
				overlayShow: true,
				overlayOpacity: 0.3,
				overlayColor: "#666",
				titleShow: true,
				titlePosition: "outside",
				titleFormat: null,
				transitionIn: "fade",
				transitionOut: "fade",
				speedIn: 300,
				speedOut: 300,
				changeSpeed: 300,
				changeFade: "fast",
				easingIn: "swing",
				easingOut: "swing",
				showCloseButton: true,
				showNavArrows: true,
				enableEscapeButton: true,
				onStart: null,
				onCancel: null,
				onComplete: null,
				onCleanup: null,
				onClosed: null
			};
			a(document).ready(function() {
				ha()
			})
		})(jQuery); (function(a) {
			a(function() {
				a(".video-channel .video-channel-video").each(function() {
					a(this).find("a.fancy-video").fancybox({
						type: "element",
						titlePosition: "inside",
						overlayColor: "black",
						overlayOpacity: 0.7,
						element: a(this).find("div.fancy-content")
					})
				})
			})
		})(jQuery);