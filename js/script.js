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

// Se l'iniziale inserita non è maiuscola
cognomeUser = cognomeUser.charAt(0).toUpperCase() + cognomeUser.slice(1);



// Inserirlo nell'array originale
cognomi.push(cognomeUser);
console.log("L'array aggiornato è " , cognomi);


// Stampare la lista ordinata alfabeticamente
cognomi.sort();
console.log("La lista in ordine alfabetico è ")

var listaStampata = "";
    var i = 0;
    while (i < cognomi.length) {
      listaStampata = listaStampata + "<li>" + cognomi[i] + "</li>";
      i++
    }

  document.getElementById('stampa').innerHTML = 'LISTA COGNOMI <br>' + listaStampata;


// Scrivere anche la posizione “umana” della lista in cui il nuovo utente si trova
// scrivo numero posizione
    i = 0
    while (i < cognomi.length) {
      if (cognomi[i] === cognomeUser) {
        console.log("sei il numero:", i+1 );
        var posizione = i+1
      }
      i++
    }
});

// Funzionalità tasto annulla
annulla.addEventListener('click',
function () {
document.getElementById('cognomeUser').value = "";
});
