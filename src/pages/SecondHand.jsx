import products from "../data/products.json";
import { getPaidItems } from "../utils/productFilters";
import ProductCard from "../components/ProductCard";

export default function SecondHand() {
  const paidItems = getPaidItems(products);

  return (
    <div className="container">
      <h1>SecondHand Items</h1>

      {paidItems.length === 0 && <p>No items available.</p>}

      <div className="product-grid">
        {paidItems.map(item => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
