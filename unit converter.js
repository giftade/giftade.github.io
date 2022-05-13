let inputEl, result, meter, feet, gallon, litre, kilogram, pound;
function convertLength(){
     
    inputEl = document.getElementById("inputEl").value;
     meter = inputEl / 3.281;
    feet = inputEl * 3.281;
    meter = meter.toFixed(3);
    feet = feet.toFixed(3);
    result = inputEl + ' meters ' + '= ' + feet + ' feet ' + '| ' + inputEl + ' feet ' + '= ' + meter + ' meters'
document.getElementById('lengthEl').innerHTML  = result;
return result
  
};

function convertVolume(){
     
    inputEl = document.getElementById("inputEl").value;
     litre = inputEl * 3.785;
    gallon = inputEl / 3.785;
    litre = litre.toFixed(3);
    gallon = gallon.toFixed(3);
  let  volume = inputEl + ' litres ' + '= ' + gallon + ' gallon ' + '| ' + inputEl + ' gallon ' + '= ' + litre + ' litres'
document.getElementById('volumeEl').innerHTML  = volume;
return volume
  
};

function convertMass(){
     
    inputEl = document.getElementById("inputEl").value;
     kilogram = inputEl / 2.205;
    pound = inputEl * 2.205;
    kilogram = kilogram.toFixed(3);
    pound = pound.toFixed(3);
   let mass = inputEl + ' kilograms ' + '= ' + pound + ' pounds ' + '| ' + inputEl + ' pounds' + '= ' + kilogram + ' kilograms'
document.getElementById('massEl').innerHTML  = mass;
return mass
  
};



