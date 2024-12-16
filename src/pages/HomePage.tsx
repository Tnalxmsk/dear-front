import styled from 'styled-components';
import Header from '../components/common/Header.tsx';

const HomePage = () => {
  return (
    <Container>
      <Header />
      <Inner>
        Test
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
  margin-top: 78px;
  font-size: 30px;
  width: 100vw;
  height: 723px;
  background-color: ${({ theme }) => theme.colors.black35};
`;
