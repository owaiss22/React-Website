import React from 'react';
//Bootstrap 5 Alpha
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
//Components
import Home from './components/Home';
import Service from './components/Service';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
//React-Router
import { Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;

