// sintaxe da funcao
    // function nome-function(parametro){
    //    operacao que a funcao irá fazer
    // }

// EXEMPLO
function quadrado(valor) {
    return valor * valor;   //se eu nao informar um return, o meu console.log nao iria mostrar nada, 
    //mas a fucao iria fazer a operacao
}

const quadradodevalor = quadrado(10);
console.log(quadradodevalor);

// EXEMPLO 02
function incrementarJuros(valor1, percentual){
    const ValorDeAcrecimo = (percentual/100) * valor1;
    return valor1 + ValorDeAcrecimo;
}
console.log(incrementarJuros(25,10));

// ---------------------------------------------------------------
function incrementarJuros2(valor2, percentual2){
    const ValorDeAcrecimo = (percentual2/100) * valor2;
    return valor2 + ValorDeAcrecimo;
}

function main() {
    console.log(`Programa principal`);
    console.log(incrementarJuros2(25,10));
}
main();

