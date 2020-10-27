import React from "react";
import SearchBar from "./SearchBar";
import "../App.css";
import Header from "./Header";
import youtube from "../apis/youtube";

class App extends React.Component {
  onTermSubmit = term => {
    // console.log(term);
    youtube.get("/search", {
      params: {
        q: term
      }
    });
  };

  render() {
    return (
      <div className="main">
        <div>
          <Header />
        </div>
        <div>
          <h2>Practice React: Youtube</h2>
          <SearchBar onSubmitForm={this.onTermSubmit} />
        </div>
      </div>
    );
  }
}

export default App;
