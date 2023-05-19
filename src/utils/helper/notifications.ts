import { notification as antdNotification } from 'antd';

interface NotificationProps {
  message?: string;
  description: string;
}

export const notification = {
  error: ({ message, description }: NotificationProps) => {
    antdNotification.error({
      message: message ? message : 'Error',
      description,
      duration: 2,
    });
  },
  warning: ({ message, description }: NotificationProps) => {
    antdNotification.warning({
      message: message ? message : 'Warning',
      description,
      className: 'notification',
    });
  },
  success: ({ message, description }: NotificationProps) => {
    antdNotification.success({
      message: message ? message : 'Success',
      description,
      className: 'notification',
    });
  },
  info: ({ message, description }: NotificationProps) => {
    antdNotification.info({
      message: message ? message : 'Info',
      description,
      className: 'notification',
    });
  },
};
