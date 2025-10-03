// === Grid Maker (Stories 2–8 merged cleanly) ===

const grid = document.getElementById('grid');
const btnAddRow = document.getElementById('btnAddRow');

// If table is empty, start with 1 column; else match first row.
function getColumnCount() {
  if (!grid || grid.rows.length === 0) return 1;
  return Math.max(1, grid.rows[0].cells.length);
}

// Story 2: Add Row
function addRow() {
  const colCount = getColumnCount();
  const tr = grid.insertRow();
  for (let c = 0; c < colCount; c++) {
    const td = tr.insertCell();
    td.className = 'cell';
  }
}
if (btnAddRow) btnAddRow.onclick = addRow;

// Story 3: Add Column
function addC() {
  const table = document.getElementById('grid');

  // If no rows yet, create a 1x1 grid
  if (table.rows.length === 0) {
    const tr = table.insertRow();
    const td = tr.insertCell();
    td.className = 'cell';
    return;
  }

  // Otherwise, add one cell to every existing row
  for (let r = 0; r < table.rows.length; r++) {
    const td = table.rows[r].insertCell();
    td.className = 'cell';
  }
}

// Story 4: Remove Row
function removeR() {
  const table = document.getElementById('grid');
  if (table.rows.length > 0) {
    table.deleteRow(table.rows.length - 1);
  }
}

// Story 5: Remove Column
function removeC() {
  const table = document.getElementById('grid');
  if (table.rows.length === 0) return;

  const lastColIndex = table.rows[0].cells.length - 1;
  if (lastColIndex < 0) return;

  for (let r = 0; r < table.rows.length; r++) {
    table.rows[r].deleteCell(lastColIndex);
  }
}

// Story 6: Select Color
let colorSelected = "SELECT";
function selectColor() {
  const sel = document.getElementById("selectedColorId");
  colorSelected = sel ? sel.value : "SELECT";
}

// Story 7: Click cell to color
document.getElementById('grid').addEventListener('click', function (e) {
  if (e.target && e.target.tagName === 'TD' && colorSelected && colorSelected !== 'SELECT') {
    e.target.style.backgroundColor = colorSelected;
  }
});

// Story 8: Fill All Uncolored
function fillU() {
  if (!colorSelected || colorSelected === 'SELECT') return;
  const cells = document.querySelectorAll('#grid .cell');
  cells.forEach(td => {
    if (!td.style.backgroundColor) {
      td.style.backgroundColor = colorSelected;
    }
  });
}

// Stubs for remaining stories (to implement next)
function fillAll() {}
function clearAll() {}
