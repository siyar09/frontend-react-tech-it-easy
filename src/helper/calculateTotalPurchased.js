import { bestSellingTv, inventory } from '../constants/inventory.js';

export function calculateTotalPurchased(inventory, bestSellingTv) {
    let totalPurchased = 0;

    // Doorloopt elk product in de inventory
    for (let product of inventory) {
        totalPurchased += product.originalStock; // Telt het aantal gekochte producten op
    }

    // Voegt het aantal gekochte producten van bestSellingTv toe
    totalPurchased += bestSellingTv.originalStock;

    return totalPurchased;
}

