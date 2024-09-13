import React from 'react';
import { Modal } from 'antd';

interface ImageModalProps {
  visible: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ visible, onClose, imageSrc, title }) => {
  return (
    <Modal
      visible={visible}
      footer={null}
      onCancel={onClose}
      centered
      width="80%"
    >
      <img src={imageSrc} alt={title} style={{ width: '100%' }} />
    </Modal>
  );
};

export default ImageModal;
