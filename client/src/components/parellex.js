import React from 'react';
import { Parallax } from 'react-parallax';
import { MDBBtn } from "mdbreact";
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
            <p className="header-subtitle">Our space was made to be a safe one where interests in other activities are kept in mind.</p>
            <div className="card-wrapper">

            <div className="card">
                    <img src={Vender} alt="girl by vending machine" className="image"/>
                    <div className="text">
                    <MDBBtn gradient="purple" href="/user">View Our Community</MDBBtn>
                    </div>
                </div>

                <div className="card">
                    <img src={Space} alt="girl in space" className="image"/>
                    <div className="text">
                    <MDBBtn gradient="purple">View Our Fashion List</MDBBtn>
                    </div>
                    
                </div>


                <div className="card">
                    <img src={Gamer} alt="girl next to arcade" className="image"/>
                    <div className="text">
                    <MDBBtn gradient="purple">View Our Favorite Games</MDBBtn>
                    </div>
                </div>

                </div>

           
            <div style={{ height: '100px' }} />
        </Parallax>
 
    </div>
    )
};

export default MyComponent;