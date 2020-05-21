import React, { Component } from "react";
import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/AddContact";
import Header from "./components/layouts/Header";

import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header text="CONTACT MANAGER" />
          <div className="container">
            <AddContact></AddContact>
            <Contacts></Contacts>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
