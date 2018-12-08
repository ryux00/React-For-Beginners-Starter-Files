import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();
  goToStore = (event) => {
    event.preventDefault();
    const storename = this.myInput.value.value;
      // ${} es6 feature to concat string called Template literals (Template strings)
      // x = "test"
      // `abc_${x}`
      // abc_test
    this.props.history.push(`/store/${storename}`);
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter a store</h2>
        <input
          type="text"
          ref = {this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store ➡</button>
      </form>
    );
  }
}

export default StorePicker;
