import { useState } from "react";
import S from "./LetterDetail.styles";
import { lettersData } from "../../../../mock/lettersData";
import SenderInfo from "./SenderInfo";
import RecipientInfo from "./RecipientInfo";
import QuoteSection from "./QuoteSection";
import ContentSection from "./ContentSection";
import NavigationSection from "./NavigationSection";
import VisibilityToggle from "./VisibilityToggle";

interface LetterDetailProps {
  id: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSaveToggle: (id: number) => void;
  isSaved: boolean;
}

const LetterDetail = ({ id, onPrev, onNext, onSaveToggle, isSaved }: LetterDetailProps) => {
  const [isPublic, setIsPublic] = useState(false);

  const toggleVisibility = () => setIsPublic((prev) => !prev);

  const letter = lettersData.find((item) => item.id === id);

  if (!letter) {
    return <S.ErrorMessage>해당 편지를 찾을 수 없습니다.</S.ErrorMessage>;
  }

  const {
    title,
    content,
    paperType,
    sender,
    senderEmail,
    recipient,
    recipientEmail,
    quote,
    quoteSource,
    image,
    caption,
    date,
  } = letter;

  const backgroundImage = `/images/${getPaperFileName(paperType)}`;

  return (
    <S.DetailContainer backgroundImage={backgroundImage}>
      <S.SaveIcon
        src={isSaved ? "/images/saved2.png" : "/images/saved.png"}
        alt="save icon"
        onClick={() => onSaveToggle(id)}
      />

      {/* 송신자 정보 */}
      <SenderInfo sender={sender} senderEmail={senderEmail} />

      <S.LetterTitle>{title}</S.LetterTitle>

      {/* 인용구 */}
      <QuoteSection quote={quote} quoteSource={quoteSource} />

      {/* 편지 본문 */}
      <ContentSection content={content} image={image} caption={caption} date={date} />

      {/* 수신자 정보 */}
      <RecipientInfo recipient={recipient} recipientEmail={recipientEmail} />

      {/* 공개 여부 */}
      <VisibilityToggle isPublic={isPublic} onToggle={toggleVisibility} />

      {/* 이전/다음 내비게이션 */}
      <NavigationSection
        onPrev={onPrev}
        onNext={onNext}
        currentId={id}
        letters={lettersData}
      />
    </S.DetailContainer>
  );
};

export default LetterDetail;

const getPaperFileName = (type: string) => {
  switch (type) {
    case "흰색":
      return "whitePaper.png";
    case "크래프트":
      return "kraftPaper.png";
    case "무지":
      return "plainPaper.png";
    case "모눈":
      return "gridPaper.png";
    default:
      return "whitePaper.png";
  }
};
