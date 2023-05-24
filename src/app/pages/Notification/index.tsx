import { Button, Space } from 'antd';
import React from 'react';
import { notification } from '../../../utils/helper/notifications';

const NotificationDemo = () => {
  const openNoti = (type: string) => {
    switch (type) {
      case 'success':
        notification.success({ message: 'Success', description: 'Success' });
        break;
      case 'error':
        notification.error({ message: 'Error', description: 'Error' });
        break;
      case 'info':
        notification.info({ message: 'Info', description: 'Info' });
        break;
      case 'warning':
        notification.warning({ message: 'Warning', description: 'Warning' });
        break;
      default:
        break;
    }
  };

  return (
    <Space>
      <Button type="primary" onClick={() => openNoti('success')}>
        Success
      </Button>
      <Button type="primary" onClick={() => openNoti('info')}>
        Info
      </Button>
      <Button type="primary" onClick={() => openNoti('warning')}>
        Warning
      </Button>
      <Button type="primary" danger onClick={() => openNoti('error')}>
        Error
      </Button>
    </Space>
  );
};

export default NotificationDemo;
