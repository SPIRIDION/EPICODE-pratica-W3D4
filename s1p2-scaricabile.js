/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* RISPOSTA 1
in Javascript esistono vari tipi di datatype:
_ string: sono composte da caratteri o numeri, delimitate da doppi o singoli apici, esempio: "ciao" oppure 'Jhon'.
_ num: sono numeri interi, esempio: 1, 2, 3, 10, 198 o decimali, esempio: 9.5, 0.991.
_ bool: sono valori booleani che ammettono soltanto 2 opzioni: true o false, vengono utilizzarti per fare confronti
tra variabili e altre cose.
_ undefinded: è un data type particolare il quale viene dato ad una variabile dichiarata ma non ancora
assegnata
_ array: composti da un insieme di uno o più elementi, i quali possono essere di vari tipi o essi stessi arrays, esempio [1, 2, 3]
il loro indice parte da 0 quindi ad esempio il secondo elemento di un array composto da 4 elementi avrà indice pari a 1
_ oggetti: composti da uno o più elementi caratterizzati dal fatto di essere coppie chiave valore, esempio {"nome":"Jhon", "età":30}
_ null: altro datatype particolare, utilizzato per "svuotare" una variabile del suo contenuto.
*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* RISPOSTA 2
Un oggetto è un tipo di data structure composto da uno o più elementi i quali sono coppie chiave-valore, 
ad esempio: se abbiamo un oggetto tipo: let Persona = {"nome":"Giovanni", "età":22} eseguendo console.log(persona), 
otterremmo come output tutte le istanze(elementi) facenti parte dell'oggetto Persona, invece eseguendo console.log(persona.nome), 
il nostro output sarà solo "Giovanni", cioè il valore della chiave "nome."
*/

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* RISPOSTA 3 */

let numeroUno = 12
let numeroDue = 20

let somma = numeroUno + numeroDue
console.log(somma)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* RISPOSTA 4 */

let x = 12

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* RISPOSTA 5 */

let name = "Massimiliano"

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* RISPOSTA 6 */

console.log(4 - x)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* RISPOSTA 7 */

let name1 = "john"
let name2 = "John"

console.log(name1 !== name2) // con output true significa che le 2 variabili sono diverse tra loro
console.log(name1 === name2.toLowerCase()) // con output true significa che le 2 variabili sono uguali
