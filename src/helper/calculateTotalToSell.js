import { bestSellingTv, inventory } from '../constants/inventory.js';

export function calculateTotalToSell(inventory, bestSellingTv) {
    let totalToSell = 0;

    // Doorloopt elk product in de inventory
    for (let product of inventory) {
        totalToSell += product.originalStock - product.sold; // Aantal ingekochte min verkochte producten
    }

    // Voegt het aantal producten van bestSellingTv toe
    totalToSell += bestSellingTv.originalStock - bestSellingTv.sold;

    return totalToSell;
}

