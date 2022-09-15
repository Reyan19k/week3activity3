const images = [
  "./images/dice1.png",
  "./images/dice2.png",
  "./images/dice3.png",
  "./images/dice4.png",
  "./images/dice5.png",
  "./images/dice6.png",
];
const dice = document.querySelectorAll("img");

function roll() {
  dice.forEach(function (die) {
    die.classList.add("shake");
  });
  setTimeout(function () {
    dice.forEach(function (die) {
      die.classList.remove("shake");
    });
    let dieOneValue = Math.floor(Math.random() * 6);
    let dieTwoValue = Math.floor(Math.random() * 6);
    console.log(dieOneValue, dieTwoValue);
    document
      .querySelector("#dice-1")
      .setAttribute("src", images[(dieOneValue, dieTwoValue)]);
    document.querySelector("#total").innerHTML =
      "Player 2's roll is : " + (dieOneValue + 1);
    document.querySelector("#dice-2").setAttribute("src", images[dieOneValue]);
    document.querySelector("#total-2").innerHTML =
      "Player 1's roll is : " + (dieTwoValue + 1);
  }, 1000);
}
roll();
