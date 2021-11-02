window.addEventListener('load', solution);

function solution() {
  const inputName = document.getElementById('fname');
  const inputEmail = document.getElementById('email');
  const formFields = Array.from(document.getElementById('form').children);

  const submitBtn = document.getElementById('submitBTN');
  submitBtn.addEventListener('click', preview);

  const infoUl = document.getElementById('infoPreview');

  const editBtn = document.getElementById('editBTN');
  editBtn.addEventListener('click', edit);

  const continueBtn = document.getElementById('continueBTN');
  continueBtn.addEventListener('click', finish);

  const blockDiv = document.getElementById('block');

  const inputData = [];

  function preview() {
    if (inputName.value == '' || inputEmail.value == '') {
      alert('Enter your full name and email!');
    } else {
      for (let i = 0; i < formFields.length - 1; i++) {
        const label = formFields[i].children[0].textContent;
        const input = formFields[i].children[1].value;
        let elToAppend = document.createElement('li');
        elToAppend.textContent = `${label} ${input}`;
        infoUl.appendChild(elToAppend);
        inputData.push(input);
        formFields[i].children[1].value = '';
      }
      changeBtnState(submitBtn);
      changeBtnState(editBtn);
      changeBtnState(continueBtn);
    }
  }

  function edit() {
    for (let i = 0; i < formFields.length - 1; i++) {
      formFields[i].children[1].value = inputData[i];
      infoUl.removeChild(infoUl.firstChild);
    }
    changeBtnState(submitBtn);
    changeBtnState(editBtn);
    changeBtnState(continueBtn);
  }

  function finish() {
    while (blockDiv.firstChild) {
      blockDiv.removeChild(blockDiv.firstChild);
    }
    lastEl = document.createElement('h3');
    lastEl.textContent = 'Thank you for your reservation!';
    blockDiv.appendChild(lastEl);
  }

  function changeBtnState(btn) {
    if (btn.disabled == true) {
      btn.disabled = false;
    } else {
      btn.disabled = true;
    }
  }
}

