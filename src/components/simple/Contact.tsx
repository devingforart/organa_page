import React, { useState } from 'react';
import { Typography, Form, Input, Button, Modal, notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import './Contact.css';

const { Title, Paragraph } = Typography;

const Contact: React.FC = () => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSubmit = (values: any) => {
    // Aquí enviarías los datos del formulario por correo electrónico
    // Puedes hacer una llamada a un API o servicio como EmailJS o un backend con Node.js y Nodemailer
    console.log('Datos del formulario:', values);

    // Mostrar el modal de agradecimiento
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    form.resetFields(); // Limpiar el formulario después de cerrar el modal
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="contact-container">
      <Title level={2} className="contact-title">Contáctanos</Title>
      <Paragraph className="contact-paragraph">
        Si tienes alguna pregunta o necesitas más información sobre nuestros servicios, no dudes en ponerte en contacto con nosotros.
      </Paragraph>
      <Form
        form={form}
        className="contact-form"
        layout="vertical"
        onFinish={handleSubmit}
      >
        <Form.Item
          label="Nombre"
          name="name"
          rules={[{ required: true, message: 'Por favor, ingresa tu nombre' }]}
        >
          <Input className="custom-input" />
        </Form.Item>
        <Form.Item
          label="Correo electrónico"
          name="email"
          rules={[{ 
            required: true, 
            type: 'email', 
            message: 'Por favor, ingresa un correo electrónico válido' 
          }]}
        >
          <Input className="custom-input" />
        </Form.Item>
        <Form.Item
          label="Mensaje"
          name="message"
          rules={[{ required: true, message: 'Por favor, ingresa tu mensaje' }]}
        >
          <Input.TextArea className="custom-textarea" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="submit-button">
            Enviar
          </Button>
        </Form.Item>
      </Form>

      <Modal
        title="Gracias por contactarnos"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Cerrar"
        cancelButtonProps={{ style: { display: 'none' } }}
      >
        <div style={{ textAlign: 'center' }}>
          <SmileOutlined style={{ fontSize: '48px', color: '#52c41a' }} />
          <p style={{ marginTop: '16px' }}>
            ¡Gracias por contactarnos! Nos pondremos en contacto contigo lo antes posible.
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default Contact;
