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
	
//	文字放大缩小
	var enlarge = document.getElementsByClassName("enlarge"),
		narrow = document.getElementsByClassName("narrow");
	
	for(var i = 0;i < enlarge.length;i++) {
		enlarge[i].addEventListener("click", function() {
			var Op = parseInt($(this).siblings("p").css("font-size"));
			console.log(Op);
			if(Op < 20) {
				Op++;
				$(this).siblings("p").css("font-size",Op+"px");
			}
		});
	}
	
	for(var j = 0;j < narrow.length;j++) {
		narrow[j].addEventListener("click", function() {
			var Op = parseInt($(this).siblings("p").css("font-size"));
			
			console.log(Op)
			if(Op > 16) {
				Op--;
				$(this).siblings("p").css("font-size",Op+"px");
			}
		});
	}
});