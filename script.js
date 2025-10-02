// Story 2: Add Row ONLY

const grid = document.getElementById('grid');
const btnAddRow = document.getElementById('btnAddRow');

// If table is empty, start with 1 column; else match first row.
function getColumnCount() {
  if (!grid || grid.rows.length === 0) return 1;
  return Math.max(1, grid.rows[0].cells.length);
}

function addRow() {
  const colCount = getColumnCount();
  const tr = grid.insertRow();
  for (let c = 0; c < colCount; c++) {
    const td = tr.insertCell();
    td.className = 'cell';
  }
}

// Wire button
if (btnAddRow) btnAddRow.onclick = addRow;

// Stubs so other buttons don't error yet
function addC() {}
function removeR() {}
function removeC() {}
function selectColor() {}
function fillU() {}
function fillAll() {}
function clearAll() {}
