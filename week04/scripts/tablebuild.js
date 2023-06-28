const tds = document.querySelectorAll('td');
tds.forEach(td => {
    td.addEventListener('mouseover', () => {
        const rowIndex = td.parentNode.rowIndex;
        const table = td.parentNode.parentNode.parentNode;
        const headerRow = table.querySelector('#table-columns');
        const targetHeader = headerRow.cells[td.cellIndex];
        if (targetHeader) {
            targetHeader.classList.add('hovered');
        }
        const targetRow = table.rows[rowIndex];
        if (targetRow) {
            targetRow.classList.add('hovered');
        }
    });

    td.addEventListener('mouseout', () => {
        const rowIndex = td.parentNode.rowIndex;
        const table = td.parentNode.parentNode.parentNode;
        const headerRow = table.querySelector('#table-columns');
        const targetHeader = headerRow.cells[td.cellIndex];
        if (targetHeader) {
            targetHeader.classList.remove('hovered');
        }
        const targetRow = table.rows[rowIndex];
        if (targetRow) {
            targetRow.classList.remove('hovered');
        }
    });
});