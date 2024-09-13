import React, { useState } from 'react';
import { Row, Col, Card, Typography } from 'antd';
import './Features.css';
import ImageModal from './ImageModal';  // Importar el nuevo componente

const { Meta } = Card;

const features = [
  {
    title: 'Minutas Automatizadas',
    description: 'Organa transforma cada reunión en resúmenes accionables mediante la IA, generando minutas precisas que destacan los puntos clave y decisiones importantes.',
    image: '/src/assets/images/minutaAutomatizada.png',
  },
  {
    title: 'Tablero Kanban Interactivo',
    description: 'Gestiona tus proyectos y tareas diarias con un tablero Kanban visual e interactivo, que facilita la planificación y seguimiento de tus actividades de forma organizada.',
    image: '/src/assets/images/kanban.png',
  },
  {
    title: 'Análisis Avanzado con IA',
    description: 'Aprovecha el análisis avanzado de tus grabaciones con tecnología de IA, que extrae insights clave y te ayuda a organizarte y  a mejorar la toma de decisiones.',
    image: '/src/assets/images/savedMinutes.png',
  },
/*   {
    title: 'Sincronización Multiplataforma',
    description: 'Accede a tus reuniones, minutas y tareas desde cualquier dispositivo con la sincronización automática de Organa, manteniendo tu flujo de trabajo siempre a la mano.',
    image: '/src/assets/images/sincMultiplataformaCambiarImagen.png',w
  }, */
/*   {
    title: 'Grabación en Alta Definición',
    description: 'Graba tus reuniones en video y audio de alta calidad, asegurando que nunca pierdas un detalle importante con almacenamiento seguro de tus grabaciones.',
    image: '/src/assets/images/liveOrgana.png',
  },
  {
    title: 'Compatibilidad con Windows',
    description: 'Organa está diseñada para ofrecer una experiencia optimizada en la plataforma de Windows, aprovechando todas las capacidades de escritorio para una mayor productividad.',
    image: '/src/assets/images/winCompatib.png',
  } */
];

const Features: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<null | { image: string, title: string }>(null);

  const handleCardClick = (feature: { image: string, title: string }) => {
    setSelectedFeature(feature);
  };

  const closeModal = () => {
    setSelectedFeature(null);
  };

  return (
    <div className="features-container">
      <Typography className="features-title">Gestiona tus actividades diarias</Typography>
      <Row gutter={[16, 16]} className="features-row">
        {features.map((feature, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card
              hoverable
              cover={<img alt={feature.title} src={feature.image} />}
              className="feature-card"
              onClick={() => handleCardClick(feature)}  // Abrir el modal con la imagen
            >
              <Meta title={feature.title} description={feature.description} />
            </Card>
          </Col>
        ))}
      </Row>

      {selectedFeature && (
        <ImageModal
          visible={!!selectedFeature}
          onClose={closeModal}
          imageSrc={selectedFeature.image}
          title={selectedFeature.title}
        />
      )}
    </div>
  );
};

export default Features;
