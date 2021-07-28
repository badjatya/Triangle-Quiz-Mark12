import React from "react";

// Importing Styled Components
import styled from "styled-components";

// Importing Colors
import Colors from "../../Constants/Colors";

// Importing Image
import CalculateImage from "../../assets/img/Calculate.svg";

const Main = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-top: 10%; */
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

const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  outline: none;
  display: block;
  padding: 1rem 0.5rem 1rem 1rem;
  border-radius: 30px;
  border: 1px solid ${Colors.primary};

  &:not(:last-child) {
    margin-right: 20px;
  }
`;

const Area = () => {
  return (
    <Main>
      <DetailContainer>
        <Heading>Calculate Area Of Triangle</Heading>
        <Description>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit vitae
          perspiciatis et corporis placeat nobis molestias assumenda voluptatem
          incidunt commodi?
        </Description>

        <InputContainer>
          <Input type="number" placeholder="Base" />
          <Input type="number" placeholder="Height" />
        </InputContainer>
      </DetailContainer>

      <ImageContainer>
        <Img src={CalculateImage} alt="Calculate Img" />
      </ImageContainer>
    </Main>
  );
};

export default Area;
