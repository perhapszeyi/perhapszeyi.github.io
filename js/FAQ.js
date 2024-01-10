// JavaScript Document
$(function() {
	"use strict";
	$(".header__menu").click(function() {
		$(".sidebar").addClass("on");
		$(".bg").fadeIn(300);
	});
	$(".bg").click(function() {
		$(".sidebar").removeClass("on");
		$(".bg").fadeOut(300);
	});
	$(window).scroll(function() {
		$(".sidebar").removeClass("on");
		$(".bg").fadeOut(300);
	});
	
//	控制视频播放
	$("#video")[0].pause();
	$("#play").click(function() {
		$("#video")[0].play();
		$("#play").hide(300);
	});
	
	$("#video")[0].addEventListener("click", function() {
		$("#video")[0].pause();
		$("#play").show(300);
	});
});