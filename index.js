const links = document.querySelectorAll(".menu a");

icons.addEventListener("click", () => {
    nav.classList.toggle("active")
});

links.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("active")
    });
});