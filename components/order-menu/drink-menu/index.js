import { Product } from "@/components/Product";
import { drinks } from "@/pages/_app.js";
export default function Drinks() {
  return (
    <ul>
      {drinks.map((drink) => (
        <Product key={drink} name={drink.name} price={drink.price} />
      ))}
    </ul>
  );
}
