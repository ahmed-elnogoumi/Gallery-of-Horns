import React from 'react';
import HornedBeast from './HornedBeast.jsx';
import Data from './assets/data.json';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';


function Gallery(Data) {
    return (
                    <Row xs={1} md={2} lg={3} className="g-4">
            {Data.map((image) => (
                <Col key={image._id}>
                    <Card>
                        <Card.Img variant="top" src={image.image_url} alt={image.keyword} />
                        <Card.Body>
                            <Card.Title>{image.title}</Card.Title>
                            <Card.Text>{image.description}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default Gallery;