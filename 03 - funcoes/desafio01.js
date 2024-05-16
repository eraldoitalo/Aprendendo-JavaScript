// formula do IMC
// IMC = peso / (altura * altura)

// elabore um algoritimo que mostre sua condicao de acordo com a tabela 
// - abaixo de 18.5 = abaixo do peso;
// - entre 18.5 e 25 = peso normal;
// - entre 25 e 30 = acima do peso; 
// - entre 30 e 40 = obeso;
// - acima de 40 = obesidade grave.


function CalcularIMC(peso, altura){
    return peso / Math.pow(altura, 2);   
}

function classificarIMC(IMC){
    if (IMC < 18.5){
        return 'Abaixo do peso!';
    }else if (IMC >=18.5 && IMC <= 25) {
        return 'Peso normal!';
    }else if (IMC >=25 && IMC <= 30) {
        return 'Acima do peso!';
    }else if (IMC >=30 && IMC <= 40) {
        return 'Obeso!';
    }else{
        return 'Obesidade grave!';
    }
}

function main (){
    const peso = 64;
    const altura = 1.83;
    
    const IMC = CalcularIMC(peso, altura)
    console.log(`Seu IMC é ${IMC.toFixed(2)}`)
    console.log(classificarIMC(IMC))
}

 main();