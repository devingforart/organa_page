import React from 'react';
import { Row, Col, Card, Typography } from 'antd';
import './Features.css';

const { Meta } = Card;

const features = [
  {
    title: 'Fácil de Usar',
    description: 'Organa está diseñada para ser intuitiva y fácil de usar desde el primer momento.',
    image: '/src/assets/images/image.png',
  },
  {
    title: 'Optimización Automática',
    description: 'Automatiza tus procesos y mejora la eficiencia de tu negocio con nuestras herramientas avanzadas.',
    image: '/src/assets/images/image2.png',
  },
  {
    title: 'Integración Total',
    description: 'Se integra perfectamente con las herramientas más utilizadas para que no tengas que cambiar nada.',
    image: '/src/assets/images/image3.png',
  },
  {
    title: 'Seguridad de Datos',
    description: 'Tus datos están siempre seguros con nuestra tecnología de encriptación avanzada.',
    image: '/src/assets/images/image4.png',
  },
];

const Features: React.FC = () => {
  return (
    <div className="features-container">
      <Typography className="features-title">Gestiona tus actividades diarias</Typography>
      <Row gutter={[16, 16]}>
        {features.map((feature, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <Card
              hoverable
              cover={<img alt={feature.title} src={feature.image} />}
              className="feature-card"
            >
              <Meta title={feature.title} description={feature.description} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Features;
