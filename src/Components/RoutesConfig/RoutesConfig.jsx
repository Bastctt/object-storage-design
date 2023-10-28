import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Acceuil from '../Accueil/Accueil.jsx'
function RoutesConfig() {
    return (
        <Routes>
            <Route path="/" element={<Acceuil/>} />
            <Route path="/General" />
            <Route path="/Archive" />
        </Routes>
    );
}

export default RoutesConfig;