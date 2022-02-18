// serve exatamente para filtrar os elementos que eu quero
const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false },
]

console.log(produtos.filter(function (cadaprod) {
    // o resuktado deve ser verdadeiro ou falso
    return cadaprod.preco > 2500 // aqui vou passar o criterio do filtro
}))

//desafio:

const ProdutoCaro = function (p) {
    return p.preco >= 500
}

const produtofragil = function (p) {
    return p.fragil
}

console.log(produtos.filter(ProdutoCaro).filter(produtofragil))