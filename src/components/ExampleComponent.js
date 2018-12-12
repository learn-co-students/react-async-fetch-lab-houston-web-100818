import React, { Component } from 'react';
import Button from './Button'

class ExampleComponent extends Component {

  render() {
    return (
      <strong>
        {this.props.people.map((person, index) => {
          return <Button key={index} person={person} />;
        })}
      </strong>
    )
  }

}

export default ExampleComponent;
