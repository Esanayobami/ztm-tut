import { Component } from 'react';
import './App.css';


class App extends Component {
    constructor(){
      super();
      this.state = {
       monster : [
       {
        name: "dicey",
        id: "1233a"
       },
       {
        name: "hulk",
        id: "1233ab"
       },
       {
        name: "ghost",
        id: "1233cs"
       },{
        name: "kylian",
        id: "1233abs"
       },
       {
        name: "ronaldo",
        id: "2990dj"
       }
       ]
      }
    }

    render() {
      return (
        <div className="App">
       {this.state.monster.map((monster)=>{
         return <div key={monster.id} > 
          <h1>{monster.name}</h1>;
         </div>
         })}
        </div>
      )
      }
  }


export default App;
