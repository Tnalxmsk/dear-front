import S from "./LetterDetail.styles";

interface ContentSectionProps {
  content: string;
  image?: string;
  caption: string;
  date: string; // date 추가
}

const ContentSection = ({ content, image, caption, date }: ContentSectionProps) => {
  // 본문을 문단 단위로 나누기
  const contentParts = content.split("\n\n");
  const splitIndex = Math.floor(contentParts.length / 2);

  const upperContent = contentParts.slice(0, splitIndex).join("\n\n");
  const lowerContent = contentParts.slice(splitIndex).join("\n\n");

  return (
    <S.ContentContainer>
      {/* 상단 본문 */}
      <S.ContentText>{upperContent}</S.ContentText>

      {/* 이미지 삽입 */}
      {image && (
        <S.ImageFrame>
          <S.FrameImage src="/images/frameL.png" alt="이미지 프레임" />
          <S.Image src={image} alt="편지 이미지" />
          <S.ImageCaption>
            <S.ImageCaptionText>{caption}</S.ImageCaptionText>
            <S.ImageCaptionDate>{date}</S.ImageCaptionDate>
          </S.ImageCaption>
        </S.ImageFrame>
      )}

      {/* 하단 본문 */}
      <S.ContentText>{lowerContent}</S.ContentText>
    </S.ContentContainer>
  );
};

export default ContentSection;
