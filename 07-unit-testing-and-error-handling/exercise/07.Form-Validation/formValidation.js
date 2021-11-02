function validate() {
    const userNameRegex = /(^[A-Za-z0-9]{3,20}$)/;
    const passwordRegex = /(^[\w]{5,15}$)/;
    const emailRegex = /(^[\w]+@[\w]+\.[\w]+$)/;

    let isValidInput = true;
    let isChecked = false;


    const submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', () => {
        e.preventDefault();
        const usernameField = document.getElementsById('username');
        if (!userNameRegex.test(usernameField.value)) {
            isValidInput = false;
            usernameField.style.borderColor = 'red';
        } else {
            usernameField.style.borderColor = 'none';
        }

        const passwordField = document.getElementById('password');
        const confPasswordField = document.getElementById('confirm-password');

        let passwordRed = false;
        if (!passwordRegex.test(passwordField.value) && !passwordRegex.test(confPasswordField.value) ||
        passwordField.value != confPasswordField.value) {
            isValidInput = false;
            passwordRed = true;
            passwordField.style.borderColor = 'red';
            confPasswordField.style.borderColor = 'red';
        } else {
            passwordField.style.border = 'none';
            confPasswordField.style.borderColor = 'none';
        }

        // if (passwordField.value != confPasswordField.value) {
        //     isValidInput = false;
        //     confPasswordField.style.borderColor = 'red';
        // } else {
        //     if (!passwordRed) {
        //         confPasswordField.style.border = 'none';
        //     }
        // }

        const emailField = document.getElementById('email');

        if (!emailRegex.test(emailField.value)) {
            isValidInput = false;
            emailField.style.borderColor = 'red';
        } else {
            emailField.style.border = 'none';
        }

        const validDiv = document.getElementById('valid');
        if (isValidInput) {
            validDiv.style.display = 'block';
        } else {
            validDiv.style.display = 'none';
        }

        if (isChecked) {
            const companyNumber = document.getElementById('companyNumber');
            if (Number(companyNumber.value) < 1000 || Number(companyNumber.value) > 9999) {
                companyNumber.style.borderColor = 'red';
            } else {
                companyNumber.style.border = 'none';
            }
        }
    })

    document.getElementById('company').addEventListener('change', (e) => {
        const companyField = document.getElementById('companyInfo').style.display = 'block';
        if (e.target.checked) {
            isChecked = true;
            companyField.style.display = 'block';
        } else {
            isChecked = false;
            companyField.style.display = 'none';
        }
    })
}
