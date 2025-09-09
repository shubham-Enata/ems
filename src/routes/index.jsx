import React, { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ProtectedRoute from "../utils/ProtectedRoute";

const Home = lazy(() => import("../pages/home"));
const Contact = lazy(() => import('../pages/contact'))
const Dealer = lazy(() => import('../pages/dealer'))
const Enquire = lazy(() => import('../pages/enquire'))
const DealerLocator = lazy(() => import('../pages/dealerLocator'))
const TermsAndConditions = lazy(() => import('../pages/policy/termscondition'))
const AboutUs = lazy(() => import('../pages/policy/aboutus'))
const PrivacyPolicy = lazy(() => import('../pages/policy/privacyPolicy'))
const FAQs = lazy(() => import('../pages/policy/faq'))
const Login = lazy(() => import('../pages/Auth/Login'))
const DashboardLayout = lazy(() => import('../pages/Auth/dashboard'));
const DealerMaster = lazy(() => import('../pages/Auth/dealerMaster'));
const AppRoutes = () => {
    return (
        <Suspense fallback={<div>Loading...!</div>}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/dealer" element={<Dealer />} />
                <Route path="/enquire" element={<Enquire />} />
                <Route path="/dealerLocator" element={<DealerLocator />} />
                <Route path='/terms-condition' element={<TermsAndConditions />} />
                <Route path='/about-us' element={<AboutUs />} />
                <Route path='/privacy-policy' element={<PrivacyPolicy />} />
                <Route path='/faqs' element={<FAQs />} />


                <Route path="/login" element={<Login />} />


                <Route
                    path="/admin"
                    element={
                        <ProtectedRoute>
                            <DashboardLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route index element={<DealerMaster />} />
                </Route>

                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
