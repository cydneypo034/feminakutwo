import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter} from "mdbreact";

function Footer() {
  return (
    <MDBFooter color="black" className="font-small pt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
          <h5 className="footer-subtitle">Our Headquarters</h5>
          <ul>
            <li className="list-unstyled">
              444 Cambridge Highway <br />
              Tampa, FL 30798 <br/>
              333 x 330 x 2948
            </li>
          </ul>
          </MDBCol>




          <MDBCol md="6">
            <h5 className="footer-subtitle">Quick Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">FAQ's</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Privacy Policy</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Terms of Agreement</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Collaboration</a>
              </li>
            </ul>

          


          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="#!"> Feminaku.com</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;