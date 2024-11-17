import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/Routes";
// import Carousels from "./components/Carousel/Carousel";
import CardBody from "./components/Card/Card";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
    return (
        <div>
            <Router>
                <AppRoutes />
            </Router>
            {/* <Carousels /> */}
            <CardBody />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
