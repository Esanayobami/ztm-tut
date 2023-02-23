import { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
    constructor(){
      super();
      this.state = {
        name : {firstName : "Esan" , lastName : "Elijah"},
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
              hi i'm  {this.state.name.firstName} {this.state.name.lastName} , a {this.state.age} year old {this.state.stack} from {this.state.country}
            </p>
            <button
            onClick={ ()=> this.setState(
              () => {
                return{
                  name : {firstName : "dicey" , lastName : "codes"}
                };
              })
            }
            > Change name</button>
          </header>
        </div>
      )
      }
  }


export default App;
