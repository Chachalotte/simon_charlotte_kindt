//L'ensemble des élèments qu'on récupéré de l'HTML
const $colors = document.querySelectorAll(".color");
// Les quatres couleurs du jeu
const $red = document.querySelector(".simonContainer .red");
const $green = document.querySelector(".simonContainer .green");
const $blue = document.querySelector(".simonContainer .blue");
const $yellow = document.querySelector(".simonContainer .yellow");
const $resultat = document.querySelector(".score");
const innerResult = document.querySelector(".innerScore"); 
const $scoreDynamic = document.querySelector(".scoreDynamic"); //Texte score
const $tourDynamique = document.querySelector(".tourDynamique"); //Texte tour
const rules = document.querySelector(".rules");
const innerRules = document.querySelector(".innerRules"); //Contenu textuel des règles
const closeRules = document.querySelector(".closeRules"); //Fermeture des règles
const yourTurn = document.querySelector(".yourTurn");
const audioC3 = document.querySelector(".audioC3");
const audioD3 = document.querySelector(".audioD3");
const audioE3 = document.querySelector(".audioE3");
const audioG4 = document.querySelector(".audioG4");

let simonArray = []; // Le tableau qui contient toutes les valeurs de la séquence à taper dans l'ordre
let tour = 1; // Le tour actuel de la partie
let $score = 0; //Le score qui gagne un à chaque fois qu'une touche est correctement touché dans l'ordre
let simonValue; // La valeur du bouton qui est joué. On l'insère dans le tableau
let $playerTurn = false; // On assigne une variable pour permettre au joueur de savoir si c'est son tour ou non
let $speedRemove = 500; // La vitesse ou l'effet de clic est joué
let $interval = 500; // L'intervalle de vitesse entre l'appel d'une nouvelle couleur


