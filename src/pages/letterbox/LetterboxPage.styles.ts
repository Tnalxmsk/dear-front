import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const Inner = styled.div`
  flex: 1;
  width: 100%;
  background-image: url("/images/letterboxback.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: calc(100vh - 5rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  position: relative;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 80rem;
  margin-top: 4.375rem;
  margin-left: 6.25rem;

  @media (max-width: 48rem) {
    width: 100%;
    margin-left: 1.25rem;
    margin-top: 3.125rem;
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: bold;
  color: #000;
  margin: 0;

  @media (max-width: 48rem) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

const Circle = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: #d9d9d9;
  border-radius: 50%;
  margin-right: 0.9375rem;

  @media (max-width: 48rem) {
    width: 1.875rem;
    height: 1.875rem;
    margin-right: 0.625rem;
  }
`;

const SortToggleWrapper = styled.div`
  position: absolute; 
  top: 13.75rem;
  right: 21.875rem;
  display: flex;
  align-items: center;
  gap: 0.75rem; 

  @media (max-width: 48rem) {
    top: 7.5rem;
    right: 1.25rem;
  }
`;

const SortToggleText = styled.span`
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem;
  color: #000; 
`;

const SortToggleImage = styled.div<{ isOn: boolean }>`
  width: 3.5rem;
  height: 2rem;
  border-radius: 3.125rem;
  background-color: ${({ isOn }) => (isOn ? "#ffd700" : "#e0e0e0")};
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:before {
    content: "";
    position: absolute;
    top: 0.25rem;
    left: 0.25rem;
    width: 1.5rem;
    height: 1.5rem;
    background: white;
    border-radius: 50%;
    transition: transform 0.3s ease;
    transform: ${({ isOn }) => (isOn ? "translateX(1.5rem)" : "translateX(0)")};
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  width: 100%;
`;

const LetterDetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 80rem;
  margin: 2rem auto;
  background-color: white;
  border-radius: 0.3125rem;
  padding: 3.2rem;
  box-shadow: none;
`;

const S = {
  Container,
  Inner,
  TitleContainer,
  Title,
  Circle,
  SortToggleWrapper,
  SortToggleText,
  SortToggleImage,
  MainContent,
  LetterDetailContainer,
};

export default S;
