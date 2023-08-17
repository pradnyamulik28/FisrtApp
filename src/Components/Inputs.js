import React from "react";
import TextArea from "./TextArea";
import TextInput from "./TextInput";
export default class Inputs extends React.Component {
  render() {
    if (this.props.type === "text" || this.props.type === "date") {
      return (
        <TextInput
          id={"ti" + this.props.id}
          name={this.props.name}
          type={this.props.type}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.onChange}
        />
      );
    } else if (this.props.type === "textarea") {
      return (
        <TextArea
          id={"ta" + this.props.id}
          name={this.props.name}
          type={this.props.type}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.onChange}
        />
      );
    }
  }
}
