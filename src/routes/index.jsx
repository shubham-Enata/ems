import React, { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

const Home = lazy(() => import("../pages/home"));
const Contact = lazy(() => import('../pages/contact'))
const Dealer = lazy(() => import('../pages/dealer'))
const Enquire = lazy(() => import('../pages/enquire'))
const DealerLocator = lazy(() => import('../pages/dealerLocator'))
const AppRoutes = () => {
    return (
        <Suspense fallback={<div>Loading...!</div>}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/dealer" element={<Dealer />} />
                <Route path="/enquire" element={<Enquire />} />
                <Route path="/dealerLocator" element={<DealerLocator />} />

                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
