// document.querySelector("button").addEventListener("click", function () {
//     alert("w clicked, handleClick called.");
// })

var soundArray = [
  "sounds/crash.mp3",
  "sounds/kick-bass.mp3",
  "sounds/snare.mp3",
  "sounds/tom-1.mp3",
  "sounds/tom-2.mp3",
  "sounds/tom-3.mp3",
  "sounds/tom-4.mp3"
];

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var crash = new Audio(soundArray[0]);
      crash.play();
      break;
    case "a":
      var kickBass = new Audio(soundArray[1]);
      kickBass.play();
      break;
    case "s":
      var snare = new Audio(soundArray[2]);
      snare.play();
      break;
    case "d":
      var tom1 = new Audio(soundArray[3]);
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio(soundArray[4]);
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio(soundArray[5]);
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio(soundArray[6]);
      tom4.play();
      break;

    default:
      break;
  }
}

function buttonAnimation(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
