import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesConfig from '../../Components/RoutesConfig/RoutesConfig';
import Header from '../Header/Header.jsx';

function App() {
    return (
        <Router>
            <Header />
            <RoutesConfig />
        </Router>
    );
}

export default App;

