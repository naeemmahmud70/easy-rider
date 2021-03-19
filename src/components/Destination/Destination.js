import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Home/Header/Header';

const Destination = () => {
    const { type } = useParams();
    console.log(type)
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <h1>this is destination</h1>
        </div>
    );
};

export default Destination;