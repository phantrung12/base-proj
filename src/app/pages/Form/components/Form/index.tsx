import { Col, DatePicker, Row } from 'antd';
import React from 'react';
import FormItem from '../../../../components/FormItem';
import { useFormContext, Controller } from 'react-hook-form';
import AntdInput from '../../../../components/Input';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Base64UploadAdapter } from '@ckeditor/ckeditor5-upload';
import UploadFile from '../../../../components/UploadFile';

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
      <Col span={12}>
        <Controller
          name="startDate"
          control={control}
          render={({ field, fieldState }) => (
            <FormItem
              title={'Start date'}
              required
              errorText={fieldState.error?.message}
            >
              <DatePicker
                {...field}
                value={field.value}
                status={fieldState.error && 'error'}
              />
            </FormItem>
          )}
        />
      </Col>
      <Col span={12}>
        <Controller
          name="endDate"
          control={control}
          render={({ field, fieldState }) => (
            <FormItem
              title={'End date'}
              required
              errorText={fieldState.error?.message}
            >
              <DatePicker
                {...field}
                value={field.value}
                status={fieldState.error && 'error'}
              />
            </FormItem>
          )}
        />
      </Col>
      <Col span={24}>
        <FormItem title={'Editor'} required>
          <CKEditor
            editor={ClassicEditor}
            id={'editor'}
            config={{
              // plugins: [Base64UploadAdapter],
              toolbar: [
                'heading',
                '|',
                'bold',
                'italic',
                'link',
                'bulletedList',
                'numberedList',
                '|',
                'outdent',
                'indent',
                '|',
                'imageUpload',
                'blockQuote',
                'insertTable',
                'mediaEmbed',
                'undo',
                'redo',
              ],
              language: 'vi',
              image: {
                toolbar: [
                  'imageTextAlternative',
                  'toggleImageCaption',
                  'imageStyle:inline',
                  'imageStyle:block',
                  'imageStyle:side',
                ],
              },
              table: {
                contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
              },
              heading: {
                options: [
                  {
                    model: 'paragraph',
                    title: 'Paragraph',
                    class: 'ck-heading_paragraph',
                  },
                  {
                    model: 'heading1',
                    view: 'h1',
                    title: 'Heading 1',
                    class: 'ck-heading_heading1',
                  },
                  {
                    model: 'heading2',
                    view: 'h2',
                    title: 'Heading 2',
                    class: 'ck-heading_heading2',
                  },
                  {
                    model: 'heading3',
                    view: 'h3',
                    title: 'Heading 3',
                    class: 'ck-heading_heading3',
                  },
                  {
                    model: 'heading4',
                    view: 'h4',
                    title: 'Heading 4',
                    class: 'ck-heading_heading4',
                  },
                ],
              },
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
            }}
          />
        </FormItem>
      </Col>
      <Col span={24}>
        <FormItem title={'Editor'} required>
          <UploadFile type="image" />
        </FormItem>
      </Col>
    </Row>
  );
};

export default FormComponent;
