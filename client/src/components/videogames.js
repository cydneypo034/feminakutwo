import React from 'react';
import Axios from 'axios';
import { MDBCard, MDBCardImage } from "mdbreact";


class Games extends React.Component {

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
                this.setState({ games: response.data })
            })
    }

    gameList() {
        const Game = props => (
            <MDBCard color="black" className="card-body" style={{ width: "22rem", marginTop: "1rem" }}>            
            <MDBCardImage className="card-image" src={props.game.picture} 
            alt="photo of shop" />
            </MDBCard>

        )
        return this.state.games.map(function (game, i) {
            return <Game game={game} key={i} />
        });
    }

    render() {
        return (
            <div>
                <section className="hero is-large has-bg-img4">
                    <div className="card-wrapper">
                        {this.gameList()}
                    </div>
                </section>
            </div>
        )
    }
}

export default Games;