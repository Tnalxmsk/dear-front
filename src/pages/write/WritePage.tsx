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
          if (!uploadedImageUrl) { // Prevent duplicate image insertions
              const editableArea = document.querySelector('[contenteditable="true"]');
              if (editableArea) {
                  const img = document.createElement('img');
                  img.src = imageUrl;
                  img.alt = 'Uploaded Image';
                  img.style.maxWidth = '80%';
                  img.style.margin = '10px auto';
                  img.style.display = 'block';
                  editableArea.appendChild(img);
                  setUploadedImageUrl(imageUrl); // Store the uploaded image URL
                  setImageUploaded(true); // Set image uploaded state to true
              }
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
                <br/>
                  <LetterHeader
                      recipient={recipient}
                      isSelfWriting={false}
                      isRegistered={true}
                  />
                  <br/>
                  <ContentSection>
                      <EditableContentArea />
                      {/* Display ImageUploadSection only if no image is uploaded */}
                      {!imageUploaded && (
                          <ImageUploadSection onInsertImage={handleInsertImage} />
                      )}
                      {/* Display uploaded image if exists */}
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
                  <CompleteButton onClick={handleComplete}>작성 완료</CompleteButton>
              </CompleteButtonWrapper>
              <br/>
          </WritePageContainer>
      );
  };

  export default WritePage;

  const WritePageContainer = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      min-height: 100vh;
      width: 100%;
      background: url('/images/BG3.png') no-repeat center center;
      background-size: cover;
      overflow-y: auto;
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
      margin-bottom: 2rem;
  `;

  const ContentSection = styled.div`
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      overflow-y: auto;
      padding: 1rem;
      background: transparent;
      border: 1px dashed #ccc;
      border-radius: 8px;
  `;

  const CompleteButtonWrapper = styled.div`
      position: relative;
      display: inline-block;
  `;

  const CompleteButton = styled.button`
      width: 100px;
      height: 100px;
      background-color: #2E2E2E;
      border: none;
      cursor: pointer;
      color: #fff;
      font-size: 1rem;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
  `;

  const UploadedImage = styled.img`
      max-width: 100%;
      margin: 10px auto;
      display: block;
      border-radius: 8px;
  `;