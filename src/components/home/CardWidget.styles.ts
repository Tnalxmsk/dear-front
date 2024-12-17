import styled, { css, keyframes } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 30px;
  width: 100vw;
  height: 723px;
  background-color: ${({ theme }) => theme.colors.black15};
  padding-top: 13vh;
`;

const Greeting = styled.div`
  font: ${({ theme }) => theme.fonts.heading_regular_32px};
  color: black;
`;

const CardContainer = styled.div`
  display: flex;
  margin-top: 86px;
  gap: 200px;
`;

const AnimatedContainer = styled.div<{ $isFading: boolean }>`
  ${({ $isFading }) =>
  $isFading
    ? css`
        animation: ${slideOut} 0.5s forwards;
      `
    : css`
        animation: ${slideIn} 0.5s forwards;
      `}
`;

const slideOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(100%);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export { Container, Greeting, CardContainer, AnimatedContainer };
