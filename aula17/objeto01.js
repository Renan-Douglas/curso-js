let amigo = {
nome:'David', 
sexo:'Masculino', 
peso:'62.',
engordar(p){
    console.log('Engordou')
    this.peso += p
}
}

amigo.engordar(9)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)