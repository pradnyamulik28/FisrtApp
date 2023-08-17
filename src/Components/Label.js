import React from "react";
export default class Label extends React.Component{
    render()
    {
        return(<label id={this.props.id} >{this.props.labelname}</label>);

    }
}