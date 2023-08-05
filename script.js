let groenteData = {
  wortelen: {
    planten: "maart",
    zaaien: "april",
    oogsten: "juli"
  },
  tomaten: {
    planten: "april",
    zaaien: "mei",
    oogsten: "augustus"
  }
  // Voeg hier andere groentesoorten toe
};

function updateCalendar() {
  const selectedGroente = document.getElementById("groente").value;
  const plantenTime = groenteData[selectedGroente].planten;
  const zaaienTime = groenteData[selectedGroente].zaaien;
  const oogstenTime = groenteData[selectedGroente].oogsten;

  document.getElementById("planten").innerText = `Planten in: ${plantenTime}`;
  document.getElementById("zaaien").innerText = `Zaaien in: ${zaaienTime}`;
  document.getElementById("oogsten").innerText = `Oogsten in: ${oogstenTime}`;
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

  // Update de dropdown met de nieuwe groente
  const groenteDropdown = document.getElementById("groente");
  const nieuweGroenteOptie = document.createElement("option");
  nieuweGroenteOptie.value = nieuweGroente;
  nieuweGroenteOptie.textContent = nieuweGroente;
  groenteDropdown.appendChild(nieuweGroenteOptie);
}

updateCalendar();
