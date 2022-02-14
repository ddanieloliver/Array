const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Remove o ultimo elemento do Array!
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton')//diciona um ou mais elementos no início de um array e retorna o número de elementos (propriedade length) atualizado
console.log(pilotos)

//splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2,0, 'Bottas', 'Massa')
console.log(pilotos)
//

//remover
pilotos.splice(3,1) // remove o um elemento a partir do indice 3, nesse caso, o proprio 3
console.log(pilotos)
//

const algunsPilotos1 = pilotos.slice(2)// gera um novo array a partir do indice selecionado do antigo
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4) // aqui també gera um novo array, mas o indice 1 entra, o 4 não.
console.log(algunsPilotos2)