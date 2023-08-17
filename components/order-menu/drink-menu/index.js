import { Product } from "@/components/Product";
import { drinks } from "@/pages/_app.js";
export default function Drinks({ items }) {
  return (
    <ul>
      {drinks.map((drink) => (
        <Product
          key={drink.id}
          name={drink.name}
          price={drink.price}
          items={items}
        />
      ))}
    </ul>
  );
}
