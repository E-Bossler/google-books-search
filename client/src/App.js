import React from 'react';
import './App.css';
import test from './utils/api';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SavedBooksPage from './pages/SavedBooks/savedbooks'
import SearchBooksPage from './pages/SearchBooks/searchbooks'

function testFun() {
  test.getAll().then(
    result => {
      console.log(result)
    }
  )
}

function App() {
  testFun();
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
