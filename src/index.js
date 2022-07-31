import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/globals.css'

import Home from './Home';
import Mint from './Mint';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="mint" element={<Mint />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
