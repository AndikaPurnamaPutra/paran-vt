console.log("hallo");

// Navbar Responsive

// const navbarToggler = document.querySelector(".nav-btn-responsive");

// navbarToggler.addEventListener("click", function () {
//     document.querySelector(".nav-menu-responsive").classList.toggle("active");
// });

// logic respondsive
const navbar = document.getElementById("navbar");
const btnRes = document.querySelector(".nav-btn-responsive");
const menu = document.querySelector(".nav-item-menu");

btnRes.addEventListener("click", () => {
    menu.classList.toggle("active");
    btnRes.classList.toggle("cross");
    navbar.classList.toggle("active");
});

// Slick
$(document).ready(function () {
    $(".testimonial-slider").slick({
        dots: true,
        vertical: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        verticalSwiping: true,
        focusOnSelect: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                    centerMode: false,
                },
            },
        ],
    });

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
                    speed: 5000,
                },
            },
        ],
    });

    $(".slider-rtl").slick({
        variableWidth: true,
        autoplay: true,
        centerMode: true,
        arrows: false,
        autoplaySpeed: 0,
        cssEase: "linear",
        speed: 5000,
        rtl: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    speed: 5000,
                },
            },
        ],
    });

    // $(".partner-slider").slick({
    //     variableWidth: true,
    //     autoplay: true,
    //     centerMode: true,
    //     arrows: false,
    //     autoplaySpeed: 0,
    //     cssEase: "linear",
    //     speed: 5000,
    //     responsive: [
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 speed: 2500,
    //             },
    //         },
    //     ],
    // });
});

// Button slider

function toggleSlider(sliderType) {
    const sliderBorrow = document.getElementById("slider-borrow");
    const sliderLend = document.getElementById("slider-lend");
    const borrowBtn = document.getElementById("borrow-btn");
    const lendBtn = document.getElementById("lend-btn");

    if (sliderType === "borrow") {
        sliderBorrow.classList.add("active");
        sliderLend.classList.remove("active");
        borrowBtn.classList.add("active");
        lendBtn.classList.remove("active");

        sliderBorrow.style.display = "flex";
        sliderLend.style.display = "none";
    } else if (sliderType === "lend") {
        sliderBorrow.classList.remove("active");
        sliderLend.classList.add("active");
        borrowBtn.classList.remove("active");
        lendBtn.classList.add("active");

        sliderBorrow.style.display = "none";
        sliderLend.style.display = "flex";
    }
}

document.getElementById("slider-lend").style.display = "none";

// Event handling untuk tombol "Borrow" dan "Lend"
const buttonsContainer = document.querySelector(".btn-slider");
buttonsContainer.addEventListener("click", function (event) {
    event.preventDefault(); // Menghentikan scroll ke atas

    if (event.target.id === "borrow-btn") {
        toggleSlider("borrow");
    } else if (event.target.id === "lend-btn") {
        toggleSlider("lend");
    }
});

// Menampilkan slider borrow saat halaman dimuat
toggleSlider("borrow");

// Navbar scroll
window.addEventListener("scroll", function () {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

AOS.init({
    disable: function () {
        var maxWidth = 800;
        return window.innerWidth < maxWidth;
    },
    duration: 1200,
    easing: "ease-in-out", // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom",
});

// logic copy clipboard

const copyButtonLabel = "Components";

// use a class selector if available
let blocks = document.querySelectorAll("pre");

blocks.forEach((block) => {
    // only add button if browser supports Clipboard API
    if (navigator.clipboard) {
        let button = document.createElement("button");

        button.innerText = copyButtonLabel;
        block.appendChild(button);

        button.addEventListener("click", async () => {
            await copyCode(block, button);
        });
    }
});

async function copyCode(block, button) {
    let code = block.querySelector("code");
    let text = code.innerText;

    await navigator.clipboard.writeText(text);

    // visual feedback that task is completed
    button.innerText = "Code Copied!";

    setTimeout(() => {
        button.innerText = copyButtonLabel;
    }, 700);
}
