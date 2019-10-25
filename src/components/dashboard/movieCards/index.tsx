import React, { Component } from 'react'
import { Button, Card } from 'react-bootstrap'

interface IState {
    metadata: []
}

export default class MovieCards extends Component<any, IState> {

    constructor(props: any) {
        super(props)
        this.state = {
            metadata: []
        }
    }

    callOMDBApi = async () => {
        let data = await fetch('http://www.omdbapi.com/?s=pet&type=movie&apiKey=bc3e1659')
        let response = await data.json()
        return response
    }

    componentDidMount = () => {
        this.callOMDBApi().then(data => this.setState({ metadata: data.Search })).then(x => console.log(this.state.metadata))

    }

    cards = () => {
        return this.state.metadata.map((data: any) => <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={data.Poster} />
            <Card.Body>
                <Card.Title>{data.Title} - {data.Year}</Card.Title>
                
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>)
    }

    render() {
        console.log(this.state.metadata)
        return <>{this.state.metadata && this.cards()}</>
    }
}