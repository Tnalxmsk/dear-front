import { createBrowserRouter } from 'react-router';
import HomePage from '../../pages/home/HomePage.tsx';
import WritePage from '../../pages/write/WritePage.tsx';
import RootLayout from '../../layout/RootLayout.tsx';
import LetterboxPage from '../../pages/letterbox/LetterboxPage.tsx';
import LetterCreatePage from '../../pages/write/LetterCreatePage.tsx';

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
        path: 'letterbox',
        element: <LetterboxPage />,
      }
    ],
  },
]);
