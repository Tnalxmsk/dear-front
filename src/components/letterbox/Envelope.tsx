import styled from "styled-components";

interface EnvelopeProps {
  id: number;
  title: string;
  sender: string;
  recipient: string;
  date: string;
  onClick: (id: number) => void;
  onSave: (id: number) => void;
  isSaved: boolean;
  isRead: boolean;
  activeTab: string;
  nickname: string;
}

const Envelope = ({
  id,
  title,
  sender,
  recipient,
  date,
  onClick,
  onSave,
  isSaved,
  isRead,
  activeTab,
  nickname,
}: EnvelopeProps) => {
  const handleEnvelopeClick = () => {
    onClick(id);
  };

  const handleSaveClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSave(id);
  };

  const displayText =
    (activeTab === "received" && sender !== recipient)
      ? `From. ${sender}` 
      : (activeTab === "sent" && sender !== recipient)
      ? `Dear. ${recipient}`
      : sender === nickname && recipient === nickname
      ? ""
      : sender === nickname
      ? `Dear. ${recipient}`
      : `From. ${sender}`;

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
        <CombinedText>
          <span>{displayText}</span> <TitleText>[ {title} ]</TitleText>
        </CombinedText>
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
  margin: 30px auto 0; 
  position: relative;
  cursor: pointer;
`;


const EnvelopeContainer = styled.div<{ isRead: boolean }>`
  position: relative;
  width: 100%;
  height: ${({ isRead }) => (isRead ? "221px" : "146px")};
  transition: height 0.3s ease-in-out;
`;

const SaveIcon = styled.img<{ isRead: boolean }>`
  position: absolute;
  top: ${({ isRead }) => (isRead ? "0px" : "35px")};
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
  line-height: 1.4;
`;

const CombinedText = styled.div`
  font-size: 12px;
  color: #000;
  display: flex;
  justify-content: center;
  gap: 5px;
`;

const TitleText = styled.span`
  font-size: 12px;
  font-weight: bold;
`;

const DateText = styled.p`
  font-size: 10px;
  color: #000000;
  margin: 0;
`;

const FrameImage = styled.img`
  position: absolute;
  bottom: 5px;
  right: 5px;
  width: 125px;
  height: 110px;
  z-index: 2;
`;
