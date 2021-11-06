// const $input = document.querySelector("input");
const $colors = document.querySelectorAll(".color");
const $red = document.querySelector(".simonContainer .red");
const $blue = document.querySelector(".simonContainer .blue");
const $yellow = document.querySelector(".simonContainer .green");
const $green = document.querySelector(".simonContainer .yellow");

let simonArray = []; // Le tableau qui contient toutes les valeurs de la séquence à taper dans l'ordre
let count = Number;
let tour = 1;
let simonValue; // La valeur du bouton qui est joué. On l'insère dans le tableau

$colors.forEach((color) => {
  color.addEventListener("click", (ev) => {
    if (ev.target.$blue) {
      $red.innerHTML = "CLIC !";
      simonArray.push;
      console.log(simonArray);
    }

    document.querySelector("input");
   
  });
});

function startGame(){

    switch(tour) {
        case 1 :
            simonValue = Math.floor(Math.random() * 4);
            simonArray.push(simonValue);
            break;

        case 2 :
            simonValue = Math.floor(Math.random() * 4);
            simonArray.push(simonValue);
            simonValue = Math.floor(Math.random() * 4);
            simonArray.push(simonValue);
            break;
    }
    tour++;
   
    console.log(tour);

    console.log(simonArray);
};


