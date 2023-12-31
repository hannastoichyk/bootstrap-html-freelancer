/*Quando l’utente fa click sul bottone “send” del form, il sito deve calcolare l’ammontare del preventivo per le ore di lavoro richieste.
Il prezzo orario per una commissione varia in questo modo:
se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.50€ l’ora
se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.30€ l’ora
se la commissione riguarda l’analisi progettuale di un progetto il prezzo orario è di 33.60€
L’utente potrebbe decidere di utilizzare un codice promozionale tra i seguenti:
YHDNU32
JANJC63
PWKCN25
SJDPO96
POCIE24
Se l’utente inserisce un codice promozionale valido, ha diritto ad uno sconto del 25% sul prezzo finale. Se il codice inserito non è valido, il sito deve informare l’utente che il codice non è valido e il prezzo finale viene calcolato senza applicare sconti.
// Il risultato del calcolo del prezzo finale deve essere visualizzato in “forma umana” (con 2 decimali e il simbolo dell’euro) in un apposito tag HTML appena sotto il bottone send.*/



function offer(event) {
  event.preventDefault();

  let firstnamename = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;
  let hoursrequisted = document.getElementById("hoursrequisted").value;



  hoursrequisted = parseFloat(hoursrequisted);

  if (isNaN(hoursrequisted)) {
    alert("Non hai inserito carattere valido!");
  }

  
  let work = document.getElementById("typeofwork").value;
  work = parseFloat(work);
  let price = work*hoursrequisted
  console.log(price);
}

//
function getWorkPrice(work) {
  let workPrice = 0;
  if (work == "Sviluppo backend") {
      workPrice = 20.50;
  }
  else if (work == "Sviluppo frontend") {
      workPrice = 15.30;
  }
  else if (work == "Analisi progettuale di un progetto") {
      workPrice = 33.60;
  }
  return workPrice;
}