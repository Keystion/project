//选项卡 合集
// top news
$("#idtab_topnews ul  ").idTabs("!mouseover"); 
// ranking
$('#rank ul li').each(function(i){
	 $(this).mouseover(function () {
		$('#rank ul li.hover').removeClass("hover");
		$(this).addClass("hover");
	});
});
// ranking -common
$('#floor-canyin .ranking-list li ').each(function(i){
	 $(this).mouseover(function () {
		$('#floor-canyin .ranking-list li').removeClass("hover");
		$(this).addClass("hover");
	});
});
$('#floor-fuzhuang .ranking-list li').each(function(i){
	 $(this).mouseover(function () {
		$('#floor-fuzhuang .ranking-list li').removeClass("hover");
		$(this).addClass("hover");
	});
});
$('#floor-meirong .ranking-list li').each(function(i){
	 $(this).mouseover(function () {
		$('#floor-meirong .ranking-list li').removeClass("hover");
		$(this).addClass("hover");
	});
});
$('#floor-jiaju .ranking-list li').each(function(i){
	 $(this).mouseover(function () {
		$('#floor-jiaju .ranking-list li').removeClass("hover");
		$(this).addClass("hover");
	});
});
$('#floor-jiaoyu .ranking-list li').each(function(i){
	 $(this).mouseover(function () {
		$('#floor-jiaoyu .ranking-list li').removeClass("hover");
		$(this).addClass("hover");
	});
});