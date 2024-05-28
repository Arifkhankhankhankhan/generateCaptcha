import React, { useState } from 'react';
import './App.css';

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateCaptcha() {
    let captcha_gen = "";
    for (let i = 0; i < 6; i++) {
        captcha_gen += chars[Math.floor(Math.random() * chars.length)];
    }
    return captcha_gen;
}

function App() {
    const [captcha, setCaptcha] = useState(generateCaptcha());
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = () => {
        if (inputValue.trim() === captcha) {
            alert("Captcha is Matched");
        } else {
            alert("Captcha is not Matched");
        }
    };

    const handleRefresh = () => {
        setCaptcha(generateCaptcha());
    };

    return (
        <div className="container">
            <div className="header">
                <h1>Captcha Generator</h1>
            </div>
            <div className="captcha">
                {captcha}
            </div>
            <div className="input">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter your Captcha Value"
                />
            </div>
            <div className="buttons">
                <button onClick={handleSubmit}>
                    Submit
                </button>
                <button onClick={handleRefresh}>
                    Refresh
                </button>
            </div>
        </div>
    );
}

export default App;

