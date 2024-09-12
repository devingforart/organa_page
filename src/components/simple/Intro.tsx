import React from 'react';
import { Typography, Row, Col } from 'antd';
import './Intro.css';

const { Title, Paragraph } = Typography;

const Intro: React.FC = () => {
  return (
    <div className="intro-container">
      <Row justify="center">
        <Col xs={24} md={16}>
          <Title level={2} className="intro-title">¿Por qué elegir Organa?</Title>
          <Paragraph className="intro-paragraph">
          Organa es la solución perfecta para optimizar tu negocio, creada en Rust para ofrecer un rendimiento rápido y seguro. Conectada al modelo más avanzado de GPT, genera automáticamente minutas de reuniones, grabando y analizando el audio y video para ofrecer resúmenes claros. Todo esto se realiza en un entorno altamente seguro, garantizando la protección de tus datos mientras disfrutas de una experiencia eficiente y fácil de usar, integrándose a la perfección con tus herramientas de trabajo.          </Paragraph>
        </Col>
      </Row>
    </div>
  );
};

export default Intro;
