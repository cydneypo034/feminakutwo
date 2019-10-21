import React from 'react';


class CreateUser extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            cityAndState: '',
            age: '',
            socialMedia: ''
        }

        this.onChangeName = this.onChangeName.bind(this)
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default CreateUser;