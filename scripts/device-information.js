/*
* Copyright 2023, Aminu Adamu Aminu
* All rights reserved. 
*/

/*
* Show the information of a device
* This function shows the information of a device when the user clicks the 'More Info' button of the device card.
*/
function showDeviceInformation(index) {
    deviceInformation.innerHTML = `
        <div>
            <img id="close-information-icon" src="../imgs/close.png" alt="">
            <center>
                <h2>Device Information</h2>
                <img src="../${pageDevicesArray[index].src}" alt="">
            </center>
            <p>Device price: $${pageDevicesArray[index].itemPrice}</p>
            <p>Name: ${pageDevicesArray[index].itemName}</p>
            <p>Type: ${pageDevicesArray[index].type}</p>
            <p>Manufacturer: ${pageDevicesArray[index].itemDev}</p>
            <p>OS: ${pageDevicesArray[index].os}</p>
            <p>OS supplier: ${pageDevicesArray[index].osDev}</p>
            <p>Remaining in stock: ${pageDevicesArray[index].remaining}</p>
            <p>More information: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsum est ipsam eligendi
            culpa nesciunt delectus repudiandae veniam,
            eaque sed voluptatum itaque eos numquam quas corporis nostrum eum, odio magnam?</p>
        </div>`;
    deviceInformation.style.transform = 'scale(1)';
}

/*
* Close the device information
* The device information can be closed by clicking the 'X' icon on the top right corner of the dialog box
* showing the information of the device.
*/
function closeDeviceInformation() {
    deviceInformation.style.transform = 'scale(0)';
}

const device = document.querySelectorAll('.device-card');
const deviceInformation = document.querySelector('.device-information');
const moreInformationButton = document.querySelectorAll('[more-info]');

moreInformationButton.forEach((button, index) => {
    button.addEventListener('click', () => {
        showDeviceInformation(index); 
        const closeDeviceInformationIcons = document.querySelector('#close-information-icon');
        closeDeviceInformationIcons.addEventListener('click', () => closeDeviceInformation());
    });
});