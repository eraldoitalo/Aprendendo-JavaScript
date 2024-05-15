// 1 - preco do etanol;
// 2 - preco da gasolina;
// 3 - o tipo de combustivel que esta no carro
// 4 - gasto medio de combustivel do carro por km 
// 5 - distancia em km

const precoG = 5.22;
const precoE = 4.68;
const mediaG = 12;
const mediaE = 10;
const distancia = 250;
const TipoCombustivel = "gasolina"

let valorG = precoG * distancia;
let resultG = valorG / mediaG; 
const Gaso = (resultG) 

let valorE = precoE * distancia;
let resultE = valorE / mediaE;
const Eta = (resultE)

if (TipoCombustivel === "gasolina"){
    console.log(resultG);
}else{
    console.log(resultE);
}




// (let valorG = precoG * distancia;
// let resultG = valorG / mediaG;) 
// console.log(resultG)

// let valorE = precoE * distancia;
// let resultE = valorE / mediaE;
// console.log(resultE)

