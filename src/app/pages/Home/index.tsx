import { Button, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UserAddOutlined,
  FormOutlined,
} from '@ant-design/icons';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import Header from '../../components/Header';
import { path } from '../../routes/path';
import { useTranslation } from 'react-i18next';
import { translations } from '../../../locales/translations';

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { Sider, Content } = Layout;

  const sidebarItems: ItemType[] = [
    {
      key: path.home,
      icon: <UserOutlined />,
      label: t(translations.home.title),
      onClick: () => navigate(path.home),
    },
    {
      key: path.path1,
      icon: <FormOutlined />,
      label: 'Path 1',
      children: [
        {
          key: path.subPath1.itemSubPath1,
          icon: <VideoCameraOutlined />,
          label: 'sub paht 1',
          onClick: () => navigate(path.subPath1.itemSubPath1),
        },
        {
          key: path.subPath1.itemSubPath2,
          icon: <VideoCameraOutlined />,
          label: 'sub paht 2',
          onClick: () => navigate(path.subPath1.itemSubPath2),
        },
      ],
    },
    {
      key: path.path2,
      icon: <UploadOutlined />,
      label: 'Path 2',
      onClick: () => navigate(path.path2),
    },
    {
      key: path.path3,
      icon: <UploadOutlined />,
      label: 'Path 3',
      onClick: () => navigate(path.path3),
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
          theme="light"
          mode="inline"
          defaultSelectedKeys={[path.home]}
          items={sidebarItems}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          onClickOpenSidebar={() => setCollapsed(!collapsed)}
          collapse={collapsed}
        />
        <Content
          className={`site-layout-background content ${
            collapsed ? 'close-content' : 'open-content'
          }`}
        >
          <div>
            <Button type="primary">Button</Button>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
