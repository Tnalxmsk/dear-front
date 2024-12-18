import styled from "styled-components";
import { lettersData } from "../../mock/lettersData"; 

interface LetterDetailProps {
  id: number;
  onClose: () => void; 
  onPrev: () => void; 
  onNext: () => void; 
}

const LetterDetail = ({ id, onPrev, onNext }: LetterDetailProps) => {
  const letter = lettersData.find((item) => item.id === id);

  if (!letter) {
    return <ErrorMessage>해당 편지를 찾을 수 없습니다.</ErrorMessage>;
  }

  const { title, recipient, sender, content, paperType } = letter;
  const backgroundImage = `/images/${getPaperFileName(paperType)}`;

  const prevLetter = lettersData.find((item) => item.id === id - 1);
  const nextLetter = lettersData.find((item) => item.id === id + 1);

  return (
    <DetailContainer backgroundImage={backgroundImage}>
      <DearSection>Dear. {recipient}</DearSection>
      <LetterTitle>{`[ ${title} ]`}</LetterTitle>
      <ContentContainer>
        <ContentText>{content}</ContentText>
      </ContentContainer>
      <FromSection>From. {sender}</FromSection>

      <NavigationContainer>
        <PrevButton onClick={onPrev}>
          {prevLetter && (
            <>
              <ArrowButton>{"<"}</ArrowButton>
              <LetterText>{`from. ${prevLetter.sender} [${prevLetter.title}]`}</LetterText>
            </>
          )}
        </PrevButton>
        <NextButton onClick={onNext}>
          {nextLetter && (
            <>
              <LetterText>{`from. ${nextLetter.sender} [${nextLetter.title}]`}</LetterText>
              <ArrowButton>{">"}</ArrowButton>
            </>
          )}
        </NextButton>
      </NavigationContainer>
    </DetailContainer>
  );
};

export default LetterDetail;

const getPaperFileName = (type: string) => {
  switch (type) {
    case "노트선":
      return "linedPaper.png";
    case "크래프트":
      return "kraftPaper.png";
    case "무지":
      return "plainPaper.png";
    case "모눈":
      return "gridPaper.png";
    default:
      return "linedPaper.png";
  }
};

const DetailContainer = styled.div<{ backgroundImage: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 1043.8px;
  height: 1761.4px;
  margin: 3rem auto;
  background: url(${(props) => props.backgroundImage}) no-repeat center center;
  background-size: cover;
  border-radius: 10px;
  position: relative;
  padding: 51.2px;
  box-shadow: none;
`;

const NavigationContainer = styled.div`
  position: absolute;
  bottom: -35px;
  left: 10px;
  right: 10px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 1.2rem;
  color: #000;
`;

const PrevButton = styled.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const NextButton = styled.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ArrowButton = styled.span`
  font-size: 2rem;
  margin: 0 10px;
  color: #000;
`;

const LetterText = styled.span`
  font-size: 1.2rem;
  color: #000;
`;

const DearSection = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 2rem 0 1rem 2rem;
  align-self: flex-start;
  color: #000000;
`;

const LetterTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin: 1rem 0;
  color: #333;
`;

const ContentContainer = styled.div`
  flex: 1;
  width: 90%;
  margin: 2rem auto;
`;

const ContentText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #333;
  white-space: pre-line;
`;

const FromSection = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 1rem 2rem;
  align-self: flex-end;
  color: #000000;
`;

const ErrorMessage = styled.div`
  text-align: center;
  margin-top: 3rem;
  font-size: 1.5rem;
  color: red;
`;
