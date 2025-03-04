import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons"; // Import icon từ @expo/vector-icons
import HomeScreen from "../Screens/Home_Screen";
import AccountScreen from "../Screens/Profile_Screen";

const Tab = createBottomTabNavigator();

const MainStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Explorer") {
            iconName = "home"; // Icon ngôi nhà
          } else if (route.name === "Account") {
            iconName = "user"; // Icon tài khoản
          }

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "orange", // Màu khi tab được chọn
        tabBarInactiveTintColor: "gray", // Màu khi tab không được chọn
        tabBarStyle: { paddingBottom: 5, height: 60 }, // Căn chỉnh padding
      })}
    >
      <Tab.Screen name="Explorer" component={HomeScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default MainStack;
