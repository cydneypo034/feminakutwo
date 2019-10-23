import React, { Fragment } from 'react';
import { MDBIcon, MDBBtn} from "mdbreact";
import { Parallax } from 'react-parallax';
import Space from './images/spacegirl.jpg';
import Gamer from './images/videogame.jpeg';
import Vender from './images/vending.png';

function HomeHeader() {
    return (
        <div>
            
            <section className="hero is-fullheight has-bg-img">
            <div className="hero-body">
                <div className="container">
                <h1 className="header-title">
                    WELCOME TO FEMINAKU! <br />
                </h1>
                <h2 className="header-subtitle">
                May All The Magical Girls Arise!

                </h2>
                <Fragment>
                <div className="button-size">
              <MDBBtn gradient="purple" type="submit">
                NewsLetter Sign Up
                <MDBIcon far icon="paper-plane" className="ml-2" />
              </MDBBtn>
              </div>
              </Fragment>
                </div>
                </div>
            </section>

            <section className="hero is-medium is-dark is-bold">
            <div className="hero-body">
                <h1 className="header-title">
                    ALL ABOUT US..
                </h1>
                <h2 className="header-subtitle">
                Feminaku was founded in 2018 and is an upcoming social networking application 
                for wxmn who love all things anime. Feminaku is a combination 
                of the word feminine and otaku, a Japanese term for people with obsessive 
                interests, particularly in anime and manga. Feminaku 
                has a target audience of wxmn because there is a lack of communities geared solely 
                toward wxmn who love gaming and anime. We see Feminaku as a way to "bring all the magical girls to the table".
                We are a company that is LGBTQ+ - affirming, minority-based and ran by wxmn that continues to provide a safe space
                that's enjoyable, inclusive and engaging for all.
                </h2>
            </div>
            </section>

            <Parallax
            blur={10}
            bgImage={require('./images/fijivintage.jpg')}
            bgImageAlt="blury anime girl with babygirl written at top"
            strength={200}>
            
            <div className="header-title2">Categories</div>
            <p className="categories-subtitle">Our space was made to be a safe one where interests in other activities are kept in mind.</p>
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
                    <MDBBtn gradient="purple" href="/shops">View Our Fashion List</MDBBtn>
                    </div>
                    
                </div>


                <div className="card">
                    <img src={Gamer} alt="girl next to arcade" className="image"/>
                    <div className="text">
                    <MDBBtn gradient="purple" href="/videogames">View Our Favorite Games</MDBBtn>
                    </div>
                </div>

                </div>

           
            <div style={{ height: '100px' }} />
        </Parallax>
        </div>
    )
}

export default HomeHeader;