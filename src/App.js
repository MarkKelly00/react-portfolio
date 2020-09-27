import React from "react";
import Header from "./components/Header";
import CardBody from "./components/Card";
import ContactForm from "./components/Contact";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return (
      <div>
        <Router>
        <Switch>
        <Route path='/' component={Header} />
        <Route path='/portfolio' component={CardBody} />
        <Route path='/contact' component={ContactForm} />
        </Switch>
      </Router>
    <CardBody />
    <ContactForm />
    </div>
    );
}

export default App;
