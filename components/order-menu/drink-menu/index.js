import { Product } from "@/components/Product";
import { StyledUlList } from "@/components/StyledList";
import { menuItems } from "@/pages/_app.js";

export default function Drinks({ handleAmountChange, items }) {
  return (
    <StyledUlList>
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
    </StyledUlList>
  );
}
