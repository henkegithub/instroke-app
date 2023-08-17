import { Product } from "@/components/Product";
import { maindishes } from "@/pages/_app.js";
export default function Maindishes({ handleAddItem, items }) {
  return (
    <ul>
      {maindishes.map((maindish) => (
        <Product
          handleAddItem={handleAddItem}
          key={maindish.id}
          id={maindish.id}
          name={maindish.name}
          price={maindish.price}
          items={items}
        />
      ))}
    </ul>
  );
}
