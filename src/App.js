import React from "react";
import Header from "./components/Header";
import CardBody from "./components/Card";
import ContactForm from "./components/Contact";
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
    return (
        <div>
    <Header />
    <CardBody />
      <Router>
        <Route path='/' component={Header} />
        <Route path='/portfolio' component={CardBody} />
        <Route path='/contact' component={ContactForm} />
      </Router>
    </div>
    );
}

export default App;
