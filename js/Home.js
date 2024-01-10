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
		
//	表单认证
	var reg = /[^0-9]/,
		tel = document.getElementById("tel"),
		password = document.getElementById("password"),
		confirm__password = document.getElementById("confirm");
	
	
	$("#submit").click(function() {
		//	验证电话号码
		if(tel.value.search(reg) == -1 && tel.value.length == 11) {
			console.log("电话号码正确");
			
		} else {
			console.log("电话号码错误");
			alert("请检查电话号码是否正确");
		}
		
//		检查密码是否一致
		if(password.value != confirm__password.value) {
			alert("检查密码是否一致");
		}
	});
	
});