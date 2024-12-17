import * as S from './Card.styles.ts';

interface CardProps {
  label: string;
  onClick: () => void;
}

const Card = ({ label, onClick }: CardProps) => {
  return (
    <S.CardContainer onClick={onClick}>
      <S.CardImage />
      <S.Title>{label}</S.Title>
    </S.CardContainer>
  );
};

export default Card;
