const groenteData = {
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

updateCalendar();
