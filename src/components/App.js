import React from "react";
import SearchBar from "./SearchBar";
import "../App.css";
import Header from "./Header";
import youtube from "../apis/youtube";

class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = async term => {
    // console.log(term);
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    console.log(response);
    // response.data.items;
    this.setState({
      videos: response.data.items, // the list of videos
      selectedVideo: response.data.items[0] //setting one video on video player
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
          <p>{this.state.videos.length} videos found on search</p>
        </div>
      </div>
    );
  }
}

export default App;
