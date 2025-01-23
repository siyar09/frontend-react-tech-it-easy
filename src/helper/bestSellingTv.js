import { bestSellingTv } from '../constants/inventory.js';

export function infoBestSellingTv() {
    const name = bestSellingTv.brand + ' ' + bestSellingTv.type + ' - ' + bestSellingTv.name;
    const price = '€' + bestSellingTv.price + ',-';
    const availableSizes = bestSellingTv.availableSizes
    .map(size => `${size} inch (${Math.round(size * 2.54)} cm)`) 
    .join(' | ');
    const option = bestSellingTv.options

    // Filter de opties die applicable zijn
    const applicableOptions = bestSellingTv.options
        .filter(option => option.applicable)
        .map(option => option.name)
        .join(', '); // Maak er een string van, gescheiden door komma's

    const picture = bestSellingTv.sourceImg;
    
    return { name, price, availableSizes, applicableOptions, picture };
}