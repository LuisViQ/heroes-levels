let playerWins = 10
let playerLose = 5

function calcLevel(wins, lose = 0){
    let level
    let points = wins - lose 
    if (points <= 10) level = "ferro";
    else if (points <= 20) level = "bronze";
    else if (points <= 50) level = "prata";
    else if (points <= 80) level = "ouro";
    else if (points <= 90) level = "diamante";
    else if (points <= 100) level = "lendario"
    else level = "imortal"
    return level
}
console.log("O Herói tem de saldo de "+ playerWins + " vitórias e está no nível de "+calcLevel(playerWins))