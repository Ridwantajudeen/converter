let inputNum = document.getElementById("theShow")

const convertBtn = document.getElementById("convert")
const convertWhole = document.getElementById("whole")
const forLength = document.getElementById("lengthMeasure")
const forVolume = document.getElementById("volumeMeasure")
const forMass = document.getElementById("massMeasure")


function butcov(){
   feet = Math.round((inputNum.value * 3.2808) * 100) / 100
   metre = Math.round((inputNum.value / 3.2808) * 100) / 100
    forLength.innerText = inputNum.value + " metres" + " = " + feet +  " feet"  + " | " + inputNum.value + " feet" + " = " + metre + " metres"
    gallon = Math.round((inputNum.value / 3.78541) * 100) / 100
   liter = Math.round((inputNum.value * 3.78541) * 100) / 100
    forVolume.innerText = inputNum.value + " liters" + " = " + gallon +  " gallons"  + " | " + inputNum.value + " gallons" + " = " + liter + " liters"
    pound = Math.round((inputNum.value * 2.20462) * 100) / 100
   kilo = Math.round((inputNum.value / 2.20462) * 100) / 100
    forMass.innerText = inputNum.value + " kilos" + " = " + pound +  " pounds"  + " | " + inputNum.value + " pounds" + " = " + kilo + " kilos"

}

inputNum.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
     
      document.getElementById("convert").click();
      
    }
  });