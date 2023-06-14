import { InboxOutlined } from '@ant-design/icons';
import { Upload, UploadProps } from 'antd';
import React from 'react';
import { notification } from '../../../utils/helper/notifications';

interface Props {
  type: 'image' | 'other';
}

const UploadFile = ({ type }: Props) => {
  const { Dragger } = Upload;

  const props: UploadProps = {
    name: 'file',
    multiple: true,
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        notification.success({
          description: `${info.file.name} file uploaded successfully.`,
        });
      } else if (status === 'error') {
        notification.error({
          description: `${info.file.name} file upload failed.`,
        });
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  return (
    <Dragger {...props}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">
        Click or drag file to this area to upload
      </p>
      <p className="ant-upload-hint">
        Support for a single or bulk upload. Strictly prohibit from uploading
        company data or other band files
      </p>
    </Dragger>
  );
};

export default UploadFile;
