import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppContext } from "../Context/AppContext";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";

const AppNavigator = () => {
    const { isLoggedIn } = useContext(AppContext);

    return (
        <NavigationContainer>
            {isLoggedIn ? <MainStack /> : <AuthStack />}
        </NavigationContainer>
    );
};

export default AppNavigator;
