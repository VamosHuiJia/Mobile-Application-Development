import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const checkLoginStatus = async () => {
            const storedLoginStatus = await AsyncStorage.getItem("isLoggedIn");
            if (storedLoginStatus === "true") {
                setIsLoggedIn(true);
            }
        };
        checkLoginStatus();
    }, []);

    const login = async () => {
        await AsyncStorage.setItem("isLoggedIn", "true");
        setIsLoggedIn(true);
    };

    const logout = async () => {
        await AsyncStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
    };

    return (
        <AppContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AppContext.Provider>
    );
};
