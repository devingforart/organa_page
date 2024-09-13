import React from 'react';
import { Button, Typography, Row, Col } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import './Descarga.css';

const { Title, Paragraph } = Typography;

const DescargaOrgana: React.FC = () => {
    const handleDownload = async () => {
        try {
            const response = await fetch('https://api.github.com/repos/devingforart/organa_updater/releases/latest');
            const data = await response.json();
            const downloadUrl = data.assets[0].browser_download_url;
            window.location.href = downloadUrl; // Redirige al enlace de descarga
        } catch (error) {
            console.error('Error al obtener el último release:', error);
        }
    };

    return (
        <div className="descarga-container">
            <Row align="middle" justify="center">
                <Col xs={24} sm={12}>
                    <div className="descarga-content">
                        <Title className="descarga-title">¡Descarga Organa ahora!</Title>
                        <Paragraph className="descarga-paragraph">
                            Optimiza tu productividad con las herramientas más avanzadas. Gestiona tareas, reuniones, y mucho más con solo un clic.
                        </Paragraph>
                        <Button
                            type="primary"
                            icon={<DownloadOutlined />}
                            size="large"
                            onClick={handleDownload}
                            className="descarga-button"
                        >
                            Descargar ahora
                        </Button>
                    </div>
                </Col>
                <Col xs={24} sm={12}>
                    <img
                        src="src/assets/images/organa_landing.png"
                        alt="Descarga Organa"
                        className="descarga-image"
                        style={{ backgroundColor: 'transparent' }}
                    />
                </Col>
            </Row>
        </div>
    );
};

export default DescargaOrgana;
