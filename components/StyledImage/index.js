import styled from "styled-components";
import { device } from "@/utils/globalValues";
import Image from "next/image";

export const StyledImage = styled(Image)`
  border-radius: 6.5px;
  width: 100%;
  height: auto;
  @media ${device.tablet} {
    width: 60%;
  }
`;
