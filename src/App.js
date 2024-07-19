import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatGPTComponent from './Components/ChatGPTComponent';
import Home from "./Components/Home";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/chatgpt" element={<ChatGPTComponent />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
