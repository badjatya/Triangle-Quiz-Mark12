import React from "react";

// Importing Styled Components
import styled from "styled-components";

// Importing Colors
import Colors from "./../../Constants/Colors";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1024px;
  max-width: 1024px;
  margin: 10px auto;
`;

const Logo = styled.p`
  color: ${Colors.primary};
  font-weight: 700;
  font-size: 1.2rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavItem = styled.p`
  display: block;
  text-decoration: none;
  color: ${Colors.primary};
  padding-bottom: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:not(:last-child) {
    margin-right: 35px;
  }

  &:hover {
    border-bottom: 3px solid ${Colors.primary};
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>TriangleQuiz</Logo>

      <Nav>
        <NavItem>Area</NavItem>
        <NavItem>Perimeter</NavItem>
      </Nav>
    </NavbarContainer>
  );
};

export default Navbar;
