import React, { useState } from 'react';
import styles from './styles.module.css';
import { sendMessage } from '../../services/chat';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [context, setContext] = useState(null);
    const [isLoading, setIsLoading] = useState(false); // New loading state

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleSend = async () => {
        if (input.trim() === '') return;

        const userMessage = { text: input, sender: 'user' };
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        setInput('');
        setIsLoading(true); // Set loading to true

        try {
            const data = await sendMessage(input, context);
            setContext(null); // Reset context after sending

            const botMessage = { text: data.response || 'Sorry, I could not get a response.', sender: 'bot' };
            setMessages([...newMessages, botMessage]);
        } catch (error) {
            console.error("Error sending message:", error);
            setMessages([...newMessages, { text: "Error: Could not send message.", sender: 'system' }]);
        } finally {
            setIsLoading(false); // Set loading to false
        }
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
            <div className={styles.chatTrigger}>
                <span className={styles.chatTriggerText}>Ask AI</span>
                <button className={styles.chatButton} onClick={toggleChat}>
                    {/* Icon based chat button - using a placeholder for now */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M0 0h24v24H0V0z" fill="none"/>
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
                    </svg>
                </button>
            </div>
            {isOpen && (
                <div className={styles.chatWindow}>
                    <div className={styles.chatHeader}>
                        <h2>Chat with our AI</h2>
                        <button onClick={handleUseSelectedText} className={styles.contextButton}>Use Selected Text</button>
                        <button onClick={toggleChat} className={styles.closeButton}>×</button>
                    </div>
                    <div className={styles.chatMessages}>
                        {messages.map((msg, index) => (
                            <div key={index} className={`${styles.message} ${styles[msg.sender]}`}>
                                {msg.text}
                            </div>
                        ))}
                        {isLoading && (
                            <div className={`${styles.message} ${styles.bot}`}>
                                <div className={styles.loadingDots}>
                                    <span>.</span><span>.</span><span>.</span>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={styles.chatInput}>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}

                            placeholder="Ask a question..."
                            disabled={isLoading} // Disable input while loading
                        />
                        <button onClick={handleSend} disabled={isLoading}>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
