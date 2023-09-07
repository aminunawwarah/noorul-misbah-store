const devices = document.querySelector('.devices');

function showDevices() {
    devices.innerHTML = '';

    for (var i = 0; i < 6; i++) {
        devices.innerHTML += `
            <div class="device observe">
                <center><img draggable="false" src="${items[i].src}" alt="" class="device-image"></center>
                <p class="device-name">${items[i].itemName}</p>
                <div class="buttons">
                    <button more-info>More Info</button>
                </div>
            </div>`;
    }
}

function showDeviceInformation(index) {
    deviceInformation.innerHTML = `
        <div>
            <img id="close-information-icon" src="imgs/close.png" alt="">
            <center><img src="${items[index].src}" alt=""></center>
            <p>Device price: $${items[index].itemPrice}</p>
            <p>Name: ${items[index].itemName}</p>
            <p>Type: ${items[index].type}</p>
            <p>Manufacturer: ${items[index].itemDev}</p>
            <p>OS: ${items[index].os}</p>
            <p>OS supplier: ${items[index].osDev}</p>
            <p>Remaining in stock: ${items[index].remaining}</p>
            <p>More information: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsum est ipsam eligendi
            culpa nesciunt delectus repudiandae veniam,
            eaque sed voluptatum itaque eos numquam quas corporis nostrum eum, odio magnam?</p>
        </div>`;
    deviceInformation.style.transform = 'scale(1)';
}

function closeDeviceInformation() {
    deviceInformation.style.transform = 'scale(0)';
}

showDevices();

const device = document.querySelectorAll('.device');
const deviceInformation = document.querySelector('.device-information');
const moreInformationButton = document.querySelectorAll('[more-info]');

moreInformationButton.forEach((button, index) => {
    button.addEventListener('click', () => {
        showDeviceInformation(index); 
        const closeDeviceInformationIcons = document.querySelector('#close-information-icon');
        closeDeviceInformationIcons.addEventListener('click', () => closeDeviceInformation());
    });
});
