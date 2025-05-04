// Change text content dynamically
document.getElementById('change_text_btn').addEventListener('click', () => {
    const textElement = document.getElementById('originalText');
    textElement.textContent = 'The text has been changed dynamically!';
});

// Add a new element
document.getElementById('add_element_btn').addEventListener('click', () => {
    const container = document.getElementById('dynamicContainer');
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a new dynamically added element.';
    container.appendChild(newElement);
});

// Remove the last added element
document.getElementById('remove_element_btn').addEventListener('click', () => {
    const container = document.getElementById('dynamicContainer');
    if (container.lastChild) {
        container.removeChild(container.lastChild);
    }
});