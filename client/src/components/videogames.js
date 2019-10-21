import React from 'react';
import Axios from 'axios';

class Games extends React.Component{

    constructor(props) {
        super(props)

        this.state = {
            games: []
        }
    }

    componentDidMount() {
        Axios.get('/api/games')
        .then(response => {
            console.log(response)
            this.setState({games: response.data})
        })
    }
    render(){
        return(
            <div>
                <ul>
                    {this.state.games.map(game => <li>{game.name}</li>)}
                </ul>
            </div>
        )
    }
}

export default Games;