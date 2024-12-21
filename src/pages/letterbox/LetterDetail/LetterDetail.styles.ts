import styled from "styled-components";


export const DetailContainer = styled.div<{ backgroundImage: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 54rem;
  padding: 4rem;
  gap: 1.25rem;
  border-radius: 0.625rem;
  background: url(${(props) => props.backgroundImage}) no-repeat center;
  background-size: cover;
  position: relative;
  box-sizing: border-box;
  margin-bottom: 12.5rem;
  height: auto;
`;

const SenderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  margin-top: 4rem;
  margin-left: -30rem;
`;

const ProfileImage = styled.div`
  width: 1.75rem;
  height: 1.75rem;
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
  margin-top: 2.5rem;
  font-size: 2.4rem;
  font-weight: bold;
  text-align: center;
  color: #000000;
  border-bottom: 1px solid #000000;
  padding-bottom: 1.875rem;
  width: 30%;
`;

const QuoteContainer = styled.div`
  text-align: center;
  margin: 1.25rem 0;
  width: 28.8125rem;
  height: auto;
`;

const QuoteText = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  color: #555;
  margin-bottom: 0.625rem;
`;

const QuoteAuthor = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #777;
`;


export const ContentContainer = styled.div`
  flex: 1;
  width: 90%;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #333;
  margin-bottom: 1.5rem;
  white-space: pre-line;
  text-align: justify;
`;

export const ImageFrame = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3rem 0;
  width: 500px; /* 프레임 크기 고정 */
  height: 479px;
`;

export const Image = styled.img`
  position: relative; /* 프레임 위에 이미지 표시 */
  margin-right: 20px;
  z-index: 2; /* 프레임보다 위에 표시 */
  width: 400px; /* 프레임 크기에 맞게 조정 */
  height: 335px; /* 프레임 크기에 맞게 조정 */
  object-fit: cover; /* 이미지 비율 유지 */
  margin-top: 1.2rem;
`;

export const ImageCaption = styled.div`
  width: 80%; /* 설명 너비를 프레임 크기에 맞춤 */
  text-align: right; /* 오른쪽 정렬 */
  padding: 1.2rem 1rem;
  border-radius: 5px;
  font-size: 0.9rem;
  color: #666;
  z-index: 3; /* 이미지 위에 표시 */
  line-height: 1.4;

  
`;


export const FrameImage = styled.img`
  position: absolute; /* 프레임을 고정 위치에 배치 */
  top: 0;
  left: 0;
  width: 100%; /* 프레임의 너비 */
  height: 100%; /* 프레임의 높이 */
  z-index: 1; /* 프레임이 이미지 아래로 표시되도록 설정 */
`;
const NavigationContainer = styled.div`
  position: absolute;
  bottom: -1.25rem;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: -1.875rem;
`;

const PrevButton = styled.button`
  position: absolute;
  left: -10rem;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

const NextButton = styled.button`
  position: absolute;
  right: -10rem;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

const ArrowButton = styled.span`
  width: 0.9375rem;
  height: 1.25rem;
  display: inline-flex;
  font-size: 1.125rem;
  font-weight: bold;
  color: #000;
  align-items: center;
  justify-content: center;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SenderText = styled.span`
  font-size: 0.75rem;
  color: #000;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const TitleBracket = styled.span`
  font-size: 0.875rem;
  font-weight: bold;
  color: #000;
`;

const TitleText = styled.span`
  font-size: 0.875rem;
  font-weight: bold;
  color: #000;
`;

const SaveIcon = styled.img`
  position: absolute;
  right: 2.8125rem;
  top: 0.9375rem;
  width: 2.5rem;
  height: 3.75rem;
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
  gap: 0.625rem;
  margin-left: 25rem;
  margin-bottom: 4rem;
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
  margin-top: 1.25rem;
  width: 100%;
`;

const VisibilityToggleText = styled.span`
  font-size: 1rem;
  color: #333;
  margin-right: 0.625rem;
`;

const VisibilityToggle = styled.div<{ isOn: boolean }>`
  width: 4.375rem;
  height: 2.5rem;
  border-radius: 3.125rem;
  background-color: ${({ isOn }) => (isOn ? "#ffd700" : "#e0e0e0")};
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s;

  &:before {
    content: "";
    position: absolute;
    top: 0.3125rem;
    left: 0.3125rem;
    width: 1.875rem;
    height: 1.875rem;
    background: white;
    border-radius: 50%;
    transition: transform 0.3s;
    transform: ${({ isOn }) => (isOn ? "translateX(1.875rem)" : "translateX(0)")};
  }
`;
const RecipientInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end; /* 오른쪽 정렬 */
  gap: 0.625rem;
  margin-top: 2rem;
  margin-left: 22rem; /* 오른쪽 여백 추가 */
`;

const RecipientLabel = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #333;
`;

const RecipientName = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #000;
`;

const RecipientEmail = styled.span`
  font-size: 0.9rem;
  color: #666;
`;

const ImageCaptionText = styled.div`
  font-size: 1rem;
  margin-bottom: 0.3rem;
  color: #000000;
  font-weight: bold; /* 강조 스타일 추가 */
`;

const ImageCaptionDate = styled.div`
  font-size: 0.8rem;
  color: #999;
  font-style: italic; /* 이탤릭 스타일 추가 */
  text-align: right; /* 날짜를 오른쪽 정렬 */
  margin-top: 0.2rem;
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
  RecipientInfo,
  RecipientLabel,
  RecipientName,
  RecipientEmail,
  FrameImage,
  ImageCaptionText,
  ImageCaptionDate,
  

};

export default Styles; 