let num = [5, 6, 9, 1]

num[4] = 2
num[2] = 3

num.push(4) // adiciona no proximo elemento a ser criado o numero entre ()

num.length = 6

console.log(`Nosso vetor é ${num}`)

console.log(`Possui ${num.length} elementos`) // let.length para mostrar quantos elementos tem no array

console.log(`Em ordem crescente ficará ${num.sort()}`) // let.sort() para definir o array em ordem crescente

console.log(`O terceiro valor da array é o ${num[2]}`) // let+[]<--numero do elemento a ser obtido

for (let pos = 0; pos < num.length; pos++) { // pos = a posicionamento de um elemento, pos começa com 0, enquanto o posicionamento for menor que o número maximo de elementos, pos recebe + 1

    console.log(num[pos])

}