import { createBrowserRouter } from 'react-router';
import HomePage from '../../pages/HomePage.tsx';
import WritePage from '../../pages/WritePage.tsx';
import BoxPage from '../../pages/BoxPage.tsx';
import RootLayout from '../../layout/RootLayout.tsx';

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
        path: '/write',
        element: <WritePage />
      },
      {
        path: 'box',
        element: <BoxPage />
      }
    ]
  }
])
