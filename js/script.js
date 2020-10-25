// Costruire array con cognomi
var cognomi = ["Bianchi", "Rossi", "Verdi", "Duzioni", "Balsano", "Zegna", "Arnaboldi"];
console.log("L'array è composto da ", cognomi)

// Bottoni
var invia = document.getElementById('invia');
var annulla = document.getElementById('annulla');

// Chiedere all’utente il cognome

invia.addEventListener('click',
function () {
var cognomeUser = document.getElementById('cognomeUser').value;
console.log("Il cognome inserito è ",cognomeUser)



// Inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
cognomi.push(cognomeUser);

console.log("L'array aggiornato è " , cognomi)

// Stampare la lista ordinata alfabeticamente

// Scrivere anche la posizione “umana” della lista in cui il nuovo utente si trova


});

// Funzionalità tasto annulla
annulla.addEventListener('click',
function () {
document.getElementById('cognomeUser').value = "";
});
