function AplicarDesconto (valor, desconto){
    return (valor - (valor * (desconto/100)))
}
function AplicarJuros (valor, juros){
    return (valor + (valor * (juros/100)))
}

const etiqueta = 100;
const formapagamento = 3;

if(formapagamento === 1){
    console.log(AplicarDesconto (etiqueta, 10));
}else if(formapagamento === 2){
    console.log(AplicarDesconto (etiqueta, 15));
}else if(formapagamento === 3){
    console.log(`2x de ${etiqueta / 2} = 100`);
}else{
    console.log(AplicarJuros(etiqueta, 10));
}