import React, { useState } from "react";

// Importing Styled Components
import styled from "styled-components";

// Importing Components
import CustomButton from "../../Components/CustomButton/CustomButton";

// Importing Colors
import Colors from "../../Constants/Colors";

// Importing Image
import CalculateImage from "../../assets/img/Calculate.svg";

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

const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  outline: none;
  display: block;
  padding: 1rem 0 1rem 1rem;
  border-radius: 30px;
  border: 1px solid ${Colors.primary};

  &:not(:last-child) {
    margin-right: 20px;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  width: 126%;
`;

const AreaMessage = styled.p`
  padding: 1rem 2rem;
  width: 121%;
  text-align: center;
  border: 1px solid ${Colors.primary};
  border-radius: 30px;
  color: ${Colors.primary};
`;

const Perimeter = () => {
  //State
  const [base, setBase] = useState("");
  const [hypotenuse, setHypotenuse] = useState("");
  const [perpendicular, setPerpendicular] = useState("");
  const [visibleMessage, setVisibleMessage] = useState(false);
  const [perimeterOfTriangle, setPerimeterOfTriangle] = useState();
  const [error, setError] = useState(false);

  // Calculate
  const calculateEventHandler = () => {
    if (base > 0 && hypotenuse > 0 && perpendicular > 0) {
      //   let perimeter = base + hypotenuse + perpendicular;
      setPerimeterOfTriangle(
        Number(base) + Number(hypotenuse) + Number(perpendicular)
      );
      setVisibleMessage(true);
      setError(false);
    } else {
      setBase("");
      setHypotenuse("");
      setPerpendicular("");
      setVisibleMessage(false);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };

  // Calculate
  const resetEventHandler = () => {
    setBase("");
    setHypotenuse("");
    setPerpendicular("");
    setVisibleMessage(false);
  };

  return (
    <Main>
      <DetailContainer>
        <Heading>Calculate Perimeter Of Triangle</Heading>
        <Description>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit vitae
          perspiciatis et corporis placeat nobis molestias assumenda voluptatem
          incidunt commodi?
        </Description>

        <InputContainer>
          <Input
            type="number"
            placeholder="Side a"
            value={base}
            onChange={(e) => setBase(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Side b"
            value={hypotenuse}
            onChange={(e) => setHypotenuse(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Side c"
            value={perpendicular}
            onChange={(e) => setPerpendicular(e.target.value)}
          />
        </InputContainer>
        <ButtonContainer>
          <CustomButton
            onClick={visibleMessage ? resetEventHandler : calculateEventHandler}
          >
            {visibleMessage ? "Reset" : "Calculate"}
          </CustomButton>
        </ButtonContainer>
        {visibleMessage && (
          <AreaMessage>
            Perimeter of Triangle is {perimeterOfTriangle}
          </AreaMessage>
        )}
        {error && <AreaMessage>Perimeter cant be negative</AreaMessage>}
      </DetailContainer>

      <ImageContainer>
        <Img src={CalculateImage} alt="Calculate Img" />
      </ImageContainer>
    </Main>
  );
};

export default Perimeter;
