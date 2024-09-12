import React from 'react';
import { Layout, Menu, Avatar, Dropdown, Button } from 'antd';
import { MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons';
import './AppBar.css';

const { Header } = Layout;

const AppBar: React.FC = () => {
  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: 'Profile',
        },
        {
          key: '2',
          label: 'Settings',
        },
        {
          key: '3',
          label: 'Logout',
        },
      ]}
    />
  );

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
      <Menu mode="horizontal" defaultSelectedKeys={['1']} className="menu-items">
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">About</Menu.Item>
        <Menu.Item key="3">Services</Menu.Item>
        <Menu.Item key="4">Contact</Menu.Item>
        <Menu.Item key="5">Download</Menu.Item>
      </Menu>
      <div className="avatar-section">
        <Dropdown overlay={menu} trigger={['click']}>
          <Avatar size="large" icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </Header>
  );
};

export default AppBar;
