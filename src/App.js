import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import reducer from "./reducers";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const store = createStore(reducer, applyMiddleware(thunk, logger))

const App = ()=> {
  return (
    <div className="App">
      <Header />

      <main>
        <SmurfList/>
        <AddForm/>
      </main>
    </div>
  );
}

export default App;

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.