let jugadaDelJugador = prompt("Ingrese su jugada");

let jugadasDelBot = ["rock", "paper", "scissors"];

let jugadaDeLaMaquina = Math.floor(Math.random()*jugadasDelBot);

let rand = ~~(Math.random()*jugadasDelBot.length);

let calculoYaHecho = jugadasDelBot[rand];

console.log(calculoYaHecho);

if (jugadaDelJugador == calculoYaHecho) {
    alert("Empate kpo");
}

document.write("hola tu nariz contra mis bolas")