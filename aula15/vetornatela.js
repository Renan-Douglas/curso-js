let valores = [4, 2, 5, 3, 1];

valores.sort()

// console.log(valores)

/*
for ( let pos = 0; pos < valores.length; pos++) {

    console.log(`A posição ${[pos]} tem o valor ${valores[pos]}`)

}
*/

for ( let pos in valores) {

    console.log(`A posição ${[pos]} tem o valor ${valores[pos]}`)

}

/*
console.log(valores.indexOf(17))  *indeOf* Busca um valor dentro de um elemento e retorna seu local
*/

let pos = valores.indexOf(10)

if (pos == -1) {

    console.log('Valor não encontrado')

} else {

    console.log(`O valor está na posição ${pos}`)

}

console.log(valores[3]) // Busca o número do elemento e te retorna o valor que se encontra dentrro dele