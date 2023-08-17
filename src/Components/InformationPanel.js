import React from "react";
import "./InformationPanel.css";
export default class InformationPanel extends React.Component {
   render(){
    const information=`Name : ${this.props.submittedInfo.name}
    Username :${this.props.submittedInfo.username}  
    Email :${this.props.submittedInfo.email}    
    Phone No :${this.props.submittedInfo.phone} 
    Birthdate :${this.props.submittedInfo.dob}  
    Address : ${this.props.submittedInfo.address}`; 
  return (
    <div id="myModal" className={this.props.panelClassName}>
      <div className="modal-content">
        <span className="close" onClick={this.props.onCloseClick}>
          &times;
        </span>
        <p style={{whiteSpace: "pre-line"}}>{information}</p>
      </div>
    </div>
  );
}
}