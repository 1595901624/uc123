// ==UserScript==
// @name         UC123精简
// @namespace    https://github.com/1595901624/uc123
// @version      0.0.2
// @description  精简uc123首页，保留主要显示页，隐藏无用页面
// @author       1595901624
// @match        *://www.uc123.com/*
// @grant        none
// @require      http://cdn.bootcss.com/jquery/1.8.3/jquery.min.js
// ==/UserScript==

window.onload = function(){
    //***********************************************************
    //    如果认为某栏目对您有用，请使用双斜线注释掉即可
    //***********************************************************
    //删除左侧导航栏
    $("div#J_leftNavBar").remove();
    //删除头部栏
	$("div.login-icon").remove();
	$("div.login").remove();
	$("div.ads").remove();
	//处理右侧电梯，仅保留顶部的按钮
	$("a.nav-elevator-item").each(function(item){
		console.log($(this));
		if($(this).context.className.indexOf('active') == -1){
			$(this).remove();
		}
	});
	//删除游戏推荐栏
	$("div#J_game").remove();
	//删除购物推荐栏
	$("div#J_shopping").remove();
	//删除娱乐推荐栏
	$("div#J_recreation").remove();
	//删除应用中心
	$("div#apptools").remove();
	//删除猜你喜欢
	$("div#cool").remove();
    //删除中间的影视推荐
    $(".m-media").remove();
    //优化布局和内容显示
    $(".m-links")[0].style = "height:0px";
    $(".nav-elevator-icon").remove();
};