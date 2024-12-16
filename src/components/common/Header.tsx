import styled from 'styled-components';
import { Link } from 'react-router';

const Header = () => {
  return (
    <Wrapper>
      <Link to={'/'}>
        <Card>Dearnote</Card></Link>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  position: fixed;
  top: 60px;
  left: 61px;
`;

const Card = styled.div`
  border: none;
  border-radius: 30px;
  font-size: 20px;
  background-color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  padding: 10px 20px;
`;
