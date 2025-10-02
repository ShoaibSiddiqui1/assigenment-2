// === Story 2: Add Row (working) ===

// Cache elements
const grid = document.getElementById('grid');
const btnAddRow = document.getElementById('btnAddRow');

// Decide how many columns a new row should have.
// If table is empty, start with 1 column; otherwise match first row.
function getColumnCount() {
  if (grid.rows.length === 0) return 1;
  return Math.max(1, grid.rows[0].cells.length);
}

function addRow() {
  const colCount = getColumnCount();
  const tr = grid.insertRow();
  for (let c = 0; c < colCount; c++) {
    const td = tr.insertCell();
    td.className = 'cell'; // useful for later stories
  }
}

// Wire the button
btnAddRow.onclick = addRow;

// === Stubs for other stories (so clicks don't error yet) ===
let colorSelected = "SELECT";

function addC() {
  // TODO in Story 3
  // alert("Add Col clicked");
}
function removeR() {
  // TODO in Story 4
  // alert("Remove Row clicked");
}
function removeC() {
  // TODO in Story 5
  // alert("Remove Col clicked");
}
function selectColor() {
  const sel = document.getElementById("selectedColorId");
  colorSelected = sel ? sel.value : "SELECT";
}
function fillU() {
  // TODO in Story 8
}
function fillAll() {
  // TODO in Story 9
}
function clearAll() {
  // TODO in Story 10
}
