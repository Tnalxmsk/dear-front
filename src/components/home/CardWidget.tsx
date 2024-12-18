import Card from './Card.tsx';
import * as S from './CardWidget.styles.ts';

const CardWidget = () => {
  //const navigate = useNavigate();

  const handleCardClick = () => {
  };
  return (
    <S.Container>
      <S.CardContainer>
        <Card label="편지 쓰기" onClick={handleCardClick} url="/src/assets/pen.svg" />
        <Card label="우편함" onClick={() => console.log('우편함')} url="/src/assets/subtract.svg" />
        <Card label="둘러보기" onClick={() => console.log('둘러보기')} url="/src/assets/book.svg" />
      </S.CardContainer>
    </S.Container>
  );
};

export default CardWidget;

