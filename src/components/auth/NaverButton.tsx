import React, { useEffect } from 'react';
import styled from 'styled-components';

declare global {
  interface Window {
    naver: any;
  }
}

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 50px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 25px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const Logo = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: #03c75a;
  margin-right: 8px;
`;

const Text = styled.span`
  font-size: 1rem;
  color: #333;
`;

const NaverButton: React.FC = () => {
  useEffect(() => {
    if (window.naver) {
      console.log('Naver SDK 사용 가능');
    } else {
      console.error('Naver SDK가 로드되지 않았습니다.');
    }
  }, []);

  const handleNaverLogin = () => {
    const { naver } = window;

    if (naver) {
      const naverLogin = new naver.LoginWithNaverId({
        clientId: import.meta.env.VITE_NAVER_CLIENT_ID,
        callbackUrl: import.meta.env.VITE_NAVER_CALLBACK_URL,
        isPopup: true, // 팝업 활성화
        loginButton: { color: 'green', type: 3, height: 50 },
      });

      naverLogin.init();

      if (typeof naverLogin.login === 'function') {
        naverLogin.login();
      } else if (typeof naverLogin.authorize === 'function') {
        naverLogin.authorize(); // `authorize()`로 대체
      } else {
        console.error('naverLogin.login 또는 naverLogin.authorize 함수가 존재하지 않습니다.');
        console.log('현재 naverLogin 객체:', naverLogin);
      }
    } else {
      console.error('Naver 객체가 초기화되지 않았습니다.');
    }
  };


  return (
    <ButtonContainer onClick={handleNaverLogin}>
      <Logo>N</Logo>
      <Text>네이버 로그인</Text>
    </ButtonContainer>
  );
};

export default NaverButton;
