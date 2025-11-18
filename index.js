// informações do heroi
let hero = ["Luis Queiroz", 17000]
let nivel

if (hero[1] <= 1000){ //Caso Ferro
    nivel = "ferro"
} 
else if (hero[1] <= 2000){//Caso Bronze
    nivel = "bronze"
}
else if (hero[1] <= 5000){//Caso Prata
    nivel = "Prata"
}
else if (hero[1] <= 7000){//Caso Ouro
    nivel = "Ouro"
}
else if (hero[1] <= 8000){//Caso Platina
    nivel = "Platina"
}
else if (hero[1] <= 9000){//Caso Ascendente
    nivel = "Ascendente"
}
else if (hero[1] <= 10000){ //Caso Imortal
    nivel = "Imortal"
} else {
    nivel = "Radiante"
}
console.log(nivel)