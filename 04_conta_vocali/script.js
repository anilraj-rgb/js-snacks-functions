/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function CountVowels(str) {
    let count= 0;
 for (let i = 0; i<str.length; i++){
    let char = str[i].toLowerCase();
    if (char === 'a'|| char === 'e' || char === 'i'|| char === 'o'|| char === 'u')
        count++;
    }
 

 return count;
 }

// Invoca la funzione qui e stampa il risultato in console
const word = 'javascript';
console.log(CountVowels(word));



//Risultato atteso se si passa 'javascript': 3 (a, a, i)