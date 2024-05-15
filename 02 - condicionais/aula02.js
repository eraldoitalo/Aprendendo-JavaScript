// ---------------------------Operadores-----------------------
// * operador de resto da divisao (%) 
// esse operador divide os valores e entrega somente o resto da divisao caso ela tenha

const numero1 = 15;
const numeropar1 = (numero1 % 2) === 0 ;
console.log(numeropar1);

// * operador de igualdade (=)
// = - atribuicao
// == - ele recebe o valor independente do tipo 
// === - ele somente recebe o valor se for uma atribuicao numerica

const numero2 = 117;
const numeropar2 = (numero2 % 2) === 0 ;

if (numeropar2){
    console.log('par');
}else{
    console.log('impar');
}

//---------------------------------------------

const val1 = 155;
const divp5 = (val1 % 5) === 0; 

if(divp5){
    console.log('Sim')
}else{
    console.log('Nao')
}

// o valor de 0 deve se identificado como invalido

const valor2 = 2
const num = (valor2 % 2) === 0;

if (valor2 === 0){
    console.log('valor invalido');
} else if (num){
    console.log ('par');
}else{
    confirm.log('impar');
}