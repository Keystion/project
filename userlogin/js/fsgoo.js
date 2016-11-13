var fsgoo = {
	tmp : new Array(),
	verify_refresh : function()
	{
		$('#verify_img').attr('src', 'http://user.37cy.cn/verify/?'+Math.random());
	},
	verify_refresh1 : function()
	{
		$('#verify_img11').attr('src', 'http://user.37cy.cn/verify/?cc=1&'+Math.random());
	},
	verify : function()
	{
		document.write("<img src='http://user.37cy.cn/verify/?"+Math.random()+"' border='0' id='verify_img' title='点击刷新' alt='验证码' style='cursor:pointer;'> <a href='#' onclick='fsgoo.verify_refresh();return false;'>看不清？换一张</a>");
		$('#verify_img').click(function(){fsgoo.verify_refresh();});
	},
	verifyone : function()
	{
		document.write("<img src='http://user.37cy.cn/verify/?cc=1&"+Math.random()+"' border='0' id='verify_img11' title='点击刷新' alt='验证码' style='cursor:pointer;'>");
		$('#verify_img11').click(function(){fsgoo.verify_refresh1();});
	}
};
