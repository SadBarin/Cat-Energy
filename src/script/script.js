// 'use strict';

// let burger  = document.getElementById('header__menu');
// let nav     = document.getElementById('header__nav');
// let navList = document.getElementById('header__list');

// burger.onclick = function() {
// 	burger.style.display = 'none';
// 	navList.style.display = 'block';
// 	nav.style.flexDirection = 'column';
// }

document.body.onload = function preloader() {
	setTimeout(function() {
		let preloader = document.getElementById('page-preloader');
		if(!preloader.classList.contains('done')) {
			preloader.classList.add('done');
		}
	}, 100)
};