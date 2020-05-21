import React, { Component } from "react";
import { Consumer } from "../../context";
import { v4 as uuid } from "uuid";
class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    const newContact = {
      id: uuid(),
      name,
      email,
      phone,
    };

    dispatch({ type: "ADD_CONTACT", payload: newContact });

    this.setState({ name: "", email: "", phone: "" });
  };

  render() {
    const { name, email, phone } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <div className="form-group">
                    <label htmlFor="name">Name :</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control form-control-lg"
                      placeholder="Please Enter Name...!!"
                      value={name}
                      onChange={this.onChange}
                    ></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email :</label>
                    <input
                      type="text"
                      name="email"
                      className="form-control form-control-lg"
                      placeholder="Please Enter Email...!!"
                      value={email}
                      onChange={this.onChange}
                    ></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone :</label>
                    <input
                      type="text"
                      name="phone"
                      className="form-control form-control-lg"
                      placeholder="Please Enter Phone...!!"
                      value={phone}
                      onChange={this.onChange}
                    ></input>
                  </div>
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light btn-block"
                  ></input>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
