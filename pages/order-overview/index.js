import CheckOutButton from "@/components/check-out-button";
import styled from "styled-components";

const StyledOrderOverview = styled.div`
  height: 100%;
  background: white;
  position: fixed;
  top: 0;
  right: 0;
  width: 40%;
  z-index: 200;
  box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
  transform: ${(props) =>
    props.$isOpen ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.3s ease-out;
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
        <ul>
          {items.map((item) => {
            return (
              <li key={item.id}>
                <p>{item.name}</p>
                <p>{item.price}€</p>
                <p>{item.amount}</p>
              </li>
            );
          })}
        </ul>
        <h1>Total Price:</h1>
        {getTotalPrice(items)} €
        <label htmlFor="tableInput">Select Table: </label>
        <select
          id="tableInput"
          value={selectedTable}
          onChange={handleTableSelect}
          style={{ width: "100px" }}
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
        <br />
        <br />
        {selectedTable && <CheckOutButton />}
      </StyledOrderOverview>
    </>
  );
}
