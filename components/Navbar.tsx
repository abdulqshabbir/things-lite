import React from "react";
import styled from "styled-components";

const Navbar = ({className, children}: any) => {
  return <div className={className}>{children}</div>
}

export default styled(Navbar)`
  height: 100px;
  background-color: #333;
  font-size: 2.4rem;
  font-family: "Yusei Magic", sans-serif;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // position relative is so we can position
  // the hamburger lines absolutely
  position: relative;
`;
