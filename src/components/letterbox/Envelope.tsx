import { useState } from "react";
import styled from "styled-components";

interface EnvelopeProps {
  id: number;
  title: string;
  sender: string;
  date: string;
  onClick: (id: number) => void;
  onSave: (id: number) => void;
  isSaved: boolean;
}

const Envelope = ({ id, title, sender, date, onClick, onSave, isSaved }: EnvelopeProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isSecondClick, setIsSecondClick] = useState(false); 

  const handleEnvelopeClick = () => {
    if (!isClicked) {
      setIsClicked(true); 
    } else {
      setIsSecondClick(true);
    }
  };

  const handleSaveClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSave(id);
  };

  if (isSecondClick) {
    setTimeout(() => {
      onClick(id); 
      setIsSecondClick(false); 
    }, 0);
  }

  return (
    <EnvelopeWrapper>
      <EnvelopeContainer onClick={handleEnvelopeClick} isClicked={isClicked}>
        <EnvelopeImage
          src={isClicked ? "/images/clickLetter.png" : "/images/envelope.png"}
          alt="편지 봉투"
          isClicked={isClicked}
        />
        {isClicked && <FrameImage src="/images/Frame.png" alt="Frame" />}
      </EnvelopeContainer>
      <SaveIcon
        src={isSaved ? "/images/saved2.png" : "/images/saved.png"}
        alt="즐겨찾기 아이콘"
        onClick={handleSaveClick}
        isClicked={isClicked}
      />
      <TextContainer>
        <SenderText>
          From. {sender} <TitleText>[ {title} ]</TitleText>
        </SenderText>
        <DateText>{date}</DateText>
      </TextContainer>
    </EnvelopeWrapper>
  );
};

export default Envelope;

const EnvelopeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 212px;
  height: 221px; 
  margin: 0 auto;
  position: relative;
  overflow: visible; 
`;

const EnvelopeContainer = styled.div<{ isClicked: boolean }>`
  position: relative;
  width: 212px;
  height: ${({ isClicked }) => (isClicked ? "221px" : "146px")};
  transition: height 0.3s ease-in-out;
`;

const EnvelopeImage = styled.img<{ isClicked: boolean }>`
  width: 100%;
  height: ${({ isClicked }) => (isClicked ? "221px" : "146px")};
  object-fit: cover;
  transition: all 0.3s ease-in-out;
`;

const SaveIcon = styled.img<{ isClicked: boolean }>`
  position: absolute;
  top: ${({ isClicked }) => (isClicked ? "-3px" : "30px")}; 
  right: 20px; 
  width: 20px;
  height: 30px;
  cursor: pointer;
  z-index: 1;
  transition: top 0.3s ease-in-out, right 0.3s ease-in-out; /* 위치 변화 부드럽게 */
`;


const FrameImage = styled.img`
  position: absolute;
  right: 5px;
  bottom: 5px;
  width: 125px;
  height: 110px;
  z-index: 2;
`;

const TextContainer = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const SenderText = styled.p`
  margin: 5px 0;
  color: #000;
  font-size: 12px;
  font-weight: bold;
`;

const TitleText = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #000;
`;

const DateText = styled.p`
  font-size: 10px;
  color: #000000;
  margin: 0;
`;
