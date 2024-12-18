import { createBrowserRouter } from 'react-router';
import HomePage from '../../pages/home/HomePage.tsx';
import WritePage from '../../pages/write/WritePage.tsx';
import BoxPage from '../../pages/BoxPage.tsx';
import RootLayout from '../../layout/RootLayout.tsx';
import LetterDetail from '../../pages/LetterDetail.tsx';
import LetterCreatePage from '../../pages/write/LetterCreatePage.tsx';
import LetterboxPage from '../../pages/LetterboxPage.tsx';

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
        path: 'box',
        element: <BoxPage />,
      },
      {
        path: 'letterbox',
        element: <LetterboxPage />,
      }
    ],
  },
]);
