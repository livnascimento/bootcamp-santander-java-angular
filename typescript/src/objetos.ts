// não recomendado (objeto sem previsibilidade)
// let produto: object = {
//     nome: "Camiseta",
//     cor: "Preto",
//     preco: 3990
// }

// recomendado
type Produto = {
    nome: string;
    cor: string;
    preco: number;
}

let produto: Produto = {
    nome: "Camiseta",
    cor: "Preta",
    preco: 3990
}
