import React from "react";

class MainPage extends React.Component {
  //localhost:3000/user.json

  state = { usersDate: [] };

  componentDidMount() {
    fetch("/user.json")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(json);
        this.setState({ usersDate: json });
      });
  }

  render() {
    return <h1>Main Page</h1>;
  }
}

export default MainPage;
