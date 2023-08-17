import React from "react";
export default class TextInput extends React.Component {
  render() {
    return (
      <input
        id={this.props.id}
        name={this.props.name}
        type={this.props.type}
        placeholder={this.props.placeholder}
        value={this.props.value}
        onChange={this.props.onChange}
      />
    );
  }
}
