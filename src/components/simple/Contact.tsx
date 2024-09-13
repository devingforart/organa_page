import React from 'react';
import { Typography, Form, Input, Button } from 'antd';
import './Contact.css';

const { Title, Paragraph } = Typography;

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <Title level={2} className="contact-title">Contáctanos</Title>
      <Paragraph className="contact-paragraph">
        Si tienes alguna pregunta o necesitas más información sobre nuestros servicios, no dudes en ponerte en contacto con nosotros.
      </Paragraph>
      <Form className="contact-form" layout="vertical">
        <Form.Item label="Nombre" name="name" rules={[{ required: true, message: 'Por favor, ingresa tu nombre' }]}>
          <Input className="custom-input" />
        </Form.Item>
        <Form.Item label="Correo electrónico" name="email" rules={[{ required: true, message: 'Por favor, ingresa tu correo electrónico' }]}>
          <Input className="custom-input" />
        </Form.Item>
        <Form.Item label="Mensaje" name="message" rules={[{ required: true, message: 'Por favor, ingresa tu mensaje' }]}>
          <Input.TextArea className="custom-textarea" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="submit-button">
            Enviar
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Contact;
