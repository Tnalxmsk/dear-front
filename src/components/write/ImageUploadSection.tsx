import React from 'react';
import styled from 'styled-components';

interface ImageUploadSectionProps {
    imageUploaded: boolean;
    onUpload: () => void;
    imageDescription: string;
    onDescriptionChange: (value: string) => void;
}

const ImageUploadSection: React.FC<ImageUploadSectionProps> = ({
    imageUploaded,
    onUpload,
    imageDescription,
    onDescriptionChange,
}) => {
    return (
        <Section>
            {!imageUploaded ? (
                <UploadPrompt onClick={onUpload}>이미지 업로드</UploadPrompt>
            ) : (
                <UploadedMessage>
                    이미지를 업로드했습니다.
                    <DescriptionInput
                        placeholder="이미지 설명과 날짜를 입력하세요."
                        value={imageDescription || ''} 
                        onChange={(e) => onDescriptionChange(e.target.value)}
                    />
                </UploadedMessage>
            )}
        </Section>
    );
};

export default ImageUploadSection;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 200px;
    border: 2px dashed #aaa;
    padding: 1rem;
    color: #000;
`;

const UploadPrompt = styled.div`
    cursor: pointer;
    color: #000;
`;

const UploadedMessage = styled.div`
    color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const DescriptionInput = styled.input`
    margin-top: 1rem;
    padding: 0.5rem;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    color: #000;
`;