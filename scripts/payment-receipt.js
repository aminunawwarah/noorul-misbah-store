/**
* Copyright 2023, Aminu Adamu Aminu
* All rights reserved. 
*/


/**
 * Create the table rows
 * These are the table rows that will appear in the table in the PDF document of the 
 * transaction receipt.
 */
function createTableRows() {
    for (var i = 0; i < cartContent.length; i++) {
        var {itemName, quantity, price, itemPrice} = {...cartContent[i]};
        tableRows[i] = [itemName, quantity, price, itemPrice];
    }
}

/**
 * Download the transaction receipt
 * The transaction receipt is downloaded. It's content is very similar to what is seen in the receipt
 * preview. A JavaScript library is used to create the PDF document. The library is jsPDF library.
 * The html2canvas library was initially used. But the library does not show overflow content. To solve this issue,
 * each and every element of the receipt is inserted into the PDF manually. For the table, the jsPDF plugin was
 * used. The table content were created using the createTableRows() function.
 */
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
