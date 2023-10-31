// Baby Names Data (Top 50 Boy/Girl 2022)
// Baby Center (babycenter.com)
// https://www.babycenter.com/baby-names/most-popular/top-baby-names#popularNameList

// Variables for html elements
let goBtn = document.getElementById("go-btn");
let menuSelect = document.getElementById("menu-select");
let container = document.getElementById("container");
let nameCountSpan = document.getElementById("namecount");



// Initialize Array of Character Objects from json file
let babyData = [];
fetch("baby-names-data.json")
  .then((res) => res.json())
  .then((data) => (babyData = data));

// Event Listener on Go Button
goBtn.addEventListener("click", goBtnClicked);

// Process Go Button Click
function goBtnClicked() {
  // Get Menu Selection
  let selection = menuSelect.value;


  // Process Menu Selection
  if (selection === "display-all") {
    displayAll();
  } else if (selection === "gender") {
    searchGender();
  } else if (selection === "rank") {
    searchRank();
  } else if (selection === "starting-letter") {
    searchStartingLetter();
  } else if (selection === "length") {
    searchLength();
  }
}

// Display All Baby Names
function displayAll() {

  for (let i = 0; i < babyData.length; i++){
    let Data = babyData[i];
    container.innerHTML += `${Data.name} (Rank:${Data.rank}, Gender:${Data.gender})<br />`;
  }
  nameCountSpan.innerHTML = `${babyData.length}`;
 
  console.log("Display All");
  // Confirm data load
  console.log(babyData);
}

// Display Names by Gender
function searchGender() {
  let targetGender = prompt("Search By Gender").toLowerCase();
  let targetCount = 0;

  for (let i = 0; i < babyData.length; i++) {
    let Data = babyData[i];

    if (Data.gender.toLowerCase() === targetGender) {
      targetCount++;
      container.innerHTML += `${Data.name} (Rank:${Data.rank}, Gender:${Data.gender})<br />`;
    }
  }
  nameCountSpan.innerHTML = `${targetCount}`;
  console.log("Search By Gender");
}


// Display Names within a Range of Ranks
function searchRank() {
  let maxRank = prompt("Enter Maximum Rank");
  let minRank = prompt("Enter Minimum Rank");
  let targetCount = 0;  
  for (let i = 0; i < babyData.length; i++){
    let Data = babyData[i]; 
  
    if (Data.rank >= minRank && Data.rank <= maxRank){
      targetCount++;
      container.innerHTML += `${Data.name} (Rank:${Data.rank}, Gender:${Data.gender})<br />`;
    }
  }

  nameCountSpan.innerHTML = `${targetCount}`;
  console.log("Search By Rank");
}

// Display Names with Starting Letter
function searchStartingLetter() {

let targetLetter = prompt("Search by Starting Letter:");
let targetCount = 0;
for (let i = 0; i < babyData.length; i++){
  let Data = babyData[i]; 

  if (Data.name[0] === targetLetter){
    targetCount++;
    container.innerHTML += `${Data.name}<br />`;
  }
}
nameCountSpan.innerHTML += `${targetCount}`;
  console.log("Search by Starting Letter");
}

// Display Names with a Specific Length
function searchLength() {
  let targetLength = parseInt(prompt("Search by Name Length"));
  let targetCount = 0;


  for (let i = 0; i < babyData.length; i++) {
    let Data = babyData[i];

    if (Data.name.length === targetLength) {
      targetCount++;
      container.innerHTML += `${Data.name}(Rank:${Data.rank}, Gender:${Data.gender})<br />`;
    }
  }

  nameCountSpan.innerHTML = `${targetCount}`;
  console.log("Search by Name Length");
}
