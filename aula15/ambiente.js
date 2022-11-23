let num = [5, 7, 9, 1]

num[4] = 2
num[2] = 3

num.push(4) // adiciona no proximo elemento a ser criado o numero entre ()

num.length = 6

console.log(`Nosso vetor é ${num}`)

console.log(`Possui ${num.length} elementos`) // let.length para mostrar quantos elementos tem no array

console.log(`Em ordem crescente ficará ${num.sort()}`) // let.sort() para definir o array em ordem crescente

console.log(`O terceiro valor da array é o ${num[2]}`) // let+[]<--numero do elemento a ser obtido

for (let pos = 0; pos < num.length; pos++) {

    console.log(num[pos])

}