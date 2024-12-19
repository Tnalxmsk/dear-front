import styled from 'styled-components';
import { useState } from 'react';
import ClickableSVG from './ClickableSVG.tsx';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      setError('유효하지 않은 이메일입니다.');
      return;
    }
    // 모의 API 요청
    const isRegistered = false;
    if (!isRegistered) {
      setError('서비스에 등록되지 않은 사용자입니다.');
      return;
    }

    setError(''); // 오류 메시지 초기화
    alert('메일이 성공적으로 전송되었습니다!');
  };

  return (
    <Container>
      <Title>편지를 받으실 분의 이메일을 입력해주세요.</Title>
      <EmailInput
        type="email"
        placeholder="이메일을 입력해주세요."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
      <SubContainer>
        <ClickableSVG width="15" height="15" />
        <My>내게 쓰기</My>
      </SubContainer>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={handleSubmit}>제출</Button>
      </div>
    </Container>
  );
};

export default EmailForm;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  padding: 50px 30px;;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Title = styled.div`
  font: ${({ theme }) => theme.fonts.heading_regular_22px};
  color: black;
  margin-left: 20px;
  margin-bottom: 10px;
`;

const EmailInput = styled.input`
  background-color: #f1f1f1;
  font: ${({ theme }) => theme.fonts.paragraph_regular_14px};
  padding: 10px 30px;
  border: none;
  border-radius: 20px;
  outline: none;
  color: black;
`;

const ErrorMessage = styled.div`
  font: ${({ theme }) => theme.fonts.small_text_regular_12px};
  height: 14px;
  margin-left: 15px;
  color: #e80c0c;
  margin-top: 10px;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-left: 20px;
  margin-top: 20px;
`;

const My = styled.p`
  font: ${({ theme }) => theme.fonts.small_text_regular_12px};
  color: black;
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
`;
