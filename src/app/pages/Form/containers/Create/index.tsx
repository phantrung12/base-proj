import React from 'react';
import FormComponent from '../../components/Form';
import { FormProvider, useForm } from 'react-hook-form';
import { Button, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { translations } from '../../../../../locales/translations';
import { useNavigate } from 'react-router-dom';
import { path } from '../../../../routes/path';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const formSchema = yup.object().shape({
  name: yup.string().nullable().required('Enter name'),
  password: yup.string().nullable().required('Enter pass'),
});

const CreateForm = () => {
  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(formSchema),
  });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const { t } = useTranslation();
  const navigate = useNavigate();

  const onSubmit = (value: any) => {
    value = { ...value };
  };

  return (
    <div style={{ background: '#fff', padding: '24px' }}>
      <FormProvider {...methods}>
        <FormComponent />
      </FormProvider>
      <Space className="w-100">
        <Button onClick={() => navigate(path.form)}>
          {t(translations.button.cancel)}
        </Button>
        <Button type="primary" onClick={handleSubmit(onSubmit)}>
          {t(translations.button.submit)}
        </Button>
      </Space>
    </div>
  );
};

export default CreateForm;
