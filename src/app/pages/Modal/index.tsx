import { Button } from 'antd';
import React, { useState } from 'react';
import AntdModal from '../../components/Modal';

const ModalDemo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <AntdModal
        open={isModalOpen}
        title="Demo modal"
        onOk={handleOk}
        onCancel={handleCancel}
        centered
      >
        <p>Modal content</p>
      </AntdModal>
    </div>
  );
};

export default ModalDemo;
