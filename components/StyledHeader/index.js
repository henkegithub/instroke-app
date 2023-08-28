import styled from "styled-components";
import { device } from "@/utils/globalValues";

export const StyledHeaderPosition = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;

  @media ${device.tablet} {
  }
`;
