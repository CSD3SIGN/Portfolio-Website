var stickyMenu = document.querySelector('.js-sticky');
var stickyOffset = window.innerHeight - stickyMenu.offsetHeight;
var stickyClassName = 'is-sticky';

window.addEventListener('scroll', function() {
	if (window.pageYOffset >= stickyOffset) {
		stickyMenu.classList.add(stickyClassName);
	}
	else {
		stickyMenu.classList.remove(stickyClassName);
	}
});