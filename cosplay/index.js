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

const apiPartyInfo = "https://634bbd3cd90b984a1e3e8ce3.mockapi.io/party-info/1";

fetch(apiPartyInfo)
    .then((r) => r.json())
    .then((res) => {

        console.log(res);

        const html =
            `
        <h1 class="namep4-1">${res.name}</h1>
        <p class="pp4-1" class="descp4-1"}>${res.desc}</p>
        <p class="pp4-1" class="addressp4-1">${res.address}</p>
        <p class="pp4-1" class="timep4-1">${res.time}</p>
        `;

        document
            .querySelector("#textboxp4-1")
            .insertAdjacentHTML("beforeend", html);

    });

const apiPartyInfo1 = "https://634bbd3cd90b984a1e3e8ce3.mockapi.io/party-info/1";

