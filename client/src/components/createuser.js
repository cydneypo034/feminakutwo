import React from 'react';
import Axios from 'axios';

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

        this.props.history.push('/allusers');

    }

    render() {
        return (
            <div >
            
                <form className="this-form" onSubmit={this.handleSubmitInput}>
                    <label className="text-class">Name</label>
                    <input type="text"
                        className="form-control"
                        value={this.state.name}
                        onChange={this.onChangeName}
                    />
                    <label className="text-class">City and State</label>
                    <input type="text"
                        className="form-control"
                        value={this.state.cityAndState}
                        onChange={this.onChangeCityAndState}
                    />
                    <label className="text-class">Age</label>
                    <input type="number"
                        className="form-control"
                        value={this.state.age}
                        onChange={this.onChangeAge}
                    />
                    <label className="text-class">Social Media</label>
                    <input type="text"
                        className="form-control"
                        value={this.state.socialMedia}
                        onChange={this.onChangeSocialMedia}
                    />
                    <br></br>
                
                </form>
            </div>
        )
    }
}
export default CreateUsers;