import React from 'react';
import {Link} from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Welcome to IELTS Evaluator</h1>
            <p>This tool helps you evaluate your IELTS writing tasks.</p>
            <Link to="/chatgpt">Go to ChatGPT</Link>
        </div>
    );
}

export default Home;