import React from "react";
import Carousels from './components/Carousel/Carousel';
import Header from "./components/Header/Header";
import CardBody from "./components/Card/Card";
import ContactForm from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
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
    <Carousels />
    <CardBody />
    <ContactForm />
    <Footer />
    </div>
    );
}

export default App;
