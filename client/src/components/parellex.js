import React from 'react';
import { Parallax } from 'react-parallax';
import { Button } from "mdbreact";
import Space from './images/spacegirl.jpg';
import Gamer from './images/videogame.jpeg';
import Vender from './images/vending.png';

function MyComponent () {
    return (
        <div>
        <Parallax
            blur={10}
            bgImage={require('./images/fijivintage.jpg')}
            bgImageAlt="blury anime girl with babygirl written at top"
            strength={200}>

            <div className="header-title2">Categories</div>
            <div className="card-wrapper">

                <div className="card">
                    <img src={Space} alt="girl in space" className="image"/>
                    <div className="overlay">
                    <p className="text">
                        <Button className="btn btn-secondary" href="#">View The Latest Fashion List</Button>
                         </p>
                    </div>
                </div>


                <div className="card">
                    <img src={Gamer} alt="girl next to arcade" className="image"/>
                    <div className="overlay">
                    <p className="text">
                        <Button className="btn btn-secondary" href="#">View Our Favorite Games</Button>
                         </p>
                    </div>
                </div>


                <div className="card">
                    <img src={Vender} alt="girl by vending machine" className="image"/>
                    <div className="overlay">
                    <p className="text">
                        <Button className="btn btn-secondary" href="#">View Our Community</Button>
                         </p>
                    </div>
                </div>
                </div>

           
            <div style={{ height: '100px' }} />
        </Parallax>
 
    </div>
    )
};

export default MyComponent;