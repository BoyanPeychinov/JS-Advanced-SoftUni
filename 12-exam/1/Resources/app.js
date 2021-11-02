window.addEventListener('load', solve);

function solve() {
    const genre = document.getElementById('genre');
    const song = document.getElementById('name');
    const author = document.getElementById('author');
    const date = document.getElementById('date');
    const addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', addSongInfo);
    
    const playlistDiv = document.querySelector('.all-hits-container');
    const savedSectionDiv = document.querySelector('.saved-container');
    const likesParagraph = document.querySelector('.likes p');
    

    function addSongInfo(e) {
        e.preventDefault();

        const saveBtn = createEl('button', {className: 'save-btn'}, 'Save song');
        const likeBtn = createEl('button', {className: 'like-btn'}, 'Like song');
        const deleteBtn = createEl('button', {className: 'delete-btn'}, 'Delete');

        likeBtn.addEventListener('click', increaseLikes);
        saveBtn.addEventListener('click', saveSong);
        deleteBtn.addEventListener('click', deleteSong);

        const newSong = createEl('div', {className: 'hits-info'},
        createEl('img', {src: './static/img/img.png'},),
        createEl('h2', {}, `Genre: ${genre.value}`),
        createEl('h2', {}, `Name: ${song.value}`),
        createEl('h2', {}, `Author: ${author.value}`),
        createEl('h3', {}, `Date: ${date.value}`),
        saveBtn,
        likeBtn,
        deleteBtn
        );

        playlistDiv.appendChild(newSong);

        document.getElementsByTagName('form')[0].reset();
    }

    function increaseLikes(e) {
        let currentLike = Number(likesParagraph.textContent.split(': ')[1]);
        currentLike += 1;
        likesParagraph.textContent = `Total Likes: ${currentLike}`;
        e.target.disabled = true;
    }

    function saveSong(e) {
        const currentSong = e.target.parentElement;
        currentSong.removeChild(currentSong.children[5]);
        currentSong.removeChild(currentSong.children[5]);

        savedSectionDiv.appendChild(currentSong);
    }

    function deleteSong(e) {
        const songToDelete = e.target.parentElement;
        songToDelete.remove();
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