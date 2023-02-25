import { Component } from 'react';
import './App.css';


class App extends Component {
    constructor(){
      super();


      this.state = {
       monsters : [],
       searchString : " "
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

     onSearchMonster = (event) => {
      console.log(event.target.value);
      const searchString = event.target.value.toLocaleLowerCase();             
      this.setState(() =>{
        return {searchString }
      })
    }

    render() {
      const { searchString , monsters} = this.state;
      const { onSearchMonster } = this;
      const filteredStrings = monsters.filter((monster) => {
        return monster.name.toLocaleLowerCase().includes(searchString)
       });
      return (
        <div className="App">
          <input
           className="search-box"
           type="search"
          placeholder="search monsters :/ "
           onChange={onSearchMonster}
           />

          {filteredStrings.map(monster => (
        <div key={monster.id}>
          <h1>{monster.name}</h1>
        </div>
      ))}
        </div>
      )
      }
  }


export default App;
