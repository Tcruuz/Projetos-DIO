const partida = rankeada(100,5);
let nivel;

if(partida <11){
    nivel = "Ferro"
}
else if (partida <21){
    nivel = "Bronze"
}
else if (partida <51){
    nivel = "Prata"
}
else if (partida <81){
    nivel = "Ouro"
}
else if (partida <91){
    nivel = "Platina"
}
else if (partida <101){
    nivel = "Ascendente"
}
else {
    nivel = "Imortal"
}


console.log("O Herói tem de saldo de " + partida + " e está no nível de " + nivel)

function rankeada(vitorias, derrotas){
    saldoVitorias = vitorias - derrotas
    return saldoVitorias
}