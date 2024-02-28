import info from './assets/data.json'
import React, {useState} from 'react';

function HornedBeast(info) {
    const [favoritesCount, setFavoritesCount] = useState(0);
    const handleClick = () => {
        setFavoritesCount(favoritesCount + 1);
    }
    return (
        <>
            <h2>{info.title}</h2>
            <img
                className='Animal-Image'
                src={info.image_url}
                alt={info.keyword}
            />
            <p>{info.description}</p>
            <p>Horns: {info.horns}</p>
            <button onClick={handleClick}>♥</button>
        </>
    )
}

export default HornedBeast 