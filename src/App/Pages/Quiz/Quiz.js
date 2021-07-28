import React, { useState } from "react";

// Importing Styled Components
import styled from "styled-components";

// Importing Components
import CustomButton from "../../Components/CustomButton/CustomButton";

// Importing Data
import questions from "../../data/question.data";

// Importing Colors
import Colors from "../../Constants/Colors";

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const QuizContainer = styled.div`
  width: 600px;
  margin-top: 100px;
  background-color: ${Colors.white};
  padding: 30px 50px;
`;

const QuizDetail = styled.div`
  display: flex;
`;

const QuestionIndex = styled.p`
  margin-right: 15px;
  width: 20%;
`;

const QuestionContainer = styled.div`
  width: 80%;
`;

const Option = styled.p`
  border: 1px solid ${Colors.primary};
  padding: 0.5rem 1rem;
  color: ${Colors.primary};
  border-radius: 30px;
  cursor: pointer;
`;

const ResultContainer = styled.div``;

const Result = styled.p`
  border: 1px solid ${Colors.primary};
  padding: 1rem 0;
  color: ${Colors.primary};
  border-radius: 30px;
  text-align: center;
`;

const Quiz = () => {
  //State
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  // Handling Answers
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  // Reset
  const resetHandler = () => {
    setScore(0);
    setShowScore(false);
    setCurrentQuestion(0);
  };

  return (
    <Main>
      <QuizContainer>
        {showScore ? (
          <ResultContainer>
            <Result>
              You scored {score} out of {questions.length}
            </Result>
            <CustomButton onClick={resetHandler} style={{ width: "100%" }}>
              Play Again
            </CustomButton>
          </ResultContainer>
        ) : (
          <QuizDetail>
            <QuestionIndex>Question {currentQuestion + 1}</QuestionIndex>
            <QuestionContainer>
              <p>{questions[currentQuestion].questionText}</p>
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <Option
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </Option>
              ))}
            </QuestionContainer>
          </QuizDetail>
        )}
      </QuizContainer>
    </Main>
  );
};

export default Quiz;
