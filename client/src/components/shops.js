import React from 'react';
import axios from 'axios';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

class Contact extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            productShops: []
        }
    }

    componentDidMount() {
        axios.get('/api/products')
        .then(res => {
            console.log(res)
            this.setState( {productShops: res.data})
        })
    }

    shopList() {
        const Shop = props => (
           <MDBCol>
            <MDBCard style={{ width: "20rem" , height: "50rem"}}>
            <MDBCardBody>
            <MDBCardImage className="card-image" src={props.shop.pictureURL} alt="photo of shop" height="100px" width="100px" />
            
            <MDBCardTitle>{props.shop.name}</MDBCardTitle>
            <MDBCardText>
            {props.shop.description} <br />
            {props.shop.website} <br />

            </MDBCardText>
            <MDBBtn href="#">MDBBtn</MDBBtn>
            </MDBCardBody>
        </MDBCard>
        </MDBCol>
        )
        return this.state.productShops.map(function(productShop, i){
            return <Shop shop={productShop} key={i} />
        });
    }



    render() {
        return (
        <div>
            <div className="card-wrapper">
            {this.shopList()}
        </div>
        </div>
    )
    }
    
}

export default Contact;