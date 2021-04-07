let id = 0; 

document.getElementById('add').addEventListener('click', () => {
    let createdDate = new Date(); 
    let table = document.getElementById('list'); 
    let row = table.insertRow(1); 
    row.setAttribute('id', `item-${id}`); 
    row.insertCell(0).innerHTML = document.getElementById('new-grocery-item').value;
    row.insertCell(1).innerHTML = `${createdDate.getFullYear()} - ${createdDate.getMonth() + 1} - ${createdDate.getDate()}`;
    if (document.getElementById('frys').checked) {
        row.insertCell(2).innerHTML = document.getElementById('frys').value;
    } else if (document.getElementById('traderJoes').checked) {
        row.insertCell(2).innerHTML = document.getElementById('traderJoes').value;
    } else {
            row.insertCell(2).innerHTML = document.getElementById('other').value; 
    }; 
    let actions = row.insertCell(3); 
    actions.appendChild(createDeleteButton(id++)); 
    document.getElementById('list').value = ''; 
}); 

function createDeleteButton(id) {
    let btn = document.createElement('button'); 
    btn.className = 'btn btn-primary'; 
    btn.id = id; 
    btn.innerHTML = 'Delete'; 
    btn.onclick = () => {
        console.log(`Delete row with id: item-${id}`); 
        let elementToDelete = document.getElementById(`item-${id}`); 
        elementToDelete.parentNode.removeChild(elementToDelete); 
    }; 
    return btn; 
}

// function radioButton() {
//     if (document.getElementById('frys').checked) {
//         row.insertCell(2).innerHTML = document.getElementById('frys').value;
//     } else if (document.getElementById('traderJoes').checked) {
//         row.insertCell(2).innerHTML = document.getElementById('traderJoes').value;
//     } else {
//         document.getElementById('other').checked {
//             row.insertCell(2).innerHTML = document.getElementById('other').value; 
//         }
//     }
//}