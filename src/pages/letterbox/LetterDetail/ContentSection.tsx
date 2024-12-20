import React from "react";
import S from "./LetterDetail.styles";

interface ContentSectionProps {
  content: string;
  image?: string;
  title: string;
}

const ContentSection = ({ content, image, title }: ContentSectionProps) => {
  // 본문 내용을 문단 단위로 나누기
  const contentParts = content.split("\n\n");

  // 이미지 삽입 위치를 하단 3/4 지점으로 설정
  const insertionIndex = Math.floor(contentParts.length * 0.75);

  return (
    <S.ContentContainer>
      {contentParts.map((part, index) => (
        <React.Fragment key={index}>
          {/* 본문 내용 출력 */}
          <S.ContentText>{part}</S.ContentText>

          {/* 설정된 위치에 이미지 삽입 */}
          {index === insertionIndex && image && (
            <S.ImageFrame>
              <S.Image src={image} alt="편지 이미지" />
              <S.ImageCaption>{`이미지에 대한 설명, ${title}`}</S.ImageCaption>
            </S.ImageFrame>
          )}
        </React.Fragment>
      ))}
    </S.ContentContainer>
  );
};

export default ContentSection;
