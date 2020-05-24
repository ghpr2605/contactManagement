import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layouts/TextInputGroup";
import axios from "axios";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {},
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    if (name === "") {
      this.setState({ errors: { name: "NAME IS REQUIRED" } });
      return;
    }

    if (email === "") {
      this.setState({ errors: { email: "E-MAIL IS REQUIRED" } });
      return;
    }

    if (phone === "") {
      this.setState({ errors: { phone: "PHONE IS REQUIRED" } });
      return;
    }
    const newContact = {
      name,
      email,
      phone,
    };

    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      newContact
    );

    dispatch({ type: "ADD_CONTACT", payload: response.data });

    this.setState({ name: "", email: "", phone: "", errors: {} });

    this.props.history.push("/contacts");
  };

  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name :"
                    name="name"
                    className="form-control form-control-lg"
                    placeholder="Please Enter Name...!!"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  ></TextInputGroup>
                  <TextInputGroup
                    label="Email :"
                    type="email"
                    name="email"
                    className="form-control form-control-lg"
                    placeholder="Please Enter Email...!!"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  ></TextInputGroup>
                  <TextInputGroup
                    label="Phone :"
                    type="text"
                    name="phone"
                    className="form-control form-control-lg"
                    placeholder="Please Enter Phone No....!!"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  ></TextInputGroup>
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
