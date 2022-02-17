//Um map serve para transformar um array em outro. Veja bem, ele não transforma o array atual.

const nums = [1, 2, 3, 4, 5]

//map é um for com propósito
 let resultado = nums.map(function(e){
     return e * 2
 })

 console.log(resultado, nums)

 const soma10 = e => e + 10
 const triplo = e => e*3
 const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`
 // A função parseFloat() analisa um argumento string e retorna um número de ponto flutuante.

 resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
 console.log(resultado)