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
  margin-top: 80px;
  background-image: url("/images/letterboxback.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: calc(100vh - 80px);
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
  width: 1280px;
  margin-top: 70px;
  margin-left: 100px;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 20px;
    margin-top: 50px;
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: bold;
  color: #000;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

const Circle = styled.div`
  width: 40px;
  height: 40px;
  background-color: #d9d9d9;
  border-radius: 50%;
  margin-right: 15px;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
`;

const SortToggleWrapper = styled.div`
  position: absolute; 
  top: 220px;
  right: 350px;
  display: flex;
  align-items: center;
  gap: 12px; 

  @media (max-width: 768px) {
    top: 120px;
    right: 20px;
  }
`;

const SortToggleText = styled.span`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: #000; 
`;

const SortToggleImage = styled.div<{ isOn: boolean }>`
  width: 56px;
  height: 32px;
  border-radius: 50px;
  background-color: ${({ isOn }) => (isOn ? "#ffd700" : "#e0e0e0")};
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:before {
    content: "";
    position: absolute;
    top: 4px;
    left: 4px;
    width: 24px;
    height: 24px;
    background: white;
    border-radius: 50%;
    transition: transform 0.3s ease;
    transform: ${({ isOn }) => (isOn ? "translateX(24px)" : "translateX(0)")};
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
  max-width: 1280px;
  margin: 2rem auto;
  background-color: white;
  border-radius: 5px;
  padding: 51.2px;
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
