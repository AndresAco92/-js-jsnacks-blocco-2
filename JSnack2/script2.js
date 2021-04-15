var n_Utente = parseInt(prompt('Inserisci un numero:'))
console.log('Questo è il tuo numero:'+ n_Utente)

if(!(n_Utente % 2)){
  console.log('Questo numero è pari: '+ n_Utente)
}else{
  console.log('IL numero inserito nn è pari, questo è il suo successivo: '+ (n_Utente + 1))
}