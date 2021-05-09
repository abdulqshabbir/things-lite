import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid white;
  border-right: 2px solid gray;
  border-bottom: 2px solid gray;
  border-left: 4px solid white;
  background: transparent;
  position: relative;
  margin: auto;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

export default Spinner;