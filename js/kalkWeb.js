//Variaveis de operação 
var soma = '+';
var multiplicacao = 'x';
var divisao = '÷';
var subtracao = '-';
var igualdade = '=';
//variaveis ajustes dos valores
var operando=false;
var operadorAtual = "";
var operadorAntigo = "";

var resultado = 0;
var antigo = 0;
var atual = 0;

const screen = document.querySelector(".screen");

let docBody = document.getElementsByTagName("body")[0];
	docBody.onkeydown = (e)=>{
		if(!e.metaKey){
			e.preventDefault();
		}

		if(e.key == "1"){
			apresentar("1");	
		}else if(e.key == "2"){
			apresentar("2");
		}else if(e.key == "3"){
			apresentar("3");
		}else if(e.key == "4"){
			apresentar("4");
		}else if(e.key == "5"){
			apresentar("5");
		}else if(e.key == "6"){
			apresentar("6");
		}else if(e.key == "7"){
			apresentar("7");
		}else if(e.key == "8"){
			apresentar("8");
		}else if(e.key == "9"){
			apresentar("9");
		}else if(e.key == "0"){
			apresentar("0");
		}else if(e.key == "."){
			apresentar(".");
		}else if(e.code == "Delete"){
			reset();
		}else if(e.key == "+"){
			operador("+");
		}else if(e.code == "Minus"){
			operador("-");
		}else if(e.key == "/"){
			operador("÷");
		}else if(e.key == "*"){
			operador("x");
		}else if(e.key == "="){
			igual();
		}else if(e.key == "Backspace"){
			apagar();
		}
	}	

const pegarValor = function(valor){
 	apresentar(valor);
} 

const reset = function(){
	screen.innerText = "0";
	atual= 0 ;
	resultado= 0;
	antigo= 0;
	operando = 0;
	operadorAntigo = "";
	operadorAtual = "";
	console.clear();
}

const apagar = function(){
	// var string = screen.value;
	// var string1 = string.replace(/.$/, "");
	// screen.value = string1;
}

const apresentar = function(valor){
	//console.log(operando);
	if(valor == "." && screen.innerText.indexOf(valor) != -1 ){
		return;
	}

	if(operando){
		operando = false;
		
		if(valor == "."){
			screen.innerText = "0";
			screen.innerText += valor;
		}else{
			screen.innerText = "";
			screen.innerText += valor;
		}
	}else{
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
	
}

const calcular = function(valorAntigo, operador, valorAtual){
	if(operador == soma){
		operadorAntigo = "";
		return antigo+atual;
	}else if(operador == subtracao){
		operadorAntigo = "";
		return antigo-atual;
	}else if(operador == divisao){
		operadorAntigo = "";
		return antigo/atual;
	}else if(operador == multiplicacao){
		operadorAntigo = "";
		return antigo*atual;
	}
}

//resolver o problema da igualdade
const igual = function(){
	// operando = true;
	// atual = Number(screen.innerText);
	// if(operadorAtual == ""){
	// 	apresentar(atual);
	// }else{
	// 	operador(operadorAtual);	
	// }
	// var r = {antigo, atual, operadorAntigo, operadorAtual, resultado};
	// console.table(r);
	
	operando = true;
	atual = Number(screen.innerText);

	if(operadorAtual == ""){
		//atual = atual + atual;
		apresentar(atual);
	}else{
		if(operadorAntigo == ""){
			resultado = calcular(antigo, operadorAtual, atual);
			antigo = resultado;
			apresentar(resultado);
			operadorAtual = "";
		}else{
			resultado = calcular(antigo, operadorAntigo, atual);
			antigo = resultado;
			apresentar(resultado);
			operadorAtual = "";
		}
	}
	var r = {antigo, atual, operadorAntigo, operadorAtual, resultado};
	console.table(r);
}

const operador = function(operador){

	// console.log(operador);
	atual = Number(screen.innerText);
	operadorAntigo = operadorAtual;
	if(operadorAntigo == ""){
		antigo = atual;
	}
	operadorAtual = operador;
	operando = true;

	if(operadorAntigo != ""){
			resultado = calcular(antigo, operadorAntigo, atual);
			antigo = resultado;
			apresentar(resultado);
			operando = true;
	}

	var t = {antigo, atual, operadorAntigo, operadorAtual, resultado};
	console.table(t);

	return;

}