import React from "react";

class Test extends React.Component {
    //one time
    //it was to create state
    constructor(props) {
    super(props);
    this.state = {
      a: 1,
    };

    console.log("constructor was called");
  }

  componentDidMount(a) {
    //one time
    //it was to do one time task
    //this will be ignored
    console.log("componentDidMount was called");
  }

  componentDidMount(x,y) {
    //one time
    //it was to do one time task
    console.log("componentDidMount was called 2");
  }

  componentDidUpdate() {
    //multiple times; after every re-render
    //it was to do somerhing after every re-render
    console.log("componentDidUpdate was called");
  }

  componentWillMount(){
    //one time
    //when component is just about to be removed from screen  
    //database close that connection
  }

  render() {
    console.log("render was called");
    return (
      <div>
        <p className="abc"></p>
        <button
          onClick={() => {
            //   document.querySelector(".abc").innerText = "changed"
            this.setState({ a: 2 });
          }}
        >
          Change state
        </button>
      </div>
    );
  }
}

export default Test;

// function someComponent(props){}
