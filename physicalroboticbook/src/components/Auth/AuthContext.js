import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // This is a placeholder for the actual Better-Auth integration
    // For now, we'll simulate a login/logout
    const login = () => {
        // In a real app, this would redirect to Better-Auth's login page
        // and handle the callback.
        setUser({ name: 'Test User' });
    };

    const logout = () => {
        setUser(null);
    };

    const authValue = {
        user,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
