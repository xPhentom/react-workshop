import React, { Component } from 'react'
import MovieCards from './movieCards'
import { Container, Row } from 'react-bootstrap'
import MovieSearchbar from './movieSearchbar'

interface IState {
    movies: Array<any>
}

export default class Dashboard extends Component<any, IState> {

    /* 
    To share data between two components, the parent class has to be able to talk to them both with the correct information
     onSearch will change the state of this component, which will then be passed to MovieCards.
     The state gets updated and movieCards gets rerendered with the movies data
    */
   
    constructor(props: any) {
        super(props)
        this.state = { movies: [] }
    }

    render() {
        return (
            <Container>
                <br />
                <Row>
                    <MovieSearchbar onSearch={(x: any) => this.setState({ movies: x.Search })} />
                </Row>
                <Row>
                    <MovieCards metadata={this.state.movies} />
                </Row>
            </Container>)
    }
}