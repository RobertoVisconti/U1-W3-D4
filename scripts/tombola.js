// richiamo gli elementi nel DOM
const mainBtn = document.querySelector('button[type="submit"]');
const tabelloneContainer = document.querySelector(".number-card");

// Stato del gioco
let numeriEstratti = [];

// Generazione del tabbellone
const creaTabellone = function () {
  tabelloneContainer.innerHTML = "";
  for (let i = 1; i <= 90; i++) {
    const cella = document.createElement("div");
    cella.className = "cella-numero";
    cella.id = `num-${i}`;
    cella.textContent = i;
    tabelloneContainer.appendChild(cella);
  }
};

// Estrazione del numero
const estraiNumero = function () {
  if (numeriEstratti.length >= 90) {
    resetGioco();
    return;
  }
  let numeroCasuale;
  do {
    numeroCasuale = Math.floor(Math.random() * 90) + 1;
  } while (numeriEstratti.includes(numeroCasuale));
  numeriEstratti.push(numeroCasuale);
  aggiornaTabellone(numeroCasuale);
};

// Evidenzia il numero sul tabellone
const aggiornaTabellone = function (n) {
  const cella = document.getElementById(`num-${n}`);
  if (cella) {
    cella.classList.add("estratto");
  }
  if (numeriEstratti.length === 90) {
    // cambio scritta del bottone al termine dei numeri
    mainBtn.textContent = "RESET";
  }
};
const resetGioco = function () {
  numeriEstratti = [];
  mainBtn.textContent = "ROLL";
  creaTabellone();
};

// reset comportamento di default
mainBtn.addEventListener("click", (e) => {
  e.preventDefault();
  estraiNumero();
});

creaTabellone();
