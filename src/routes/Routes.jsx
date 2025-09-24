import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Header = lazy(() => import("../components/Header/Header"));
const CardBody = lazy(() => import("../components/Card/Card"));
const Contact = lazy(() => import("../components/Contact/Contact"));

function AppRoutes() {
    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Suspense fallback={<div>Loading Header...</div>}>
                            <Header />
                        </Suspense>
                    }
                />
                <Route
                    path="/portfolio"
                    element={
                        <Suspense fallback={<div>Loading Portfolio...</div>}>
                            <CardBody />
                        </Suspense>
                    }
                />
                <Route
                    path="/contact"
                    element={
                        <Suspense fallback={<div>Loading Contact...</div>}>
                            <Contact />
                        </Suspense>
                    }
                />
            </Routes>
        </div>
    );
}

export default AppRoutes;
