import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/Bai1BasicComp'; 
import Component from './src/Bai2_1CustomComp';
import NotificationList from './src/Bai2_2Flatlist';
import Lesson5 from './src/Lesson5';
import ValidateForm from './src/Bai4ValidateForm'
import HomeScreen from './src/HomeScreen';

const Stack = createStackNavigator();

const App = () => {
  // return <LoginScreen />;
  // return <Component />;
  // return <NotificationList />;
  // return <Lesson5 />;
  // return <ValidateForm />;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={ValidateForm} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
