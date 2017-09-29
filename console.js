
var jugador = 'pares';
var maquina = 'nones';
var jugadaJugador = 7;
console.log(jugadaJugador);
var jugadaMaquina = Match.floor(Math.random()*11);
console.log(jugadaMaquina);
var resultado = jugadaJugador+jugadaMaquina;
console.log(resultado);
var resultado = resultado%2;
console.log(resultado);
if (resultado===jugador){
    console.log('ganan pares')
}

if (resultado===maquina){
    console.log('ganan impares')
}