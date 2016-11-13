// JavaScript Document
/*
 *  全局导航Tab切换效果
 */
function css(arr, ocss) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].className == ocss) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
function ShowTab(par1, child1, par2, child2, cssNa, cssCon) {
    this.pList = document.getElementById(par1);
    this.pChild = document.getElementById(par1).getElementsByTagName(child1);
    this.cList = document.getElementById(par2);
    this.cChild = cssCon ? css(document.getElementById(par2).getElementsByTagName(child2), cssCon) : document.getElementById(par2).getElementsByTagName(child2);
    this.cs = cssNa;
}
ShowTab.prototype = {
    show: function() {
        var that = this;
        var count = 0;
        for (var i = 0; i < that.pChild.length; i++) {
            that.pChild[i].onmouseover = function(index) {
                return function() {
                    if (index != count) {
					//if (index != count && index != 0) {   首页对应二级分类不显示
                        that.cChild[index].style.display = "block";
                        that.cChild[count].style.display = "none";
                        count = index;
                    }

                }
            } (i);
        }
    }
}

/*
 * 全局无边框 事件
 */
function noBorder(e){
	$(e).css("border","none");
}


/*
 * 问答首页 左侧问答模块 鼠标经过事件
 */
$(document).ready(function() {
	$(".hywd_list_li").hover(function(){
		$(this).addClass("hover");	
	},function(){
		$(this).removeClass("hover");
	})
});