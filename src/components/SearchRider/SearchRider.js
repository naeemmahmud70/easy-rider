import React from 'react';
import fakeData from '../../fakeData/data.json'
import './SearchRider.css'

const SearchRider = (props) => {
    const type = props.type;
    const item = fakeData.find(element => element.type === type);
        const { img, icon, capacity, fare } = item;
        console.log(img, icon, capacity, fare);

    
    const handelSearchButton =()=>{
        console.log('search clicked')
    }
    
    return (
        <div className="shadow ">
            <div className="form-style p-3">
                <input type="text" placeholder="from"/>
                <input type="text" placeholder="to" />
                <button onClick={handelSearchButton} className="button-style mt-2">Search</button>
            </div>

            <div className="search-style d-flex justify-content-around shadow">
                <img className="type-img" src={img} alt="" />
                <img className="icon-img" src={icon} alt="" />
                <p>{capacity}</p>
                <p>{"$"+fare}</p>
            </div>

            <div className="search-style d-flex justify-content-around shadow">
                <img className="type-img" src={img} alt="" />
                <img className="icon-img" src={icon} alt="" />
                <p>{capacity}</p>
                <p>{"$"+fare}</p>
            </div>

            <div className="search-style d-flex justify-content-around shadow">
                <img className="type-img" src={img} alt="" />
                <img className="icon-img" src={icon} alt="" />
                <p>{capacity}</p>
                <p>{"$"+fare}</p>
            </div>


            
        </div>
    );
};

export default SearchRider;