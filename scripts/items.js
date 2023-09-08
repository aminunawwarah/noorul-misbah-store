/*
* Copyright 2023, Aminu Adamu Aminu
* All rights reserved. 
*/

/*
* All the device information for this project are obtained from this array.
*/
const items = [
    { itemId: 01, itemPrice: 734, remaining: 23, itemName: 'Dell XPS 13', src: 'imgs/Dell XPS 13.png', os: 'Windows 11', osDev: 'Microsoft', type: 'PC', itemDev: 'Dell' },
    { itemId: 02, itemPrice: 810, remaining: 13, itemName: 'HP 200 G4 22', src: 'imgs/Hp 200 g4 22.png', os: 'Windows 10', osDev: 'Microsoft', type: 'PC', itemDev: 'Hewlett Packard' },
    { itemId: 03, itemPrice: 855, remaining: 22, itemName: 'HP Athlon Silver 3050u', src: 'imgs/HP Athlon Silver 3050u.png', os: 'Windows 10', osDev: 'Microsoft', type: 'PC', itemDev: 'Hewlett Packard' },
    { itemId: 04, itemPrice: 700, remaining: 28, itemName: 'HUAWEI MateBook E', src: 'imgs/HUAWEI MateBook E.png', os: 'Windows 11', osDev: 'Microsoft', type: 'Tablet', itemDev: 'HUWAEI' },
    { itemId: 05, itemPrice: 815, remaining: 27, itemName: 'iPhone 11 Pro Max', src: 'imgs/iPhone 11 Pro Max.png', os: 'iOS 15.6', osDev: 'Apple Inc.', type: 'Mobile', itemDev: 'Apple Inc.' },
    { itemId: 06, itemPrice: 990, remaining: 11, itemName: 'iPhone 14 Pro Max', src: 'imgs/iPhone 14 Pro Max.png', os: 'iOS 16.5', osDev: 'Apple Inc.', type: 'Mobile', itemDev: 'Apple Inc.' },
    { itemId: 07, itemPrice: 790, remaining: 13, itemName: 'Microsoft Surface GO 2', src: 'imgs/Microsoft Surface GO 2.png', os: 'Windows 11', osDev: 'Microsoft', type: 'Tablet', itemDev: 'Microsoft' },
    { itemId: 08, itemPrice: 760, remaining: 12, itemName: 'Microsoft Surface Pro X', src: 'imgs/Microsoft Surface Pro X.png', os: 'Windows 11', osDev: 'Microsoft', type: 'Tablet', itemDev: 'Microsoft' },
    { itemId: 09, itemPrice: 450, remaining: 26, itemName: 'Nokia 9.2', src: 'imgs/Nokia 9.2.png', os: 'Android 10', osDev: 'Google', type: 'Mobile', itemDev: 'Nokia' },
    { itemId: 10, itemPrice: 380, remaining: 19, itemName: 'Nokia 808 PureView', src: 'imgs/Nokia 808 PureView.png', os: 'Symbian Belle', osDev: 'Nokia', type: 'Mobile', itemDev: 'Nokia' },
    { itemId: 11, itemPrice: 530, remaining: 20, itemName: 'Nokia C21', src: 'imgs/Nokia C21.png', os: 'Android 10', osDev: 'Google', type: 'Mobile', itemDev: 'Nokia' },
    { itemId: 12, itemPrice: 420, remaining: 24, itemName: 'Nokia Lumia 830', src: 'imgs/Nokia Lumia 830.png', os: 'Windows Phone 8.1', osDev: 'Microsoft', type: 'Mobile', itemDev: 'Nokia' },
    { itemId: 13, itemPrice: 499, remaining: 41, itemName: 'Nokia Lumia 930', src: 'imgs/Nokia Lumia 930.png', os: 'Windows Phone 8.1', osDev: 'Microsoft', type: 'Mobile', itemDev: 'Nokia' },
    { itemId: 14, itemPrice: 510, remaining: 33, itemName: 'Nokia Lumia 1520', src: 'imgs/Nokia Lumia 1520.png', os: 'Windows Phone 8.0', osDev: 'Microsoft', type: 'Mobile', itemDev: 'Nokia' },
    { itemId: 15, itemPrice: 475, remaining: 32, itemName: 'Nokia Lumia 2520', src: 'imgs/Nokia Lumia 2520.png', os: 'Windows RT 8', osDev: 'Microsoft', type: 'Mobile', itemDev: 'Nokia' },
    { itemId: 16, itemPrice: 615, remaining: 19, itemName: 'Pipo W10', src: 'imgs/Pipo W10.png', os: 'Windows 10', osDev: 'Microsoft', type: 'Tablet', itemDev: 'Pipo' },
    { itemId: 17, itemPrice: 885, remaining: 32, itemName: 'Samsung Galaxy Book Flex', src: 'imgs/Samsung Galaxy Book Flex.png', os: 'Windows 10', osDev: 'Microsoft', type: 'PC', itemDev: 'Samsung' },
    { itemId: 18, itemPrice: 890, remaining: 16, itemName: 'Samsung NoteBook S', src: 'imgs/Samsung NoteBook S.png', os: 'Windows 11', osDev: 'Microsoft', type: 'PC', itemDev: 'Samsung' },
    { itemId: 19, itemPrice: 799, remaining: 19, itemName: 'TECLAST X6', src: 'imgs/TECLAST X6.png', os: 'Windows 10', osDev: 'Microsoft', type: 'Tablet', itemDev: 'TECLAST' },
    { itemId: 20, itemPrice: 870, remaining: 29, itemName: 'iPad 6', src: 'imgs/iPad 6.png', os: 'iPadOS 15.5', osDev: 'Apple Inc.', type: 'Tablet', itemDev: 'Apple Inc.' },
    { itemId: 21, itemPrice: 900, remaining: 21, itemName: 'iPad 7', src: 'imgs/iPad 7.png', os: 'iPadOS 16.0', osDev: 'Apple Inc.', type: 'Tablet', itemDev: 'Apple Inc.' },
    { itemId: 22, itemPrice: 750, remaining: 16, itemName: 'iPhone X', src: 'imgs/iPhone X.png', os: 'iOS 15.6', osDev: 'Apple Inc.', type: 'Mobile', itemDev: 'Apple Inc.' },
    { itemId: 23, itemPrice: 800, remaining: 19, itemName: 'iPhone XS Max', src: 'imgs/iPhone XS Max.png', os: 'iOS 16.0', osDev: 'Apple Inc.', type: 'Mobile', itemDev: 'Apple Inc.' },
    { itemId: 24, itemPrice: 400, remaining: 25, itemName: 'Lenovo M7', src: 'imgs/Lenovo M7.png', os: 'Android 9', osDev: 'Google', type: 'Tablet', itemDev: 'Lenovo' },
    { itemId: 25, itemPrice: 550, remaining: 21, itemName: 'Lenovo Tablet 10', src: 'imgs/Lenovo Tablet 10.png', os: 'Windows 10', osDev: 'Microsoft', type: 'Tablet', itemDev: 'Lenovo' },
    { itemId: 26, itemPrice: 520, remaining: 19, itemName: 'Lenovo ThinkPad 10', src: 'imgs/Lenovo ThinkPad 10.png', os: 'Windows 8.1', osDev: 'Microsoft', type: 'Tablet', itemDev: 'Lenovo' },
    { itemId: 27, itemPrice: 385, remaining: 22, itemName: 'Nokia 1 Plus', src: 'imgs/Nokia 1 Plus.png', os: 'Android 9', osDev: 'Google', type: 'Mobile', itemDev: 'Nokia' },
    { itemId: 28, itemPrice: 390, remaining: 28, itemName: 'Nokia C1', src: 'imgs/Nokia C1.png', os: 'Android 9', osDev: 'Google', type: 'Mobile', itemDev: 'Nokia' },
    { itemId: 29, itemPrice: 600, remaining: 13, itemName: 'Nokia G21', src: 'imgs/Nokia G21.png', os: 'Android 10', osDev: 'Google', type: 'Mobile', itemDev: 'Nokia' },
    { itemId: 30, itemPrice: 370, remaining: 14, itemName: 'Nokia Lumia 730', src: 'imgs/Nokia Lumia 730.png', os: 'Windows Phone 8.1', osDev: 'Microsoft', type: 'Mobile', itemDev: 'Nokia' },
    { itemId: 31, itemPrice: 390, remaining: 14, itemName: 'Nokia Lumia 1020', src: 'imgs/Nokia Lumia 1020.png', os: 'Windows Phone 8.0', osDev: 'Microsoft', type: 'Mobile', itemDev: 'Nokia' },
    { itemId: 32, itemPrice: 800, remaining: 28, itemName: 'TECLAST X11', src: 'imgs/TECLAST X11.png', os: 'Windows 10', osDev: 'Microsoft', type: 'Tablet', itemDev: 'TECLAST' },
    { itemId: 33, itemPrice: 420, remaining: 22, itemName: 'Tecno Spark 8', src: 'imgs/Tecno Spark 8.png', os: 'Android 10', osDev: 'Google Inc.', type: 'Mobile', itemDev: 'Tecno' },
    { itemId: 34, itemPrice: 555, remaining: 24, itemName: 'Tecno Spark 10C', src: 'imgs/Tecno Spark 10C.png', os: 'Android 10', osDev: 'Google Inc.', type: 'Moblie', itemDev: 'Tecno' },
    { itemId: 35, itemPrice: 626, remaining: 38, itemName: 'Tecno WinPad 2', src: 'imgs/Tecno WinPad 2.png', os: 'Windows 10', osDev: 'Microsoft', type: 'Tablet', itemDev: 'Tecno' },
    { itemId: 36, itemPrice: 770, remaining: 17, itemName: 'Samsung Galaxy Tab Pro S', src: 'imgs/Samsung Galaxy TabPro S.png', os: 'Windows 10', osDev: 'Microsoft', type: 'Tablet', itemDev: 'Samsung' },
];