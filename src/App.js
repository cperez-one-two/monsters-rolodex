import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
   constructor() {
      super();
      this.state = {
         monsters: [],
         searchField: "",
      };

      // Allows `this` to be used in our `handleChange` function
      // Arrow function syntax allows you to skip this step
      //this.handleChange = this.handleChange.bind(this);
   }

   componentDidMount() {
      fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
         res.json().then((user) => this.setState({ monsters: user }))
      );
   }

   handleChange = (e) => {
      this.setState({ searchField: e.target.value });
   }

   render() {
      const { monsters, searchField } = this.state;
      const filteredMonsters = monsters.filter((monster) =>
         monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
      return (
         <div className="App">
            <h1>Monsters Rolodex</h1>
            <SearchBox
               placeholder="Search monsters..."
               handleChange={this.handleChange}
            />
            <CardList monsters={filteredMonsters} />
         </div>
      );
   }
}

export default App;
