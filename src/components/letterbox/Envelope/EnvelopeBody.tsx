import { EnvelopeContainer, EnvelopeImage, FrameImage, WaxSeal } from "./EnvelopeStyles";

interface EnvelopeBodyProps {
  isRead: boolean;
  sealColor?: string;
  onClick: () => void;
}

const EnvelopeBody = ({ isRead, sealColor, onClick }: EnvelopeBodyProps) => {
  return (
    <EnvelopeContainer onClick={onClick} isRead={isRead}>
      <EnvelopeImage
        src={isRead ? "/images/clickLetter.png" : "/images/envelope.png"}
        alt="편지 봉투"
        isRead={isRead}
      />
      {/* 닫혀 있는 편지에만 실링왁스 표시 */}
      {!isRead && sealColor && (
        <WaxSeal
          src={`/images/${sealColor}Wax.png`} 
          alt={`${sealColor} 실링왁스`}
        />
      )}
      {isRead && <FrameImage src="/images/Frame.png" alt="프레임 이미지" />}
    </EnvelopeContainer>
  );
};

export default EnvelopeBody;
