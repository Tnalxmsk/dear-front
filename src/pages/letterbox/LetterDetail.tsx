import { useState } from "react";
import S from "./LetterDetail.styles";
import { lettersData } from "../../../mock/lettersData";

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

  const toggleVisibility = () => {
    setIsPublic((prev) => !prev);
  };

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
  } = letter;

  const backgroundImage = `/images/${getPaperFileName(paperType)}`;

  const prevLetter = lettersData.find((item) => item.id === id - 1);
  const nextLetter = lettersData.find((item) => item.id === id + 1);

  return (
    <S.DetailContainer backgroundImage={backgroundImage}>
      <S.SaveIcon
        src={isSaved ? "/images/saved2.png" : "/images/saved.png"}
        alt="save icon"
        onClick={() => onSaveToggle(id)}
      />

      
      <S.SenderInfo>
        <S.SenderLabel>Dear.</S.SenderLabel>
        <S.ProfileImage />
        <S.SenderName>{sender}</S.SenderName>
        <S.SenderEmail>{senderEmail}</S.SenderEmail>
      </S.SenderInfo>

      <S.LetterTitle>{`${title}`}</S.LetterTitle>

      <S.QuoteContainer>
        <S.QuoteText>{quote}</S.QuoteText>
        <S.QuoteAuthor>{quoteSource}</S.QuoteAuthor>
      </S.QuoteContainer>

      <S.ContentContainer>
        <S.ContentText>
          {content.split("\n\n")[0]}
        </S.ContentText>

        {image && (
          <S.ImageFrame>
            <S.Image src={image} alt="편지 이미지" />
            <S.ImageCaption>
              {`이미지에 대한 간략한 설명, ${title} `}
              <p />
              {`${new Date().toLocaleDateString("ko-KR")}`}
            </S.ImageCaption>
          </S.ImageFrame>
        )}

        <S.ContentText>
          {content.split("\n\n")[1] || ""}
        </S.ContentText>
      </S.ContentContainer>

      <S.FromInfo>
        <S.FromLabel>From.</S.FromLabel>
        <S.ProfileImage />
        <S.SenderName>{recipient}</S.SenderName>
        <S.SenderEmail>{recipientEmail}</S.SenderEmail>
      </S.FromInfo>

      <S.VisibilityToggleWrapper>
        <S.VisibilityToggleText>공개 여부</S.VisibilityToggleText>
        <S.VisibilityToggle isOn={isPublic} onClick={toggleVisibility} />
      </S.VisibilityToggleWrapper>

      <S.NavigationContainer>
        <S.PrevButton onClick={onPrev}>
          {prevLetter && (
            <>
              <S.ArrowButton>{"<"}</S.ArrowButton>
              <S.TextWrapper>
                <S.SenderText>From. {prevLetter.sender}</S.SenderText>
                <S.TitleWrapper>
                  <S.TitleBracket>[</S.TitleBracket>
                  <S.TitleText>{prevLetter.title}</S.TitleText>
                  <S.TitleBracket>]</S.TitleBracket>
                </S.TitleWrapper>
              </S.TextWrapper>
            </>
          )}
        </S.PrevButton>
        <S.NextButton onClick={onNext}>
          {nextLetter && (
            <>
              <S.TextWrapper>
                <S.SenderText>From. {nextLetter.sender}</S.SenderText>
                <S.TitleWrapper>
                  <S.TitleBracket>[</S.TitleBracket>
                  <S.TitleText>{nextLetter.title}</S.TitleText>
                  <S.TitleBracket>]</S.TitleBracket>
                </S.TitleWrapper>
              </S.TextWrapper>
              <S.ArrowButton>{">"}</S.ArrowButton>
            </>
          )}
        </S.NextButton>
      </S.NavigationContainer>
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