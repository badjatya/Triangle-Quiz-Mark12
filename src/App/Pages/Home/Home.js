import React from "react";

// Importing Styled Components
import styled from "styled-components";

// Importing Components
import CustomButton from "../../Components/CustomButton/CustomButton";

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

const Footer = styled.footer`
  margin-top: 50px;
  display: flex;
  align-items: center;
  width: 45%;
`;

const Anchor = styled.a`
  text-decoration: none;
  display: block;
  text-align: center;
  width: 40px;
  height: 40px;
  border: 1px solid ${Colors.primary};
  border-radius: 50%;
  margin-right: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Colors.primary};
  cursor: pointer;

  &:hover {
    border: none;
    background-color: ${Colors.primary};
    color: ${Colors.white};
  }
`;

const Home = () => {
  return (
    <div>
      <Main>
        <DetailContainer>
          <Heading>Triangle Quiz and area calculator</Heading>
          <Description>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
            laudantium et non tempora deserunt placeat impedit sapiente! Facilis
            est voluptatum quia quibusdam vel neque, veniam illum et eligendi,
            ut cum.
          </Description>
          <ButtonContainer>
            <CustomButton to="/quiz">Play Quiz</CustomButton>
            <ButtonSecondary to="/area">Calculate Area</ButtonSecondary>
          </ButtonContainer>
        </DetailContainer>
        <ImageContainer>
          <Img src={HomeImage} alt="HomeImage" />
        </ImageContainer>
      </Main>

      <Footer>
        <Anchor href="https://www.instagram.com/badjatya/">
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </Anchor>
        <Anchor href="https://twitter.com/ArchitBadjatya">
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </Anchor>
        <Anchor href="https://www.linkedin.com/in/badjatya/">
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </Anchor>
        <Anchor href="https://github.com/badjatya">
          <i className="fa fa-github" aria-hidden="true"></i>
        </Anchor>
        <Anchor href="https://www.facebook.com/archit.badjatya">
          <i className="fa fa-facebook" aria-hidden="true"></i>
        </Anchor>
      </Footer>
    </div>
  );
};

export default Home;
