import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import './Services.css';

const { Title, Paragraph } = Typography;

const Services: React.FC = () => {
  return (
    <div className="services-container">
      <Title level={2} className="services-title">Nuestros Servicios</Title>
      <Paragraph className="services-subtitle">
        Organa proporciona soluciones avanzadas impulsadas por IA para empresas que desean optimizar su flujo de trabajo y aumentar la productividad.
      </Paragraph>
      <Row gutter={[32, 32]} className="services-row">
        <Col xs={24} sm={12} md={8}>
          <Card className="service-card" hoverable cover={<img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Consultoría Empresarial" />}>
            <Title level={3} className="service-title">Consultoría Empresarial</Title>
            <Paragraph className="service-description">
              Optimiza tus procesos empresariales con estrategias basadas en datos y análisis profundo para maximizar tu rendimiento.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card className="service-card" hoverable cover={<img style={{ marginLeft: '90px', width: '200px', height: '200px', }} src="src/assets\images\gpt.png" alt="Integración con IA" />}>
            <Title level={3} className="service-title">Integración con IA</Title>
            <Paragraph className="service-description">
              Automatiza tareas críticas con modelos de IA personalizados, mejorando la toma de decisiones en tiempo real.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card className="service-card" hoverable cover={<img src="https://images.unsplash.com/photo-1501770118606-b1d640526693?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Soporte Técnico" />}>
            <Title level={3} className="service-title">Soporte Técnico 24/7</Title>
            <Paragraph className="service-description">
              Disponibilidad continua para garantizar que tus operaciones funcionen sin interrupciones, con expertos a tu disposición.
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Services;
