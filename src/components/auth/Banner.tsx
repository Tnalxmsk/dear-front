import styled from 'styled-components';

const Banner = () => {
  return (
    <TextContainer>
      <Title>Dearnote</Title>
      <Description>변하지 않을 단어로 엮을 당신의 이야기</Description>
    </TextContainer>
  );
};

export default Banner;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  padding: 20px;
  width: 400px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
`;

const Title = styled.p`
  font: ${({ theme }) => theme.fonts.heading_regular_40px}
  color: black;
  text-shadow: 0 0 1px #000, 0 0 1px #fff;
`;

const Description = styled.p`
  margin-top: 11px;
  font: ${({ theme }) => theme.fonts.heading_regular_22px};
  color: black;
  text-shadow: 0 0 1px #000, 0 0 1px #fff;
`;
