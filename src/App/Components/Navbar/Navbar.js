import React from "react";

// Importing Styled Components
import styled from "styled-components";

// Importing Links
import { Link } from "react-router-dom";

// Importing Colors
import Colors from "./../../Constants/Colors";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 35px;
`;

const Logo = styled(Link)`
  color: ${Colors.primary};
  font-weight: 700;
  font-size: 1.2rem;
  display: block;
  text-decoration: none;
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavItem = styled(Link)`
  display: block;
  text-decoration: none;
  color: ${Colors.primary};
  cursor: pointer;
  transition: all 0.2s ease;

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
      <Logo to="/">TriangleQuiz</Logo>

      <Nav>
        <NavItem to="/area">Area</NavItem>
        <NavItem to="/area">Perimeter</NavItem>
      </Nav>
    </NavbarContainer>
  );
};

export default Navbar;
