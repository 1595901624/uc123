// ==UserScript==
// @name         主流导航页精简
// @namespace    https://github.com/1595901624/uc123
// @version      0.0.3
// @description  精简uc123,hao123首页，保留主要显示页，隐藏无用页面和广告
// @author       1595901624
// @match        *://www.uc123.com/*
// @match		 https://www.hao123.com*
// @match		 http://www.hao123.com*
// @grant        none
// @require      http://cdn.bootcss.com/jquery/1.8.3/jquery.min.js
// ==/UserScript==

window.onload = function(){
    if(location.href.match(/\:\/\/www\.uc123\.com/g))
    	streamlineUC123();
    else if(location.href.match(/hao123\.com/g))
    	streamlineHao123();
};


//***********************************************************
//    如果认为某删减栏目对您有用，请使用双斜线(//)注释掉即可
//***********************************************************

/**
 * [streamUC123 精简UC123的内容,并添加谷歌搜索(默认依然是百度搜索)]
 * @return {[void]} [无]
 *
 */
function streamlineUC123(){
    //删除左侧导航栏
    $("div#J_leftNavBar").remove();
    //删除头部栏
	$("div.login-icon").remove();
	$("div.login").remove();
	$("div.ads").remove();
	//处理右侧电梯，仅保留顶部的按钮
	$("a.nav-elevator-item").each(function(item){
		// console.log($(this));
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

    //添加谷歌搜索
    var google = '<li data-name="google" class="current"><span class="search_logo_google"></span>谷歌</li>';
    $("#J_searchLogoList").prepend(google);
}

/**
 * [streamlineHao123 精简hao123之家]
 * @return {[void]} [无]
 */
function streamlineHao123(){
	//去除专版浏览器的图标
	$("#sethome").remove();
	//去除左侧边栏
	$("#slidetoolbarContainer").remove();
	//去除邮箱顶部的推荐滚动
	$("#headJoke").remove();
	//去除手机下载推荐有礼
	$("#head-wise").remove();
	//去除搜索条后边的更多新闻推荐
	$("#notice").remove();
	$("#noticeLink").remove();
	//去除最下方的头条新闻
	$("#feedBottom").remove();
	// 去除下方乱七八糟的东西
	$(".page-width.page-bg.page-bottom").remove();
	//去除左侧游戏栏目(全是广告，不要也罢)
	$("#box-toplist2").remove();
	//处理右侧电梯(保留返回顶部和意见反馈)
	$("[monkey=shortcut-box] > a").each(function(item){
		if($(this).context.text.indexOf('返回顶部') >= 0 ||
			$(this).context.text.indexOf('意见反馈') >= 0){
		}else{
			$(this).remove();
		}
	});
	//
	$("#shortcut-toptoggle").show();
	$("#shortcut-toptoggle")[0].id = "";
	//删除右侧提示(平时不显示)
	$(".rightTip").remove();
	//删除下载客户端
	$(".g-fr").remove();
	//删除左侧小条广告
	$(".tips.g-lh14").remove();
}
