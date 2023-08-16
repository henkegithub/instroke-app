import { Product } from "@/components/Product";
import { maindishes } from "@/pages/_app.js";
export default function Maindishes() {
  return (
    <ul>
      {maindishes.map((maindish) => (
        <Product
          key={maindish}
          id={maindish.id}
          name={maindish.name}
          price={maindish.price}
        />
      ))}
    </ul>
  );
}
