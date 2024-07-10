import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../page/landingPage.jsx';
import DocPage from '../page/docPage.jsx';

const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/dokumentasiKKN85UAJY" element={<DocPage />}/>
            </Routes>
        </Router>
    );
}

export default Routing;
