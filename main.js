// Search box
const searchBox = document.querySelector(".header__search-content");
const searchIcon = document.querySelector(".header__icon-search");

searchIcon.addEventListener("click", function () {
	searchBox.classList.toggle("show");
});
// Toggle menu
const mobileMenu = document.querySelector(".header__mobile-menu");
const menuClose = document.querySelector(".header__close");
const menuBtn = document.querySelector(".header__toggole-menu");

menuBtn.addEventListener("click", function () {
	mobileMenu.style.transform = `translateX(0)`;
});
menuClose.addEventListener("click", function () {
	mobileMenu.style.transform = `translateX(-100%)`;
});

//Menu Accrodion-------
$(document).ready(function () {
	//toggle the component with class accordion_body
	$(".header__label").click(function () {
		if ($(".header__mobile-menu-contnet").is(":visible")) {
			$(".header__mobile-menu-contnet").slideUp(500);
			// $(".plusminus").text("+");
			$(".header__label").removeClass("rotted");
		}
		if ($(this).next(".header__mobile-menu-contnet").is(":visible")) {
			$(this).next(".header__mobile-menu-contnet").slideUp(500);
			// $(this).children(".plusminus").text("+");
			$(this).removeClass("rotted");
		} else {
			$(this).next(".header__mobile-menu-contnet").slideDown(500);
			// $(this).children(".plusminus").text("-");
			$(this).addClass("rotted");
		}
	});
});

$(document).ready(function () {
	// Customer Stories Slider
	$(".customer-stories__content").slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: false,
					dots: false,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1.5,
					slidesToScroll: 1,
					infinite: false,
					dots: true,
					arrows: false,
				},
			},
		],
	});
	// products-reviews Slider
	$(".products-reviews__content").slick({
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: false,
					dots: false,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1.5,
					slidesToScroll: 1,
					infinite: false,
					dots: true,
					arrows: false,
				},
			},
		],
	});
	// instagram Slider
	$(".instagram__content").slick({
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: false,
					arrows: true,
					dots: false,
				},
			},
			{
				breakpoint: 600,
				settings: "unslick",
			},
			{
				breakpoint: 480,
				settings: "unslick",
			},
		],
	});

	// Video Slider desktop
	$(".video__content").slick({
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: false,
					arrows: true,
					dots: false,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1.5,
					slidesToScroll: 1,
					infinite: false,
					arrows: false,
					dots: true,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1.5,
					slidesToScroll: 1,
					arrows: false,
					dots: true,
				},
			},
		],
	});
	// Video Slider mobile
	$(".video__content-mobile").slick({
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: false,
					arrows: true,
					dots: false,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1.5,
					slidesToScroll: 1,
					infinite: false,
					arrows: false,
					dots: true,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1.5,
					slidesToScroll: 1,
					arrows: false,
					dots: true,
				},
			},
		],
	});
});
