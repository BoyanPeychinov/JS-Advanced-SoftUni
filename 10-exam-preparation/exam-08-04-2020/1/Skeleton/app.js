function solve() {
    const task = document.getElementById('task');
    const description = document.getElementById('description');
    const date = document.getElementById('date');
    const addBtn = document.getElementById('add');
    addBtn.addEventListener('click', moveToOpenSection)

    const openSection = document.querySelector('.orange').parentElement.nextElementSibling;
    const progressSection = document.getElementById('in-progress');
    const finishSection = document.querySelector('.green').parentElement.nextElementSibling;

    function moveToOpenSection(e) {
        e.preventDefault()

        if (task.value == '' && description.value == '' && date.value == ''){
            return;
        }

        const startBtn = createEl('button', {className: 'green'}, 'Start');
        const deleteBtn = createEl('button', {className: 'red'}, 'Delete');

        const article = createEl('article', {},
            createEl('h3', {}, `${task.value}`),
            createEl('p', {}, `Description: ${description.value}`),
            createEl('p', {}, `Due Date: ${date.value}`),
            createEl('div', {className: 'flex'},
                startBtn,
                deleteBtn
            )
        );

        openSection.appendChild(article);

        startBtn.addEventListener('click', moveToProgressSection);

        deleteBtn.addEventListener('click', deleteArticle);

        document.getElementsByTagName('form')[0].reset();
    }

    function moveToProgressSection(e) {
        const finishButton = createEl('button', {className: 'orange'}, 'Finish');

        const currentArticle = e.target.parentElement.parentElement;
        const articleDiv = e.target.parentElement;
        articleDiv.removeChild(articleDiv.firstChild);
        articleDiv.appendChild(finishButton);
        
        progressSection.appendChild(currentArticle);

        finishButton.addEventListener('click', moveToFinishSection); 
    }

    function moveToFinishSection(e) {
        const currentArticle = e.target.parentElement.parentElement;
        const articleDiv = e.target.parentElement;
        articleDiv.remove();
        
        finishSection.appendChild(currentArticle);
    }

    function deleteArticle(e) {
        const currentArticle = e.target.parentElement.parentElement;
        currentArticle.remove();
    }


    
    function createEl(type, attr, ...content) {
        const element = document.createElement(type);

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