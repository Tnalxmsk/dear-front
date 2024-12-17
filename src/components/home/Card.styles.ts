import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 145px;
  height: 160px;
  gap: 20px;
  border: none;
  padding: 20px 30px 15px 30px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  background-color: white;
`;

const CardImage = styled.div`
  width: 85px;
  height: 85px;
  border-radius: 10px;
  border: none;
  background: ${({ theme }) => theme.colors.black100} url('/src/assets/letter.svg') no-repeat center;
`;

const Title = styled.div`
  text-align: center;
  font: ${({ theme }) => theme.fonts.paragraph_regular_14px};
  color: black;
`;

export { CardContainer, CardImage, Title };
