const menuId = document.getElementById("top_menu"),
ToggleBtnId = document.getElementById("toggle"),
ClsBtnId = document.getElementById("cls_btn");

// Display the menu //
ToggleBtnId.addEventListener("click", () => {
    menuId.classList.add("show");
});

// Hide the menu //
ClsBtnId.addEventListener("click", () => {
    menuId.classList.remove("show");
});

//Initialize Animate on Scroll
AOS.init();

//GSAP Animations

gsap.from(".logo", {
    opacity: 0,
    y: -10,
    delay: 1,
    duration: 0.5,
});

gsap.from(".top_menu_ul .top_menu_li", {
    opacity: 0,
    y: -10,
    delay: 1.4,
    duration: 0.5,
    stagger: 0.3,
});

gsap.from(".toggle", {
    opacity: 0,
    y: -10,
    delay: 1.4,
    duration: 0.5,
});

gsap.from(".hero-heading", {
    opacity: 0,
    y: 20,
    delay: 2.4,
    duration: 1,
});

gsap.from(".hero-caption", {
    opacity: 0,
    y: 20,
    delay: 2.8,
    duration: 1,
});

gsap.from(".hero_btn_cont", {
    opacity: 0,
    y: 20,
    delay: 2.8,
    duration: 1,
});

gsap.from(".hero_image_cont img", {
    opacity: 0,
    y: 20,
    delay: 3,
    duration: 1,
});
