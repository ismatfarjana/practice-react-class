import React from "react";
import SearchBar from "./SearchBar";
import "../App.css";
import Header from "./Header";

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <div>
          <Header />
        </div>
        <div>
          <h2>Practice React: Youtube</h2>
          <SearchBar />
        </div>
      </div>
    );
  }
}

export default App;
