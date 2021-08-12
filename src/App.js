import React from "react";
import Navbar from "./Navbar";
import Category from "./Category";
import Search from "./Search";
import Table from "./Table";

class App extends React.Component {
  state = {
    noOfMovies: 0,
    searchString: "",
    currGenre: "All Genre",
  };

  recieveMovieData = (number) => {
    this.setState({ noOfMovies: number });
  };

  recieveSearchParam = (param) => {
    this.setState({ searchString: param });
  };

  recieveCurrGenre = (genre) => {
    this.setState({ currGenre: genre });
  };

  render() {
    return (
      <React.Fragment>
        
        <div className="row">
          <div className="col-2 p-4">
            <Category recieveCurrGenre={this.recieveCurrGenre} />
          </div>
          <div className="col-10 p-4">
            <div className="row">
              <div className="col-3">
                <Search
                  noOfMovies={this.state.noOfMovies}
                  recieveSearchParam={this.recieveSearchParam}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-8">
                <Table
                  sendData={this.recieveMovieData}
                  searchString={this.state.searchString}
                  currGenre={this.state.currGenre}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
