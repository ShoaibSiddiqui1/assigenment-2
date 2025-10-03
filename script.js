// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    alert("Clicked Add Row"); // Replace this line with your code.
}

// Add a column
function addC() {
    alert("Clicked Add Col"); // Replace this line with your code.
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Story 5: Remove Column
function removeC() {
  const table = document.getElementById('grid');
  if (table.rows.length === 0) return;                // nothing to do

  const lastColIndex = table.rows[0].cells.length - 1; // index of last cell
  if (lastColIndex < 0) return;                        // no columns to remove

  // remove the last cell from every row
  for (let r = 0; r < table.rows.length; r++) {
    table.rows[r].deleteCell(lastColIndex);
  }
}
// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}
