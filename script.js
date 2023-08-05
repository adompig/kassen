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
  const nieuweGroente = document.getElementById("nieuweGroente").value;
  const nieuwePlanten = document.getElementById("nieuwePlanten").value;
  const nieuweZaaien = document.getElementById("nieuweZaaien").value;
  const nieuweOogsten = document.getElementById("nieuweOogsten").value;

  groenteData[nieuweGroente] = {
    planten: nieuwePlanten,
    zaaien: nieuweZaaien,
    oogsten: nieuweOogsten
  };

  // Reset de invoervelden
  document.getElementById("nieuweGroente").value = "";
  document.getElementById("nieuwePlanten").value = "";
  document.getElementById("nieuweZaaien").value = "";
  document.getElementById("nieuweOogsten").value = "";

  // Voeg de nieuwe groente toe aan het dropdown-menu
  const groenteDropdown = document.getElementById("groente");
  const nieuweGroenteOptie = document.createElement("option");
  nieuweGroenteOptie.value = nieuweGroente;
  nieuweGroenteOptie.textContent = nieuweGroente;
  groenteDropdown.appendChild(nieuweGroenteOptie);
}

function zoekGroente() {
  const zoekTerm = document.getElementById("zoekGroente").value.toLowerCase();
  const groenteDropdown = document.getElementById("groente");

  for (let i = 0; i < groenteDropdown.options.length; i++) {
    const groenteOptie = groenteDropdown.options[i];
    const groenteNaam = groenteOptie.textContent.toLowerCase();

    if (groenteNaam.includes(zoekTerm)) {
      groenteOptie.style.display = "block";
    } else {
      groenteOptie.style.display = "none";
    }
  }

  groenteDropdown.selectedIndex = 0;
  updateCalendar();
}

updateCalendar();
