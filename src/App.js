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
    // console.log(e.target.value)
    // CALL this.setState here and update the hobby :)
  };

  render() {
    return (
      <div className="App">
        <Person name="Vas" age="25">
          My hobby is: {this.state.hobby}
        </Person>
        Change my hobby to:
        <form>
          <input type="text" onChange={this.updateHobbyHandler} />
          <button type="submit">Update hobby</button>
        </form>
      </div>
    );
  }
}

export default App;
