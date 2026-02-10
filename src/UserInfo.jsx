import React, { Component } from 'react';
//Creating a class to display user information and a random lucky number
class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Melanie Caines",
      profession: "Full Time Territory Sales Manager, CS Student, and Dog Mom "
    };
  }

  render() {
    const luckyNumber = Math.floor(Math.random() * 250); //generating a random lucky number between 0 and 249

    return (
      <div style={{ border: '2px solid black', padding: '10px', marginTop: '10px' }}>
        <h2>User Profile</h2>
        <p>Name: {this.state.name}</p>
        <p>Profession: {this.state.profession}</p>
        <p>Your lucky number is {luckyNumber}</p>
      </div>
    );
  }
}

export default UserInfo;