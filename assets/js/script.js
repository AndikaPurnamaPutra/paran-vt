document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".switch-button");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            buttons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });
});

$(document).ready(function () {
    $(".slider").slick({
        variableWidth: true,
        autoplay: true,
        centerMode: true,
        arrows: false,
        autoplaySpeed: 0,
        cssEase: "linear",
        speed: 5000,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    speed: 2500,
                },
            },
        ],
    });

    $(".slider-rtl").slick({
        variableWidth: true,
        autoplay: true,
        centerMode: true,
        autoplaySpeed: 0,
        arrows: false,
        cssEase: "linear",
        speed: 5000,
        rtl: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    speed: 2500,
                },
            },
        ],
    });

    // Slider Testimonial
    $(".slider-testimonial").slick({
        utoplay: false,
        dots: true,
        vertical: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        verticalSwiping: true,
        focusOnSelect: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                },
            },
        ],
    });
});

function toggleSlider(sliderType) {
    if (sliderType === "borrow") {
        document.getElementById("slider-borrow").classList.add("active");
        document.getElementById("slider-lend").classList.remove("active");

        document.getElementById("borrow-btn").classList.add("active");
        document.getElementById("lend-btn").classList.remove("active");
    } else if (sliderType === "lend") {
        document.getElementById("slider-borrow").classList.remove("active");
        document.getElementById("slider-lend").classList.add("active");

        document.getElementById("borrow-btn").classList.remove("active");
        document.getElementById("lend-btn").classList.add("active");
    }
}

// Navbar
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    const navbarHeight = navbar.clientHeight;
    const offset = window.pageYOffset;

    if (offset > navbarHeight) {
        navbar.classList.add("sticky", "scrolled");
    } else {
        navbar.classList.remove("sticky", "scrolled");
    }
});

// Navbar Mobile
const navbarToggler = document.querySelector(".navbar-toggler");

navbarToggler.addEventListener("click", function () {
    document.querySelector(".navbar-collapse").classList.toggle("active");
});
