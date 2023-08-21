import { Product } from "@/components/Product";
import { menuItems } from "@/pages/_app.js";
export default function Maindishes({ handleAmountChange, items }) {
  return (
    <ul>
      {menuItems
        .filter((item) => item.type === "food")
        .map((maindish) => (
          <Product
            handleAmountChange={handleAmountChange}
            key={maindish.id}
            amount={items.find((item) => item.id === maindish.id)?.amount}
            {...maindish}
          />
        ))}
    </ul>
  );
}
