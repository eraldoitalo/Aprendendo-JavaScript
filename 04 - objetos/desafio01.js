// 1 - crie uma classe para representar carros. 
// Os carros possuem uma marca, uma cor, e um gasto médio de km/l

class carro {
    marca;
    cor;
    GastoMedio;

    constructor(marca, cor, GastoMedio){
        this.marca = marca;
        this.cor = cor;
        this.GastoMedio = GastoMedio;
    }

    CalcularGasto(distancia, precoCombustivel){
        return distancia * this.GastoMedio * precoCombustivel;
    }
}

const palio = new carro('Fiat', 'prata', 1/10);
console.log(palio.CalcularGasto(250, 5));
const etios = new carro('toyota', 'preto', 1/12);
console.log(etios.CalcularGasto(250, 5));