import React, { useState } from 'react';
import styled from 'styled-components';
import NavigationBar from '../components/write/NavigationBar';
import NavigationControls from '../components/write/NavigationControls';
import LetterHeader from '../components/write/LetterHeader';
import QuoteSection from '../components/write/QuoteSection';
import ImageUploadSection from '../components/write/ImageUploadSection';
import EditableContentArea from '../components/write/EditableContentArea';
import Footer from '../components/write/Footer';
import RandomQuote from '../components/write/RandomQuote';
import Modal from '../components/write/modal/Modal';

const WritePage: React.FC = () => {
    const [step, setStep] = useState<number>(1);
    const [recipient, setRecipient] = useState<string | null>('Recipient Name');
    const [imageUploaded, setImageUploaded] = useState<boolean>(false);
    const [imageDescription, setImageDescription] = useState<string>('');
    const [isPublic, setIsPublic] = useState<boolean>(false);
    const [isSelfWriting, setIsSelfWriting] = useState<boolean>(false);
    const [isRegistered, setIsRegistered] = useState<boolean>(true);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // State for modal visibility
    const [modalMessage, setModalMessage] = useState<string>(''); // Dynamic modal message
    const [modalButtonText, setModalButtonText] = useState<string>(''); // Dynamic modal button text

    const handleImageUpload = () => {
        setImageUploaded(true);
    };

    const handleNextStep = () => {
        if (step === 3 && !imageUploaded) {
            setModalMessage('이미지를 넣어야 편지 작성이 완료됩니다!');
            setModalButtonText('이미지 업로드');
            setIsModalOpen(true);
            return;
        }
        if (step < 5) setStep(step + 1);
    };

    const handleComplete = () => {
        if (!imageUploaded) {
            setModalMessage('이미지를 넣어야 편지 작성이 완료됩니다!');
            setModalButtonText('이미지 업로드');
            setIsModalOpen(true);
        } else {
            setModalMessage('편지가 발송되었습니다.\n보낸 편지는 우편함에서 확인 가능합니다.');
            setModalButtonText('우편함 바로가기');
            setIsModalOpen(true);
        }
    };

    const handleModalButtonClick = () => {
        if (!imageUploaded) {
            // Handle image upload action
            setIsModalOpen(false);
        } else {
            // Redirect to mailbox
            alert('우편함으로 이동합니다!');
            setIsModalOpen(false);
        }
    };

    return (
        <WritePageContainer>
            <NavigationBar onLogoClick={() => alert('메인 페이지로 이동')} onMenuClick={() => alert('사용자 프로필 출력')} />
            <NavigationControls
                step={step}
                onPrevious={() => setStep((prev) => Math.max(prev - 1, 1))}
                onNext={handleNextStep}
                isNextDisabled={step === 5}
            />

            <LetterContainer>
                <LetterHeader
                    recipient={recipient}
                    isSelfWriting={isSelfWriting}
                    isRegistered={isRegistered}
                />

                {step === 1 && <RandomQuote />}

                {step === 3 && (
                    <ImageUploadSection
                        imageUploaded={imageUploaded}
                        onUpload={handleImageUpload}
                        imageDescription={imageDescription}
                        onDescriptionChange={setImageDescription}
                    />
                )}

                <EditableContentArea />

                <Footer
                    senderName="작성자"
                    isPublic={isPublic}
                    onPublicChange={setIsPublic}
                />
            </LetterContainer>

            <CompleteButton onClick={handleComplete}>작성 완료</CompleteButton>

            {/* Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                message={modalMessage}
                buttonText={modalButtonText}
                onButtonClick={handleModalButtonClick}
            />
        </WritePageContainer>
    );
};

export default WritePage;

const WritePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: url('/images/BG3.png') no-repeat center center;
    background-size: cover;
    color: #000;
`;

const LetterContainer = styled.div`
    width: 800px;
    height: 1000px;
    background: url('/images/Letter paper=2.png') no-repeat center center;
    background-size: cover;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    color: #000;
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

    &:hover {
        background-color: #0056b3;
    }
`;