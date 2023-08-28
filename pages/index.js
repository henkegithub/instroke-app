import Image from "next/image";
import OrderButton from "/components/order-button";
import { StyledMain } from "@/components/StyledMain";
import { StyledHeaderPosition } from "@/components/StyledHeader";

export default function HomePage() {
  return (
    <StyledMain>
      <StyledHeaderPosition>
        <h1>Instroke</h1>
      </StyledHeaderPosition>
      <Image
        alt="Restaurant Picture"
        src="/restaurant-image.jpg"
        width={184}
        height={184}
      ></Image>
      <OrderButton />
    </StyledMain>
  );
}
