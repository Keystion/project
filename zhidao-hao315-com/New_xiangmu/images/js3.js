// JavaScript Document
    var spead1=30; //数字越大速度越慢
    var tad1=document.getElementById("colee_right");
    var tad11=document.getElementById("colee_right1");
    var tad12=document.getElementById("colee_right2");
    tad12.innerHTML=tad11.innerHTML;
    function Marquee5(){
    if(tad12.offsetWidth-tad1.scrollLeft<=0)
    tad1.scrollLeft-=tad11.offsetWidth
    else{
    tad1.scrollLeft++;
    }
    }
    var MyMar6=setInterval(Marquee5,spead1);
    tad1.onmouseover=function() {clearInterval(MyMar6)};
    tad1.onmouseout=function() {MyMar6=setInterval(Marquee5,spead1)};
	


