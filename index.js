var keyLetters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p","["];
var files = [35,36,37,41,42,43,44,45,46,47,51]
let sounds = new Map();

for (var i = 0; i < keyLetters.length; i++) {
    sounds.set(keyLetters[i], files[i]);
}

function handleSound(letter) {
    if (keyLetters.includes(letter)) {
        var au = new Audio("sounds/" + sounds.get(letter) + ".mp3");
        au.play();
    }
}
var keys = document.querySelectorAll("a");
for (var i = 0; i < keys.length; i++) {
    keys[i].classList.toggle(keyLetters[i]);
    keys[i].addEventListener("click", function() {
        var letter = this.textContent.toLowerCase();
        handleSound(letter);
    });
}

document.addEventListener("keydown", function() {
    var letter = event.key;
    if (keyLetters.includes(letter)) {
        handleSound(letter);
        document.querySelector("." + letter).classList.toggle("pressed");
        setTimeout(function() {
            document.querySelector("." + letter).classList.toggle("pressed");
        }, 100);
    }
});
