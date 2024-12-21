import S from "./LetterDetail.styles";

interface VisibilityToggleProps {
  isPublic: boolean;
  onToggle: () => void;
}

const VisibilityToggle = ({ isPublic, onToggle }: VisibilityToggleProps) => {
  return (
    <S.VisibilityToggleWrapper>
      <S.VisibilityToggleText>공개 여부</S.VisibilityToggleText>
      <S.VisibilityToggle isOn={isPublic} onClick={onToggle} />
    </S.VisibilityToggleWrapper>
  );
};

export default VisibilityToggle;
