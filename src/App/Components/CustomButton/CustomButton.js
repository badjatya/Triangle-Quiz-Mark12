import React from "react";

// Importing Styled Components
import styled from "styled-components";

// Importing Links
import { Link } from "react-router-dom";

// Importing Colors
import Colors from "../../Constants/Colors";

const ButtonPrimary = styled(Link)`
  display: block;
  cursor: pointer;
  background-color: ${Colors.primary};
  color: ${Colors.white};
  padding: 1rem 2rem;
  text-align: center;
  border-radius: 30px;
  margin-right: 20px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f86868;
  }
`;

const CustomButton = (props) => {
  return <ButtonPrimary {...props}>{props.children}</ButtonPrimary>;
};

export default CustomButton;
