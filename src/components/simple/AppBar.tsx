import React, { useState } from 'react';
import { Layout, Menu, Avatar, Dropdown, Button, Drawer } from 'antd';
import { MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { selectMenuItem } from '../../features/menuSlice';
import './AppBar.css';

const { Header } = Layout;

const AppBar: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const dispatch = useDispatch();
  const selectedKey = useSelector((state: RootState) => state.menu.selectedKey);
  const navigate = useNavigate(); // Hook de React Router para la navegación

  const handleMenuClick = (key: string) => {
    if (key === '5') {
      window.location.href = 'https://github.com/devingforart/organa_updater/releases/latest/download/Organa_2.3.0_x64-setup.exe';
    } else {
      switch (key) {
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
          navigate('/');
      }
    }
    dispatch(selectMenuItem(key));
    setDrawerVisible(false);
  };

  const menuItems = [
    { key: '1', label: 'Home' },
    { key: '2', label: 'About' },
    { key: '3', label: 'Services' },
    { key: '4', label: 'Contact' },
    { key: '5', label: 'Download' },
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
          onClick={() => setDrawerVisible(true)}
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

      <Drawer
        title="Menu"
        placement="left"
        closable={true}
        onClose={() => setDrawerVisible(false)}
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
