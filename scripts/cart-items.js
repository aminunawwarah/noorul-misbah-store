/*
* Copyright 2023, Aminu Adamu Aminu
* All rights reserved. 
*/

/*
* Displays the content of the shopping cart
* If the shopping cart if empty, the text 'Your cart is currently empty.' will be shown. Therefore the user
* cannot proceed to make payment if the cart is empty.
*/
function displayCartContent() {
    sumPrice();
    allItems = cartContent.length;
    cartItems.innerHTML = `<img draggable="false" class="close-cart-items" src="../imgs/close.png">
                           <p number-of-items style="font-size: 0.9rem; font-weight: bold;">All items: ${allItems}</p>
                           <p total-price style="font-size: 0.9rem; font-weight: bold;">Total price: $${totalPrice}</p>`;
    if (cartContent.length === 0) {
        cartItems.innerHTML += `<p>Your cart is currently empty.</p>`;
        return;
    }

    /*
    * The content of the shopping cart is obtained from the 'cartContent' array. Once the user clicked the
    * 'Add to Cart' button, the item will be added to the cart if it is not in the cart already.
    */
    cartItems.innerHTML += cartContent.map(item => {
        return `
        <div class="cart-item">
            <div>
                <img class="cart-item-image" draggable="false" src="../${item.src}">
            </div>
            <div>
                <p>${item.itemName}</p>
                <p item-quantity>Item quantity: ${item.quantity}</p>
                <p item-price>Price: $${item.itemPrice}</p>
                <button increase-quantity>+</button>
                <button decrease-quantity>-</button>
            </div>
            <img class="remove-item-icon" draggable="false" src="../imgs/bin.png">
        </div>`
    }).join('');
    ;
    makePaymentFormButton.innerText = 'Pay';
    makePaymentFormButton.setAttribute('class', 'make-payment-form');
    makePaymentFormButton.style.display = 'block';
    cartItems.appendChild(makePaymentFormButton);

    itemPriceText = document.querySelectorAll('[item-price]');
    numberOfItems = document.querySelector('[number-of-items]');
    totalPriceText = document.querySelector('[total-price]');
    numberOfItems.innerText = `All items: ${allItems}`;
    totalPriceText.innerHTML = `Total price: $${totalPrice}`;
}

/*
* Sums the prices of all the items in the shopping cart
* This function is called when the user opens the shopping cart and when a new item is added to the shopping cart. 
* The sum of the items prices will is shown.
*/
function sumPrice() {
    var prices = cartContent.map(item => item.itemPrice);
    totalPrice = 0;

    for (var i = 0; i < prices.length; i++)
        totalPrice += prices[i]
}

/*
* Shows or hide the shopping cart content
*/
function toggleCartItems(arg) {
    if (arg === 'show')
        cartItems.style.transform = 'scale(1)';
    else if (arg === 'hide')
        cartItems.style.transform = 'scale(0)';
}

/*
* Adds items to the shopping cart
* Before any item is added to the shopping cart, its existence is checked first. If the item is already in the
* shopping cart, then a message will be shown with the item name that it is already in the cart. This helps to
* prevent duplicate items in the shopping cart.
*/
function addItem(index) {
    const itemOccurence = cartContent.some(item => item.itemId === pageDevicesArray[index].itemId);
    if (itemOccurence) {
        alert(`${pageDevicesArray[index].itemName} is already in the cart.`);
        return;
    }
    cartContent.push({ quantity: 1, price: pageDevicesArray[index].itemPrice, ...pageDevicesArray[index] });
    sumPrice();
}

/*
* Removes items from the shopping cart
* There is a dustbin icon on the right side of each item in the shopping cart. It is used to remove items from the
* shopping cart. Once the item is removed from the shopping cart, it existence from the 'cartContent' array ceases.
* Also, the 'totalPrice' is subtracted based on the removed item price. The amount text is updated.
*/ 
function removeItem(index) {
    const currentItem = cartContent.filter(item => item.quantityId === index);
    totalPrice -= currentItem[0].itemPrice;
    allItems -= 1;
    cartContent = cartContent.filter(item => item.removeId !== index);
    cartItems.removeChild(allCartItems[index]);
    numberOfItems.innerText = `All items: ${allItems}`;
    totalPriceText.innerHTML = `Total price: $${totalPrice}`;
    if (allItems === 0)
        makePaymentFormButton.style.display = 'none';
}

