import S from "./LetterDetail.styles";

interface SenderInfoProps {
  sender: string;
  senderEmail: string;
}

const SenderInfo = ({ sender, senderEmail }: SenderInfoProps) => {
  return (
    <S.SenderInfo>
      <S.SenderLabel>Dear.</S.SenderLabel>
      <S.ProfileImage />
      <S.SenderName>{sender}</S.SenderName>
      <S.SenderEmail>{senderEmail}</S.SenderEmail>
    </S.SenderInfo>
  );
};

export default SenderInfo;
