import React, { useEffect } from 'react';

const NaverCallbackPage: React.FC = () => {
  useEffect(() => {
    const { naver } = window;

    // 네이버 로그인 상태 확인
    naver.LoginWithNaverId.prototype.getLoginStatus((status: boolean) => {
      if (status) {
        const user = naver.user; // 사용자 정보 가져오기
        console.log('로그인 성공:', user);
      } else {
        console.error('로그인 실패');
      }
    });
  }, []);

  return <div>로그인 인증 처리 중...</div>;
};

export default NaverCallbackPage;
