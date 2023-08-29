import OrderButton from "/components/order-button";
import { StyledMain } from "@/components/StyledMain";
import { StyledHeaderPosition } from "@/components/StyledHeader";
import { StyledImage } from "@/components/StyledImage";

export default function HomePage() {
  return (
    <StyledMain>
      <StyledHeaderPosition>
        <h1>Instroke</h1>
      </StyledHeaderPosition>
      <StyledImage
        alt="Restaurant Picture"
        src="/restaurant-image.jpg"
        width={672}
        height={448}
      ></StyledImage>
      <OrderButton />
    </StyledMain>
  );
}
