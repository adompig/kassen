let groenteData = {
  wortelen: {
    planten: "maart",
    zaaien: "april",
    oogsten: "juli",
    image: "wortelen.jpg"
  },
  tomaten: {
    planten: "april",
    zaaien: "mei",
    oogsten: "augustus",
    image: "tomaten.jpg"
  }
  // Voeg hier andere groentesoorten toe
};

function updateCalendar() {
  const selectedGroente = document.getElementById("groente").value;
  const plantenTime = groenteData[selectedGroente].planten;
  const zaaienTime = groenteData[selectedGroente].zaaien;
  const oogstenTime = groenteData[selectedGroente].oogsten;
  const groenteImage = groenteData[selectedGroente].image;

  document.getElementById("planten").innerText = `Planten in: ${plantenTime}`;
  document.getElementById("zaaien").innerText = `Zaaien in: ${zaaienTime}`;
  document.getElementById("oogsten").innerText = `Oogsten in: ${oogstenTime}`;
  document.getElementById("groenteImage").style.backgroundImage = `url('${groenteImage}')`;
}

function voegGroenteToe() {
  // Dezelfde functie zoals eerder gegeven
}

function zoekGroente() {
  const zoekTerm = document.getElementById("zoekTerm").value.toLowerCase();
  const groenteDropdown = document.getElementById("groente");

  // Filter de opties in het dropdown-menu op basis van de zoekterm
  for (let i = 0; i < groenteDropdown.options.length; i++) {
    const groenteOptie = groenteDropdown.options[i];
    const groenteNaam = groenteOptie.textContent.toLowerCase();

    if (groenteNaam.includes(zoekTerm)) {
      groenteOptie.style.display = "block";
    } else {
      groenteOptie.style.display = "none";
    }
  }
}

updateCalendar();
