import { Product } from "@/components/Product";
import { menuItems } from "@/pages/_app.js";

export default function Drinks({ handleAmountChange, items }) {
  return (
    <ul>
      {menuItems
        .filter((item) => item.type === "drink")
        .map((drink) => (
          <Product
            handleAmountChange={handleAmountChange}
            key={drink.id}
            amount={items.find((item) => item.id === drink.id)?.amount}
            {...drink}
          />
        ))}
    </ul>
  );
}
