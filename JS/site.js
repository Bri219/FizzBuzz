// Get Values

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
};

// Do fizz buzz
// function fizzBuzz(fizzValue, buzzValue) {
//   let returnArray = [];

//   // Loop from 1 to 100
//   for (let i = 1; i <= 100; i++) {

//       // Check to see if divisible by both (3 and 5)
//       // Check to see if divisible by fizz value(3)
//       // Check to see if divisible by buzz value (5)
//       if (i % fizzValue == 0 && i % buzzValue == 0) {
//           returnArray.push('FizzBuzz');
//       } else if (i % fizzValue == 0) {
//           returnArray.push('Fizz');
//       } else if (i % buzzValue == 0) {
//           returnArray.push('Buzz');
//       } else {
//           returnArray.push(i);
//       }
//   }
//   return returnArray;
// };


// Do fizz buzz >>> Alternate version!
// function fizzBuzz(fizzValue, buzzValue){
   
//   let returnArray = [];
//   let Fizz = false;
//   let Buzz = false;

//   for (let i = 1; i <= 100; i++) {
     
//     Fizz = i % fizzValue === 0;
//     Buzz = i % buzzValue === 0;

//     switch(true)
//     {
//       case Fizz && Buzz:{
//         returnArray.push('FizzBuzz');
//         break;
//       }
//       case Fizz:{
//         returnArray.push('Fizz');
//         break;
//     }
//     case Buzz:{
//       returnArray.push('Buzz');
//       break;
//   }
//     default:{
//       returnArray.push(i);
//       break;
//      }
//     }
//   }
//   return returnArray;
// };

// Do fizz buzz 3rd Version!

   function fizzBuzz(fizzValue, buzzValue) {
         let returnArray = [];

       for (let i = 1; i <= 100; i++) {
        let value = ((i % fizzValue == 0 ? 'Fizz' : '') + (i % buzzValue == 0 ? 'Buzz' : '') || i );
        returnArray.push(value);
  }
  return returnArray;
};


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

      // Grab and use the TD elements and put into Array
      let rowCols = tableRow.querySelectorAll("td");

      rowCols[0].classList.add(fbArray[index]);
      rowCols[0].textContent = fbArray[index];

      rowCols[1].classList.add(fbArray[index + 1]);
      rowCols[1].textContent = fbArray[index + 1];

      rowCols[2].classList.add(fbArray[index + 2]);
      rowCols[2].textContent = fbArray[index + 2];

      rowCols[3].classList.add(fbArray[index + 3]);
      rowCols[3].textContent = fbArray[index + 3];

      rowCols[4].classList.add(fbArray[index + 4]);
      rowCols[4].textContent = fbArray[index + 4];

      tableBody.appendChild(tableRow);
  }

  // Add all the rows to the table
};


