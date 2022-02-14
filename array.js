// array no js na verdade é um objeto, mas ao inves de organizar dados em valores, ele organiza em índices
// o array tem uma estrutura heterogêna

let aprovados = new Array( 'Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = [ 'Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo' // esse é mais comum para eu substituir um elemento que já existe a partir do indice
aprovados.push('Abia') //esse méto é mais indicado para adicionar elemento no array
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() //O método sort() ordena os elementos do próprio array e retorna o array. A ordenação não é necessariamente estável. A ordenação padrão é de acordo com a  pontuação de código unicode.
console.log(aprovados)

delete aprovados[1] // vai deletar mas não vai reordenar o array, apenaws colocará undefined na posição indicada
console.log(aprovados[1])
console.log(aprovados[2])

aprovados= ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2') //serve para excluir, apagar e excluir e apagar ao mesmo tempo
//a partir do indice1, deletou dois indices e adicionou outros 2 elementos
// se eu não quisesse deletar nenhum indice seria assim: 
//aprovados.splice(1, 0, 'Elemento1', 'Elemento2') --> significa que adicionei dois elementos no indice 1
console.log(aprovados)
