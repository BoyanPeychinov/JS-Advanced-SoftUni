function solution() {
    const sections = document.querySelectorAll('.card');
    const inputField = sections[0].querySelector('div input[type="text"]');
    const giftsList = sections[1].querySelector('ul');
    const sentGiftsList = sections[2].querySelector('ul');
    const discardedGiftsList = sections[3].querySelector('ul');

    const inputBtn = sections[0].querySelector('div button');
    inputBtn.addEventListener('click', safeGift);

    const arrayForSort = [];

    function safeGift(e) {
        const giftName = inputField.value;
        const sendBtn = createEl('button', { id: 'sendButton' }, 'Send');
        const discardBtn = createEl('button', { id: 'discardButton' }, 'Discard');

        const liElement = createEl('li', { className: 'gift' },
            `${giftName}`,
            sendBtn,
            discardBtn,
        )

        arrayForSort.push(liElement);
        arrayForSort.sort((a, b) => a.childNodes[0].textContent.localeCompare(b.childNodes[0].textContent));

        for (let gift of arrayForSort) {
            giftsList.appendChild(gift);
        }

        sendBtn.addEventListener('click', sendGift);

        discardBtn.addEventListener('click', discardGift);

        inputField.value = '';
    }

    function sendGift(e) {
        const sendedGift = e.target.parentElement.childNodes[0].textContent;
        const index = arrayForSort.indexOf(sendedGift);
        arrayForSort.splice(index, 1);
        const giftLi = createEl('li', { className: 'gift' },
            `${sendedGift}`
        );
        e.target.parentElement.remove();
        sentGiftsList.appendChild(giftLi);
    }

    function discardGift(e) {
        const discardedGift = e.target.parentElement.childNodes[0].textContent;
        const index = arrayForSort.indexOf(discardedGift);
        arrayForSort.splice(index, 1);

        const discardedLi = createEl('li', { className: 'gift' },
            `${discardedGift}`
        );

        e.target.parentElement.remove();
        discardedGiftsList.appendChild(discardedLi);
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