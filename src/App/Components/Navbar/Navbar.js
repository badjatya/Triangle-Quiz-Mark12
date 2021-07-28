import React from "react";

// Importing Styled Components
import styled from "styled-components";

// Importing Colors
import Colors from "./../../Constants/Colors";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.p`
  color: ${Colors.primary};
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>nav</Logo>
    </NavbarContainer>
  );
};

export default Navbar;
