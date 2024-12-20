import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  width: 200px;
  height: 200px;
  border: 1px solid ${({ theme }) => theme.colors.black};
`;

const CardImage = styled.div`
  margin-top: 10px;
  width: 170px;
  height: 170px;
  border: none;
  background-size: auto; /* 이미지 크기에 맞게 */
  background-position: center; /* 중앙 기준 */
  background-repeat: no-repeat; /* 반복 방지 */
`;

const Title = styled.div`
  margin-bottom: 10px;
  text-align: center;
  font: ${({ theme }) => theme.fonts.heading_regular_22px};
  color: ${({ theme }) => theme.colors.black};
`;

export { CardContainer, CardImage, Title };
