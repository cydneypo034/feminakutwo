import React from 'react';
import Axios from 'axios';

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
    render(){
        return(
        <div>
            <section className="hero is-large has-bg-img2">
            <div className="header-title2">User Spotlight</div>
            <ul>
        { this.state.users.map(user => <li>{user.name}</li>)}
      </ul>
            </section>
        </div>
        )
        }
}

export default Reviews;