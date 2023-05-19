import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Outlet } from 'react-router';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import Header from '../../components/Header';
import { path } from '../../routes/path';
import { useTranslation } from 'react-i18next';
import { translations } from '../../../locales/translations';

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const { Sider, Content } = Layout;

  const sidebarItems: ItemType[] = [
    {
      key: path.home,
      icon: <UserOutlined />,
      label: t(translations.home.title),
    },
    {
      key: '2',
      icon: <VideoCameraOutlined />,
      label: 'nav 2',
    },
    {
      key: '3',
      icon: <UploadOutlined />,
      label: 'nav 3',
    },
  ];

  return (
    <Layout className="layout">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="sidebar"
      >
        <div className="logo">Logo</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[path.home]}
          items={sidebarItems}
        />
      </Sider>
      <Layout className="site-layout">
        <Header />
        <Content className="site-layout-background content">
          <div>
            Content
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
