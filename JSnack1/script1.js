//ciclo for

var somma = 0;
for( var i = 0; i < 5; i++){
  var num_Utente = parseInt(prompt("Inserisci un numero"));
  somma += num_Utente;
}
console.log(somma)

//ciclo while

var c = 0;
var sum = 0;
while(c < 5){
  var num_new_Utente = parseInt(prompt("Inserisci un numero"));
  sum += num_new_Utente;
  c++
}
console.log(sum)