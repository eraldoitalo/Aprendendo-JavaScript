function SayMyName (name){
    console.log(`Your name is: ` + name);
}

SayMyName(`Ítalo`);
SayMyName(`Eduardo`);

// function (nome da funcao) (condicao){
//    operacao que a funcao irá execultar;
// }

// EXERCICIO 01
function EscreverMeuNome (name){
    console.log(`Meu nome é `+ name);
}

EscreverMeuNome('Ítalo');

// EXERCICIO 02
function ReceberIdade (idade){
    if (idade <= 17){
        console.log(`Voce é menor de idade`);
    }else {
        console.log(`Voce é maior de idade`); 
    }
}

ReceberIdade (17)

// EXERCICIO 03
function RetornarNome (name){
    return `Meu nome é ` + name;
}

function IndicarIdade (age){
    if (age <= 17){
        console.log(RetornarNome(`Ítalo`) + `. Sou menor de idade.`)
    }else{
        console.log(RetornarNome(`Ítalo`) + `. Sou maior de idade.` )
    }
}

IndicarIdade(15)