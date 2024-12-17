import styled from 'styled-components';
import Header from '../components/common/Header.tsx';
import Card from '../components/home/Card.tsx';

const HomePage = () => {

  const nickname = '콩';

  return (
    <Container>
      <Header />
      <Inner>
        <Greeting>{nickname}님 반갑습니다.</Greeting>
        <CardContainer>
          <Card label="편지쓰기" />
          <Card label="우편함" />
        </CardContainer>
      </Inner>
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100vh;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 78px;
  font-size: 30px;
  width: 100vw;
  gap: 86px;
  height: 723px;
  background-color: ${({ theme }) => theme.colors.black15};
  padding-top: 13vh;
`;

const Greeting = styled.div`
  font: ${({ theme }) => theme.fonts.heading_regular_32px};
  color: black;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 200px;
`;
