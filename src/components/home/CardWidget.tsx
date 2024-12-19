import Card from './Card.tsx';
import * as S from './CardWidget.styles.ts';
import { useNavigate } from 'react-router-dom';

const CardWidget = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.CardContainer>
        <Card label="편지 쓰기" onClick={() => navigate('/letter-create')} url="/src/assets/pen.svg" />
        <Card label="우편함" onClick={() => navigate('/letterbox')} url="/src/assets/subtract.svg" />
        <Card label="둘러보기" onClick={() => console.log('둘러보기')} url="/src/assets/book.svg" />
      </S.CardContainer>
    </S.Container>
  );
};

export default CardWidget;

