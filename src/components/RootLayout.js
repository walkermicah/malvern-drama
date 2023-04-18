import { Outlet } from 'react-router-dom';
import Header from './Header';
import '../styles/RootLayout.scss';

const RootLayout = () => {
  return (
    <div className="root-layout">
      <div className="root-layout-container">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
