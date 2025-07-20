
function createMetaTable() {

    const metaElements = document.querySelectorAll('meta');
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr'); 

    const nameHeader = document.createElement('th');
    nameHeader.textContent = 'Name';

    const contentHeader = document.createElement('th');
    contentHeader.textContent = 'Content';
    
    headerRow.appendChild(nameHeader);
    headerRow.appendChild(contentHeader);
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    const tbody = document.createElement('tbody');
    
    metaElements.forEach(meta => {
        const nameAttr = meta.getAttribute('name');
        
        if (nameAttr && nameAttr.trim().length > 0) {
            const row = document.createElement('tr');
            
            const nameCell = document.createElement('td');
            nameCell.textContent = nameAttr;
            
            const contentCell = document.createElement('td');
            contentCell.textContent = meta.getAttribute('content') || '';
            
            row.appendChild(nameCell);
            row.appendChild(contentCell);
            tbody.appendChild(row);
        }
    });
    
    table.appendChild(tbody);
    
    return table;
}
