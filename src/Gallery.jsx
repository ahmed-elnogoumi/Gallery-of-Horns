import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import HornedBeasts from "./HornedBeasts";
import data from './assets/data.json';
import Dropdown  from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

const Gallery = (props) => {
    const [selectedHorns, setSelectedHorns] =useState(null);

    const handleDropdownClick = (horns) => {
        setSelectedHorns(horns);
    }

    const filteredData = selectedHorns ? data.filter(item => item.horns === selectedHorns) : data;

    return (
        <>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Number of Horns
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => handleDropdownClick(null)}>See All</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleDropdownClick(1)}>1</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleDropdownClick(2)}>2</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleDropdownClick(3)}>3</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleDropdownClick(100)}>100</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
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