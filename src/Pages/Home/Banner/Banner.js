import React from 'react';
import Food from '../Food/Food';
import banner from '../../images/bannerbackground.png'

const Banner = () => {
    return (
        <> 
        <div className=" carousel-item active m-2 p-2 ">
            <img src={banner} className="d-block w-100"></img>
            <div className="carousel-caption d-block text-danger">
                <div>
                    <h1> Get Your Fav Food From here!! </h1>
                    <div class="input-group border border-warning  m-2 p-2 rounded-pill ">
                        <input type="text" placeholder='Search Your Fav Food' class="form-control" />
                        <label class="input-group-text bg-danger border-start-0 "> Search Food</label>
                    </div>
                </div>
            </div>
            
        </div>    </>
    );
};

export default Banner;