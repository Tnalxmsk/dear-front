import { createBrowserRouter } from 'react-router';
import HomePage from '../../pages/home/HomePage.tsx';
import WritePage from '../../pages/WritePage.tsx';
import BoxPage from '../../pages/BoxPage.tsx';
import RootLayout from '../../layout/RootLayout.tsx';
import MailboxPage from '../../pages/LetterboxPage.tsx';
import LetterDetail from '../../pages/LetterDetail.tsx';
import LayoutSelectPage from '../../pages/home/LayoutSelectPage.tsx';

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
        path: '/layout-select',
        element: <LayoutSelectPage />,
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
        path: 'mailbox',
        element: <MailboxPage />,
      },
      {
        path: 'letterbox/:title',
        element: <LetterDetail />,
      },
    ],
  },
]);
