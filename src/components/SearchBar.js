import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div ClassName="searchbbar">
        <form>
          <label>Search here</label>
          <input type="text" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
