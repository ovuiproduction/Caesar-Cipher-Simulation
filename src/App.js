import React from 'react';
import {
    Link,
    Route,
    BrowserRouter as Router,
    Navigate,
    Routes
} from 'react-router-dom';
import CaesarCipher from './components/CaesarCipher';

export default function App(){
    return(
        <>
        <Router>
            <Routes>
                <Route exact path='/' element={<CaesarCipher />} />
            </Routes>
        </Router>
        </>
    )
}