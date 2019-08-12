var soma = '+';
var multiplicacao = '*';
var divisao = '/';
var subtracao = '-';
var igualdade = '=';
var atual=0 ;
var resultado;
var antigo;

const screen = document.querySelector(".screen");

// const botoes = document.querySelectorAll("numbers button");

// for(let x=0; x<botoes.length;x++){
// 	botoes[x].onclick = apresentar(botoes[x].innerText);
// }

 const pegarValor = function(valor){
 	apresentar(valor);
 } 

const apresentar = function(valor){
	if(valor == "." && screen.innerText == "0"){
		screen.innerText = "0";
		screen.innerText += valor;
	}else if(screen.innerText == "0"){
		screen.innerText = "";
		screen.innerText += valor;
	}else{
		screen.innerText += valor;
	}
	
}

const apagar = function(){
	screen.innerText = "0";
	atual=0 ;
	resultado=0;
	antigo=0;
}

const operador = function(operador){
	if(operador == soma){
		antigo = atual;
		atual = parseInt(screen.innerText);
		screen.innerText = "";
		resultado = somar(antigo, atual);
		apresentar(resultado);
		//console.log(atual);
	}else if(operador == '='){

	}
}
const somar = function(a, b=0){
	return a+b;
}