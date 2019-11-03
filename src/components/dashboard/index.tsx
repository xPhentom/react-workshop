import React, {Component} from 'react'
import MovieCards from './movieCards'

export default class Dashboard extends Component {
    // In our dashboard, we would like to show some movie cards
    render(){
        return(<div><MovieCards/></div>)
    }
}