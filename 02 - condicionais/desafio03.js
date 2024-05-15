// calcular media: 
// media = (nota 1 + nota 2 + nota 3)  / 3;

// classificacoes 
// - media menor que 5, reprovacao
// - media entre 5 e 7, recuperacao
// - media maior que 7, aprovado

const nota1 = 5;
const nota2 = 6;
const nota3 = 7;

const media = (nota1 + nota2 + nota3) / 3;
// console.log(media.toFixed(2));

if(media < 5){
    console.log(`REPROVADO! Sua nota foi ${media.toFixed(2)}`);
}else if(media >= 5 && media <= 6.9){
    // && expressa valor de E, além de lembrar de repetir a variavel
    console.log(`RECUPERACAO! Sua nota foi ${media.toFixed(2)}`);
}else{
    console.log(`APROVADO! Sua nota foi ${media.toFixed(2)}`);
}
