import React, { Component } from 'react';
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Products from "./Products";



class App extends Component {



  render() {
    return (
      <Router>
   <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <h1 className="navbar-brand">SenseCart</h1>
        </nav>
      
  
      <Switch>
        <Route exact path="/"  component={Products} />
        </Switch>
  </div>
      </Router>
    );
  }
}

export default App;
