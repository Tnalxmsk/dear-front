import React, { useState } from 'react';
import styled from 'styled-components';

const SealingWax: React.FC = () => {
  const [selectedWax, setSelectedWax] = useState<number | null>(null);

  const handleWaxSelect = (index: number) => {
    setSelectedWax(index);
  };

  const handleSendLetter = () => {
    if (selectedWax !== null) {
      alert('편지가 발송되었습니다! 보낸 편지는 우편함에서 확인 가능합니다.');
    } else {
      alert('실링왁스를 선택해주세요.');
    }
  };

  return (
    <PageContainer>
        <StepIndicator>실링왁스 선택</StepIndicator>
        <br/>
    <WaxSelectionContainer>
    <WaxDisplay>
          <WaxImage
            src={
              selectedWax !== null
                ? `/images/sealingwax/wax-selected-${selectedWax}.png`
                : `/images/sealingwax/Layer_3.png`
            }
            alt={
              selectedWax !== null
                ? `실링왁스 ${selectedWax}`
                : '기본 실링왁스 이미지'
            }
          />
        </WaxDisplay>

        <WaxOptions>
          {[1, 2, 3, 4, 5].map((index) => (
            <WaxOption key={index}>
              <input
                type="radio"
                name="wax"
                value={index}
                checked={selectedWax === index}
                onChange={() => handleWaxSelect(index)}
              />
              <WaxImage
                src={`/images/sealingwax/wax-${index}.png`}
                alt={`실링왁스 ${index}`}
              />
            </WaxOption>
          ))}
        </WaxOptions>
        <br/>
      </WaxSelectionContainer>

      <SendButton onClick={handleSendLetter}>
          <img src="/images/sealingwax/sendbutton.png" alt="편지 발송 버튼" />
      </SendButton>
    </PageContainer>
  );
};

export default SealingWax;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url('/images/BG3.png') no-repeat center center;
  background-size: cover;
  height: 100vh;
  padding: 20px;
`;

const StepIndicator = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: black;
`;

const WaxSelectionContainer = styled.div`
  border-radius: 20px;  
  display: flex;
  width: 35%;
  flex-direction: column;
  align-items: center;
  background: white;
`;

const WaxDisplay = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  background-color: ;
`;

const Placeholder = styled.div`
  font-size: 16px;
  color: #aaa;
`;

const WaxImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const WaxOptions = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const WaxOption = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  & input {
    display: none;
  }

  & img {
    width: 50px;
    height: 50px;
    border: 2px solid transparent;
    border-radius: 50%;
    transition: border-color 0.3s;
  }

  & input:checked + img {
    border-color: #000;
  }
`;

const SendButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-top: 20px;

  & img {
    width: 50px;
    height: 50px;
  }
`;