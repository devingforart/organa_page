import React from 'react';
import AppBar from '../simple/AppBar';
import './MainLayout.css'; // Estilos para el layout general

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="main-layout">
      <AppBar />
      <div className="content-container">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