// On ajoute un évènement à chaque clic en fonction de la couleur
// 0 = rouge, 1 = vert, 2 = bleu, 3 = jaune
$colors.forEach((color) => {
    color.addEventListener("click", (ev) => {
        if ($playerTurn === true) { // On vérifie que c'est au joueur de jouer
            if (ev.target.classList.contains("red")) { //On vérifié quelle type de couleur ,dans ce cas-ci, on clique sur la couleur rouge
                if (simonArray[0] === 0) { // On vérifie que le premier élément du tableau concorde avec la couleur (0 = rouge)
                    simonArray.shift(); 
                    $score ++; //On ajoute un point au score à chaque clic
                    $scoreDynamic.innerHTML = "Votre score actuel : " + $score;
                    $tourDynamique.innerHTML = "Votre tour actuel : " + tour;
                    if (simonArray.length === 0) {  // Si le tableau est vidé, alors le joueur passe au tour suivant 
                        $playerTurn = false;
                        yourTurn.innerHTML = "";
                        tour++;
                        startGame(); // La partie est relancé, en gardant le score et le nombre de tour avec une difficulté plus élevé
                    }
                }
                //Si l'utilisateur se trompe de couleur, l'utilisateur perds la partie et on réinitialise la partie et on affiche la modale de relance
                else {
                    simonArray = [];
                    $playerTurn = false;
                    tour = 1;
                    //Affichage modal de game over
                    innerResult.innerHTML = "Perdu ! Votre score : " + $score + "</br><button class='col-4 removeModal' onClick='startGame()'>Démarrer la partie</button>";
                    $resultat.classList.add("modalShow");
                    $scoreDynamic.innerHTML = "";
                    $tourDynamique.innerHTML = "";
                    yourTurn.innerHTML = "";
                    $score = 0;

                }
            }
            if (ev.target.classList.contains("green")) {
                if (simonArray[0] === 1) { // On retire le premier élément du tableau pour ajouter un point au score si l'utilisateur à toucher la bonne touche
                    simonArray.shift();
                    $score ++;
                    $scoreDynamic.innerHTML = "Votre score actuel : " + $score;
                    $tourDynamique.innerHTML = "Votre tour actuel : " + tour;
                    if (simonArray.length === 0) { 
                            $playerTurn = false;
                            tour++;
                            yourTurn.innerHTML = "";
                            startGame();
                        }   
                    } 
                else {
                    simonArray = [];
                    $playerTurn = false;
                    tour = 1;
                    innerResult.innerHTML = "Perdu ! Votre score : " + $score + "</br><button class='col-4 removeModal' onClick='startGame()'>Démarrer la partie</button>";
                    $resultat.classList.add("modalShow");
                    $scoreDynamic.innerHTML = "";
                    $tourDynamique.innerHTML = "";
                    yourTurn.innerHTML = ""; 
                    $score = 0;

                }
            }
            if (ev.target.classList.contains("blue")) {
                if (simonArray[0] === 2) { // On retire le premier élément du tableau pour ajouter un point au score si l'utilisateur à toucher la bonne touche
                    simonArray.shift();
                    $score ++;
                    $scoreDynamic.innerHTML = "Votre score actuel : " + $score;
                    $tourDynamique.innerHTML = "Votre tour actuel : " + tour;
                    if (simonArray.length === 0) { 
                        $playerTurn = false;
                        tour++;
                        yourTurn.innerHTML = "";
                        startGame();
                    }     
                }
                else {
                    simonArray = [];
                    $playerTurn = false;
                    tour = 1;
                    innerResult.innerHTML = "Perdu ! Votre score : " + $score + "</br><button class='col-4 removeModal' onClick='startGame()'>Démarrer la partie</button>";
                    $resultat.classList.add("modalShow");
                    $scoreDynamic.innerHTML = "";
                    $tourDynamique.innerHTML = "";
                    yourTurn.innerHTML = "";
                    $score = 0;

                }
            }
            if (ev.target.classList.contains("yellow")) {
            // $yellow.innerHTML = "CLIC !";
                if (simonArray[0] === 3) { // On retire le premier élément du tableau pour ajouter un point au score si l'utilisateur à toucher la bonne touche
                    simonArray.shift();
                    $score ++;
                    $scoreDynamic.innerHTML = "Votre score actuel : " + $score;
                    $tourDynamique.innerHTML = "Votre tour actuel : " + tour;
                    if (simonArray.length === 0) { 
                        $playerTurn = false;
                        tour++; 
                        yourTurn.innerHTML = "";
                        startGame();
                    }
                } 
                else {
                    simonArray = [];
                    $playerTurn = false;
                    tour = 1;
                    innerResult.innerHTML = "Perdu ! Votre score : " + $score + "</br><button class='col-4 removeModal' onClick='startGame()'>Démarrer la partie</button>";
                    $resultat.classList.add("modalShow");
                    $tourDynamique.innerHTML = "";
                    $scoreDynamic = "";
                    yourTurn.innerHTML = "";
                    $score = 0;
                }
            }
        }
        else {
            alert("Vous n'avez pas encore démarré la partie !");
        }
    });
});

