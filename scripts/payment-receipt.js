function createTransactionReceiptContent() {
    const {customerName, customerCountry, customerPhone, customerTown, customerEmail, customerAddress} = customerInformation;
    const transactionTable = document.createElement('table');
    const tableHead = document.createElement('thead');
    const tableBody = document.createElement('tbody');
    const itemsTotalPrice = document.createElement('p');
    const tableHeadTitles = ['Items', 'Quantity', 'Price ($)', 'Total Price ($)'];
    customer = customerName;

    for (var i = 0; i < tableHeadTitles.length; i++) {
        const data = document.createElement('th');
        data.innerText = tableHeadTitles[i];
        tableHead.appendChild(data);
    }
    
    for (var i = 0; i < cartContent.length; i++) {
        var row = document.createElement('tr');
        var data = [];

        for (var j = 0; j < 4; j++) {
            data[j] = document.createElement('td');
            row.appendChild(data[j]);
        }

        data[0].innerText = cartContent[i].itemName;
        data[1].innerText = cartContent[i].quantity;
        data[2].innerText = cartContent[i].price;
        data[3].innerText = cartContent[i].itemPrice;

        for (var j = 1; j < 4; j++) {
            data[j].setAttribute('class', 'center');
        }

        tableBody.appendChild(row);
    }

    transactionTable.appendChild(tableHead);
    transactionTable.appendChild(tableBody);
    transactionReceipt.innerHTML = `
        <img class="close-receipt" src="../imgs/close.png" style="position: fixed; top: 1rem; right: 1rem; width: 1.3rem; height: 1.3rem; cursor: pointer;">
        <div class="receipt-head">
            <img class="receipt-head-image" src="../imgs/noorul-misbah.png" alt="Head image">
            <div class="head-description">
                <p>Noorul Misbah Store</p>
                <p>noorulmisbah@noor.com</p>
                <p>123-456-789</p>
            </div>
        </div>
        <div class="customer-address">
            <div class="address">
                <p>${customerName}</p>
                <p>${customerEmail}</p>
                <p>${customerAddress}</p>
                <p>${customerTown}, ${customerCountry}</p>
                <p>${customerPhone}</p>
            </div>
            <p style="font-size: 1.2rem; font-weight: bold;">Transaction Receipt</p>
        </div>`;
    itemsTotalPrice.innerText = `Total Price: $${totalPrice}`;
    itemsTotalPrice.style.margin = '2rem 0';
    transactionReceipt.appendChild(transactionTable);
    transactionReceipt.appendChild(itemsTotalPrice);
    closeReceiptButton = document.querySelector('.close-receipt');
    closeReceiptButton.addEventListener('click', () => {
        transactionReceipt.style.display = closeReceiptButton.style.display = 'none';
    });
}

function showTransactionReceipt() {
    createTransactionReceiptContent();
}

function createTableRows() {
    for (var i = 0; i < cartContent.length; i++) {
        var {itemName, quantity, price, itemPrice} = {...cartContent[i]};
        tableRows[i] = [itemName, quantity, price, itemPrice];
    }
}

function downloadTransactionReceipt() {
    var file = new jsPDF();
    const {customerName, customerCountry, customerPhone, customerTown, customerEmail, customerAddress} = customerInformation;
    createTableRows();

    file.addImage(logoURI, 10, 10, 50, 50);
    file.setFont('Poppins-Regular');
    file.setFontSize(13);
    file.text('Noorul Misbah Store', 130, 20);
    file.text('noorulmisbahstore@noor.com', 130, 27);
    file.text('123-456-789-101', 130, 34);
    file.text(customerName, 10, 70);
    file.text(customerEmail, 10, 77);
    file.text(customerPhone, 10, 84);
    file.text(customerAddress, 10, 91);
    file.text(`${customerTown}, ${customerCountry}`, 10, 98);
    file.setFont('Poppins-Bold');
    file.setFontSize(25);
    file.text('Transaction Receipt', 110, 70);

    file.autoTable({
        head: [['Items', 'Quantity', 'Price ($)', 'Total Price ($)']],
        body: tableRows,
        startY: 110,
        styles: {
            font: 'Poppins-Regular',
            fontSize: 13
        },
        headStyles: {
            fillColor: [129, 129, 40],
            halign: 'center',
            font: 'Poppins-Bold',
            fontSize: 16
        },
        columnStyles: {
            0: {
                halign: 'left'
            },
            1: {
                halign: 'center'
            },
            2: {
                halign: 'center'
            },
            3: {
                halign: 'center'
            }
        }
    });
    file.setFontSize(15);
    file.text(`Total amount spent: $${totalPrice.toLocaleString()}`, 10, 220);
    file.setFont('Poppins-Regular');
    file.setFontSize(12);
    file.text('Thank your for choosing Nurool Misbah Store. We will like you to shop here again.', 10, 230);

    file.save(`${customerName} Transaction Receipt.pdf`);
}

var customer;
var tableRows = [];

const transactionReceipt = document.querySelector('.transaction-receipt');
