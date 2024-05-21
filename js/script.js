
// console.log('gina va al lago'); // a

// setTimeout( gameOver, 1000, 'timeout!!!'); // ! ASPETTA 3 SECONDI E POI ESEGUI d

// console.log('gino va al mare');// b

// const clock = setInterval( gameOver, 5000, 'interval!!'); // ! OGNI 5 SECONDI ESEGUI e

// console.log('giggina va in montagna'); // c

// function gameOver(points){
//     console.log(points);
//     return points;
// }
// # Chiedo all'utente di inserire un numero, lo converto ad intero
let userSeconds = Number.parseInt(prompt('Scrivi i secondi che rimangono'), 10);

// # Se l'utente ha richiesto un tempo troppo lungo lo sovrascrivo con 5 secondi
if (userSeconds > 10 || Number.isNaN(userSeconds)){
    userSeconds = 5;
}

// # Inizializzzo una variabile timer alla quale assegno una funzione anonima di callback
// # da eseguire ogni secondo (1000 millisecondi)
const timer = setInterval( function(){
    userSeconds--; // % sottrai un secondo al timer 
    console.log(userSeconds);
    if( userSeconds <= 0){ // > se il timer ha raggiunto un numero di secondi uguale o minore a 0
        clearInterval(timer); // < allora ferma il timer e 
        alert('BUON ANNO!!!');// > augura buon anno
    }
}, 1000);

