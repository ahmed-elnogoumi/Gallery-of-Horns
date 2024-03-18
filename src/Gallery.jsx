import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import HornedBeasts from "./HornedBeasts";
import data from './assets/data.json';

const Gallery = (props) => {
    console.log(props);

    const [selectedHorns, setSelectedHorns] = useState(null);

    const handleDropdownClick = (horns) => {
        setSelectedHorns(horns);
    }

    const filteredData = selectedHorns ? data.filter(item => item.horns === selectedHorns) : data;

    return (
        <>
            <div>
                <h2>Gallery</h2>
            <div>
                {filteredData.map(obj => {
                return (
                    <HornedBeasts 
                    key = {obj._id}
                    title = {obj.title} 
                    description = {obj.description} 
                    imageUrl = {obj.image_url}
                    horns = {obj.horns}
                    />  
                    )
                    })}
                </div>
            </div>
        </>
    );
};

export default Gallery;