import { Outlet } from 'react-router-dom';
import '../styles/RootLayout.scss';

const RootLayout = () => {
  return (
    <div className="root-layout">
      <div className="root-layout-container">
        <header>
          <nav></nav>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
