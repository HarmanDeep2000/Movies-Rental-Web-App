import React from "react";

class Category extends React.Component {
  state = {
    allGenre: ["Action", "Comedy", "Romance", "Thriller", "Horror"],
    currGenre: "All Genre",
  };

  componentDidMount() {
    //api call(msg bhejna=> get wala)
    fetch("/genre")
      .then(function (res) {
        return res.json();
      })
      .then((json) => {
        this.setState({ allGenre: json });
      });
  }

  render() {
    return (
      <ul class="list-group">
        <li
          class="list-group-item"
          key="allgenre"
          onClick={() => {
            this.props.recieveCurrGenre("All Genre");
          }}
        >
          All Genres
        </li>
        {this.state.allGenre.map((el) => {
          return (
            <li
              class="list-group-item"
              key={el._id}
              onClick={() => {
                this.props.recieveCurrGenre(el.name);
              }}
            >
              {el.name}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Category;
