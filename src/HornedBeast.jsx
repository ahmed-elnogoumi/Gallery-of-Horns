import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function HornedBeast(props) {
    const [favoritesCount, setFavoritesCount] = useState(0);
    const handleClick = () => {
        setFavoritesCount(favoritesCount + 1);
    };
    return (
        <>
            <h2>{props.title}</h2>
            <img
                className='Animal-Image'
                src={props.image_url}
                alt={props.keyword}
            />
            <p>{props.description}</p>
            <p>Horns: {props.horns}</p>
            <Button onClick={handleClick}>♥</Button>
        </>
    )
}

export default HornedBeast;
