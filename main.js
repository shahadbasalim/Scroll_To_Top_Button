let btnUp = document.querySelector(".up");
window.onscroll = function () {
    if (this.scrollY >= 1000) {
        btnUp.classList.add("show");
    } else {
        btnUp.classList.remove("show");
    }
};
btnUp.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};