import React from "react";

// Importing Styled Components
import styled from "styled-components";

// Importing Links
import { Link } from "react-router-dom";

// Importing Colors
import Colors from "../../Constants/Colors";

// Importing Image
import HomeImage from "../../assets/img/Home.svg";

const Main = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10%;
  overflow: hidden;
`;

const DetailContainer = styled.div`
  width: 45%;
`;
const ImageContainer = styled.div`
  width: 45%;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 400;
  text-transform: capitalize;
  color: ${Colors.secondary};
`;

const Description = styled.p`
  color: ${Colors.gray};
  font-weight: 300;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

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

const ButtonSecondary = styled(Link)`
  display: block;
  cursor: pointer;
  border: 1px solid ${Colors.primary};
  color: ${Colors.primary};
  padding: 1rem 2rem;
  text-align: center;
  border-radius: 30px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${Colors.primary};
    color: ${Colors.white};
    border: none;
  }
`;

const Home = () => {
  return (
    <Main>
      <DetailContainer>
        <Heading>Triangle Quiz and area calculator</Heading>
        <Description>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
          laudantium et non tempora deserunt placeat impedit sapiente! Facilis
          est voluptatum quia quibusdam vel neque, veniam illum et eligendi, ut
          cum.
        </Description>
        <ButtonContainer>
          <ButtonPrimary to="/quiz">Play Quiz</ButtonPrimary>
          <ButtonSecondary to="/area">Calculate Area</ButtonSecondary>
        </ButtonContainer>
      </DetailContainer>
      <ImageContainer>
        <Img src={HomeImage} alt="HomeImage" />
      </ImageContainer>
    </Main>
  );
};

export default Home;
