
//pantalla para no jugar
document.getElementById('no').onclick=function(){
document.getElementById('bienvenida)').style.display="none";
document.getElementById('nojuega').style.display="block";
}
//pantalla para jugar
document.getElementById('si').onclick=function(){
document.getElementById('bienvenida').style.display="none";
document.getElementById('paroimpar').style.display="block";
}
//pantalla para elegir par o impar
document.getElementById('siguiente').onclick=function(){
document.getElementById('paroimpar').style.display="none";
document.getElementById('eligenumero').style.display="block";
}
//pantalla para elige numero
document.getElementById('siguiente1').onclick=function(){
document.getElementById('eligenumero').style.display="none";
document.getElementById('eligemaquina').style.display="block";
}
//pantalla para elige maquina
document.getElementById('siguiente2').onclick=function(){
document.getElementById('eligemaquina').style.display="none";
document.getElementById('resultado').style.display="block";
}
