import React from 'react';
import Axios from 'axios';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText } from "mdbreact";


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
            <MDBCard color="black" style={{ width: "21rem", height: "60rem" }}>
            <MDBCardBody>
            <MDBCardTitle className="card-header-title">{props.game.name}</MDBCardTitle>

                <MDBCardImage className="card-image" src={props.game.picture}
                    alt="photo of shop" height="100px" width="100px"/>
                    <MDBCardText className="card-header-subtitle">
                        <br />
                        Description: {props.game.description} <br/>
                        Price: {props.game.price} <br/>
                        Best Console To Play On: {props.game.bestConsolesToPlayOn} <br/>
                        Main Characters: {props.game.mainCharacters} <br/>
                        Genre: {props.game.genre} <br/>
                        Amount Of Levels: {props.game.amountOfLevels} <br/>
                        </MDBCardText>
                    
                </MDBCardBody>
                
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
                <div className="header-title2">Gaming Spotlight</div>
                    <div className="card-wrapper">
                        {this.gameList()}

                    </div>
                </section>
            </div>
        )
    }
}

export default Games;