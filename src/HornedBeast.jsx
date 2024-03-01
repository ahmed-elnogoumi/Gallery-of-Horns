import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Gallery from './Gallery';
import Card from 'react-bootstrap/Card';

function HornedBeast(props) {
    const [favoritesCount, setFavoritesCount] = useState(0);

    const handleClick = () => {
        setFavoritesCount(favoritesCount + 1);
    };

    return (
        <>
            <div style={{ maxWidth: '18rem', margin: 'auto', textAlign: 'center' }}>
                <Gallery />
                <Button variant="primary" onClick={handleClick}>💖</Button>
                <p>Amount of Likes: {favoritesCount}</p>
            </div>
        </>
    );
}

export default HornedBeast;