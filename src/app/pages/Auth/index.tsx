import { Row, Col, Space, Input, Checkbox, Button } from 'antd';
import {
  UserOutlined,
  LockOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
} from '@ant-design/icons';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import AntdInput from '../../components/Input';
import { ILogin } from '../../../types/Auth.type';
import { useAppDispatch, useAppSelector } from '../../../store/configureStore';
import { login } from './slice';
import { authSelector } from './slice/selector';
import { useNavigate } from 'react-router';
import { path } from '../../routes/path';
import { useTranslation } from 'react-i18next';
import { translations } from '../../../locales/translations';

const Login = () => {
  const { handleSubmit, control } = useForm<ILogin>();
  const [visiblePassword, setVisiblePassword] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const { loading } = useAppSelector(authSelector);

  const onLoginSubmit = (data: ILogin) => {
    dispatch(login(data)).then(
      res => res.meta.requestStatus === 'fulfilled' && navigate(path.home),
    );
  };

  return (
    <form onSubmit={handleSubmit(onLoginSubmit)}>
      <Row className="login-form vh-100">
        <Col span={18} className="center-element">
          <Space
            size={'large'}
            direction="vertical"
            className="login-form-wrapper"
          >
            <Controller
              name="name"
              control={control}
              render={({ field, fieldState }) => (
                <AntdInput
                  {...field}
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder={t(translations.common.username) || 'Username'}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field, fieldState }) => (
                <AntdInput
                  {...field}
                  type={visiblePassword ? 'text' : 'password'}
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder={t(translations.common.password) || 'Password'}
                  suffix={
                    visiblePassword ? (
                      <EyeInvisibleOutlined
                        onClick={() => setVisiblePassword(!visiblePassword)}
                      />
                    ) : (
                      <EyeOutlined
                        onClick={() => setVisiblePassword(!visiblePassword)}
                      />
                    )
                  }
                />
              )}
            />
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button w-100"
              onClick={handleSubmit(onLoginSubmit)}
              loading={loading}
            >
              {t(translations.button.login)}
            </Button>
          </Space>
        </Col>
      </Row>
    </form>
  );
};

export default Login;
