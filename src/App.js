import React, { Component } from "react";
import "./styles.css";

import Person from "./components/Person";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hobby: "skiing"
    };
  }

  updateHobbyHandler = e => {
    this.setState({
      hobby: e.target.value
    });
  };

  submitHandler = e => {
    alert(this.state.hobby);
  };

  render() {
    return (
      <div className="App">
        <Person name="Vas" age="25">
          My hobby is: {this.state.hobby}
        </Person>
        Change my hobby to:
        <form onSubmit={this.submitHandler}>
          <input type="text" onChange={this.updateHobbyHandler} />
          <button type="submit">Update hobby</button>
        </form>
      </div>
    );
  }
}

export default App;
