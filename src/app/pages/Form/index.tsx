import { Button, Space, Typography } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { translations } from '../../../locales/translations';
import { useNavigate } from 'react-router-dom';
import { path } from '../../routes/path';

const Form = () => {
  const { Title } = Typography;
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div>
      <Title level={3}>{t(translations.form.title)}</Title>
      <Space className="w-100 justify-end">
        <Button onClick={() => navigate(path.createForm)}>
          {t(translations.form.addNew)}
        </Button>
      </Space>
    </div>
  );
};

export default Form;
