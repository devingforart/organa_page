import React, { useState } from 'react';
import { Layout, Menu, Avatar, Dropdown, Button, Drawer } from 'antd';
import { MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { selectMenuItem } from '../../features/menuSlice';
import './AppBar.css';

const { Header } = Layout;

import { useNavigate } from 'react-router-dom';

const AppBar: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const dispatch = useDispatch();
  const selectedKey = useSelector((state: RootState) => state.menu.selectedKey);
  const navigate = useNavigate(); // Para navegar entre rutas

  const handleMenuClick = async (key: string) => {
    if (key === '5') {
      try {
        const response = await fetch('https://api.github.com/repos/devingforart/organa_updater/releases/latest');
        const data = await response.json();
        const downloadUrl = data.assets[0].browser_download_url;
        window.location.href = downloadUrl;
      } catch (error) {
        console.error('Error al obtener el último release:', error);
      }
    } else {
      dispatch(selectMenuItem(key));
      switch (key) {
        case '1':
          navigate('/');
          break;
        case '2':
          navigate('/about');
          break;
        case '3':
          navigate('/services');
          break;
        case '4':
          navigate('/contact');
          break;
        default:
          break;
      }
    }
    setDrawerVisible(false);
  };
  // Resto del código...

  const menuItems = [
    { key: '1', label: 'Inicio' },
    { key: '2', label: 'Organa' },
    { key: '3', label: 'Servicios' },
    { key: '4', label: 'Contacto' },
    { key: '5', label: 'Descargar' },
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
          onClick={() => setDrawerVisible(true)} // Mostrar Drawer en móviles
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

      {/* Drawer para dispositivos móviles */}
      <Drawer
        title="Menu"
        placement="left"
        closable={true}
        onClose={() => setDrawerVisible(false)} // Cerrar Drawer
        visible={drawerVisible}
      >
        <Menu
          mode="vertical"
          selectedKeys={[selectedKey]}
          onClick={(e) => handleMenuClick(e.key)}
          items={menuItems}
        />
      </Drawer>
    </Header>
  );
};

export default AppBar;
