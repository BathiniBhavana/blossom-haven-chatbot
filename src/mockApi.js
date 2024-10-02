export const mockApiResponse = (message) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Customize the response
            let reply;
            if (message.toLowerCase() === 'hi') {
                reply = "Hello there! How can I assist you today?";
            } else {
                reply = `That's interesting! Tell me more about it.`;
            }
            resolve({ reply });
        }, 1000); // Simulate a delay of 1 second
    });
};
