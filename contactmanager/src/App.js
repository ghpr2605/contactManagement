import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
import Header from "./components/layouts/Header";
import About from './components/pages/About';
import WelcomePage from './components/pages/WelcomePage';

import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NotFound from "./components/pages/NotFound";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header text="CONTACT MANAGER" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={WelcomePage}></Route>
                <Route exact path="/contacts" component={Contacts}></Route>
                <Route exact path="/contact/add" component={AddContact}></Route>
                <Route exact path="/contact/edit/:id" component={EditContact}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route component={NotFound}></Route>
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
