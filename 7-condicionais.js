console.log(`Trabalhando com Condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 21;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos possiveis:");
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada == true) { //COM O 'IF' CONSEGUIMOS CONTROLAR O FLUXO DO CODIGO // OPERADOR DE "OU" SE USA COM "||"
    console.log("Boa Viagem!");
    listaDeDestinos.splice(2, 1); //removendo item
} else {
    console.log("Comprador não é maior de idade e não podemos vender");
}

console.log("Embarque: \n\n");
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa Viagem!");
} else {
    console.log("Você não pode embarcar");
}

// if (idadeComprador >= 18) { //COM O 'IF' CONSEGUIMOS CONTROLAR O FLUXO DO CODIGO
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1); //removendo item
// } else if (estaAcompanhada) {
//     console.log("Comprador está acompanhado");
//     listaDeDestinos.splice(1, 1); //removendo item
// } else {
//     console.log("Comprador não é maior de idade e não podemos vender");
// }


console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18); //PARA USO DE COMPARAÇÕES, JAVASCRIPT USA DOIS "=="