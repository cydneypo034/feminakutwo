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
            <MDBCard color="black" style={{ width: "21rem" , height: "50rem"}}>
            <MDBCardBody>
            <MDBCardImage className="card-image" src={props.shop.pictureURL} alt="photo of shop" height="100px" width="100px" />
            
            <MDBCardTitle className="card-header-title">{props.shop.name}</MDBCardTitle>
            <MDBCardText className="card-header-subtitle">
            Description: {props.shop.description} <br />
            Website: {props.shop.website} <br />
            Price Range: {props.shop.priceRange}

            </MDBCardText>
            <MDBBtn className="btn btn-secondary text-center" href="#!">View This Store</MDBBtn>
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
            <section className="hero is-large has-bg-img3">
            <div className="header-title2">Merch Spotlight</div>
            <p className="header-subtitle">Our space was made to be a safe one 
            where interests in other activities are kept in mind.</p>


            <div className="card-wrapper">
            {this.shopList()}
        </div>
        </section>
        </div>
    )
    }
    
}

export default Contact;