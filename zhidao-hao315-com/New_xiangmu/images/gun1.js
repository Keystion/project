// JavaScript Document
var speed=40
						var demo=document.getElementById("demo");
						var demo2=document.getElementById("demo2");
						var demo1=document.getElementById("demo1");
						demo2.innerHTML=demo1.innerHTML
						function Marquee(){
						if(demo2.offsetTop-demo.scrollTop<=0)
						demo.scrollTop-=demo1.offsetHeight
						else{
						demo.scrollTop++
						}
						}
						var MyMar=setInterval(Marquee,speed)
						demo.onmouseover=function() {clearInterval(MyMar)}
						demo.onmouseout=function() {MyMar=setInterval(Marquee,speed)}