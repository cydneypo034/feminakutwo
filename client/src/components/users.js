import React from 'react';
import Axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardTitle,  MDBCardText,  } from "mdbreact";


class Reviews extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        Axios.get('/api/user')
        .then(res => {
            console.log(res)
            this.setState({ users: res.data })
        })
    }

    userList() {
        const User = props => (
           
            <MDBCard color="black" style={{ width: "21rem" , height: "20rem"}}>
            <MDBCardBody>
            <MDBCardTitle className="card-header-title">{props.user.name}</MDBCardTitle>
            <MDBCardText className="card-header-subtitle">
            City And State: {props.user.cityAndState} <br />
            age: {props.user.age} <br />
            Social Media: {props.user.socialMedia}

            </MDBCardText>
            </MDBCardBody>
        </MDBCard>
        
        )
        return this.state.users.map(function(oneUser, i){
            return <User user={oneUser} key={i} />
        });
    }

    render(){
        return(
        <div>
            <section className="hero is-large has-bg-img2">
            <div className="header-title2">User Spotlight</div>
            
            
            <div className="card-wrapper">
            {this.userList()}
            
            </div>

            
            </section>
        </div>
        )
        }
}

export default Reviews;