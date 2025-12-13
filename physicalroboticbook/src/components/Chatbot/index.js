import React, { useState } from 'react';
import styles from './styles.module.css';
import { sendMessage } from '../../services/chat';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [context, setContext] = useState(null);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleSend = async () => {
        if (input.trim() === '') return;

        const userMessage = { text: input, sender: 'user' };
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        setInput('');
        
        const data = await sendMessage(input, context);
        setContext(null); // Reset context after sending

        const botMessage = { text: data.response || 'Sorry, I could not get a response.', sender: 'bot' };
        setMessages([...newMessages, botMessage]);
    };

    const handleUseSelectedText = () => {
        if (typeof window !== 'undefined') {
            const selectedText = window.getSelection().toString();
            if (selectedText) {
                setContext(selectedText);
                setMessages([...messages, { text: `Using selected text as context: "${selectedText.substring(0, 50)}..."`, sender: 'system' }]);
            }
        }
    };

    return (
        <div className={styles.chatbotContainer}>
            <button className={styles.chatButton} onClick={toggleChat}>
                Chat
            </button>
            {isOpen && (
                <div className={styles.chatWindow}>
                    <div className={styles.chatHeader}>
                        <h2>Chat with our AI</h2>
                        <button onClick={handleUseSelectedText} className={styles.contextButton}>Use Selected Text</button>
                    </div>
                    <div className={styles.chatMessages}>
                        {messages.map((msg, index) => (
                            <div key={index} className={`${styles.message} ${styles[msg.sender]}`}>
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <div className={styles.chatInput}>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            
                            placeholder="Ask a question..."
                        />
                        <button onClick={handleSend}>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;

