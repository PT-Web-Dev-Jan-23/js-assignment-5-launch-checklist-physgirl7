// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

    let missionTarget = document.getElementById("missionTarget");

    let h2 = document.createElement('h2');
    h2.innerHTML = "Mission Destination";
    missionTarget.appendChild(h2);

    let orderedList = document.createElement('ol');
    orderedList.id = 'listOrder';
    missionTarget.appendChild(orderedList);

    let li1 = document.createElement('li');
    li1.innerHTML = `Name: ${name}`;
    listOrder.appendChild(li1);

    let li2 = document.createElement('li');
    li2.innerHTML = `Diameter: ${diameter}`;
    listOrder.appendChild(li2);

    let li3 = document.createElement('li');
    li3.innerHTML = `Star: ${star}`;
    listOrder.appendChild(li3);

    let li4 = document.createElement('li');
    li4.innerHTML = `Distance from Earth: ${distance}`;
    listOrder.appendChild(li4);

    let li5 = document.createElement('li');
    li5.innerHTML = `Number of Moons: ${moons}`;
    listOrder.appendChild(li5);

    let planetImage = document.createElement('img');
    planetImage.src = imageUrl;
    missionTarget.appendChild(planetImage);


   // Here is the HTML formatting for our mission target div.
   
                // "<h2>Mission Destination</h2>
                // <ol>
                //     <li>Name: </li>
                //     <li>Diameter: </li>
                //     <li>Star: ${star}</li>
                //     <li>Distance from Earth: </li>
                //     <li>Number of Moons: </li>
                // </ol>
                // <img src="">"
   
}

function validateInput(testInput) {
    if (testInput === ""){
        return "Empty";
    }
    
    if (isNaN(testInput)) {
        return "Not a Number";
    } 
    return "Is a Number";
}

    
   


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let pilotValidate = validateInput(pilot);
    let copilotValidate = validateInput(copilot);
    let fuelLevelValidate = validateInput(fuelLevel);
    let cargoMassValidate = validateInput(cargoLevel);

    if (pilotValidate === "Empty" || copilotValidate === "Empty" || fuelLevelValidate === "Empty" || cargoMassValidate === "Empty"){
        alert("All fields are required!")
    };

    if (pilotValidate === "Is a Number"){
        alert("Must enter a name for the Pilot")
    }

    if (copilotValidate === "Is a Number"){
        alert("Must enter a name for the CoPilot")
    }

    if (fuelLevelValidate === "Not a Number"){
        alert("Must enter a number for the fuel level")
    }

    if(cargoMassValidate === "Not a Number"){
        alert("Must enter a number for the cargo mass")
    }

    let faultyItems = document.getElementById("faultyItems");
    let launchStatus = document.getElementById("launchStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    faultyItems.style.visibility = "visible";
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

    let launchConditionFuel = true;
    let launchConditionCargo = true;

    if (fuelLevel < 10000){
        launchConditionFuel = false;
        // launchStatus.innerHTML = "Shuttle Not Ready for launch";
        // launchStatus.style.color = "red";
        fuelStatus.innerHTML = "Fuel level too low for launch";
    } else {
        launchConditionFuel = true;
        // launchStatus.innerHTML = "Shuttle is Ready for Launch";
        // launchStatus.style.color = "green";
        fuelStatus.innerHTML = "Fuel level high enough for launch";
    }

    if (cargoLevel > 10000){
        launchConditionCargo = false;
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    } else {
        launchConditionCargo = true;
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
    }

    if (launchConditionFuel && launchConditionCargo){
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        launchStatus.style.color = "rgb(65,159,106)";
    } else {
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "rgb(199,37,78)";
    }

}

async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {  
        return response.json();
    })
        
    return planetsReturned;
};

function pickPlanet(planets) {
    let pick = Math.round(Math.random()*5);
    return planets[pick];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
