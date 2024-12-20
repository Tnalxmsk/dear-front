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
  width: 13.25rem;
  height: 13.8125rem;
  margin: 3.125rem auto 0;
  position: relative;
  cursor: pointer;
`;

const EnvelopeContainer = styled.div<{ isRead: boolean }>`
  position: relative;
  width: 100%;
  height: ${({ isRead }) => (isRead ? "13.8125rem" : "9.125rem")};
  transition: height 0.3s ease-in-out;
`;

const SaveIcon = styled.img<{ isRead: boolean }>`
  position: absolute;
  top: ${({ isRead }) => (isRead ? "0rem" : "2.1875rem")};
  right: 0.625rem;
  width: 1.25rem;
  height: 1.875rem;
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
  margin-top: 0.625rem;
  line-height: 1.4;
`;

const CombinedText = styled.div`
  font-size: 0.75rem;
  color: #000;
  display: flex;
  justify-content: center;
  gap: 0.3125rem;
`;

const TitleText = styled.span`
  font-size: 0.75rem;
  font-weight: bold;
`;

const DateText = styled.p`
  font-size: 0.625rem;
  color: #000000;
  margin: 0;
`;

const FrameImage = styled.img`
  position: absolute;
  bottom: 0.3125rem;
  right: 0.3125rem;
  width: 7.8125rem;
  height: 6.875rem;
  z-index: 2;
`;

