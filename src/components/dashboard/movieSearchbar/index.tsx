import * as React from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'
import { callOMDBApi } from '../../../services/OMDBAPI'

interface IState {
    searchString: string
}

interface IProps {
    onSearch: any
}

export default class MovieSearchbar extends React.Component<IProps, IState>{

    constructor(props: any) {
        super(props)
        this.state = {
            searchString: 'avengers'
        }
    }

    // When you change something in the input field, we want the state to be updated.
    // This way we always know what the user is typing
    changeSearchString = (e: React.FormEvent<any>) => {
        this.setState({ searchString: e.currentTarget.value })
    }

    // When we on search, we want to call the OMDB API and give that data to our parent class
    clickSearch = () => {
        callOMDBApi(this.state.searchString).then((x: any) => this.props.onSearch(x))
    }

    // To not start with an empty screen, we give a default search result
    componentDidMount = () => {
        this.clickSearch()
    }

    render() {
        return (
            <>
                <InputGroup className="mb-3">
                    <FormControl onChange={(e: React.FormEvent<any>) => this.changeSearchString(e)} />
                    <InputGroup.Append>
                        <Button variant="primary" onClick={(e: React.MouseEvent) => this.clickSearch()}>
                            Search for movies
                            </Button>
                    </InputGroup.Append>
                </InputGroup>
            </>
        )
    }
}