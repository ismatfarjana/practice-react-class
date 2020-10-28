import React from "react";
import SearchBar from "./SearchBar";
import "../App.css";
import Header from "./Header";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

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

  onVideoSelect = video => {
    // console.log("from the app", video);
    this.setState({ selectedVideo: video });
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
          {/* <p>{this.state.videos.length} videos found on search</p> */}
          {/* we haveto give the vidooList the list of video object we fetched from the api as props video */}
          <div className="bodypart">
            <VideoDetails video={this.state.selectedVideo} />
            <VideoList
              onVideoSelect={this.onVideoSelect}
              videos={this.state.videos}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
