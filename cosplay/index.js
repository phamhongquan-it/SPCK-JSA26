// Tạo sự kiện khi cuộn xuống thì đổi nền của header
const menu = document.querySelector(".menu");
window.addEventListener("scroll", () => {
    const position = document.documentElement.scrollTop;

    if (position > 100) {
        menu.style.backgroundColor = "rgb(17, 17, 17)";
    } else {
        menu.style.backgroundColor = "transparent";
    }
});
