import styled from 'styled-components';
import CardWidget from '../../components/home/CardWidget.tsx';
import { useAuthStore } from '../../store/useAuthStore.ts';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const HomePage = () => {
  const { isLoggedIn } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/auth');
    }
  }, []);


  return (
    <Container>
      <Section style={{ backgroundImage: 'url("/src/assets/bg-home-bottom.png")' }}>
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

