import styled from "styled-components";
import { device } from "@/utils/globalValues";

export const StyledParagraph = styled.p`
  margin: 0;
  font-size: 24px;
  display: flex;
  width: 200px;
`;

export const StyledParagraphPrice = styled.p`
  margin: 0;
  font-size: 24px;
  display: flex;
  width: 100px;
  justify-content: start;
`;

export const StyledParagraphCheckout = styled.p`
  margin-bottom: 10px;
  margin-top: 0px;
  font-size: 24px;
  display: flex;
  justify-content: center;
`;

export const StyledParagraphOverview = styled.p`
  justify-content: space-between;
  margin: 0;
  font-size: 14px;
  @media ${device.tablet} {
    font-size: 24px;
  }
`;

export const StyledParagraphOverviewTotal = styled.p`
  display: flex;
  gap: 5px;
  flex-direction:
  justify-content: space-between;
  margin: 0;
  font-size: 18px;
  @media ${device.tablet} {
    font-size: 24px;
  }
`;

export const StyledParagraphTable = styled.p`
  display: flex;
  gap: 5px;
  flex-direction:
  justify-content: space-between;
  margin: 0;
  font-size: 24px;
  @media ${device.tablet} {
    font-size: 48px;
  }
`;
