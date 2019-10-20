// create your App component here
import React, {Component} from 'react'

export default class App extends Component{
  constructor(){
    super()
    this.state={
      peopleInSpace:[]
    }
  }

  componentDidMount(){
    this.fetchPeopleInSpace()
  }

  fetchPeopleInSpace = () =>{
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(({ people }) => this.setState({ peopleInSpace: people }))

  }

  render(){
    return(
      <div>
        {this.state.peopleInSpace.map(person => (<h1>{person.name}</h1>))}
      </div>
    )
  }
}