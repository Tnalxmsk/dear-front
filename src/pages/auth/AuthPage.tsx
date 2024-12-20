import styled from 'styled-components';
import Banner from '../../components/auth/Banner.tsx';
import NaverButton from '../../components/auth/NaverButton.tsx';

const AuthPage = () => {
  return (
    <Container>
      <Banner />
      <NaverButton />
    </Container>
  )
}

export default AuthPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url("/src/assets/bg-default.png");
  width: 100vw;
  height: 100vh;
  padding-top: 300px;
  gap: 30px;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
