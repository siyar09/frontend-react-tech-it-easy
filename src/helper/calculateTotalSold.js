import { bestSellingTv, inventory } from '/Users/nases00/Desktop/frontend-react-tech-it-easy/src/constants/inventory.js';

export function calculateTotalSold(inventory, bestSellingTv) {
    let totalSold = 0;

    // Doorloopt elk product in de inventory
    for (let product of inventory) {
        totalSold += product.sold; // Telt het aantal verkochte producten op
    }

    // Voegt het aantal verkochte producten van bestSellingTv toe
    totalSold += bestSellingTv.sold;

    return totalSold;
}
