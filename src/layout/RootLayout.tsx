import { Outlet } from 'react-router';
import Header from '../components/common/Header.tsx';

export default function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
