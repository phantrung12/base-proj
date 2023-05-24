import { Alert, Button, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UserAddOutlined,
  FormOutlined,
  NotificationOutlined,
  AlertOutlined,
} from '@ant-design/icons';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import Header from '../../components/Header';
import { path } from '../../routes/path';
import { useTranslation } from 'react-i18next';
import { translations } from '../../../locales/translations';

type MenuItemType = ItemType & {
  isActive?: boolean;
};

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const { Sider, Content } = Layout;

  const sidebarItems: MenuItemType[] = [
    {
      key: path.home,
      icon: <UserOutlined />,
      label: t(translations.home.title),
      onClick: () => navigate(path.home),
    },
    {
      key: path.path1,
      icon: <FormOutlined />,
      label: 'UI Kits',
      children: [
        {
          key: path.subPath1.alert,
          icon: <AlertOutlined />,
          label: 'Alert',
          onClick: () => navigate(path.subPath1.alert),
        },
        {
          key: path.subPath1.button,
          icon: <VideoCameraOutlined />,
          label: 'Button',
          onClick: () => navigate(path.subPath1.button),
        },
        {
          key: path.subPath1.notification,
          icon: <NotificationOutlined />,
          label: 'Notification',
          onClick: () => navigate(path.subPath1.notification),
        },
        {
          key: path.subPath1.modal,
          icon: <NotificationOutlined />,
          label: 'Modal',
          onClick: () => navigate(path.subPath1.modal),
        },
      ],
    },
    {
      key: path.form,
      icon: <FormOutlined />,
      label: t(translations.form.title),
      onClick: () => navigate(path.form),
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

  const returnOpenKeys = (itemsMenu: any[]) => {
    const openKeys: any[] = [];
    itemsMenu.map(item => {
      if (item?.children) {
        if (item?.children.find((itm: any) => itm.key === location.pathname)) {
          openKeys.push(item?.key);
        } else {
          returnOpenKeys(item?.children);
        }
      }
    });
    return openKeys;
  };

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
          selectedKeys={[location.pathname]}
          defaultOpenKeys={returnOpenKeys(sidebarItems)}
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
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
