import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Landing from './components/layout/Landing';
import Insertion from './components/Insertion';
import './App.css';

 const App = () =>  (
  <Router>
    <Fragment>
      <Route exact path='/' component={ Landing } />
      <section className="container">
        <Switch>
          <Route exact path='/insertion' component={ Insertion } />
        </Switch>
      </section>
      <div className="footer">
          <p>This app created by Athanasios-Marios Georgakopoulos</p>
          <p>Project for Internet and Apps Course - ECE NTUA 2020</p>
      </div>
    </Fragment>   
  </Router>
 );


export default App;
