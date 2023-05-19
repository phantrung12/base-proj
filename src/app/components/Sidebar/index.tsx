import { Layout, Menu } from 'antd';
import React, { useState } from 'react';

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
  const { Sider } = Layout;

  return (
    <Sider trigger={null} collapsible collapsed={collapsed} className="sidebar">
      <div className="logo">Logo</div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={[]} />
    </Sider>
  );
};

export default Sidebar;
