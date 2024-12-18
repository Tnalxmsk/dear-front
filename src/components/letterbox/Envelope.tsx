import styled from "styled-components";

interface EnvelopeProps {
  id: number;
  title: string;
  sender: string;
  date: string;
  onClick: (id: number) => void;
  onSave: (id: number) => void;
  isSaved: boolean;
  isRead: boolean;
}

const Envelope = ({ id, title, sender, date, onClick, onSave, isSaved, isRead }: EnvelopeProps) => {
  const handleEnvelopeClick = () => {
    onClick(id);
  };

  const handleSaveClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSave(id);
  };

  return (
    <EnvelopeWrapper>
      <EnvelopeContainer onClick={handleEnvelopeClick} isRead={isRead}>
        <EnvelopeImage
          src={isRead ? "/images/clickLetter.png" : "/images/envelope.png"}
          alt="편지 봉투"
          isRead={isRead}
        />
        {isRead && <FrameImage src="/images/Frame.png" alt="프레임 이미지" />}
      </EnvelopeContainer>
      <SaveIcon
        src={isSaved ? "/images/saved2.png" : "/images/saved.png"}
        alt="즐겨찾기 아이콘"
        onClick={handleSaveClick}
        isRead={isRead}
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
`;

const EnvelopeContainer = styled.div<{ isRead: boolean }>`
  position: relative;
  width: 100%;
  height: ${({ isRead }) => (isRead ? "221px" : "146px")};
  transition: height 0.3s ease-in-out;
`;

const SaveIcon = styled.img<{ isRead: boolean }>`
  position: absolute;
  top: ${({ isRead }) => (isRead ? "-2px" : "30px")};
  right: 10px;
  width: 20px;
  height: 30px;
  cursor: pointer;
  z-index: 2;
`;

const EnvelopeImage = styled.img<{ isRead: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease-in-out;
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
const FrameImage = styled.img`
  position: absolute;
  bottom: 5px; /* 봉투 하단에서 5px */
  right: 5px; /* 봉투 오른쪽에서 5px */
  width: 125px; /* Frame 이미지 너비 */
  height: 110px; /* Frame 이미지 높이 */
  z-index: 2; /* 다른 요소 위에 표시되도록 설정 */
`;