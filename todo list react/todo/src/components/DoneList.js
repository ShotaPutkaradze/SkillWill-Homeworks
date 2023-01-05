import React, { Component } from "react";
import "./DoneList.css";

class DoneList extends Component {
  render() {
    return (
      <div className="donelist_container">
        <h3>done: {this.props.tasks}</h3>
      </div>
    );
  }
}
export default DoneList;
