/*
1 meter = 3.28084 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const meterToFeet = 3.28084
const literToGallon = 0.264
const KiloToPound = 2.204

const lengthValue = document.querySelector("#length-value")
const volumeValue = document.querySelector("#volume-value")
const kilosValue = document.querySelector("#kilos-value")
const unitValue = document.querySelector("#unit-input")
const convertBttn = document.querySelector("#convert-bttn")

function convert(convertion, operation, decimals) {
  if (operation === 1) {
      let unit = inputUnit * convertion
      return unit = unit.toFixed(decimals)
  } else if (operation === 2) {
      let unit = inputUnit / convertion
      return unit = unit.toFixed(decimals)  
  }
}



convertBttn.addEventListener("click", insert)

function insert() {
  inputUnit = unitValue.value
  let meter = convert(meterToFeet, 1, 3)
  let liters = convert(literToGallon, 1, 3)
  let kilogram = convert(KiloToPound, 1, 3)

  let feet = convert(meterToFeet, 2, 3)
  let gallon = convert(literToGallon, 2, 3)
  let pound = convert(KiloToPound, 2, 3)

  lengthValue.textContent = `${inputUnit} meters = ${meter} feet | ${inputUnit} feet = ${feet} meters`
  volumeValue.textContent = `${inputUnit} liters = ${liters} gallons | ${inputUnit} gallons = ${gallon} liters`
  kilosValue.textContent = `${inputUnit} kilos = ${kilogram} pounds | ${inputUnit} pounds = ${pound} kilos`
}