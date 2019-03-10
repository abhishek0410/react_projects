import React, { Component } from "react";

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
    };
  }
  componentDidMount() {
    fetch("/api/customer")
      .then(res => res.json())
      .then(customers => this.setState({ customers }));
  }
  render() {
    return (
      <div className="App">
        {this.state.customers.map(customer => (
          <h1>{customer.firstName}</h1>
        ))}
      </div>
    );
  }
}

export default Customers;
