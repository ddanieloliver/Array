const aprovados = [ 'Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice){ // o inidice sempre é colocado como segundo paramentro e nunca como o primeiro, por isso, se quero ter acesso ao indice, devo colocar primeiro o primeiro parametro
   //na função callback há 3 parametros iniciais, nessa ordem: nome, inidice e o próprio array
    console.log( `${indice+1}) ${nome}`)
})

aprovados.forEach(nome=> console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)  