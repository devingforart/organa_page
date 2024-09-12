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

  const handleMenuClick = (key: string) => {
    dispatch(selectMenuItem(key));
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
