// === Grid Maker — merged (Story 2 + Story 3) ===

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

// --- Stubs (to be implemented in later stories) ---
function removeR() {}
function removeC() {}
let colorSelected = "SELECT";
function selectColor() {
  const sel = document.getElementById("selectedColorId");
  colorSelected = sel ? sel.value : "SELECT";
}
function fillU() {}
function fillAll() {}
function clearAll() {}

