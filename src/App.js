import React, { useState } from 'react';
import { mockApiResponse } from './mockApi';
import './App.css';

function App() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input) return;

        // Add user message
        setMessages((prev) => [
            ...prev,
            { text: input, sender: 'user', time: new Date().toLocaleTimeString() },
        ]);

        // Get bot response
        const response = await mockApiResponse(input);
        setMessages((prev) => [
            ...prev,
            { text: response.reply, sender: 'bot', time: new Date().toLocaleTimeString() },
        ]);

        // Clear input
        setInput('');
    };

    return (
        <div className="chat-box">
            <div className="messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}-message`}>
                        {msg.text}
                        <span className="timestamp">{msg.time}</span>
                    </div>
                ))}
            </div>
            <form className="input-form" onSubmit={handleSend}>
                <input
                    className="input-box"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                />
                <button className="send-button" type="submit">Send</button>
            </form>
        </div>
    );
}

export default App;
