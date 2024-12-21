import React, { useEffect } from 'react';

const NaverCallbackPage: React.FC = () => {
  useEffect(() => {
    // URL에서 Access Token 추출
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const accessToken = params.get('access_token'); 

    if (accessToken) {
      console.log('Access Token:', accessToken);

      // 네이버 사용자 정보 요청
      fetch('https://openapi.naver.com/v1/nid/me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('네이버 사용자 정보를 가져오는 데 실패했습니다.');
          }
          return response.json();
        })
        .then((data) => {
          if (data.resultcode === '00') {
            console.log('사용자 정보:', data.response); 
          } else {
            console.error('인증 실패:', data.message);
          }
        })
        .catch((error) => {
          console.error('오류 발생:', error);
        });
    } else {
      console.error('Access Token이 URL에 포함되어 있지 않습니다.');
    }
  }, []);

  return <div>로그인 처리 중입니다...</div>;
};

export default NaverCallbackPage;
