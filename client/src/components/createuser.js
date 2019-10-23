import React from 'react';
import Axios from 'axios';
import {MDBBtn, MDBIcon } from "mdbreact";

class CreateUsers extends React.Component {

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this)
        this.onChangeCityAndState = this.onChangeCityAndState.bind(this)
        this.onChangeAge = this.onChangeAge.bind(this)
        this.onChangeSocialMedia = this.onChangeSocialMedia.bind(this)
        this.handleSubmitInput = this.handleSubmitInput.bind(this)

        this.state = {
            name: ' ',
            cityAndState: ' ',
            age: 0,
            socialMedia: ' ',
        }
    }
    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }
    onChangeCityAndState(e) {
        this.setState({
            cityAndState: e.target.value
        })
    }
    onChangeAge(e) {
        this.setState({
            age: e.target.value
        })
    }
    onChangeSocialMedia(e) {
        this.setState({
            socialMedia: e.target.value
        })
    }

    handleSubmitInput = (event) => {
        event.preventDefault();

        console.log(`Form submitted:`)

        //for using axios to grab the data from the api
        const myNewUser = {
            name: this.state.name,
            cityAndState: this.state.cityAndState,
            age: this.state.age,
            socialMedia: this.state.socialMedia,
        };

        Axios.post('/api/user', myNewUser)
        .then(res => console.log(res.data))


        this.setState({
            name: '',
            cityAndState: '',
            age: 0,
            socialMedia: ''
        })

        this.props.history.push('/user');

    }

    render() {
        return (
            <div >
            <section className="hero is-md has-bg-img5">
            <div className="hero-body">
                <div className="">

                <form onSubmit={this.handleSubmitInput}>
                    <p className="create-subtitle">Enter your Info <br/>to Join our Community!</p>
                    <label className="createpage-subtitle">Your Name</label>
                    <input type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                            />
                    <br />
                    <label className="createpage-subtitle">Give Your City And State</label>
                    <input type="text"
                            className="form-control"
                            value={this.state.cityAndState}
                            onChange={this.onChangeCityAndState}
                            />
                    <br />
                    <label className="createpage-subtitle">Age</label>
                    <input type="text"
                            className="form-control"
                            value={this.state.age}
                            onChange={this.onChangeAge}
                            />
                    <br />
                    <label className="createpage-subtitle">What's Your Social Media?</label>
                    <input type="text"
                            className="form-control"
                            value={this.state.socialMedia}
                            onChange={this.onChangeSocialMedia}
                            />
                    <div className="text-left mt-4">
                         <MDBBtn gradient="purple" type="submit" value="submit">
                                Send
                                <MDBIcon far icon="paper-plane" className="ml-2" />
                            </MDBBtn>
                            </div>
                        </form>
                        </div>
                        </div>
                        </section>
            </div>
        )
    }
}
export default CreateUsers;