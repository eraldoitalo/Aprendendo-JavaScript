class pessoa{
    nome;
    idade;
    anodenascimento;
    
    // sempre que houver uma chmada com as instancias nao definidas, o constructor servirá como padrao
    // constructor(){ 
    //     this.nome = 'teste';
    //     this.idade = 'teste';
    // }
    constructor(nome, idade){ 
        this.nome = nome;
        this.idade = idade;
        this.anodenascimento = 2024 - idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos`)
    }
}

function compararPessoas(p1, p2){
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    }else if(p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    }else{
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const italo = new pessoa('Ítalo', 20);
const gustavo = new pessoa('Gustavo', 13);

compararPessoas(italo, gustavo)