import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
      case "ADD_CONTACT":
        return {
          ...state,
          contacts: [action.payload, ...state.contacts]
        };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Pranay",
        email: "pghiya@gmail.com",
        phone: "8483975222",
      },
      {
        id: 2,
        name: "Neha",
        email: "nghiya@gmail.com",
        phone: "9273534222",
      },
      {
        id: 3,
        name: "Rupesh",
        email: "rghiya@gmail.com",
        phone: "9637790222",
      },
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
