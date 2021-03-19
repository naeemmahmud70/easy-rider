import React from 'react';
import { useParams } from 'react-router-dom';

const Destination = () => {
    const { type } = useParams();
    console.log(type)
    return (
        <div>
            <h1>this is destination</h1>
        </div>
    );
};

export default Destination;