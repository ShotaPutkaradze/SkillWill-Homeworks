import React, { PureComponent } from "react";
import "./DoneList.css";

class DoneList extends PureComponent {
  render() {
    console.log("DoneList Component");
    return (
      <div className="donelist_container">
        <h3>done: {this.props.tasks}</h3>
      </div>
    );
  }
}
export default DoneList;
