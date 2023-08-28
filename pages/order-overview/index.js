import {
  StyledListOverview,
  StyledUlListOverview,
} from "@/components/StyledList";
import { StyledMenuItemOverview } from "@/components/StyledMenuItem";
import {
  StyledParagraphOverviewTotal,
  StyledParagraphOverview,
} from "@/components/StyledParagraph";
import CheckOutButton from "@/components/check-out-button";
import styled from "styled-components";
import { device } from "@/utils/globalValues";
import { StyledDiv } from "@/components/StyledDiv";

const StyledOrderOverview = styled.div`
  height: 100%;
  position: fixed;
  background-color: rgba(77, 78, 131, 0.7);
  padding: 20px;
  top: 0;
  right: 0;
  width: 70%;
  z-index: 200;
  box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
  transform: ${(props) =>
    props.$isOpen ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.3s ease-out;

  @media ${device.tablet} {
    width: 40%;
  }
`;

export default function OrderOverview({
  items,
  show,
  handleTableSelect,
  selectedTable,
}) {
  function getTotalPrice(items) {
    return items.reduce((memo, item) => memo + item.price * item.amount, 0);
  }

  return (
    <>
      <StyledOrderOverview $isOpen={show}>
        <StyledUlListOverview>
          {items.map((item) => {
            return (
              <StyledListOverview key={item.id}>
                <StyledParagraphOverview>
                  {item.amount} x {item.name} for each: {item.price}€
                </StyledParagraphOverview>
              </StyledListOverview>
            );
          })}
        </StyledUlListOverview>
        <StyledDiv>
          Total Price:
          <StyledParagraphOverviewTotal>
            {getTotalPrice(items)} €
          </StyledParagraphOverviewTotal>
        </StyledDiv>
        <StyledDiv>
          <label htmlFor="tableInput">Select Table: </label>
        </StyledDiv>
        <StyledDiv>
          <select
            id="tableInput"
            value={selectedTable}
            onChange={handleTableSelect}
          >
            <option value="">Table Number</option>
            {Array.from({ length: 100 }, (_, index) => index + 1).map(
              (number) => (
                <option key={number} value={number}>
                  {number}
                </option>
              )
            )}
          </select>
        </StyledDiv>
        <StyledDiv>{selectedTable && <CheckOutButton />}</StyledDiv>
      </StyledOrderOverview>
    </>
  );
}
