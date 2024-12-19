import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LetterHeader from '../../components/write/LetterHeader';
import EditableContentArea from '../../components/write/EditableContentArea';
import Footer from '../../components/write/Footer';
import ImageUploadSection from '../../components/write/ImageUploadSection';

const WritePage: React.FC = () => {
    const navigate = useNavigate();
    const [recipient, setRecipient] = useState<string | null>('Recipient Name');
    const [imageUploaded, setImageUploaded] = useState<boolean>(false);
    const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
    const [isPublic, setIsPublic] = useState<boolean>(false);

    const handleInsertImage = (imageUrl: string) => {
        const editableArea = document.querySelector('[contenteditable="true"]');
        if (editableArea) {
            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = 'Uploaded Image';
            img.style.maxWidth = '80%';
            img.style.margin = '10px auto';
            img.style.display = 'block';
            editableArea.appendChild(img);
            setUploadedImageUrl(imageUrl); // 업로드된 이미지 URL 저장
            setImageUploaded(true); // 이미지 업로드 상태를 true로 설정
        }
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                if (event.target?.result) {
                    handleInsertImage(event.target.result as string);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleComplete = () => {
        if (!imageUploaded) {
            alert('이미지를 넣어야 편지 작성이 완료됩니다!');
        } else {
            navigate('/sealing-wax');
        }
    };

    return (
        <WritePageContainer>
            <LetterContainer>
                <LetterHeader
                    recipient={recipient}
                    isSelfWriting={false}
                    isRegistered={true}
                />
                <br/>
                <ContentSection>
                    <EditableContentArea />
                    {/* 업로드된 이미지가 없을 때만 ImageUploadSection 표시 */}
                    {!imageUploaded && (
                        <ImageUploadSection onInsertImage={handleInsertImage} />
                    )}
                    {/* 업로드된 이미지가 있으면 이미지를 표시 */}
                    {uploadedImageUrl && <UploadedImage src={uploadedImageUrl} alt="Uploaded" />}
                    <EditableContentArea />
                </ContentSection>

                <Footer
                    senderName="Kai"
                    isPublic={isPublic}
                    onPublicChange={setIsPublic}
                />
            </LetterContainer>

            <CompleteButtonWrapper>
                <CompleteButton onClick={handleComplete} />
            </CompleteButtonWrapper>
        </WritePageContainer>
    );
};

export default WritePage;

const WritePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: 100vh; /* 최소 높이를 설정 */
    width: 100%;
    background: url('/images/BG3.png') no-repeat center center;
    background-size: cover;
    overflow-y: auto; /* 내용이 길어지면 스크롤 가능 */
    padding: 2rem 0;
`;

const LetterContainer = styled.div`
    width: 70%;
    max-width: 800px;
    background: url('/images/Letter paper=2.png') no-repeat center top;
    background-size: cover;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    margin-bottom: 2rem; /* 여백 추가 */
`;

const ContentSection = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow-y: auto;
    padding: 1rem;
    background: transparent; /* 배경 투명 */
    border: 1px dashed #ccc; /* 가이드 라인 */
    border-radius: 8px;
`;

const CompleteButtonWrapper = styled.div`
    position: relative;
    display: inline-block;
`;

const CompleteButton = styled.button`
    width: 100px; /* 버튼 너비 */
    height: 100px; /* 버튼 높이 */
    background: url('/images/completebutton/Property 1=Action.png');
    border: none;
    cursor: pointer;
`;

const UploadedImage = styled.img`
    max-width: 100%;
    margin: 10px auto;
    display: block;
    border-radius: 8px;
`;