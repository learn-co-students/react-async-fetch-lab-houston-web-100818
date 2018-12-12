import React from 'react'
import Greeting from './components/Greeting'
import ExampleComponent from './components/ExampleComponent'

export default class App extends React.Component {

    constructor() {
        super()
        this.state = {
            peopleInSpace: []
        }
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                peopleInSpace: data.people
            })
        })
    }

    render() {
        return (
            <div>
                <Greeting />
                <ExampleComponent people={this.state.peopleInSpace} />
            </div>
        )
    }
}