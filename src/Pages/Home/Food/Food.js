import React from 'react';
import { Link } from 'react-router-dom';
import './food.css'

const Food = () => {
    return (
             <>
             <div className='food_link container '>
            <Link to="/breakfast">Breakfast</Link>
            <Link to="/lunch">Lunch</Link>
            <Link to="/dinner">Dinner</Link>
            </div>
            </>
    );
};

export default Food;