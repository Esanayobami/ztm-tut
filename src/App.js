import { Component } from 'react';
import Cardlist from './components/card-list/card-list-component';
import SearchBox from './components/search-box/search-box-component';
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
          <h1 className='app-title' > Monsters :) </h1>
        <SearchBox 
        className="monsters-search-box"
        onChangeHandler={onSearchMonster}
        placeHolder="search monsters"
        />
        <Cardlist 
        monsters={filteredStrings}
        />
        </div>
      )
      }
  }


export default App;
