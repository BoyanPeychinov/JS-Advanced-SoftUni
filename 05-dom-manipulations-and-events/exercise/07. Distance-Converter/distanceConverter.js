function attachEventsListeners() {
    const inputField = document.getElementById('inputDistance');
    const inputSelect = document.getElementById('inputUnits');
    const outputField = document.getElementById('outputDistance');
    const outputSelect = document.getElementById('outputUnits');
    const convertBtn = document.getElementById('convert');

    const ratios = {
        'km': 1000,
        'm': 1,
        'cm': 0.01,
        'mm': 0.001,
        'mi': 1609.34,
        'yrd': 0.9144,
        'ft': 0.3048,
        'in': 0.0254
    }

    convertBtn.addEventListener('click', convert) 
    
    
    function convert() {
        let valueInMeters = inputField.value * ratios[inputSelect.value];
        let convertedValue = valueInMeters / ratios[outputSelect.value];

        outputField.value = convertedValue;        
    }

}