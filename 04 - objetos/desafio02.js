class pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularimc(){
        return this.peso / (this.altura * this.altura)
    }

    classificarimc(){
        const IMC = this.calcularimc();
        if (IMC < 18.5){
            return ('Abaixo do peso!');
        }else if (IMC >=18.5 && IMC <= 25) {
            return ('Peso normal!');
        }else if (IMC >=25 && IMC <= 30) {
            return ('Acima do peso!');
        }else if (IMC >=30 && IMC <= 40) {
            return ('Obeso!');
        }else{
            return ('Obesidade grave!');
        }
    }
}

const rafael = new pessoa (`rafael`, 480, 1.83)
console.log(rafael.classificarimc());


