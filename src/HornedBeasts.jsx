import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';

const HornedBeasts = (props) => {
  const [likeCount, setLikeCount] = useState(0);
  const [show, setShow] = useState(false);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Image src={props.imageUrl} alt={props.description} onClick={handleShow} /> 
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
          <p>Number of Horns: {props.horns}</p>
          <p>Likes: {likeCount}</p>
          <Button variant="primary" onClick={handleLike}>♥</Button>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Image Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={props.imageUrl} alt={props.title} fluid /> 
          <p>{props.description}</p>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default HornedBeasts;