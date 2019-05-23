import React, { Component } from 'react';
import './App.css';
import Lead from './Lead/Lead';

class App extends Component  {
  state = {
    leads: [
      {name: 'Carol', age: 23},
      {name: 'Subham', age: 22},
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      leads: [
        {name: newName, age: 23},
        {name: 'I am Ironman', age: 22},
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      leads: [
        {name: event.target.value, age: 23},
        {name: 'I am inevitable', age: 22},
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Lead Monitoring Application</h1>
        <h2>CRM</h2>
        <button onClick={ () => this.switchNameHandler('Carolina')}>Switch</button>
        <table>
          <tbody>
            <Lead
              name={this.state.leads[0].name}
              age={this.state.leads[0].age}
              click={this.switchNameHandler.bind(this, 'Karolinksa')}
              changed={this.nameChangedHandler}>
            </Lead>
            <Lead
              name={this.state.leads[1].name}
              age={this.state.leads[1].age}>
              Hobbies: computer programming
            </Lead>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
