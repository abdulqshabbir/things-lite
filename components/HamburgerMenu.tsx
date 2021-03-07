import styled from "styled-components";

export default styled.div`
  height: 5px;
  width: 40px;
  background-color: ${props => props.theme.primaryLight};
  position: absolute;
  &::before {
    content: '';
    position: absolute;
    height: 5px;
    width: 40px;
    background-color: ${props => props.theme.primaryLight};
    transform: translateY(-15px);
  }
  &::after {
    content: '';
    position: absolute;
    height: 5px;
    width: 40px;
    background-color: ${props => props.theme.primaryLight};
    transform: translateY(15px);
  }
`;
