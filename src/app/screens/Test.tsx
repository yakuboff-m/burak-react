// @ts-nocheck
import React, {} from "react";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  changeDetail = () => {
    this.setState({color: "blue", brand: "BMW", model: "M5", year: 2020});
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          Color: {this.state.color} - Model: {this.state.model} from {this.state.year}.
        </p>
        <button
          type="button"
          onClick={this.changeDetail}
        >Change detail</button>
      </div>
    );
  }
}

export default Test;