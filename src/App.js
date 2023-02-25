import { Component } from 'react';
import './App.css';


class App extends Component {
    constructor(){
      super();


      this.state = {
       monsters : [],
      };
    }

    componentDidMount() {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((response)  => response.json())
      .then((users) =>
      this.setState(
        () => {
          return {monsters : users};
        },
        () => {
          console.log(this.state);
        }
      )

      )
    }

    render() {
      return (
        <div className="App">
          <input
           className="search-box"
           type="search"
            placeholder="search monsters :/ "
            onChange={(event) => {
              // logs the input value to the console
              console.log(event.target.value);
              // set the value to a lower case so its not case sensitive
              const searchString = event.target.value.toLocaleLowerCase();
              // filters the data from the input value eg if the input value contains "a" and the starting value of the monsters name start with "a" its returns the monster name
              const filteredStrings = this.state.monsters.filter((monster) => {
               return monster.name.toLocaleLowerCase().includes(event.target.value)
              });
              // assigning the monsters data to the filter code
              this.setState(() =>{
                return { monsters : filteredStrings}
              })
            }}
           />
          {this.state.monsters.map(monster => (
        <div key={monster.id}>
          <h1>{monster.name}</h1>
        </div>
      ))}
        </div>
      )
      }
  }


export default App;
