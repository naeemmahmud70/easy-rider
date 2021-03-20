import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Home/Header/Header';
import Maps from '../Maps/Maps';

import SearchRider from '../SearchRider/SearchRider';

const Destination = () => {
    const { type } = useParams();
    return (
        <div className="container">
            <div className="row">
                <Header></Header>
                <div className='col-md-4'>
                    <SearchRider type={type}></SearchRider>
                </div>
                <div className="col-md-8">
                    <Maps></Maps>
                </div>
            </div>
        </div>
    );
};

export default Destination;