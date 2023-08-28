import styled from "styled-components";
import { device } from "@/utils/globalValues";

export const StyledHeaderPosition = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: -5rem;
  backdrop-filter: blur(1px);
  height: 150px;
  z-index: 2;

  @media ${device.tablet} {
    height: 200px;
    top: -8rem;
  }
`;
