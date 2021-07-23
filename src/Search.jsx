import React from "react";

class Search extends React.Component {
  render() {
    return (
      <div>
        <p>Showing {this.props.noOfMovies} movies from the database</p>
        <button type="button" class="btn btn-primary mb-4">
          New
        </button>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Search..."
            onChange={(e) => {
              this.props.recieveSearchParam(e.currentTarget.value);
              console.log(e.currentTarget.value);
            }}
          />
        </div>
      </div>
    );
  }
}

export default Search;
