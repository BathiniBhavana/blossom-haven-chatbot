// src/App.js
import React, { useState } from 'react';
import { mockApiResponse } from './mockApi'; // Import the mock API

function App() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    const handleSend = async () => {
        if (input) {
            // Add user message to state
            setMessages((prev) => [...prev, { text: input, sender: 'user' }]);
            setInput('');

            // Simulate API call
            const response = await mockApiResponse(input);
            // Add the mock API response to state
            setMessages((prev) => [...prev, { text: response.reply, sender: 'bot' }]);
        }
    };

    return (
        <div>
            <h1>Chatbot</h1>
            <div>
                {messages.map((msg, index) => (
                    <div key={index} className={msg.sender}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
            />
            <button onClick={handleSend}>Send</button>
        </div>
    );
}

export default App;
