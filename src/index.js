// const $input = document.querySelector("input");
const $colors = document.querySelectorAll(".color");
const $red = document.querySelector(".simonContainer .red");
const $green = document.querySelector(".simonContainer .green");
const $blue = document.querySelector(".simonContainer .blue");
const $yellow = document.querySelector(".simonContainer .yellow");

const interval = 1000;

let simonArray = []; // Le tableau qui contient toutes les valeurs de la séquence à taper dans l'ordre
let count = Number;
let tour = 1;
let simonValue; // La valeur du bouton qui est joué. On l'insère dans le tableau
let playerTurn = false; // On assigne une variable pour permettre au joueur de savoir si c'est son tour ou non
let speedRemove = 500;

$colors.forEach((color) => {
  color.addEventListener("click", (ev) => {
    if (ev.target.classList.contains("red")) {
      $red.innerHTML = "CLIC !";
        if (simonArray[0] === 0) { // On retire le premier élément du tableau pour ajouter un point au score si l'utilisateur à toucher la bonne touche
            simonArray.shift 
            $score ++;
        }

        //Sinon, l'utilisateur perds la partie et on réinitialise la partie et on affiche la modale de relance
        else {
            $score = 0;
        }
    }

    else if (ev.target.classList.contains("blue")) {
        $blue.innerHTML = "CLIC !";

    }
  });
});

function startGame(){

    switch(tour) {
        case 1 :
            simonValue = Math.floor(Math.random() * 4);
            simonArray.push(simonValue);
            break;

        case 2 :
            for (let i = 1; i < 3; i++) {
                simonValue = Math.floor(Math.random() * 4);
                simonArray.push(simonValue);
            }
            break;
        case 3 :
            for (let i = 1; i < 4; i++) {
                simonValue = Math.floor(Math.random() * 4);
                simonArray.push(simonValue);
            }
            playerTurn = true;
            break;
    }
    if (tour > 8) {

    }
    tour++; //Ajout d'un tour au compteur

    // On boucle le tableau pour vérifier chacunes des valeurs du tableau et faire changer la couleur correspondante. On montre ainsi à l'utilisateur la bonne couleur à sélectionner, le tout dans l'ordre.
    // 0 = red, 1 = green, 2 = blue, 3 = yellow
    simonArray.forEach(function(item, index){
        setTimeout(function () {
            console.log(item);
            if(item === 0) {
                redSelect();
            }
            else if(item === 1) {
                greenSelect();
            }
            else if(item === 2) {
                blueSelect();
            }
            else if(item === 3) {
                yellowSelect();
            }
          }, index * interval);  
    })
   
    console.log(tour);

    console.log(simonArray);
};
function redSelect () {
    setTimeout(function() {
        $red.classList.add('redSimon');
        colorRemove();
    }, 1000);
}
function greenSelect () {
    setTimeout(function() {
        $green.classList.add('greenSimon');
        colorRemove();
    }, 1000);
}
function blueSelect () {
    setTimeout(function() {
        $blue.classList.add('blueSimon');
        colorRemove();
    }, 1000);
}
function yellowSelect () {
    setTimeout(function() {
        $yellow.classList.add('yellowSimon');
        colorRemove();
    }, 1000);
}
function colorRemove () {
    setTimeout(function() {
        if ($red.classList.contains("redSimon")) { // On vérifie que la classe contient la classe attribué par la fonction select pour la lui retirer la couleur foncé après un court laps de temps
            $red.classList.remove('redSimon');
        }
        else if ($green.classList.contains("greenSimon")) {
            $green.classList.remove('greenSimon');
        }
        else if ($blue.classList.contains("blueSimon")) {
            $blue.classList.remove('blueSimon');
        }
        else if ($yellow.classList.contains("yellowSimon")) {
            $yellow.classList.remove('yellowSimon');
        }
    }, $speedRemove)
}