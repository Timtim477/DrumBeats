// Drum button click event listeners
var len = document.querySelectorAll(".drum").length;
for (var i = 0; i < len; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

// Keypress event listener
document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

// Function to play sound based on key
function makeSound(key) {
    let audio;
    switch (key) {
        case "w":
            audio = new Audio("sounds/crash.mp3");
            break;
        case "a":
            audio = new Audio("sounds/kick-bass.mp3");
            break;
        case "s":
            audio = new Audio("sounds/snare.mp3");
            break;
        case "d":
            audio = new Audio("sounds/tom-1.mp3");
            break;
        case "j":
            audio = new Audio("sounds/tom-2.mp3");
            break;
        case "k":
            audio = new Audio("sounds/tom-3.mp3");
            break;
        case "l":
            audio = new Audio("sounds/tom-4.mp3");
            break;
        default:
            return;
    }
    audio.volume = document.querySelector("#volumeControl").value;
    audio.play();
}

// Function to animate buttons
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    if (activeButton) {
        activeButton.classList.add("pressed");
        setTimeout(function () {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}

// Volume control
document.querySelector("#volumeControl").addEventListener("input", function () {
    var volume = this.value;
    document.querySelectorAll("audio").forEach(function (audio) {
        audio.volume = volume;
    });
});

// Stop all sounds button
document.querySelector("#stopAll").addEventListener("click", function () {
    document.querySelectorAll("audio").forEach(function (audio) {
        audio.pause();
        audio.currentTime = 0;
    });
});
