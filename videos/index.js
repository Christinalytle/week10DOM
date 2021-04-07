// Get Element by Id
// let button = document.getElementById('my-button'); 
// console.log(button);

// Get Elements by Tag Name
// let buttonsByTag = document.getElementsByTagName('button'); 
// console.log(buttonsByTag); 

// Get Elments by Class Name
// let buttonsByClassName = document.getElementsByClassName('my-class'); 
// console.log(buttonsByClassName); 

// CSS Selectors 
// let buttonsByCSSSelector = document.querySelectorAll('button.my-class'); 
// console.log(buttonsByCSSSelector);

// CSS Selectors 
// let buttonsByCSSSelector2 = document.querySelectorAll('.my-class'); 
// console.log(buttonsByCSSSelector2);


let button = document.getElementById('btn'); 
let content = document.getElementById('content'); 

button.addEventListener('click', () => {
    if (content.innerHTML == 'Goodbye.') {
        content.innerHTML = 'Hello.'; 
    } else {
        content.innerHTML = 'Goodbye.'
    }
});

document.getElementById('remove').addEventListener('click', () => {
    let idToRemove = document.getElementById('remove-id').value; 
    let elementToRemove = document.getElementById(idToRemove); 
    elementToRemove.parentNode.removeChild(elementToRemove); 
    document.getElementById('remove-id').value = ''; 
});

let id = 0; 
//content is the content id, use the child to find the parent, then remove the child. 

document.getElementById('add').addEventListener('click', () => {
    var parent = document.getElementById('paragraphs'); 
    var newElement = document.createElement('p'); 
    newElement.innerHTML = document.getElementById('new-text').value; 
    newElement.setAttribute('id', id++); 
    parent.appendChild(newElement); 
    document.getElementById('new-text').value = ''; 
});


// document.getElementById('content').innerHTML = 'Goodbye.'; //Changes the text to Goodbye on the web 