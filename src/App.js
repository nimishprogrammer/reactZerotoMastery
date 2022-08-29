// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import CardList from './cardList/CardList';
import SearchBox from './searchBox/SearchBox';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      monsters :[],
      searchField: '',
    }

  }
//Fetching the user list from fake api
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((users) => this.setState(() => { 
      return {monsters: users}
    }
    )
  )
}

// Search Functionality
onSearchChange = (event) => {
  const searchField = event.target.value.toLowerCase();
  this.setState(() => {
    return {searchField};
  })

  }

  render() { 
    const filteredData = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchField)
    });
    return (
      <div className="App">
        <header className="App-header">
          <SearchBox onChangeHandler = {this.onSearchChange} placeholder = 'Search Monster' className='search-box'/>
           <CardList monsters = {filteredData}/>
        </header>
        <div>
        </div>
      </div>
    );
  }
}

export default App;
