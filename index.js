const numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    let buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      const kick = new Audio("sounds/BD_Planet_01.wav");
      kick.play();
      break;

    case "a":
      const lowTom = new Audio("sounds/VDM_808_tom_4_TL.wav");
      lowTom.play();
      break;

    case "s":
      const midTom = new Audio('sounds/VDM_808_tom_13_TL.wav');
      midTom.play();
      break;

    case "d":
      const highTom = new Audio('sounds/VDM_808_tom_10_TL.wav');
      highTom.play();
      break;

    case "j":
      const snare = new Audio('sounds/SD_Taros_02_Dry.wav');
      snare.play();
      break;

    case "k":
      const clap = new Audio('sounds/Clap_Off_01_Dry.wav');
      clap.play();
      break;

    case "l":
      const closedHat = new Audio('sounds/HH_Taros_04.wav');
      closedHat.play();
      break;

    case "i":
      const openHat = new Audio('sounds/HHo_Essentials_02.wav');
      openHat.play();
      break;

    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  let activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
