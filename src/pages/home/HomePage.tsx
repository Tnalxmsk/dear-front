import styled from 'styled-components';
import CardWidget from '../../components/home/CardWidget.tsx';

const HomePage = () => {
  return (
    <Container>
      <Section style={{ backgroundImage: 'url("/src/assets/home-background.png")' }}>
      </Section>
      <Section style={{ backgroundImage: 'url("/src/assets/home-background-bottom.png")' }}>
        <CardWidget />
      </Section>
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  margin: 0;
  padding: 0;
`;

const Section = styled.div`
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

