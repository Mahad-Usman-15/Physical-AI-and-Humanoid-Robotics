import React from 'react';
import { AuthProvider } from '../contexts/AuthContext';
import Chatbot from '../components/Chatbot';
import BrowserOnly from '@docusaurus/BrowserOnly';

// Default implementation, that you can customize
export default function Root({children}) {
  return (
    <AuthProvider>
      {children}
      <BrowserOnly>
        {() => <Chatbot />}
      </BrowserOnly>
    </AuthProvider>
  );
}
