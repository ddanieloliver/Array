const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 19.90}',
    '{"nome": "Kit de lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

//Retornar um array apenas com preços

const paraObj = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObj).map(apenasPreco)
console.log(resultado)




/*let arrayDeObj = carrinho.map(JSON.parse)
let arrayDePrecos = arrayDeObj.map(e =>{
    return preco
})
console.log(arrayDePrecos)*/