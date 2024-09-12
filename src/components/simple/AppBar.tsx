import React from 'react';
import { Layout, Menu, Avatar, Dropdown, Button } from 'antd';
import { MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { selectMenuItem } from '../../features/menuSlice';
import './AppBar.css';

const { Header } = Layout;

const AppBar: React.FC = () => {
  const dispatch = useDispatch();
  const selectedKey = useSelector((state: RootState) => state.menu.selectedKey);

  const handleMenuClick = async (key: string) => {
    if (key === '5') {
      try {
        // Hacer una solicitud a la API de GitHub para obtener el último release
        const response = await fetch('https://api.github.com/repos/devingforart/organa_updater/releases/latest');
        const data = await response.json();

        // Obtener el nombre del archivo del primer asset del release
        const downloadUrl = data.assets[0].browser_download_url;

        // Redirigir a la descarga del archivo
        window.location.href = downloadUrl;
      } catch (error) {
        console.error('Error al obtener el último release:', error);
      }
    } else {
      dispatch(selectMenuItem(key));
    }
  };

  const menuItems = [
    { key: '1', label: 'Home' },
    { key: '2', label: 'About' },
    { key: '3', label: 'Services' },
    { key: '4', label: 'Contact' },
    { key: '5', label: 'Download' },  // Botón de "Download" que descarga el último release
  ];

  const dropdownMenuItems = [
    { key: '1', label: 'Profile' },
    { key: '2', label: 'Settings' },
    { key: '3', label: 'Logout' },
  ];

  return (
    <Header className="appbar-header">
      <div className="logo">Organa</div>
      <div className="menu-toggle">
        <Button
          type="primary"
          icon={<MenuUnfoldOutlined />}
          className="mobile-menu-icon"
        />
      </div>
      <Menu
        mode="horizontal"
        selectedKeys={[selectedKey]}
        className="menu-items"
        onClick={(e) => handleMenuClick(e.key)}
        items={menuItems}
      />
      <div className="avatar-section">
        <Dropdown menu={{ items: dropdownMenuItems }} trigger={['click']}>
          <Avatar size="large" icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </Header>
  );
};

export default AppBar;