/*
* Increases the quantity of an item
* A button with the '+' is shown on the right of the image of the items in the cart. The button is used to increment
* the quantity of an item. Once the quantity is incremented, the original price of the item will be multiplied by the
* current item quantity. The effect is seen immediately. Also, the total price text is updated too.
* While incrementing the quantity of an item, it is ensured that the quantity does not exceed the number of the
* current item in stock.
*/
function increaseItemQuantity(index) {
    const currentItem = cartContent.filter(item => item.quantityId === index);
    const currentItemPrice = items.filter(item => item.itemId === currentItem[0].itemId);
    var currentItemIndex;
    cartContent.forEach((item, i) => {
        if (item.quantityId === currentItem[0].quantityId)
            currentItemIndex = i;
    });
    
    if (currentItem[0].quantity === currentItem[0].remaining)
        return;
    
    currentItem[0].quantity += 1;
    currentItem[0].itemPrice = currentItemPrice[0].itemPrice * currentItem[0].quantity;
    cartContent[currentItemIndex].itemPrice = currentItem[0].itemPrice;
    totalPrice += currentItemPrice[0].itemPrice;
    itemQuantity[index].innerText = `Item quantity: ${currentItem[0].quantity}`;
    itemPriceText[index].innerText = `Price: $${currentItem[0].itemPrice}`;
    totalPriceText.innerHTML = `Total price: $${totalPrice}`;
}

/*
* Decreases the quantity of an item
* A button with the '-' is shown on the right of the image of the items in the cart. The button is used to decrement
* the quantity of an item. Once the quantity is decrement, the original price of the item will be subtracted from the
* total price of the item. The effect is seen immediately. Also, the total price text is updated too.
* While decrementing the quantity of an item, it ensured that the quantity is never less thatn 1. If the user is no
* longer interested in the item, then the dusbin icon can be clicked to remove the item from the shopping cart.
*/
function decreaseItemQuantity(index) {
    const currentItem = cartContent.filter(item => item.quantityId === index);
    const currentItemPrice = items.filter(item => item.itemId === currentItem[0].itemId);
    var currentItemIndex;
    cartContent.forEach((item, i) => {
        if (item.quantityId === currentItem[0].quantityId)
            currentItemIndex = i;
    });

    if (currentItem[0].quantity === 1)
        return;

    currentItem[0].itemPrice -= currentItemPrice[0].itemPrice;
    currentItem[0].quantity -= 1;
    totalPrice -= currentItemPrice[0].itemPrice;
    cartContent[currentItemIndex].itemPrice = currentItem[0].itemPrice;
    itemPriceText[index].innerText = `Price: $${currentItem[0].itemPrice}`;
    itemQuantity[index].innerText = `Item quantity: ${currentItem[0].quantity}`;
    totalPriceText.innerHTML = `Total price: $${totalPrice}`;
}

/*
* Set remove index to each item
* This function is seen to solve some errors while removing items from the cart. By giving each item an ID which
* corresponds to the index of the dustbin icon, then the item can be successfully removed.
*/
function setRemoveItemIndex(arg) {
    if (cartContent.length === 0)
        return;
    for (var i = 0; i < arg.length; i++)
        cartContent[i].removeId = i;
}

/*
* Set quantity index to each item
* This function gives an ID to each item in the cart which corresponds to the index of the increment button.
* This solves another issue with incrementing or decrementing the quantity of items in the cart.
*/
function setItemsQuantityIndex(arg) {
    if(cartContent.length === 0)
        return;
    for(var i = 0; i < arg.length; i++)
        cartContent[i].quantityId = i;
}

/*
* Initialize variables
*/
function initialize() {
    closeCartIcon = document.querySelector('.close-cart-items');
    increaseQuantityButton = document.querySelectorAll('[increase-quantity]');
    decreaseQuantityButton = document.querySelectorAll('[decrease-quantity]');
    removeItemIcon = document.querySelectorAll('.remove-item-icon');
    allCartItems = document.querySelectorAll('.cart-item');
    itemQuantity = document.querySelectorAll('[item-quantity]');
}

const addToCartButton = document.querySelectorAll('[add-to-cart]');
const cartIcon = document.querySelector('.cart-icon');
const cartItems = document.querySelector('.cart-items');
var makePaymentFormButton = document.createElement('button');
var closeCartIcon;
var increaseQuantityButton;
var decreaseQuantityButton;
var removeItemIcon;
var numberOfItems;
var itemQuantity;
var itemPriceText;
var totalPriceText;
var cartContent = [];
var allCartItems = [];
var allItems = 0;
var totalPrice = 0

/*
*Add eventListeners
*/
cartIcon.addEventListener('click', () => {
    toggleCartItems('show');
    displayCartContent();
    initialize();
    setRemoveItemIndex(removeItemIcon);
    setItemsQuantityIndex(increaseQuantityButton);

    removeItemIcon.forEach((icon, index) => {
        icon.addEventListener('click', () => {
            removeItem(index);
        });
    });

    closeCartIcon.addEventListener('click', () => {
        toggleCartItems('hide');
    });

    increaseQuantityButton.forEach((button, index) => {
        button.addEventListener('click', () => {
            increaseItemQuantity(index); 
        });
    });

    decreaseQuantityButton.forEach((button, index) => {
        button.addEventListener('click', () => {
            decreaseItemQuantity(index);
        });
    });
});

addToCartButton.forEach((button, index) => {
    button.addEventListener('click', () => {
        addItem(index);
    });
});