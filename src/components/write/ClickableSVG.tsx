import React from 'react';
import styled from 'styled-components';

const WritePage: React.FC = () => {
    return (
        <WritePageContainer style={{ backgroundImage: "url('/images/BG3-a.png')" }}>
            <Navigation>
                <NavButton>◀</NavButton>
                <StepIndicator>Step 4 of 5</StepIndicator>
                <NavButton>▶</NavButton>
            </Navigation>
            <EditorContainer contentEditable suppressContentEditableWarning>
                <Header>
                    <DearLabel>Dear,</DearLabel>
                    <RecipientName>Recipient's Name</RecipientName>
                </Header>
                <Title>기쁨</Title>
                <ContentArea>
                    <p>Write your letter here...</p>
                </ContentArea>
                <ImageUpload>
                    <ImagePlaceholder>이미지 업로드</ImagePlaceholder>
                </ImageUpload>
                <Footer>
                    <FromSection>
                        <FromLabel>From,</FromLabel>
                        <SenderName>Your Name</SenderName>
                    </FromSection>
                    <PublicToggle>
                        공개 여부 <input type="checkbox" />
                    </PublicToggle>
                </Footer>
            </EditorContainer>
            <CompleteButton>작성 완료</CompleteButton>
        </WritePageContainer>
    );
};

export default WritePage;

const WritePageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

const Navigation = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
`;

const NavButton = styled.button`
    font-size: 1.5rem;
    background: none;
    border: none;
    cursor: pointer;
`;

const StepIndicator = styled.div`
    font-size: 1rem;
    color: #666;
`;

const EditorContainer = styled.div`
    width: 90%;
    height: 80%;
    max-width: 1000px;
    max-height: 800px;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 1rem;
    line-height: 1.5;
    outline: none;
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const DearLabel = styled.div`
    font-size: 1.5rem;
    color: #333;
`;

const RecipientName = styled.div`
    font-size: 1.25rem;
    color: #555;
`;

const Title = styled.h2`
    font-size: 2rem;
    text-align: center;
    color: #333;
`;

const ContentArea = styled.div`
    flex: 1;
    width: 100%;
    min-height: 300px;
`;

const ImageUpload = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
    border: 1px dashed #ccc;
    padding: 1rem;
    border-radius: 4px;
    background-color: #f9f9f9;
`;

const ImagePlaceholder = styled.div`
    font-size: 1rem;
    color: #666;
`;

const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const FromSection = styled.div`
    display: flex;
    flex-direction: column;
`;

const FromLabel = styled.div`
    font-size: 1.5rem;
    color: #333;
`;

const SenderName = styled.div`
    font-size: 1.25rem;
    color: #555;
`;

const PublicToggle = styled.label`
    font-size: 1rem;
    color: #333;
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

const CompleteButton = styled.button`
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
`;
