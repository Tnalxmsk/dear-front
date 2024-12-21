import React, { useState } from 'react';
import styled from 'styled-components';

interface ImageUploadSectionProps {
    onInsertImage: (imageUrl: string) => void;
}

const ImageUploadSection: React.FC<ImageUploadSectionProps> = ({ onInsertImage }) => {
    const [dragOver, setDragOver] = useState(false);
    const [isImageUploaded, setIsImageUploaded] = useState(false); // Prevent re-upload

    const handleFileUpload = (file: File) => {
    if (isImageUploaded) return; // Skip if already uploaded
    const reader = new FileReader();
    reader.onload = (e) => {
        const result = e.target?.result;
        if (typeof result === 'string' && !isImageUploaded) { // Check again before calling
            onInsertImage(result);
            setIsImageUploaded(true); // Mark as uploaded
        }
    };
    reader.readAsDataURL(file);
};

    const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            handleFileUpload(file);
        }
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragOver(false);
        const file = e.dataTransfer.files?.[0];
        if (file) {
            handleFileUpload(file);
        }
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragOver(true);
    };

    const handleDragLeave = () => {
        setDragOver(false);
    };

    return (
        <Section
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onDragLeave={handleDragLeave}
            dragOver={dragOver}
        >
            <UploadLabel htmlFor="image-upload">이미지 업로드</UploadLabel>
            <Input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleFileInputChange}
            />
            {dragOver && <Overlay>이미지를 여기에 놓으세요!</Overlay>}
        </Section>
    );
};

export default ImageUploadSection;

const Section = styled.div<{ dragOver: boolean }>`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px dashed ${({ dragOver }) => (dragOver ? '#007bff' : '#aaa')};
    height: 200px;
    padding: 1rem;
    color: #000;
    margin: 1rem 0;
`;

const UploadLabel = styled.label`
    cursor: pointer;
    color: #007bff;
    font-size: 1.25rem;
`;

const Input = styled.input`
    display: none;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    pointer-events: none;
    border-radius: 8px;
`;
