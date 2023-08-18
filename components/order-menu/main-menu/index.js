import { Product } from "@/components/Product";
import { maindishes } from "@/pages/_app.js";
export default function Maindishes({ handleAmountChange, items }) {
  return (
    <ul>
      {maindishes.map((maindish) => (
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

// handleAddItem={handleAddItem}
// key={maindish.id}
// id={maindish.id}
// name={maindish.name}
// price={maindish.price}
// items={items}
