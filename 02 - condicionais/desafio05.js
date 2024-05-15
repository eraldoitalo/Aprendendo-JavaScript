// // calcule o preco do produto de acordo com as condicoes de pagamento
// condicoes:
// - A vista no debito, recebe 10%  de desconto;
// - A vista no dinheiro ou pix, recebe 15% de desconto;
// - Em 2x, preco normal de etiqueta sem joros;
// - A cima de duas vezes, preco normal de etiqueta mais juros de 10%. 

// const etiqueta = 100;
// const formapagamento = 4; 
// const produtodebito = 0.1 * 100;
// const produtopix = 0.15 * 100;
// const avd = etiqueta - produtodebito;
// const avp = etiqueta - produtopix;
// const parcela = `2x de ` + etiqueta / 2;
// const parcelado = etiqueta + produtodebito;

// // console.log(`O produto custa R$${produto}.00`);

// if(formapagamento === 1){
//     console.log(`Vc recebeu 10% de desconto, sua compra deu RS${avd}.00`);
// }else if(formapagamento === 2){
//     console.log(`Vc recebeu 15% de desconto, sua compra deu RS${avp}.00`);
// }else if(formapagamento === 3){
//     console.log(parcela);
// }else{
//     console.log(`Vc recebeu 10% de juros`);
// }

// console.log(avd);
// console.log(avp);
// console.log(parcela);
// console.log(parcelado);


const etiqueta = 100;
const formapagamento = 4;

if(formapagamento === 1){
    console.log(etiqueta - (0.1 * etiqueta));
}else if(formapagamento === 2){
    console.log(etiqueta - (0.15 * etiqueta));
}else if(formapagamento === 3){
    console.log(`2x de ${etiqueta / 2}`);
}else{
    console.log(etiqueta + (0.1 * etiqueta));
}