console.log(`\n Trabalhando com Condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 21;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\n Destinos possiveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

while (contador < 3) {

    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log("Destino existe: ", destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("Boa viagem!");
} else {
    console.log("Desculpe, ocorreu um erro!");
}

for (let cont = 0; cont < 3; cont++) {  //INDICE "i" É MAIS COMUM

    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
}