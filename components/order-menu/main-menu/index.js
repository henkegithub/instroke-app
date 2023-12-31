import { Product } from "@/components/Product";
import { StyledUlList } from "@/components/StyledList";
import { menuItems } from "@/pages/_app.js";
export default function Maindishes({ handleAmountChange, items }) {
  return (
    <StyledUlList>
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
    </StyledUlList>
  );
}
