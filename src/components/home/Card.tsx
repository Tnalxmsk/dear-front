import * as S from './Card.styles.ts';

interface CardProps {
  label: string;
  onClick: () => void;
  url: string;
}

const Card = ({ label, onClick, url }: CardProps) => {
  return (
    <S.CardContainer onClick={onClick}>
      <S.CardImage style={{ backgroundImage: `url(${url})` }} />
      <S.Title>{label}</S.Title>
    </S.CardContainer>
  );
};

export default Card;
