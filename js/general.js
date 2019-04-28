$(document).ready(function() {

	// menu
	$(".menu-icon").click(function() {
		$(".mobile-menu").slideToggle();
		return false;
	});
	$(".wrapper").click(function() {
		$('.mobile-menu').hide();
	});

	$('.is-dropdown-submenu-parent opens-right is-active').click(function() {
		$('header .dropdown.menu>li.opens-right>.is-dropdown-submenu').slideToggle();
		return false;
	});

	// slider
	$('.studio-slider').slick({
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		autoplay: true,
 		autoplaySpeed: 2000
	});

});