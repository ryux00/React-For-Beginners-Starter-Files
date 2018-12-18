import React from "react";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./editFishForm";
import PropTypes from "prop-types";

class Inventory extends React.Component {
  static propTypes = {
    fishes: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      status: PropTypes.string,
      desc: PropTypes.string,
      price: PropTypes.number
    }),
    loadSampleFishes: PropTypes.func,
    updateFish: PropTypes.func,
    deleteFish: PropTypes.func
  };
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(key => (
          <EditFishForm
            fish={this.props.fishes[key]}
            key={key}
            index={key}
            updateFish={this.props.updateFish}
            deleteFish={this.props.deleteFish}
          />
        ))}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>
          Load Sample Fishes
        </button>
      </div>
    );
  }
}

export default Inventory;
