import { useState , useEffect } from "react"
import Cardlist from './components/card-list/card-list-component';
import SearchBox from './components/search-box/search-box-component';
import './App.css';


const App = () => {

  const [searchField , setSearchfield] = useState("");
  const [monsters ,setMonsters] = useState([]);
  const [filteredMonsters , setFilteredMonsters ] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users))
  }, [])

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })
    setFilteredMonsters(newfilteredMonsters)
  } , [monsters , searchField])


  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchfield(searchFieldString);
  };



  return(
    <div className="app">
      <h1 className="app-title">Monsters</h1>

      <SearchBox
        className="monsters-search-box"
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
        />

      <Cardlist monsters={filteredMonsters} />
    </div>
  )
}


export default App;
