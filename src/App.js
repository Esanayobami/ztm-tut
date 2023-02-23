import { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
    constructor(){
      super();
      this.state = {
        name : "dicey",
        age: 17,
        stack : "Frontend developer",
        country: "Nigeria"
      }
    }

    render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              hi i'm  {this.state.name} , a {this.state.age} year old {this.state.stack} from {this.state.country}
            </p>
            <button
            onClick={ ()=> this.setState({name : "elijah"})}
            > Change name</button>
          </header>
        </div>
      )
      }
  }


export default App;
