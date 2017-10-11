
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
    jugar();
}
//pantalla para elige maquina
document.getElementById('siguiente2').onclick=function(){
document.getElementById('eligemaquina').style.display="none";
document.getElementById('resultado').style.display="block";   
}
//pantalla para no jugar
document.getElementById('no').onclick=function(){
document.getElementById('bienvenida').style.display="none";
document.getElementById('nojuega').style.display="block"; 
  }  
document.getElementById('inicio').onclick=function(){
document.getElementById('nojuega').style.display="none";
document.getElementById('bienvenida').style.display="block"; 

 } 
// el proceso de jugar

function jugar(){
var par, impar, mijugada, jugadamaquina, jugador, maquina, suma, resto, jugador1, maquina1;

//par = true;
//impar = false;
    var par = document.getElementById('par');
    var impar = document.getElementById('impar');
    
    if(par.checked){
        var jugador = par.value;
        var maquina = impar.value;
    }
    if(impar.checked){
        var jugador = impar.value;
        var maquina = par.value;
    }
    
//mijugada = "impar";

//if(mijugada===par){
//  jugadamaquina = "impar"};
//
//if(mijugada===impar){
//    jugadamaquina = "par"
//};


//console.log('el jugador elige '+ mijugada);
    
    
//console.log('la maquina elige ' + jugadamaquina);

jugador1 = document.getElementById('eligenumero1').value;
    
document.getElementById('displayj').innerHTML='El jugador elige '+jugador1; 
    
maquina1 = Math.floor(Math.random()*11);

document.getElementById('displaym').innerHTML= 'La maquina elige ' + maquina1;
    
    
console.log('el jugador elige '+ jugador);
    
console.log('la maquina elige '+ maquina);
    
suma = Number(jugador1) + Number(maquina1);
console.log(suma);    

if(suma%2===0){
    var resto = "par";
}
if(suma%2!==0){
  
   var resto = "impar";
 }
if(resto===jugador){    

     document.getElementById('ganador').innerHTML= '¡Enhorabuena, has ganado!';
    document.getElementById('perdedor').style.display="none";
}
    
            else {
    document.getElementById('perdedor').innerHTML='¡Lo siento, has perdido!';
    document.getElementById('ganador').style.display="none";
            
            }
    
     
                      
   
 };






