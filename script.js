/*
one variable for units lost
one variable for round you lost on
*/

const calcButton = document.getElementById("calculate");
const damageDealt = document.getElementById("damage-dealt");

const stageDmg = {
  1: 0,
  2: 2,
  3: 5,
  4: 8,
  5: 10,
  6: 12,
  7: 17,
  8: 17,
  9: 17,
};

const unitDmg = (unit) => {
  return parseInt(unit);
};

const damageTaken = (stage, unit) => {
  return stageDmg[stage] + unitDmg(unit);
};

function calculateDmg() {
  const userStage = document.getElementById("stage").value;
  const userUnits = document.getElementById("units").value;
  document.getElementById("damage-dealt").innerHTML = damageTaken(
    userStage,
    userUnits
  );
}

//console.log(damageTaken(8, 10));
