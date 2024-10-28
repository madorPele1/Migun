let firstText;
let secondText;
let thirdText;
let fourthText;
let video;
window.addEventListener("load", () => { // Initializing the lomda
    firstText = document.getElementById("first-text");
    secondText = document.getElementById("second-text");
    thirdText = document.getElementById("third-text");
    fourthText = document.getElementById("fourth-text");
    video = document.getElementById("migun-vid");
    vidInterval = setInterval(() => {
            if (video.currentTime > 0) {
                textHandle();
                clearInterval(vidInterval);
            }
        }, 100);
});

const textHandle = () => {
    setTimeout(() => { 
        firstText.classList.remove("hide-text");
        firstText.classList.add("display-text");
    }, 3200);
    setTimeout(() => { 
        firstText.classList.remove("display-text");
        firstText.classList.add("hide-text");
    }, 6900);
    setTimeout(() => { 
        secondText.classList.remove("hide-text");
        secondText.classList.add("display-text");
    }, 9600);
    setTimeout(() => { 
        secondText.classList.remove("display-text");
        secondText.classList.add("hide-text");
    }, 15000);
    setTimeout(() => { 
        thirdText.classList.remove("hide-text");
        thirdText.classList.add("display-text");
    }, 17260);
    setTimeout(() => { 
        thirdText.classList.remove("display-text");
        thirdText.classList.add("hide-text");
    }, 22800);
    setTimeout(() => { 
        fourthText.classList.remove("hide-text");
        fourthText.classList.add("display-text");
    }, 25000);
    setTimeout(() => { 
        fourthText.classList.remove("display-text");
        fourthText.classList.add("hide-text");
    }, 27450);
    setTimeout(() => { 
        video.classList.add("hide-text");
    }, 28450);
}
