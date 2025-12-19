import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useAuth } from '../../contexts/AuthContext';

// Define the API_BASE_URL (this should eventually come from a Docusaurus config or environment variable)
const API_BASE_URL = 'https://physical-ai-and-humanoid-robotics-production-8d25.up.railway.app'; // Hardcoded for now, will be replaced later

const Auth = () => {
  const {siteConfig} = useDocusaurusContext();
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  const handleSignIn = () => {
    // Redirect to backend login endpoint
    window.location.href = `${API_BASE_URL}/api/v1/auth/login`;
  };

  const handleSignOut = () => {
    // Call backend logout endpoint
    fetch(`${API_BASE_URL}/api/v1/auth/logout`, {
      method: 'POST',
      credentials: 'include',
    })
      .then(response => {
        if (response.ok) {
          setIsAuthenticated(false);
          alert('Signed out successfully!');
        } else {
          alert('Sign out failed.');
        }
      })
      .catch(error => {
        console.error('Error during sign out:', error);
        alert('Sign out failed due to network error.');
      });
  };

  return (
    <div>
      {isAuthenticated ? (
        <button className="button button--primary" onClick={handleSignOut}>Sign Out</button>
      ) : (
        <button className="button button--primary" onClick={handleSignIn}>Sign In</button>
      )}
    </div>
  );
};

export default Auth;
