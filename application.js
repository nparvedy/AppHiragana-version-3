
// Function qui permet de valider en appuyant sur la touche entrer et qui lance la function du boutton valider // version class
var wordToGuess2 = document.getElementById("wordToGuess2");
wordToGuess2.addEventListener("keyup", function(event){
    if (event.keyCode === 13){
        event.preventDefault();
        document.getElementById("check2").click();
    }else if (AppHira.areYouReverse == 1){AppHira.clickClavier(event)}

});

//objectif du jour, changer toute l'application en class

class AppHiragana {
    wordToTranslate = document.getElementById("wordToTranslate2");
    answer = document.getElementById("response2");
    goodAnswer = document.getElementById("goodAnswer2");
    wrongAnswer = document.getElementById("wrongAnswer2");
    areYouReverse = 0;
    change = 1;
    valeur = 0;
    valeur2 = 0;

    clavierVirtuel = document.getElementById("clavierVirtuel2");

    theIndice = document.getElementById("indice2");

    checkWord(){

        //vérifie si la réponse est correcte
        
        if (hiraganaVerso[this.valeur][this.change] == wordToGuess2.value)
        {
            this.answer.innerText = "Bonne réponse, la traduction de : " +  hiraganaVerso[this.valeur][this.valeur2] + " était bien " + hiraganaVerso[this.valeur][this.change];
            this.goodAnswer.innerText = parseInt(this.goodAnswer.innerText) + 1;
        }else {
            this.answer.innerText = "Faux ! La bonne réponse de : " + hiraganaVerso[this.valeur][this.valeur2] + " était " + hiraganaVerso[this.valeur][this.change];
            this.wrongAnswer.innerText = parseInt(this.wrongAnswer.innerText) + 1;
        }

        this.valeur = Math.floor(Math.random() * Math.floor(45)); //[1]
        this.wordToTranslate.innerText = hiraganaVerso[this.valeur][this.valeur2]; //[2]
        
        wordToGuess2.value = "";
        this.theIndice.innerText = ""; //[3]
        
    }

    reverse(){
        if (this.areYouReverse == 0)
        {
            this.areYouReverse = 1;
            this.wordToTranslate.innerText = hiraganaVerso[this.valeur][1];
            this.valeur2 = 1;
            this.change = 0;
        }else {
            this.areYouReverse = 0;
            this.wordToTranslate.innerText = hiraganaVerso[this.valeur][0];
            this.valeur2 = 0;
            this.change = 1;
        }

        this.valeur = Math.floor(Math.random() * Math.floor(45)); // Se répète avec [1]
        this.wordToTranslate.innerText = hiraganaVerso[this.valeur][this.valeur2]; // Se répète avec [2]
        this.theIndice.innerText = ""; // Se répète avec [3]

        this.clavierVirtuelFunction();
    }

    clavierVirtuelFunction(){
        if (this.areYouReverse == 1)
        {
            for (var i = 0; i < hiraganaVerso.length; i++) // A chaque boucle, ajoute un boutton
            {
                this.clavier(); 

                var nbButtons = document.querySelectorAll('#clavierVirtuel2 button'); //compte le nombre de bouttons du clavier

                this.clavier(nbButtons.length); //lance la fonction tant qu'il ne contient pas un bouton pour chaque hiragana
            }
        } else {
            this.clavierVirtuel.innerHTML = "";
        }
    }

    clavier(nbButton){
        for (var a = 0; a < hiraganaVerso.length; a++)
        {
            if (nbButton == hiraganaVerso[a][3]) // permet de mettre chaque touche dans l'ordre, si c'est la bonne touche alors on lui créer son bouton
            {
                this.clavierVirtuel.innerHTML = this.clavierVirtuel.innerHTML + '<button onclick="AppHira.clickClavier(event)" keyCode ="' + hiraganaVerso[a][2]+'"> ' + hiraganaVerso[a][0] + '</button>';

                if (nbButton == 11 || nbButton == 22 || nbButton == 33)
                {
                    this.clavierVirtuel.innerHTML = this.clavierVirtuel.innerHTML + "<br>";
                }
            }
        }
    }

    clickClavier(event){
        if (event.type == "click")
        {
            wordToGuess2.value = event.toElement.innerText;
        }else if (event.type == "keyup") 
        
        {
            for (var i = 0; i < hiraganaVerso.length; i++)
            {
                if (hiraganaVerso[i][2] == event.keyCode)
                {
                    wordToGuess2.value = hiraganaVerso[i][0];
                }
            }
        }
    }

    indiceByWord(){
        if (this.areYouReverse == 1){
            this.theIndice.innerText = hiraganaVerso[this.valeur][4][0][2];
        }else {
            this.theIndice.innerText = hiraganaVerso[this.valeur][4][0][0];
        }
        
    }
}

var AppHira = new AppHiragana();
