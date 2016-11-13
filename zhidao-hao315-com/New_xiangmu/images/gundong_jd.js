// JavaScript Document
function $(element){
if(arguments.length>1){//如果有多个目标对象，则循环将所有目标对象都存于elements数组当中
for(var i=0,length=arguments.length,elements=[];i<length;i++){
elements.push($(arguments[i]));
}
return elements;
}
if(typeof element=="string"){//如果是一个目标ID，则取对应的dom对象
return document.getElementById(element);
}else{//如果是一个dom对象，直接返回
return element;
}
}
var Class={
create:function(){
return function(){
this.initialize.apply(this,arguments);
}
}
}
Function.prototype.bind=function(object){
var method=this;
return function(){
method.apply(object,arguments);
}
}
var Scroll=Class.create();
Scroll.prototype={
initialize:function(element,height){
this.element=$(element);
this.element.innerHTML+=this.element.innerHTML;
this.height=height;
this.maxHeight=this.element.scrollHeight/2;
this.counter=0;
this.scroll();
this.timer="";
this.element.onmouseover=this.stop.bind(this);
this.element.onmouseout=function(){
this.timer=setTimeout(this.scroll.bind(this),100);
}.bind(this);
},
scroll:function(){
if(this.element.scrollTop<this.maxHeight){
this.element.scrollTop++;
this.counter++;
}else{
this.element.scrollTop=0;
this.counter=0;
}
if(this.counter<this.height){
this.timer=setTimeout(this.scroll.bind(this),20);
}else{
this.counter=0;
this.timer=setTimeout(this.scroll.bind(this),500);
}
},
stop:function(){
clearTimeout(this.timer);
}
}
//调用函数进行文字滚动效果
new Scroll("myscroll",89);
