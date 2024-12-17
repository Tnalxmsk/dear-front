import styled from 'styled-components';
import Header from '../../components/common/Header.tsx';
import CardWidget from '../../components/home/CardWidget.tsx';

const HomePage = () => {

  return (
    <Container>
      <Header />
        <CardWidget />
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
  padding-top: 13vh;
`;
