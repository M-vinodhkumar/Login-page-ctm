import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '/src/App.jsx';

import {BrowserRouter, Route,Routes} from "react-router-dom"
import Success from './Success';
import Failed from './Failed';
import Signup from './Signup';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App/>}></Route>
    <Route path="/Success" element={<Success/>}></Route>
    <Route path="/Failed" element={<Failed/>}></Route>
    <Route path="/Signup" element={<Signup/>}></Route>
    </Routes>
    </BrowserRouter>
);
