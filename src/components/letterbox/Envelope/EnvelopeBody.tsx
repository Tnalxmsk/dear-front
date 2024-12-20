import { EnvelopeContainer, EnvelopeImage, FrameImage, WaxSeal, InnerImage } from "./EnvelopeStyles";

interface EnvelopeBodyProps {
  isRead: boolean;
  sealColor?: string;
  onClick: () => void;
  image?: string; // 추가된 이미지
}

const EnvelopeBody = ({ isRead, sealColor, onClick, image }: EnvelopeBodyProps) => {
  return (
    <EnvelopeContainer onClick={onClick} isRead={isRead}>
      <EnvelopeImage
        src={isRead ? "/images/clickLetter.png" : "/images/envelope.png"}
        alt="편지 봉투"
        isRead={isRead}
      />

      {!isRead && sealColor && (
        <WaxSeal
          src={`/images/${sealColor}Wax.png`}
          alt={`${sealColor} 실링왁스`}
        />
      )}
      {isRead && (
        <FrameImage>
          {image && <InnerImage src={image} alt="사진 이미지" />}
        </FrameImage>
      )}
    </EnvelopeContainer>
  );
};

export default EnvelopeBody;
