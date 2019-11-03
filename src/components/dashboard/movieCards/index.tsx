import React, { Component } from 'react'
import { Button, Card, CardColumns } from 'react-bootstrap'

// The props interface tells our parent component what properties we will be accepting in this component
interface IProps {
    metadata: Array<any>
}

// You can tell a component what type of props and state it can have. This component does not have a state, so we just pass in the props
export default class MovieCards extends Component<IProps, any> {

    // We go over the metadata given by our parent component and fill in the cards
    cards = () => {
        return this.props.metadata.map((data: any) => <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={data.Poster} />
            <Card.Body>
                <Card.Title>{data.Title} - {data.Year}</Card.Title>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>)
    }
    
    render() {
        return <>{this.props.metadata.length ? <CardColumns>{this.cards()}</CardColumns> : 'Rendering movie posters'}</>
    }
}