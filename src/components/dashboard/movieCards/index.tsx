import React, { Component } from 'react'
import { Button, Card } from 'react-bootstrap'

/* 
An interface which blueprints the state we would like to have in our component.
This will get passed to our component later on
*/
interface IState {
    metadata: []
}

// You can tell a component what type of props and state it can have. In here, we currently only pass what state it can have.
export default class MovieCards extends Component<any, IState> {

    // Upon creating the component MovieCards, we would like to have an empty array as state. This will be filled in later 
    constructor(props: any) {
        super(props)
        this.state = {
            metadata: []
        }
    }

    /* 
    JavaScript used to have issues with loading data into your application. It would cause you to do nothing else until the data is loaded.
    This has been changed by introducing async functions. Whatever is in the async function will not stop other code from doing their thing.
    In here we just tell our code to wait for a response coming from the API, then convert it to json and return it as a response.
    */
    callOMDBApi = async () => {
        let data = await fetch('http://www.omdbapi.com/?s=pet&type=movie&apiKey=bc3e1659')
        let response = await data.json()
        return response
    }

    /* 
    componentDidMount is part of a React component lifecycle. It's basically whenever we're done loading the component.
    https://reactjs.org/docs/react-component.html
    Whenever this happens, we would like to fetch some data to fill in the array of metadata in our state and then show that data on screen.
    callOMDBApi is an asynchronous function, so we should add the '.then' part after it. Basically this means that whenever
    the data is filled in, we take that response and set it to our state.
    */
    componentDidMount = () => {
        this.callOMDBApi().then(data => this.setState({ metadata: data.Search })).then(x => console.log(this.state.metadata))
    }

    // Just to make the render function a bit more readable, this function goes over all of the metadata and creates cards out of it
    cards = () => {
        return this.state.metadata.map((data: any) => <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={data.Poster} />
            <Card.Body>
                <Card.Title>{data.Title} - {data.Year}</Card.Title>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>)
    }

    /*
    The render method of a component expects only one element to be returned. As you can tell, we want to show multiple cards.
    This is where React.Fragment comes in handy (shorter written as <></>). It let's you write multiple children in one element in a very readable and clean way
    
    In the return method, you also see the usage of &&, which is conditional rendering in React.
    It says that if our array is empty, it should not execute cards, if there is data in it, please render the cards.
    In JS, this will just return the first value if falsy and the second value if the first value is truthy.
    return [].length && 'test' => 0 ; return ['test'].length && 'test' => 'test'
    This could later on be changed with the ternary operator to return a more verbose response like 'Loading moviecards'
    */
    render() {
        console.log(this.state.metadata)
        return <>{this.state.metadata.length && this.cards()}</>
    }
}