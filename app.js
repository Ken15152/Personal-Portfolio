const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

let currentIndex = 0;
const images = document.querySelectorAll('.image-slider img');
const totalImages = images.length;

document.querySelector('.next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalImages; // Loop back to the first image
  updateSlider();
});

document.querySelector('.prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Loop to the last image
  updateSlider();
});

function updateSlider() {
  const slider = document.querySelector('.image-slider');
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

$(document).ready(function() {
    let currentIndex = 0;
    const images = $('#slider img');
    const totalImages = images.length;

    // Function to show the current image
    function updateSlider() {
        $('#slider').css('transform', 'translateX(' + (-currentIndex * 100) + '%)');
    }

    // Next button functionality
    $('.next').click(function() {
        currentIndex = (currentIndex + 1) % totalImages; // Loop back to start
        updateSlider();
    });

    // Previous button functionality
    $('.prev').click(function() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Loop to end
        updateSlider();
    });

    // Draggable functionality
    let startX;
    let isDragging = false;

    $('.project-img').on('mousedown touchstart', function(event) {
        isDragging = true;
        startX = event.type === 'touchstart' ? event.originalEvent.touches[0].pageX : event.pageX;
    });

    $(document).on('mousemove touchmove', function(event) {
        if (isDragging) {
            const moveX = (event.type === 'touchmove' ? event.originalEvent.touches[0].pageX : event.pageX) - startX;

            if (moveX < -50) { // Swipe left
                $('.next').click();
                isDragging = false; // Stop dragging after action
            } else if (moveX > 50) { // Swipe right
                $('.prev').click();
                isDragging = false; // Stop dragging after action
            }
        }
    });

    $(document).on('mouseup touchend', function() {
        isDragging = false;
    });
});

