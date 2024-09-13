import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import './Services.css';

const { Title, Paragraph } = Typography;

const Services: React.FC = () => {
  return (
    <div className="services-container">
      <Title level={2} className="services-title">Nuestros Servicios</Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8}>
          <Card className="service-card" title="Consultoría Empresarial">
            <Paragraph>
              Ofrecemos servicios de consultoría para optimizar tus procesos y maximizar el rendimiento de tu negocio.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card className="service-card" title="Integración con IA">
            <Paragraph>
              Integramos inteligencia artificial para ayudar a automatizar tareas y mejorar la toma de decisiones.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card className="service-card" title="Soporte Técnico">
            <Paragraph>
              Nuestro equipo de soporte está disponible 24/7 para garantizar que todo funcione sin interrupciones.
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Services;
