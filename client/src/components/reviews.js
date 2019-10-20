import React from 'react';
import axios from 'axios';

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

    render() {
        return (
        <div>
        <section className="hero is-large has-bg-img3">
             <ul>
                 
                 { this.state.productShops.map(productShop => <li>{productShop.description}</li>)}
             </ul>
        </section>
        </div>
    )
    }
    
}

export default Contact;