import Card from './Card.tsx';
import { useState } from 'react';
import { HomeContents } from '../../types/home/home.ts';
import * as S from './CardWidget.styles.ts';

const CardWidget = () => {
  const nickname = '콩';
  const [isFading, setIsFading] = useState(false);
  const [homeContents, setHomeContents] = useState<HomeContents>({
    greeting: `${nickname}님 반갑습니다.`,
    leftCardLabel: '편지쓰기',
    rightCardLabel: '우편함',
    type: 'home',
  });

  const handleCardClick = (greetingMessage: string, leftLabel: string, rightLabel: string, type: 'home' | 'select') => {
    setIsFading(true);
    setTimeout(() => {
      setHomeContents({
        greeting: greetingMessage,
        leftCardLabel: leftLabel,
        rightCardLabel: rightLabel,
        type: type,
      });
      setIsFading(false);
    }, 500);
  };

  return (
    <S.Container>
      <S.AnimatedContainer $isFading={isFading}>
        <S.Greeting>{homeContents.greeting}</S.Greeting>
        <S.CardContainer>
          <Card label={homeContents.leftCardLabel} onClick={() =>
            handleCardClick('어떤 종류의 편지를 작성하시나요', '나에게', '상대에게', 'select')}
          />
          <Card
            label={homeContents.rightCardLabel} onClick={() => {
          }} />
        </S.CardContainer>
      </S.AnimatedContainer>
      {homeContents.type === 'select' ?
        <button
          onClick={() => handleCardClick(`${nickname}님 반갑습니다.`, '편지쓰기', '우편함', 'home')}
        >
          back
        </button>
        : null
      }
    </S.Container>
  );
};

export default CardWidget;

