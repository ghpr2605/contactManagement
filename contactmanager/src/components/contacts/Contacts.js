import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="h4 mb-2">CONTACT LIST</h1>
              {contacts.map((contact) => (
                <Contact
                  key={contact.id}
                  contact={contact}
                ></Contact>
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
