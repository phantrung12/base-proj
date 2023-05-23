import { Alert, Space } from 'antd';
import React from 'react';

const AlertDemo = () => {
  return (
    <Space direction="vertical" className="w-100">
      <Alert showIcon message="Alo alo" type="success" />
      <Alert showIcon message="Alo alo" type="info" />
      <Alert showIcon message="Alo alo" type="warning" />
      <Alert showIcon message="Alo alo" type="error" />
    </Space>
  );
};

export default AlertDemo;
