/**
* Copyright 2023, Aminu Adamu Aminu
* All rights reserved. 
*/

/**
* Show the payment form
* When the user clicks the Pay button in the shopping cart, the payment form will appear.
* The user will have to fill all the fields in the form before seeing the preview of
* the transaction receipt.
*/
function showPaymentForm() {
    paymentForm.innerHTML = `
        <img class="close-payment-form-icon" draggable="false" src="../imgs/close.png" alt="Close icon">
        <h2>Payment Form</h2>
        <p>Please fill in the fields. Make sure you provide valid data. Incorrect data may prevent your order delivery.</p>
        <input form-input type="text" customer-name placeholder="Your full name here...">
        <input form-input type="text" customer-email placeholder="Your working email here...">
        <input form-input type="number" customer-phone placeholder="Your phone number here..." min="0">
        <input form-input type="text" customer-country placeholder="Your country of residence here...">
        <input form-input type="text" customer-town placeholder="Your state/town here...">
        <input form-input type="text" customer-address placeholder="Your home address here...">
        <button pay>Pay</button>`
}

/**
* Assign the field values to variables
*/
function assignFieldValues() {
    closePaymentFormIcon = document.querySelector('.close-payment-form-icon');
    payButton = document.querySelector('[pay]');
    customerNamefield = document.querySelector('[customer-name]');
    customerTownField = document.querySelector('[customer-town]');
    customerEmailField = document.querySelector('[customer-email]');
    customerPhoneField = document.querySelector('[customer-phone]');
    customerCountryField = document.querySelector('[customer-country]');
    customerAddressField = document.querySelector('[customer-address]');
}

/**
 * Assign customer information
 * The field values in the payment form will be collected.
 */
function assignCustomerInformation() {
    customerInformation = {
        customerName: customerNamefield.value,
        customerTown: customerTownField.value,
        customerEmail: customerEmailField.value,
        customerPhone: customerPhoneField.value,
        customerCountry: customerCountryField.value,
        customerAddress: customerAddressField.value
    };
}

/**
 * Validate the form
 * When the user clicks the Pay button on the payment form, form validation will take place. This is to 
 * ensure that all the fields in the form are filled. If any field is not filled, the user will be prompted
 * to fill all the fields.
 */
function validateForm() {
    const inputFields = document.querySelectorAll('[form-input]');
    
    for (var i = 0; i < inputFields.length; i++) {
        if (!(inputFields[i].value)) {
            isFormValid = false;
            break;
        }
        else 
            isFormValid = true;
    }
}

const paymentForm = document.querySelector('.payment-form');
var closePaymentFormIcon;
var payButton;
var customerNamefield;
var customerEmailField;
var customerCountryField;
var customerPhoneField;
var customerTownField;
var customerAddressField;
var customerInformation;
var isFormValid;

makePaymentFormButton.addEventListener('click', () => {
    showPaymentForm();
    assignFieldValues();

    paymentForm.style.transform = 'scale(1)';
    cartItems.style.transform = 'scale(0)';
    closePaymentFormIcon.addEventListener('click', () => paymentForm.style.transform = 'scale(0)');
    payButton.addEventListener('click', () => {
        assignCustomerInformation();
        validateForm();
        
        if (!(isFormValid))
            alert('Please fill all the form fields.');
        else {
            paymentForm.style.transform = 'scale(0)';
            downloadTransactionReceipt();
        }
    });
});
