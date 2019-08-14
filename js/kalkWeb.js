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
var temPonto = false;

const screen = document.querySelector(".screen");

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
	temPonto = false;
	console.clear();
}

const apresentar = function(valor){
	//console.log(operando);
	if(operando){
		operando = false;
		
		if(valor == "."){
			screen.innerText = "0";
			screen.innerText += valor;
			temPonto = true;
		}else{
			screen.innerText = "";
			screen.innerText += valor;
		}
	}else{
		if(valor == "." && screen.innerText == "0"){
				screen.innerText = "0";
				screen.innerText += valor;
				temPonto = true;
		// }else if(temPonto && valor == "."){
		// 	return;
		}else if(screen.innerText == "0"){
			screen.innerText = "";
			screen.innerText += valor;
		}else{
			if(valor == "." && screen.innerText != "0" && !temPonto){
				screen.innerText += valor;
				temPonto = true;
			}else if(temPonto && valor == "."){
				return;
			}else{
				screen.innerText += valor;
			}
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