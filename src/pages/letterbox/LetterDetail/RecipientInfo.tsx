import S from "./LetterDetail.styles";

interface RecipientInfoProps {
  recipient: string;
  recipientEmail: string;
}

const RecipientInfo = ({ recipient, recipientEmail }: RecipientInfoProps) => {
  return (
    <S.RecipientInfo>
      <S.RecipientLabel>From.</S.RecipientLabel>
      <S.ProfileImage />
      <S.RecipientName>{recipient}</S.RecipientName>
      <S.RecipientEmail>{recipientEmail}</S.RecipientEmail>
    </S.RecipientInfo>
  );
};

export default RecipientInfo;
