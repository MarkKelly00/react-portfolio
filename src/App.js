import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Carousels from './components/Carousel/Carousel';
import Header from "./components/Header/Header";
import CardBody from "./components/Card/Card";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
    return (
      <div>
        <Router>
        <Switch>
        <Route path='/' component={Header} />
        <Route path='/#portfolio' component={CardBody} />
        <Route path='/#contact' component={Contact} />
        </Switch>
      </Router>
    <Carousels />
    <CardBody />
    <Contact />
    <Footer />
    </div>
    );
}

export default App;
