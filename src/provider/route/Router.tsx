import { createBrowserRouter } from 'react-router';
import HomePage from '../../pages/home/HomePage.tsx';
import WritePage from '../../pages/write/WritePage.tsx';
import RootLayout from '../../layout/RootLayout.tsx';
import LetterboxPage from '../../pages/letterbox/LetterboxPage.tsx';
import LetterCreatePage from '../../pages/write/LetterCreatePage.tsx';
import SealingWax from '../../pages/write/SealingWax.tsx';
import AuthPage from '../../pages/auth/AuthPage.tsx';
import NaverCallbackPage from '../../pages/auth/NaverCallback.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/letter-create',
        element: <LetterCreatePage />,
      },
      {
        path: '/write',
        element: <WritePage />,
      },
      {
        path: '/letterbox',
        element: <LetterboxPage />,
      },
      {
        path: '/sealing-wax',
        element: <SealingWax />,
      },
      {
        path: '/auth',
        element: <AuthPage />,
      },
      {
        path: '/auth/naver-callback', // 네이버 로그인 콜백 경로
        element: <NaverCallbackPage />,
      },
    ],
  },
]);
