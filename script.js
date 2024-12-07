var nextBtn = document.querySelector(".next"),
    prevBtn = document.querySelector(".prev"),
    carousel = document.querySelector(".carousel"),
    list = document.querySelector(".list"),
    item = document.querySelectorAll(".item"),
    runningTime = document.querySelector(".carousel .timeRunning");

    let timeRunning = 5000; // Percepat waktu animasi slide
    let timeAutoNext = 5000; // Jeda antar slide lebih pendek

nextBtn.onclick = function () {
    showSlider("next");
};

prevBtn.onclick = function () {
    showSlider("prev");
};

let runTimeOut;
let runNextAuto = setTimeout(() => {
    nextBtn.click();
}, timeAutoNext);

function resetTimeAnimation() {
    runningTime.style.animation = "none";
    void runningTime.offsetHeight; // Trigger reflow untuk reset animasi
    runningTime.style.animation = "runningTime 5s linear 1 forwards";
}


function showSlider(type) {
    let sliderItemsDom = list.querySelectorAll(".carousel .list .item");
    if (type === "next") {
        list.appendChild(sliderItemsDom[0]);
        carousel.classList.add("next");
    } else {
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
        carousel.classList.add("prev");
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carousel.classList.remove("next");
        carousel.classList.remove("prev");
    }, timeRunning);
    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        nextBtn.click();
    }, timeAutoNext);

    resetTimeAnimation();
}