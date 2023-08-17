import React from "react";
export default class TextArea extends React.Component {
  render() {
    return (
      <textarea
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
