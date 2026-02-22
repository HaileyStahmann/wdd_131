function displayError(msg) {
    // display error message
    alert(msg);
}

function isCardNumberValid(number) {
    // normally we would contact a credit card service...but we don't know how to do that yet. So to keep things simple we will only accept one number
    return number === '1234123412341234'
}

function submitHandler(event) {
    event.preventDefault();
    let errorMsg = '';

    let cardNumber = document.querySelector('#cardNumber');
    const cardNum = cardNumber.value.trim();
    // Check if it's numeric and valid in one go

    if (!/^\d{16}$/.test(cardNum)) {
        errorMsg += 'Card number must be 16 digits\n';
    } else if (!isCardNumberValid(cardNum)) {
        errorMsg += 'Card number is not valid\n';
    }

    //check date
    const expYear = Number(document.querySelector('#year').value);
    const expMonth = Number(document.querySelector('#month').value);
    const currentDate = new Date()

    if (2000 + expYear < currentDate.getFullYear() || (2000 + expYear === currentDate.getFullYear() && expMonth <= (currentDate.getMonth()))
    ) {
        errorMsg += 'Card is expired\n';
    }

    if (errorMsg !== '') {
        // there was an error. stop the form and display the errors.
        displayError(errorMsg)
        return;
    }
    // Success: show a confirmation message
    alert("Successfully submitted payment");
}

const form = document.getElementById('credit-card-form');
form.addEventListener("submit", (e) => {
    submitHandler(e);
});