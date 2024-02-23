const nome = "Papa";
let idade = 45;
let tipo = "Ninja"
let ataque;

if (tipo === "Mago") {
    ataque = "Magia"
}
else if (tipo === "Guerreiro"){
    ataque = "Espada"
}
else if (tipo === "Monge"){
    ataque = "Artes Marciais"
}
else if (tipo === "Ninja"){
    ataque = "Shuriken"
}

console.log("O "+ tipo + " atacou usando " + ataque)