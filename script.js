var teste = new Audio();
teste.src = 'click.mp3';

var texto = document.querySelectorAll(".Texto")
var button = document.querySelectorAll(".button");
var operationButton = document.querySelectorAll(".operation");
var screen = document.form.txt;
var resultado;
var valor;
var block = false;
var array = [];
var signal = false;
var cont = 0;
var T = 0;/* 0 < 24 (Tempo do treino) */
var Q = 0;/* 2 < Q <= 5 | (Quantidade de jogadores) */
var X = 0;/* 0 < x <= Q - 1 | (Tempo de reposicionamento) */

/*click ---> button */
button.forEach(function (button) {
    button.addEventListener("click", function (event) {

        console.log(array[array.length - 1])
        display();
        array = screen.value

    })
})
/*display */
function display(number) {
    var number = event.target.value;

    
    if (screen.value.length >= 12) {
        valor = screen.value = ""
    } else {
        valor = screen.value;
        valor = screen.value = screen.value + number;

    }
}

operation.forEach(function (operation) {
    operation.addEventListener("click", function (event) {
        deleteC();
    })
})

function deleteC() {
    var number = event.target.value;
    if (number == 'C') {
        valor = screen.value = "";
        signal = false
    }
}

//Delete one by one
operation.forEach(function (operation) {
    operation.addEventListener("click", function (event) {
        deletee();
    })
})
function deletee() {
    screen.value;
    screen.value = screen.value.substring(0, screen.value.length - 1);
}
//Operation for making a account
operation.forEach(function (operation) {
    operation.addEventListener("click", function (event) {
        conta();
    })
})
function conta() {
    cont++;
    screen.value = ""
     /*Ex --> T=3, Q=3, X=2*/ 
    if (cont == 1) {
        texto[0].innerHTML = "Valor do Q";
        T = valor
    } 
    else if (cont == 2) {
        texto[0].innerHTML = "Valor do X";
        Q = valor
    } 
    else if (cont == 3) {
        X = valor
        /*Somatoria de joga*/ 
        var JogadoresDisponiveis = ((Q-X)*(T-(X-1)));/*JogadoresDisponiveis = 2 */
       
        var JogadoresReposicionamento = 0;
        
        for(k = 0; k < X-1; k++){
          JogadoresReposicionamento += Q-(k+1);  /*JogadoresReposicionamento = 2*/
        }
        
       var Result = JogadoresReposicionamento + JogadoresDisponiveis;
       texto[0].innerHTML = Result;
    } 
    else if (cont == 4) {
        texto[0].innerHTML = "Valor do T";
        cont = 0;
    } 
}