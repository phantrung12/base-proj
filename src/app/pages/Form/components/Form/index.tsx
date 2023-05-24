import { Col, Row } from 'antd';
import React from 'react';
import FormItem from '../../../../components/FormItem';
import { useFormContext, Controller } from 'react-hook-form';
import AntdInput from '../../../../components/Input';

const FormComponent = () => {
  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext();
  return (
    <Row gutter={[8, 16]}>
      <Col span={24}>
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <FormItem
              title={'Username'}
              required
              errorText={fieldState.error?.message}
            >
              <AntdInput
                {...field}
                value={field.value}
                status={fieldState.error && 'error'}
              />
            </FormItem>
          )}
        />
      </Col>
      <Col span={24}>
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <FormItem
              title={'Password'}
              required
              errorText={fieldState.error?.message}
            >
              <AntdInput
                {...field}
                value={field.value}
                status={fieldState.error && 'error'}
              />
            </FormItem>
          )}
        />
      </Col>
    </Row>
  );
};

export default FormComponent;
