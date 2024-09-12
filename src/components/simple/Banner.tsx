import React, { useState, useEffect } from 'react';
import { Button, Typography } from 'antd';
import './Banner.css';

const { Title, Paragraph } = Typography;

const Banner: React.FC = () => {
  const messages = [
    '¡Bienvenido a Organa!',
    'Optimiza tus procesos.',
    'Mejora tu productividad.',
    'Descubre lo que Organa puede hacer por ti.',
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
        setAnimate(false);
      }, 1000); // Duración de la animación
    }, 4000); // Cambia el texto cada 4 segundos (1s para la animación y 3s visible)

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="banner-container">
      <div className="banner-overlay" />
      <div className="banner-content">
        <Title className={`banner-title ${animate ? 'fade-out' : 'fade-in'}`}>
          {messages[currentMessageIndex]}
        </Title>
        <Paragraph className="banner-description">
          ¡Aprovecha nuestra solución innovadora hoy mismo!
        </Paragraph>
        <Button type="primary" size="large" className="banner-button">
          Más Información
        </Button>
      </div>
    </div>
  );
};

export default Banner;
