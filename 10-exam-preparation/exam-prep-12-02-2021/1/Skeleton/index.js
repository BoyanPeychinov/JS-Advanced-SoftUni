function solve() {
    const inputDivs = document.querySelectorAll('.form-control');

    const fields = {
        nameField: inputDivs[0].children[1],
        dateField: inputDivs[1].children[1],
        moduleField: inputDivs[2].children[1]
    };

    const addBtn = inputDivs[3].children[0];
    addBtn.addEventListener('click', moveSchedule);

    const modulesSection = document.querySelector('.modules');
    let existingModules = [];

    const form = document.getElementsByTagName('form')[0];

    function moveSchedule(e) {
        e.preventDefault();


        let values = {
            name: fields['nameField'].value,
            date: fields['dateField'].value.split('T'),
            moduleVal: fields['moduleField'].value,
        };
        values['date'][0].replaceAll('/', '-');

        if (values['name'] == '' || values['date'] == [] || values['moduleVal'] == 'Select module') {
            return;
        };

        const delBtn = createEl('button', { className: 'red' }, 'Del');
        delBtn.addEventListener('click', removeEl);

        if (existingModules.includes(values['moduleVal']) == false) {
            existingModules.push(values['moduleVal']);
            let moduleDiv = createEl('div', { className: 'module' },
                createEl('h3', {}, `${values['moduleVal'].toUpperCase()}-MODULE`),
                createEl('ul', {}),
            );

            moduleDiv.children[1].appendChild(createEl('li', { className: 'flex' },
                createEl('h4', {}, `${values['name']} - ${values['date'][0]} - ${values['date'][1]}`),
                delBtn
            ));

            modulesSection.appendChild(moduleDiv);
        } else {
            const listedModules = document.querySelectorAll('.module');
            for (let m of listedModules) {
                if (m.children[0].textContent == `${values['moduleVal'].toUpperCase()}-MODULE`) {
                    m.children[1].appendChild(createEl('li', { className: 'flex' },
                        createEl('h4', {}, `${values['name']} - ${values['date'][0]} - ${values['date'][1]}`),
                        delBtn));
                }
            }

            for (let m of listedModules) {
                let lectures = Array.from(m.children[1].children);
                while (m.children[1].hasChildNodes()) {
                    m.children[1].removeChild(m.children[1].lastChild);
                }
                lectures = lectures.sort((a, b) => a.textContent.split(' - ')[1].localeCompare(b.textContent.split(' - ')[1]));
    
                for (let l of lectures) {
                    m.children[1].appendChild(l);
                }
            }
        }
        form.reset();
    }

    function removeEl(e) {
        let ul = e.target.parentElement.parentElement;
        e.target.parentElement.remove();
        if (ul.hasChildNodes() == false) {
            ul.parentElement.remove();
        }

    }

    function createEl(type, attr, ...content) {
        let element = document.createElement(type);

        for (let prop in attr) {
            element[prop] = attr[prop];
        }

        for (let item of content) {
            if (typeof item == 'string' || typeof item == 'number') {
                item = document.createTextNode(item);
            }
            element.appendChild(item);
        }

        return element;
    }
}