import React from 'react';
import MainBody from "./components/MainBody";
import MainHeader from "./components/MainHeader";
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
    return (
        <Router>
            <MainHeader/>
            <MainBody/>
        </Router>
    );
}

export default App;
