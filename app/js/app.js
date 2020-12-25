document.addEventListener("DOMContentLoaded", function () {

	// let rectangle = document.querySelector('.hero__rectangles');

	// rectangle.addEventListener('mousemove', function (e) {
	//   let x = e.clientX / window.innerWidth;
	//   let y = e.clientY / window.innerHeight;
	//   rectangle.style.transform = 'translate(+' + x * 50 + 'px, +' + y * 50 + 'px)';
	// });
	$(function () {
		$('.popup-modal').magnificPopup({
			type: 'inline',
			preloader: false,
			focus: '#username',
			modal: true
		});
		$(document).on('click', '.popup-modal-dismiss', function (e) {
			e.preventDefault();
			$.magnificPopup.close();
		});
	});

	var mySwiper = new Swiper('.swiper-container', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		slidesPerView: 1,
		spaceBetween: 30,
		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		// And if we need scrollbar
		scrollbar: {
			el: '.swiper-scrollbar',
		},
		breakpoints: {
			440: {
				slidesPerView: 1,
				spaceBetween: 40,
			},
			640: {
				slidesPerView: 2,
				spaceBetween: 40,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 40,
			},
			1024: {
				slidesPerView: 2,
				spaceBetween: 50,
			},
		}
	})
	AOS.init();

	let vector = document.querySelector('.hero__image');

	vector.addEventListener('mousemove', function (e) {
		let x = e.clientX / window.innerWidth;
		let y = e.clientY / window.innerHeight;
		vector.style.transform = 'translate(+' + x * 100 + 'px, +' + y * 100 + 'px)';
	});
});