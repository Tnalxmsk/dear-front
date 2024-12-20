import S from "./LetterDetail.styles";

interface QuoteSectionProps {
  quote: string;
  quoteSource: string;
}

const QuoteSection = ({ quote, quoteSource }: QuoteSectionProps) => {
  return (
    <S.QuoteContainer>
      <S.QuoteText>{quote}</S.QuoteText>
      <S.QuoteAuthor>{quoteSource}</S.QuoteAuthor>
    </S.QuoteContainer>
  );
};

export default QuoteSection;
