import products from "../data/products.json";
import { getFreeItems } from "../utils/productFilters";
import ProductCard from "../components/ProductCard";

export default function TakeAway() {
  const freeItems = getFreeItems(products);

  return (
    <div className="container">
      <h1>TakeAway Items</h1>

      {freeItems.length === 0 && <p>No free items available.</p>}

      <div className="product-grid">
        {freeItems.map(item => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
