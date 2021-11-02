function addItem() {
    const textInputField = document.getElementById('newItemText');
    const valueInputField = document.getElementById('newItemValue');

    let text = textInputField.value;
    let value = valueInputField.value;
    
    let optionData = document.createElement('option');
    optionData.textContent = text;
    optionData.value = value;

    const menu = document.getElementById('menu');
    menu.appendChild(optionData);

    textInputField.value = '';
    valueInputField.value = '';
}
