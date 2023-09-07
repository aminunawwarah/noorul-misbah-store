function showPageDevices() {
    extractDevices();

    pageDevicesSection.innerHTML = pageDevicesArray.map(device => {
        return `
        <div class="device-card observe">
            <img draggable="false" class="device-image" src="../${device.src}" alt="${device.itemName} image">                
            <p>${device.itemName}</p>
            <div class="buttons">
                <button add-to-cart>Add to Cart</button>
                <button more-info>More Info</button>
            </div>
        </div> `
    }).join('');
}

function extractDevices() {
    for (var i = 18, index = 0; i < 27; i++, index++)
        pageDevicesArray[index] = items[i];
}

const pageDevicesSection = document.querySelector('.devices');
const pageDevicesArray = [];

extractDevices();
showPageDevices();

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    })
});

const observedItems = document.querySelectorAll('.observe');
observedItems.forEach(item => observer.observe(item));