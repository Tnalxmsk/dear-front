import styled from 'styled-components';
import { Link } from 'react-router';

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Circle />
        <Link to={'/'}>
          <Card>Dearnote</Card>
        </Link>
      </Content>
      <img src={'/src/assets/hamburger.svg'} alt={'햄버거'} />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: space-between;
  background-color: white;
  padding: 0 30px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 20px 0;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.black15};
`;

const Card = styled.div`
  border: none;
  border-radius: 30px;
  font: ${({ theme }) => theme.fonts.heading_regular_22px};
  color: black;
`;
