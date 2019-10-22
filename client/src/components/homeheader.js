import React, { Fragment } from 'react';
import { MDBIcon, MDBBtn} from "mdbreact";

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
        </div>
    )
}

export default HomeHeader;