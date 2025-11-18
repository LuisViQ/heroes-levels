// informações do heroi
let hero = ["Luis Queiroz", 7001]

if (hero[1] <= 1000){ //Caso Ferro
    hero.push("ferro")
} 
else if (hero[1] <= 2000){//Caso Bronze
    hero.push("bronze")
}
else if (hero[1] <= 5000){//Caso Prata
    hero.push("prata")
}
else if (hero[1] <= 7000){//Caso Ouro
    hero.push("ouro")
}
else if (hero[1] <= 8000){//Caso Platina
    hero.push("platina")
}
else if (hero[1] <= 9000){//Caso Ascendente
    hero.push("ascendente")
}
else if (hero[1] <= 10000){ //Caso Imortal
    hero.push("imortal")
} else { //Caso radiante
    hero.push("radiante")
}
console.log("O Herói de nome " + hero[0] + " está no nível de " + hero[2]) //Mensagem do nivel e nome 