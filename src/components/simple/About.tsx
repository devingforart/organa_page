import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import './About.css';

const { Title, Paragraph } = Typography;

const About: React.FC = () => {
  return (
    <div className="about-container">
      {/* Título principal */}
      <Title level={2} className="about-title">Acerca de Organa</Title>

      {/* Descripción general */}
      <Paragraph className="about-paragraph">
        Organa es una plataforma integral diseñada para optimizar la gestión de reuniones y actividades diarias, aprovechando la Inteligencia Artificial (IA) para mejorar la eficiencia. Con funciones como la grabación en tiempo real, la generación automática de minutas, y un tablero Kanban, Organa ofrece una solución completa para la productividad.
      </Paragraph>

      {/* Visión y misión */}
      <div className="section">
        <Title level={3} className="section-title">Visión y Misión</Title>
        <Paragraph className="about-paragraph">
          Nuestra misión es empoderar a los profesionales modernos con herramientas que mejoren su productividad y organización diaria. Creemos en la tecnología como un aliado para optimizar el tiempo y facilitar la toma de decisiones.
        </Paragraph>
      </div>

      {/* Funcionalidades Clave */}
      <div className="section">
        <Title level={3} className="section-title">Funcionalidades Clave</Title>
        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              title="Grabación en tiempo real"
              bordered={false}
              className="feature-card"
            >
              <Paragraph>
                Captura audio y video de alta calidad en tiempo real durante tus reuniones y genera minutas automáticas con IA.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              title="Tablero Kanban"
              bordered={false}
              className="feature-card"
            >
              <Paragraph>
                Organiza tus actividades diarias con un tablero Kanban visual que facilita la planificación y seguimiento de proyectos.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              title="Gestión de API Keys de IA"
              bordered={false}
              className="feature-card"
            >
              <Paragraph>
                Conecta con diferentes modelos de IA utilizando tus propias claves API y personaliza los análisis y resúmenes.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </div>

      {/* Tecnologías */}
      <div className="section">
        <Title level={3} className="section-title">Tecnologías Usadas</Title>
        <Paragraph className="about-paragraph">
          Organa está desarrollada en Rust, uno de los lenguajes más seguros y eficientes del mundo, lo que garantiza un rendimiento robusto y estable. Además, integra modelos avanzados de IA, como GPT, para ofrecer análisis automatizados y resúmenes detallados de las reuniones.
        </Paragraph>
      </div>

      {/* Testimonios */}
      <div className="section">
        <Title level={3} className="section-title">Testimonios</Title>
        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} sm={12}>
            <Card hoverable className="testimonial-card">
              <Paragraph>
                "Organa ha transformado la manera en que gestionamos nuestras reuniones. Las minutas automáticas nos han ahorrado horas de trabajo cada semana."
              </Paragraph>
              <Paragraph>- Juan Pérez, CEO de Empresa X</Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12}>
            <Card hoverable className="testimonial-card">
              <Paragraph>
                "El tablero Kanban integrado en Organa es una herramienta indispensable para mantener nuestro equipo sincronizado y enfocado."
              </Paragraph>
              <Paragraph>- María García, Gerente de Proyecto</Paragraph>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
