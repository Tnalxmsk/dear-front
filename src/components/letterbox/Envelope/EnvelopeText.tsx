import { TextContainer, CombinedText, TitleText, DateText } from "./EnvelopeTextStyles";

interface EnvelopeTextProps {
  displayText: string;
  title: string;
  date: string;
}

const EnvelopeText = ({ displayText, title, date }: EnvelopeTextProps) => {
  return (
    <TextContainer>
      <CombinedText>
        <span>{displayText}</span> <TitleText>[ {title} ]</TitleText>
      </CombinedText>
      <DateText>{date}</DateText>
    </TextContainer>
  );
};

export default EnvelopeText;
