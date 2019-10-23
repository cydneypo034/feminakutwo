import React from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';

class Shop extends React.Component {

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
            <MDBCard color="black" style={{ width: "21rem" , height: "50rem"}}>
            <MDBCardBody>
            <MDBCardTitle className="card-header-title">{props.shop.name}</MDBCardTitle>

            <MDBCardImage className="card-image" src={props.shop.pictureURL} 
            alt="photo of shop" height="100px" width="100px" />
            <br/>
            <MDBCardText className="card-header-subtitle">
            Description: {props.shop.description} <br />
            Website: {props.shop.website} <br />
            Price Range: {props.shop.priceRange}

            </MDBCardText>
            </MDBCardBody>
        </MDBCard>
        )
        return this.state.productShops.map(function(productShop, i){
            return <Shop shop={productShop} key={i} />
        });
    }



    render() {
        return (
        <div>
            <section className="hero is-large has-bg-img3">
            <div className="header-title2">Fashion Spotlight</div>


            <div className="card-wrapper">
            {this.shopList()}
        </div>
        </section>
        </div>
    )
    }
    
}

export default Shop;