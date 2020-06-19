$(document).ready(function () {
	"use strict";

	/*==================================
	* Author        : "ThemeSine"
	* Template Name : Khanas HTML Template
	* Version       : 1.0
	==================================== */


	/*=========== TABLE OF CONTENTS ===========
	1. Scroll To Top 
	2. Smooth Scroll spy
	3. Progress-bar (removed, no need yet)
	4. owl carousel (removed)
	5. welcome animation support
	======================================*/

	// 1. Scroll To Top 
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 600) {
			$('.return-to-top').fadeIn();
		} else {
			$('.return-to-top').fadeOut();
		}
	});
	$('.return-to-top').on('click', function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1500);
		return false;
	});



	// 2. Smooth Scroll spy

	$('.header-area').sticky({
		topSpacing: 0
	});

	//=============

	$('li.smooth-menu a').bind("click", function (event) {
		event.preventDefault();
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 0
		}, 1200, 'easeInOutExpo');
	});

	$('body').scrollspy({
		target: '.navbar-collapse',
		offset: 0
	});

	// 3. Progress-bar (removed, no need yet)

	// 4. owl carousel (removed, no need yet)

	// 5. welcome animation support

	$(window).load(function () {
		$(".header-text h1,.header-text h2").addClass("animated fadeInUp").css({ 'opacity': '0' });
		$(".header-text a").addClass("animated fadeInDown").css({ 'opacity': '0' });
	});

});
