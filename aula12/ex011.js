var idade = 13

console.log(`Voce tem ${idade} anos de idade`)

if (idade < 16) {

    console.log(`Voce nao vota`)

} else if (idade < 18 || idade > 65) {

    console.log(`Seu voto é opcional`)

} else {

    console.log(`Seu voto é obrigatorio`)

}