function startGame(){
    $resultat.classList.remove("modalShow"); //On retire la modal de game over
    innerResult.innerHTML = "";
    if ($playerTurn === true) { // Le jouer ne peut pas démarrer une nouvelle partie si c'est son tour
        alert("Vous avez déjà une partie en cours !");
    }
    else {
        switch(tour) {
            case 1 :
                for (let i = 0; i < 2; i++) {  
                    simonValue = Math.floor(Math.random() * 4);
                    simonArray.push(simonValue);
                }
                $speedRemove = 450;
                $interval = 450;
                break;

            case 2 :
                for (let i = 0; i < 3; i++) {
                    simonValue = Math.floor(Math.random() * 4);
                    simonArray.push(simonValue);
                }
                $speedRemove = 400;
                $interval = 400;
                break;
            case 3 :
                for (let i = 0; i < 4; i++) {
                    simonValue = Math.floor(Math.random() * 4);
                    simonArray.push(simonValue);
                }
                $speedRemove = 350;
                $interval = 350;
                break;
            case 4 :
                for (let i = 0; i < 5; i++) {
                    simonValue = Math.floor(Math.random() * 4);
                    simonArray.push(simonValue);
                }
                $speedRemove = 300;
                $interval = 300;
                break;
            case 5 :
                for (let i = 0; i < 6; i++) {
                    simonValue = Math.floor(Math.random() * 4);
                    simonArray.push(simonValue);
                }
                $speedRemove = 275;
                $interval = 275;
                break;
            case 6 :
                for (let i = 0; i < 7; i++) {
                    simonValue = Math.floor(Math.random() * 4);
                    simonArray.push(simonValue);
                }
                $speedRemove = 250;
                $interval = 250;
                break;
            case 7 :
                for (let i = 0; i < 8; i++) {
                    simonValue = Math.floor(Math.random() * 4);
                    simonArray.push(simonValue);
                }
                $speedRemove = 225;
                $interval = 225;
                break;            
        }

        if (tour === 8) { // On ne change plus la vitesse mais on ajoute une couleur 
            for (let i = 0; i < tour; i++) {
                simonValue = Math.floor(Math.random() * 4);
                simonArray.push(simonValue);
            }
        }

        // On boucle le tableau pour vérifier chacunes des valeurs du tableau et faire changer la couleur correspondante. On montre ainsi à l'utilisateur la bonne couleur à sélectionner, le tout dans l'ordre.
        // 0 = red, 1 = green, 2 = blue, 3 = yellow
        simonArray.forEach(function(item, index){
            setTimeout(function () {
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
            }, index * 500);  
            $playerTurn = true;
            yourTurn.innerHTML = "À vous de jouer !";
        })
   
        // console.log(tour);
        // console.log(simonArray);
        }   
};

//Fonction pour redémarrer la partie
function restartGame() {
    simonArray = [];
    $playerTurn = false;
    tour = 1;
    $scoreDynamic.innerHTML = "";
    $tourDynamique.innerHTML = "";
    yourTurn.innerHTML = "";
    $score = 0;
}

// Les quatres fonctions ajoute une couleur plus foncé au clique et une note qui est joué
function redSelect () {
    setTimeout(function() {
        document.getElementById("audioC3").play(); //On joue une note en lien de la touche
        $red.innerHTML = "C3";
        $red.classList.add('redSimon');
        colorRemove();
    }, $interval);
}
function greenSelect () {
    setTimeout(function() {
        document.getElementById("audioD3").play()
        $green.innerHTML = "D3";
        $green.classList.add('greenSimon');
        colorRemove();
    }, $interval);
}
function blueSelect () {
    setTimeout(function() {
        document.getElementById("audioE3").play()
        $blue.innerHTML = "E3";
        $blue.classList.add('blueSimon');
        colorRemove();
    }, $interval);
}
function yellowSelect () {
    setTimeout(function() {
        $yellow.innerHTML = "G4";
        document.getElementById("audioG4").play()
        $yellow.classList.add('yellowSimon');
        colorRemove();
    }, $interval);
}

//La fonction va retirer après un certain temps la couleur joué dans l'ordre
function colorRemove () {
    setTimeout(function() {
        if ($red.classList.contains("redSimon")) { // On vérifie que la classe contient la classe attribué par la fonction select pour la lui retirer la couleur foncé après un court laps de temps
            $red.classList.remove('redSimon');
            $red.innerHTML = ""; //On retire la note qui est joué
        }
        else if ($green.classList.contains("greenSimon")) {
            $green.classList.remove('greenSimon');
            $green.innerHTML = "";
        }
        else if ($blue.classList.contains("blueSimon")) {
            $blue.classList.remove('blueSimon');
            $blue.innerHTML = ""; 
        }
        else if ($yellow.classList.contains("yellowSimon")) {
            $yellow.classList.remove('yellowSimon');
            $yellow.innerHTML = ""; 
        }
    }, $speedRemove)
}

//Affichage de la modal de règles et bouton de fermeture de celle-ci
rules.addEventListener("click", (ev) => {
    innerRules.classList.remove("hide");
    innerRules.classList.add("modalRules");
});

closeRules.addEventListener("click", (ev) => {
    innerRules.classList.add("hide");
    innerRules.classList.remove("modalRules");
})