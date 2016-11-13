$(function(){
//选中状态
$('div.che').click(function(){
$(this).toggleClass('che_light');
});	
//表格隔行变色
$('table.even_table tr:even').addClass('even_bj');
});