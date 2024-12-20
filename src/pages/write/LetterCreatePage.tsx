import styled from 'styled-components';
import { useState } from 'react';
import StatusBar from '../../components/write/StatusBar.tsx';
import { useNavigate } from 'react-router-dom';
import { PaperType } from '../../types/write/write.ts';
import Letter from '../../components/write/Letter.tsx';
import { getStepTitle } from '../../utils/getStepTitle.ts';
import { FontType } from '../../types/write/font.ts';
import Font from '../../components/write/Font.tsx';
import EmailForm from '../../components/write/EmailForm.tsx';

const LetterCreatePage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const title = getStepTitle(step);

  const handleBack = () => {
    if (step === 1) {
      navigate(-1);
      return;
    }
    setStep(step - 1);
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  return (
    <Container>
      <SecondHeader>
        <ActionIcon src="/src/assets/back.svg" alt="뒤로가기" onClick={handleBack} />
        <div>
          <StatusBar step={step} />
          {step !== 4 ? <Title>{title}</Title> : null}
        </div>
        <ActionIcon src="/src/assets/next.svg" alt="뒤로가기" onClick={handleNext} />
      </SecondHeader>
      {step === 1 ? (
        <PaperListContainer>
          {Object.values(PaperType).map((type) => (
            <Letter key={type} type={type} />
          ))}
        </PaperListContainer>
      ) : null}
      {step === 2 ? (
        <FontListContainer>
          {Object.values(FontType).map((type) => (
            <Font key={type} type={type} />
          ))}
        </FontListContainer>
      ) : null}
      {step === 3 ? (
        <div style={{ padding: '0 20%', marginTop: '60px'}}>
          <EmailForm />
        </div>
      ) : null}
      {step === 4 ? <div></div> : null}
      {step === 5 ? <div></div> : null}
    </Container>
  );
};

export default LetterCreatePage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background: url("/src/assets/bg-select.png") no-repeat center center;
  background-size: cover;
`;

const SecondHeader = styled.div`
  align-items: center;
  display: flex;
  width: 100vw;
  padding: 0 45px;
  margin-top: 75px;
  justify-content: space-between;
`;

const ActionIcon = styled.img`
  width: 16px;
  height: 30px;
  cursor: pointer;
`;

const Title = styled.div`
  font: ${({ theme }) => theme.fonts.heading_regular_32px};
  color: black;
  text-align: center;
  margin-top: 15px;
`;

const PaperListContainer = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2열 고정 */
  width: 100vw;
  height: 70vh;
  gap: 20px;
  padding: 0 30px;
`;

const FontListContainer = styled.div`
  margin-top: 40px;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  gap: 20px

`;
