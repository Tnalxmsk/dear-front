import styled from "styled-components";

const DetailContainer = styled.div<{ backgroundImage: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  width: 864px;
  padding: 64px;
  gap: 20px;
  border-radius: 10px;
  background: url(${(props) => props.backgroundImage}) no-repeat center;
  background-size: cover;
  position: relative;
  box-sizing: border-box;
  margin-bottom: 200px;

  height: auto;
`;


const SenderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 64px;
  margin-left: -480px;
`;


const ProfileImage = styled.div`
  width: 28px; 
  height: 28px; 
  background-color: #ccc;
  border-radius: 50%;
`;

const SenderLabel = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #333;
`;

const SenderName = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #000;
`;

const SenderEmail = styled.span`
  font-size: 0.9rem;
  color: #666;
`;

const LetterTitle = styled.h1`
  margin-top: 40px;
  font-size: 2.4rem;
  font-weight: bold;
  text-align: center;
  
  color: #000000;
  border-bottom: 1px solid #000000;
  padding-bottom: 30px;
  width: 30%;
`;
const QuoteContainer = styled.div`
  text-align: center;
  margin: 20px 0;
  width:461px;
  height: auto;
`;

const QuoteText = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  color: #555;
  margin-bottom: 10px;
`;

const QuoteAuthor = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #777;
`;

const ContentContainer = styled.div`
  flex: 1;
  width: 90%;
  margin: 2rem auto;
`;

const ContentText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #333;
  white-space: pre-line;
`;

const ImageFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem 0;
  width: 100%;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 300px;
  border-radius: 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
`;

const ImageCaption = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-top: 10px;
  text-align: center;
`;

const NavigationContainer = styled.div`
  position: absolute;
  bottom: -20px;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: -30px;
`;

const PrevButton = styled.button`
  position: absolute;
  left: -160px;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

const NextButton = styled.button`
  position: absolute;
  right: -160px;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

const ArrowButton = styled.span`
  width: 15px;
  height: 20px;
  display: inline-flex;
  font-size: 18px;
  font-weight: bold;
  color: #000;
  align-items: center;
  justify-content: center;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SenderText = styled.span`
  font-size: 12px;
  color: #000;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const TitleBracket = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #000;
`;

const TitleText = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #000;
`;

const SaveIcon = styled.img`
  position: absolute;
  right: 45px;
  top: 15px;
  width: 40px;
  height: 60px;
  cursor: pointer;
`;

const ErrorMessage = styled.div`
  text-align: center;
  margin-top: 3rem;
  font-size: 1.5rem;
  color: red;
`;

const FromSection = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 2rem;
  color: #333;
`;


const FromInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  margin-left: 400px;
  margin-bottom: 64px;
`;

const FromLabel = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #333;
`;

const VisibilityToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 20px;
  width: 100%;
`;

const VisibilityToggleText = styled.span`
  font-size: 1rem;
  color: #333;
  margin-right: 10px;
`;

const VisibilityToggle = styled.div<{ isOn: boolean }>`
  width: 70px; 
  height: 40px; 
  border-radius: 50px;
  background-color: ${({ isOn }) => (isOn ? "#ffd700" : "#e0e0e0")};
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s;

  &:before {
    content: "";
    position: absolute;
    top: 5px; 
    left: 5px;
    width: 30px; 
    height: 30px; 
    background: white;
    border-radius: 50%;
    transition: transform 0.3s;
    transform: ${({ isOn }) => (isOn ? "translateX(30px)" : "translateX(0)")};
  }
`;




const Styles = {
  DetailContainer,
  SenderInfo,
  ProfileImage,
  SenderLabel,
  SenderName,
  SenderEmail,
  LetterTitle,
  QuoteContainer,
  QuoteText,
  QuoteAuthor,
  ContentContainer,
  ContentText,
  ImageFrame,
  Image,
  ImageCaption,
  NavigationContainer,
  PrevButton,
  NextButton,
  ArrowButton,
  TextWrapper,
  SenderText,
  TitleWrapper,
  TitleBracket,
  TitleText,
  SaveIcon,
  ErrorMessage,
  FromSection,
  VisibilityToggle,
  FromInfo,
  FromLabel,
  VisibilityToggleWrapper,
  VisibilityToggleText,
  
};

export default Styles;
