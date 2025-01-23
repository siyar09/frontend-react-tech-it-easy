import './App.css';
import { calculateTotalSold } from './helper/calculateTotalSold.js';
import { calculateTotalPurchased } from './helper/calculateTotalPurchased.js';
import { calculateTotalToSell } from './helper/calculateTotalToSell.js';
import { infoBestSellingTv } from './helper/bestSellingTv.js';
import { inventory, bestSellingTv } from './constants/inventory.js';


function App() {
  const totalSold = calculateTotalSold(inventory, bestSellingTv);
  const totalPurchased = calculateTotalPurchased(inventory, bestSellingTv);
  const totalToSell = calculateTotalToSell(inventory, bestSellingTv);
  const { price, name, availableSizes, applicableOptions, picture } = infoBestSellingTv();


  return (
    <main>
      <h1>Tech it easy dashboard</h1>
      <section>
        <h2>Verkoopoverzicht</h2>
        <div className='dashboard'>
          <article className="items-sold">
            <h3>Aantal verkochte producten</h3>
            <h2>{totalSold}</h2>
          </article>
          <article className="items-purchased">
            <h3>Aantal ingekochte producten</h3>
            <h2>{totalPurchased}</h2>
          </article>
          <article className="items-to-sell">
            <h3>Aantal te verkopen producten</h3>
            <h2>{totalToSell}</h2>
          </article>
        </div>
      </section>


      <section className="best-selling">
        <h2>Best verkochte tv</h2>
        <article className="product-best-selling">
          <span className="product-image">
            <img src={picture} alt="best selling product" />
          </span>
          <div className="product-info">
            <h3 className='product-name'>{name}</h3>
            <h3 className='product-price'>{price}</h3>
            <h3>{availableSizes}</h3>
            <h3 className='avalible-list'>{applicableOptions}</h3>
          </div>
        </article>
      </section>
      <button type='button' onClick={() => console.log("Meest verkocht eerst")}>Meest verkocht eerst</button>
      <button type="button" onClick={() => console.log("Goedkoopste eerst")}>Goedkoopste eerst</button>
      <button type='button' onClick={() => console.log("Meest geschikt voor sport eerst")}>Meest geschikt voor sport eerst</button>



    </main>
  );
}

export default App;
