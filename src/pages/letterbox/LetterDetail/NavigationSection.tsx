import S from "./LetterDetail.styles";

interface NavigationSectionProps {
  onPrev: () => void;
  onNext: () => void;
  currentId: number;
  letters: any[];
}

const NavigationSection = ({ onPrev, onNext, currentId, letters }: NavigationSectionProps) => {
  const prevLetter = letters.find((item) => item.id === currentId - 1);
  const nextLetter = letters.find((item) => item.id === currentId + 1);

  return (
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
  );
};

export default NavigationSection;
