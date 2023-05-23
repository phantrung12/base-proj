import { Typography } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom';

const UIKit = () => {
  return (
    <div>
      <Typography.Title level={3}>UIKit</Typography.Title>
      <Outlet />
    </div>
  );
};

export default UIKit;
