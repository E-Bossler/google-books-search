import React, { Component } from 'react';
import './App.css';
import api from './utils/api';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SavedBooksPage from './pages/SavedBooks/savedbooks'
import SearchBooksPage from './pages/SearchBooks/searchbooks'


// function testFun() { 
//   api.getAll().then(
//     result => {
//       console.log(result.data[0].hi)
//     }
//   )
// }

function App() {
  // testFun();
  return (
    <Router>
      <Switch>
        <Route
          exact path="/"
          component={SearchBooksPage}
        >
        </Route>
        <Route
          exact path="/saved"
          component={SavedBooksPage}
        >
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
