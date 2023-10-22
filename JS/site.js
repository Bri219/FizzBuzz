// //get values from the user. We need to get the fizz and the buzz value.
// function getValues()
// {
//     // get the user values from the page
//   let fizzValue = document.getElementById("fizzValue").value;
//   let buzzValue = document.getElementById("buzzValue").value;
//    // parse for numbers
//   fizzValue = parseInt(fizzValue);
//   buzzValue = parseInt(buzzValue);

//     // check that the numbers are intergers.
//   if(Number.isInterger(fizzValue) && Number.isInteger(buzzValue)){
//      // call fizzBuzz
//      let fbArray = fizzBuzz(fizzValue, buzzValue);
//      // call displayData and write the values to the screen
//    displayData(fbArray);
//    } else {
//     alert("You must enter Intergers!")
//    }
  
// };

// // Do fizz buzz
// function fizzBuzz(fizzValue, buzzValue){
//     let returnArray = [];

//    // loop from 1 to 100
//   for(let i = 1; i <= 100; i++){
    
//     // check to see if divisible by both (3 and 5)
//     // check to see if divisible by fizz value(3)
//     // check to see if divisible by buzz value (5)
//     if(i % fizzValue == 0 && i % buzzValue == 0){
//         returnArray.push('FizzBuzz');
//     }else if(i % fizzValue == 0){
//         returnArray.push('Fizz');
//     } else if(i % buzzValue == 0) {
//         returnArray.push('Buzz');
//     } else {
//     returnArray.push(i);
//   }
// };
//    return returnArray;
// };

//  //loop over the array and create a tablerow for each item.
// function displayData(fbArray){

//   //get the table body element from the page
//  let tableBody = document.getElementById("results");

//  //get the template row
//  let templateRow = document.getElementById("fbTemplate");

//  // clear table first
//  tableBody.innerHTML = "";
 
//  for (let index = 0; index < fbArray.length; index += 5){
//     let tableRow = document.importNode(templateRow.content, true);
    
//     // grab use the TD put into Array
//     let rowCols = tableRow.querySelectorAll("td");
//     rowCols[0].textContent = fbArray[index];
//     rowCols[1].textContent = fbArray[index+1];
//     rowCols[2].textContent = fbArray[index+2];
//     rowCols[3].textContent = fbArray[index+3];
//     rowCols[4].textContent = fbArray[index+4];

//     tableBody.appendChild(tableRow);
//  } 

//  // add all the rows to the table

// };

// Get values from the user. We need to get the fizz and buzz value.
function getValues() {
  // Get the user values from the page
  let fizzValue = document.getElementById("fizzValue").value;
  let buzzValue = document.getElementById("buzzValue").value;
  
  // Parse for numbers
  fizzValue = parseInt(fizzValue);
  buzzValue = parseInt(buzzValue);

  // Check that the numbers are integers.
  if (!isNaN(fizzValue) && !isNaN(buzzValue)) {
    // Call fizzBuzz
    let fbArray = fizzBuzz(fizzValue, buzzValue);
    // Call displayData and write the values to the screen
    displayData(fbArray);
  } else {
    alert("You must enter integers!");
  }
}

// Do fizz buzz
function fizzBuzz(fizzValue, buzzValue) {
  let returnArray = [];

  // Loop from 1 to 100
  for (let i = 1; i <= 100; i++) {
    // Check to see if divisible by both (3 and 5)
    // Check to see if divisible by fizz value (3)
    // Check to see if divisible by buzz value (5)
    if (i % fizzValue === 0 && i % buzzValue === 0) {
      returnArray.push('FizzBuzz');
    } else if (i % fizzValue === 0) {
      returnArray.push('Fizz');
    } else if (i % buzzValue === 0) {
      returnArray.push('Buzz');
    } else {
      returnArray.push(i);
    }
  }
  return returnArray;
}

// Loop over the array and create a table row for each item.
function displayData(fbArray) {
  // Get the table body element from the page
  let tableBody = document.getElementById("results");

  // Get the template row
  let templateRow = document.getElementById("fbTemplate");

  // Clear the table first
  tableBody.innerHTML = "";

  for (let index = 0; index < fbArray.length; index += 5) {
    let tableRow = document.importNode(templateRow.content, true);

    // Grab the TD elements and put the values into them
    let rowCols = tableRow.querySelectorAll("td");
    for (let i = 0; i < 5; i++) {
      if (index + i < fbArray.length) {
        rowCols[i].textContent = fbArray[index + i];
      }
    }

    tableBody.appendChild(tableRow);
  }
}