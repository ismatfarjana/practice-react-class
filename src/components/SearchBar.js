import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };
  //not assigning a event handler after giving  a value to input will not let user to type anything in the searchbar-> we need onChange(this needs to be this name, its special,its a event callback so its need tobe an arrow function -> oninputchange we update the value of input )

  render() {
    return (
      <div ClassName="searchbbar">
        <form>
          <label>Search here</label>
          {/* //turn this to controlled input  */}
          <input
            type="text"
            value={this.state.term}
            onChange={this.onInputChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
