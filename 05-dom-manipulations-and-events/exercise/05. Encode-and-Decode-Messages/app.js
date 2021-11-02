function encodeAndDecodeMessages() {
    const sendBtn = document.getElementsByTagName('button')[0];
    const receiveBtn = document.getElementsByTagName('button')[1];

    const sendArea = document.getElementsByTagName('textarea')[0];
    const receiveArea = document.getElementsByTagName('textarea')[1];


    sendBtn.addEventListener('click', encode);

    

    function encode() {
        let text = ''
        let temp = sendArea.value;
        let currentCode = 0;
        for (let i = 0; i < temp.length; i++) {
            currentCode = temp.charCodeAt(i) + 1;
            text += String.fromCharCode(currentCode);
        }
        sendArea.value = '';
        receiveArea.value = text;
    }

    receiveBtn.addEventListener('click', decode);

    function decode() {
        let text = ''
        let temp = receiveArea.value;
        let currentCode = 0;
        for (let i = 0; i < temp.length; i++) {
            currentCode = temp.charCodeAt(i) - 1;
            text += String.fromCharCode(currentCode)
        }
        receiveArea.value = text;
    }
}