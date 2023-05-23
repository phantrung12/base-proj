import { Button, Space } from 'antd';
import React from 'react';

const ButtonDemo = () => {
  return (
    <div>
      <Space>
        <Button type="primary">Button primary</Button>
        <Button type="link">Button link</Button>
        <Button type="default">Button default</Button>
        <Button type="dashed">Button dashed</Button>
        <Button type="ghost">Button ghost</Button>
        <Button type="text">Button text</Button>
        <Button type="primary" danger>
          Button danger
        </Button>
      </Space>
    </div>
  );
};

export default ButtonDemo;
