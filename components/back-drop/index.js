import styled from "styled-components";

const StyledBackDrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  top: 0;
  right: 0;
`;

export default function Backdrop({ close }) {
  return <StyledBackDrop onClick={close} />;
}
