document.body.onload = function preloader() {
	setTimeout(function() {
		let preloader = document.getElementById('preloader')
		if(!preloader.classList.contains('done')) {
			preloader.classList.add('done');
		}
	}, 100)
};

let burger    = document.getElementById('header__menu'),
    nav       = document.getElementById('header__nav'),
    navList   = document.getElementById('header__list'),
    closeNav  = document.getElementById('header__list-close');

burger.onclick = () => {
	header__nav.classList.add('overlay');
	burger.style.display = 'none';
	navList.style.display = 'block';
	closeNav.style.display = 'block';
	nav.style.flexDirection = 'column';
};

closeNav.onclick = () => {
	header__nav.classList.remove('overlay');
	closeNav.style.display = 'none';
	navList.style.display = 'none';
	nav.style.flexDirection = 'row';
	burger.style.display = 'block';
}
